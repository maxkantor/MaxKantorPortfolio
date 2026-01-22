const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

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

exports.handler = async (event) => {
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

  const subject = `Portfolio Contact from ${name}`;
  const bodyText = `You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent via your portfolio contact form at maxkantorportfolio.com`;

  const bodyHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #f4f4f4; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
    <h2 style="color: #2c3e50; margin-top: 0;">New Portfolio Contact Message</h2>
    <p style="margin-bottom: 0;">You have received a new message from your portfolio contact form.</p>
  </div>
  
  <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 5px; padding: 20px; margin-bottom: 20px;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a></p>
    
    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  </div>
  
  <div style="text-align: center; color: #888; font-size: 12px;">
    <p>This message was sent via your portfolio contact form</p>
  </div>
</body>
</html>`;

  try {
    await client.send(
      new SendEmailCommand({
        Destination: { ToAddresses: [toEmail] },
        Message: {
          Subject: { Data: subject, Charset: 'UTF-8' },
          Body: {
            Text: { Data: bodyText, Charset: 'UTF-8' },
            Html: { Data: bodyHtml, Charset: 'UTF-8' }
          },
        },
        Source: `${name} via Portfolio <${fromEmail}>`,
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
