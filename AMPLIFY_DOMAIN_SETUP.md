# Setting Up Custom Domain in AWS Amplify

## Step 1: Go to Amplify Console

1. Open AWS Console: https://console.aws.amazon.com/amplify
2. Click on your app: **MaxKantorPortfolio**
3. In the left sidebar, click **Domain management**

## Step 2: Add Your Domain

1. Click **Add domain** button
2. Enter your domain: `maxkantorportfolio.com`
3. Click **Configure domain**

## Step 3: Configure Subdomains

Amplify will show you subdomain options:

- ✅ **Root domain**: `maxkantorportfolio.com` → Link to branch: `main`
- ✅ **www subdomain**: `www.maxkantorportfolio.com` → Redirect to root (recommended)

Click **Save**

## Step 4: Get DNS Records from Amplify

Amplify will provide DNS records you need to add. It will show something like:

### Option A: Using AWS Route 53 (Easiest)
If your domain is managed by Route 53, Amplify can automatically add the records:
- Click **Update DNS records** button
- Amplify will automatically configure everything ✅

### Option B: Using Another DNS Provider (GoDaddy, Namecheap, etc.)

You'll need to add these records manually to your DNS provider:

#### Record 1: CNAME for SSL Verification
```
Type: CNAME
Name: _<random-string>.maxkantorportfolio.com
Value: _<random-string>.acm-validations.aws
TTL: 300
```

#### Record 2: CNAME for www subdomain (if you want www)
```
Type: CNAME
Name: www
Value: <your-amplify-id>.amplifyapp.com
TTL: 300
```

#### Record 3: ANAME/ALIAS or A record for root domain
This depends on your DNS provider:

**Option 1 - If your provider supports ANAME/ALIAS records (recommended):**
```
Type: ANAME or ALIAS
Name: @ (or leave blank for root)
Value: <your-amplify-id>.amplifyapp.com
TTL: 300
```

**Option 2 - If your provider only supports A records:**
You'll need to use Amplify's IP addresses (Amplify will provide these in the console)
```
Type: A
Name: @ (or leave blank for root)
Value: <IP address from Amplify>
TTL: 300
```

## Step 5: Wait for Verification

1. After adding DNS records, go back to Amplify Console
2. The status will show:
   - ⏳ **Pending verification** (yellow) - Wait for DNS to propagate (5-30 minutes)
   - ⏳ **Pending deployment** (yellow) - SSL certificate is being issued
   - ✅ **Available** (green) - Domain is live!

3. This can take **up to 24 hours** but usually completes in **15-30 minutes**

## Step 6: Update Environment Variables (Important!)

Once your domain is live, update the CORS allowed origins:

1. In Amplify Console, go to **Environment variables** (left sidebar)
2. Find `VITE_CONTACT_API_URL` - make sure it's still set correctly
3. Update your CDK stack to include the new domain in ALLOWED_ORIGINS:

```bash
cd infra/cdk
npx cdk deploy --require-approval never \
  --parameters SesFromEmail=noreply@maxkantorportfolio.com \
  --parameters AllowedOrigins="http://localhost:5173,https://main.d28702cjv30w2o.amplifyapp.com,https://maxkantorportfolio.com,https://www.maxkantorportfolio.com"
```

## Step 7: Test Your Domain

1. Visit: `https://maxkantorportfolio.com`
2. Check that it loads with SSL (🔒 in browser)
3. Try the contact form to make sure it works!

---

## Troubleshooting

### Domain shows "Pending verification" for a long time
- Check that DNS records are correct at https://dnschecker.org
- Make sure there are no conflicting DNS records
- Wait at least 30 minutes after adding records

### "DNS configuration failed"
- Your DNS provider might not support ANAME/ALIAS for root domain
- Consider moving DNS to Route 53 for easier management
- Or use www.maxkantorportfolio.com as primary and redirect root to www

### SSL certificate not issued
- Make sure the CNAME record for SSL verification is added correctly
- Check that it propagated: `dig _<random>.maxkantorportfolio.com`
- Wait up to 24 hours for ACM to validate

---

## Where to Manage DNS

Check where your domain is registered:
```bash
whois maxkantorportfolio.com | grep -i "registrar"
```

Common DNS providers:
- **AWS Route 53**: https://console.aws.amazon.com/route53
- **GoDaddy**: https://dcc.godaddy.com
- **Namecheap**: https://ap.www.namecheap.com
- **Cloudflare**: https://dash.cloudflare.com

---

## Quick Command Reference

Check DNS propagation:
```bash
# Check CNAME
dig www.maxkantorportfolio.com CNAME

# Check A record
dig maxkantorportfolio.com A

# Check with specific DNS server
dig @8.8.8.8 maxkantorportfolio.com
```

Check Amplify domain status:
```bash
aws amplify list-domains --app-id d28702cjv30w2o
```
