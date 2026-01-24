# Max Kantor Portfolio (React + Vite)

## Quick Start

### Local Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## Deployment (AWS Amplify + SES)

### 1. Deploy to AWS Amplify

1. Go to **AWS Amplify** → **Host web app**
2. Connect your GitHub repo and select `main` branch
3. Configure build settings:
   - **Build command:** `npm ci && npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**

### 2. Set Up SES (Email Sending)

1. Go to **AWS SES** (same region as Lambda)
2. Verify a sender identity (domain or email)
3. If in sandbox, verify recipient email or request production access

### 3. Deploy Infrastructure with CDK

```bash
cd infra/cdk
npx cdk deploy MaxKantorPortfolioStack \
  --parameters SesFromEmail=your-verified-email@example.com \
  --parameters SesToEmail=mykantor@bellsouth.net
```

This creates:
- Lambda function for contact form
- API Gateway HTTP API
- IAM roles with SES permissions

### 4. Configure Amplify Environment Variables

In **Amplify → App settings → Environment variables**, add:

- `VITE_CONTACT_API_URL` = The API endpoint output from CDK deployment
  - Example: `https://xxxx.execute-api.us-east-1.amazonaws.com`

Then **redeploy** the Amplify app.

### 5. Test Contact Form

1. Open your site
2. Fill the contact form and submit
3. Verify email arrives in your inbox

---

## Optional: Attach Custom Domain

1. Go to **Amplify → Domain management**
2. Click **Add domain** and enter `maxkantorportfolio.com`
3. Add DNS records Amplify provides to your domain registrar
4. Wait for propagation and SSL certificate provisioning

---

## Development Notes

- Frontend: React 18 + Vite
- Backend: Node.js 20 Lambda with AWS SES
- Infrastructure: AWS CDK (TypeScript)
- Contact form includes validation, CORS protection, and rate limiting
