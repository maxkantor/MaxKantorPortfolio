import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const client = new SESClient({});

const rateLimit = new Map();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 8;

const response = (statusCode, body, origin) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': origin || '',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
  },
  body: JSON.stringify(body),
});

const isAllowedOrigin = (origin, allowlist) =>
  allowlist.some((allowed) => allowed === origin);

const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

export const handler = async (event) => {
  const origin = event.headers?.origin || event.headers?.Origin || '';
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  const allowOrigin = isAllowedOrigin(origin, allowedOrigins) ? origin : '';

  if (event.requestContext?.http?.method === 'OPTIONS') {
    return response(204, {}, allowOrigin);
  }

  if (!allowOrigin) {
    return response(403, { ok: false, error: 'Origin not allowed.' }, allowOrigin);
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return response(400, { ok: false, error: 'Invalid request body.' }, allowOrigin);
  }

  const name = String(payload.name || '').trim().slice(0, 100);
  const email = String(payload.email || '').trim().slice(0, 200);
  const message = String(payload.message || '').trim().slice(0, 3000);

  if (name.length < 2) {
    return response(400, { ok: false, error: 'Name is required.' }, allowOrigin);
  }

  if (!isValidEmail(email)) {
    return response(400, { ok: false, error: 'Valid email is required.' }, allowOrigin);
  }

  if (message.length < 10) {
    return response(400, { ok: false, error: 'Message is too short.' }, allowOrigin);
  }

  const ip = (event.headers?.['x-forwarded-for'] || '').split(',')[0].trim();
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const history = rateLimit.get(ip) || [];
  const recent = history.filter((timestamp) => timestamp > windowStart);
  if (recent.length >= MAX_REQUESTS) {
    return response(429, { ok: false, error: 'Too many requests.' }, allowOrigin);
  }
  recent.push(now);
  rateLimit.set(ip, recent);

  const fromEmail = process.env.SES_FROM_EMAIL;
  const toEmail = process.env.SES_TO_EMAIL || 'mykantor@bellsouth.net';

  if (!fromEmail) {
    return response(500, { ok: false, error: 'Sender email not configured.' }, allowOrigin);
  }

  const subject = `Portfolio Contact â€” ${name}`;
  const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  try {
    await client.send(
      new SendEmailCommand({
        Destination: { ToAddresses: [toEmail] },
        Message: {
          Subject: { Data: subject, Charset: 'UTF-8' },
          Body: { Text: { Data: bodyText, Charset: 'UTF-8' } },
        },
        Source: fromEmail,
        ReplyToAddresses: [email],
      })
    );

    console.info('Contact email sent', {
      name,
      email,
      ip,
      length: message.length,
    });

    return response(200, { ok: true }, allowOrigin);
  } catch (error) {
    console.error('SES send failed', {
      name,
      email,
      ip,
      error: error?.message,
    });
    return response(500, { ok: false, error: 'Email delivery failed.' }, allowOrigin);
  }
};
