/* eslint-disable no-console */

const assert = require('assert');

// Mirrors the logic in backend/contact-ses/index.js (kept tiny and dependency-free)
const DEFAULT_ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'https://maxkantorportfolio.com',
  'https://www.maxkantorportfolio.com',
];

const isAmplifyPreviewOrigin = (origin) =>
  /^https:\/\/[a-z0-9-]+\.[a-z0-9-]+\.amplifyapp\.com$/i.test(origin);

const parseOrigins = (raw) =>
  String(raw || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

const isAllowedOrigin = (origin, allowlist) => {
  if (!origin) return false;
  if (allowlist.includes(origin)) return true;
  return isAmplifyPreviewOrigin(origin);
};

const run = () => {
  const allowedOrigins = Array.from(
    new Set([...DEFAULT_ALLOWED_ORIGINS, ...parseOrigins(process.env.ALLOWED_ORIGINS)])
  );

  // Always allow production domains
  assert.ok(isAllowedOrigin('https://maxkantorportfolio.com', allowedOrigins));
  assert.ok(isAllowedOrigin('https://www.maxkantorportfolio.com', allowedOrigins));

  // Allow localhost
  assert.ok(isAllowedOrigin('http://localhost:5173', allowedOrigins));

  // Allow Amplify preview domains
  assert.ok(isAllowedOrigin('https://main.d28702cvj30w2o.amplifyapp.com', allowedOrigins));

  // Block random origins
  assert.ok(!isAllowedOrigin('https://evil.example.com', allowedOrigins));

  console.log('OK: CORS origin rules look correct');
};

run();
