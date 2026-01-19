# CDK Infrastructure

This CDK stack provisions:
- SES email identity (optional)
- Lambda contact handler
- API Gateway HTTP API

## Prereqs

- AWS CLI configured
- Node.js 18+ (for CDK toolchain)

## Install

```bash
cd infra/cdk
npm install
```

## Deploy

```bash
cd infra/cdk
npx cdk bootstrap
npx cdk deploy \
  --parameters SesFromEmail=your-verified@domain.com \
  --parameters SesToEmail=mykantor@bellsouth.net \
  --parameters AllowedOrigins=http://localhost:5173,https://main.yourapp.amplifyapp.com
```

## Outputs

- `ContactApiUrl`: use this as `VITE_CONTACT_API_URL` in Amplify.

## Notes

- SES sender identity must be verified.
- If SES is in sandbox, verify the recipient or request production access.
- The Lambda uses `backend/contact-ses` code. Make sure that folder contains `node_modules` before deploying.
