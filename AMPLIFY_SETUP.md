# Amplify Setup (Start Here)

This guide walks you through hosting the React + Vite app on AWS Amplify first, then attaching your domain later.

## 1) Create the Amplify App

1. Open **AWS Amplify** → **Host web app**.
2. Connect your GitHub repo (the one containing this portfolio).
3. Select the branch you want to deploy (e.g., `main`).
4. Build settings:
   - **Build command:** `npm ci && npm run build`
   - **Output directory:** `dist`
5. Click **Save and deploy**.

After the build completes, Amplify will give you a default URL like:
`https://main.xxxxx.amplifyapp.com`

## 2) Configure Environment Variables

In Amplify → **App settings** → **Environment variables**, add:

- `VITE_CONTACT_API_URL` = `https://<api-id>.execute-api.<region>.amazonaws.com`

Then **Redeploy** so the frontend picks up the env var.

## 3) Test the Live Site

1. Open the Amplify URL.
2. Submit the contact form.
3. Confirm the email arrives in your inbox.

If SES is still in sandbox, you must verify the recipient email or request production access before emails will deliver.

---

# Domain Transfer Later (maxkantorportfolio.com)

You can attach your existing domain after the Amplify site is live.
Your current site is reachable at [maxkantorportfolio.com](https://maxkantorportfolio.com/).

## A) Add the Domain in Amplify

1. Go to **Amplify → Domain management**.
2. Click **Add domain**.
3. Enter `maxkantorportfolio.com`.
4. Choose the branch (e.g., `main`) for the root domain.

Amplify will show DNS records to add at your domain registrar (or Route 53 if you migrate it there).

## B) Update DNS Records

Add the CNAME/A records that Amplify provides.
Once DNS propagates, Amplify will provision the SSL certificate automatically.

## C) Verify + Switch Traffic

1. Wait for DNS propagation (usually minutes, sometimes longer).
2. Verify the site loads at `https://maxkantorportfolio.com`.
3. Keep the old site available until you confirm the new one is live.

---

# Optional: Route 53 Transfer (Later)

If you later transfer the domain to Route 53, the steps are the same — you’ll just manage DNS inside AWS instead of your current registrar.
