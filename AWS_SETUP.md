# AWS Setup Guide (Amplify + SES Contact Form)

This guide sets up all AWS services needed for the portfolio:

- **Amplify** (hosting)
- **API Gateway** (contact API)
- **Lambda** (email handler)
- **SES** (email delivery)
- **IAM** (permissions)

---

## 1) AWS Amplify (Hosting)

1. Open **AWS Amplify** → **Host web app**.
2. Connect your GitHub repo.
3. Select the branch (e.g., `main`).
4. Build settings:
   - Build command: `npm ci && npm run build`
   - Output directory: `dist`
5. Deploy the app.

After the build, Amplify will give you a URL like:
`https://main.xxxxx.amplifyapp.com`

---

## 2) SES (Email Sending)

1. Open **AWS SES** in the same region you plan to use for Lambda.
2. Verify a **sender identity**:
   - Best: verify your domain.
   - Or verify a single email address.
3. If SES is **sandboxed**, either:
   - Verify the recipient email (`mykantor@bellsouth.net`), or
   - Request production access.

---

## 3) Lambda (Contact API)

1. Open **AWS Lambda** → **Create function**.
2. Runtime: **Node.js 20.x**
3. Upload code:
   - Zip `backend/contact-ses` **including `node_modules`**.
   - Upload the zip to Lambda.
4. Environment variables:
   - `SES_FROM_EMAIL` = verified sender
   - `SES_TO_EMAIL` = `mykantor@bellsouth.net` (optional)
   - `ALLOWED_ORIGINS` = `http://localhost:5173,https://main.xxxxx.amplifyapp.com`
5. IAM permissions for the Lambda role:
   - `ses:SendEmail`
   - `ses:SendRawEmail`

---

## 4) API Gateway (HTTP API)

1. Create **HTTP API**.
2. Add route: `POST /contact`
3. Integrate with the Lambda function.
4. Enable CORS:
   - Allowed origins: same as `ALLOWED_ORIGINS`
   - Allowed headers: `Content-Type`
   - Allowed methods: `POST,OPTIONS`
5. Deploy and copy the API base URL:
   - `https://xxxx.execute-api.<region>.amazonaws.com`

---

## 5) Frontend Environment Variables

In Amplify → **Environment variables**, set:

- `VITE_CONTACT_API_URL` = `https://xxxx.execute-api.<region>.amazonaws.com`

Redeploy the app so it picks up the new value.

---

## 6) Domain Setup (Later)

When ready, go to **Amplify → Domain management**:

1. Add `maxkantorportfolio.com`.
2. Assign the root to `main`.
3. Update DNS with the records Amplify provides.
4. Amplify will provision SSL automatically.

---

# Optional: Infrastructure as Code (CDK)

If you want this fully automated, use the CDK template in `/infra/cdk` (included in this repo).
