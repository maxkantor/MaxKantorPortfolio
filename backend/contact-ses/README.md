# Contact SES Lambda

This Lambda sends contact form submissions via AWS SES.

## Environment variables

- `SES_FROM_EMAIL` (required): verified SES sender (e.g., no-reply@yourdomain.com)
- `SES_TO_EMAIL` (optional): default `mykantor@bellsouth.net`
- `ALLOWED_ORIGINS` (required): comma-separated list of allowed origins
  - Example: `http://localhost:5173,https://main.d123.amplifyapp.com`

## Deploy (manual)

1. Install deps: `npm install`
2. Zip the folder contents (including `node_modules`).
3. Create Lambda (Node.js 22.x) and upload the zip.
4. Add environment variables above.
5. Create an HTTP API in API Gateway:
   - Route: `POST /contact`
   - Integration: the Lambda function
   - Enable CORS with the same origins as `ALLOWED_ORIGINS`.

## Notes

- SES must be in the same region as Lambda.
- SES sender identity must be verified.
- If SES is in sandbox, verify the recipient or request production access.
