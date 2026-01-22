# DNS Setup for maxkantorportfolio.com Email

## Required DNS Records

Add these **3 CNAME records** to your domain's DNS settings (wherever you bought maxkantorportfolio.com - GoDaddy, Namecheap, Route53, etc.):

### DKIM Record 1
```
Type: CNAME
Name: 24ayfurcqjyc5y6qmfvbec5s3ocsqd6x._domainkey
Value: 24ayfurcqjyc5y6qmfvbec5s3ocsqd6x.dkim.amazonses.com
TTL: 1800 (or 3600)
```

### DKIM Record 2
```
Type: CNAME
Name: ex2dczdzucao6t63vepj3kkbpjbwqtpj._domainkey
Value: ex2dczdzucao6t63vepj3kkbpjbwqtpj.dkim.amazonses.com
TTL: 1800 (or 3600)
```

### DKIM Record 3
```
Type: CNAME
Name: 7pdshxob3x3dgxfcpz5zf6765koj4r64._domainkey
Value: 7pdshxob3x3dgxfcpz5zf6765koj4r64.dkim.amazonses.com
TTL: 1800 (or 3600)
```

---

## Step-by-Step Instructions

### 1. Go to your domain registrar
- Log into wherever you manage DNS for maxkantorportfolio.com
- Find DNS settings (usually called "DNS Management", "DNS Records", or "Advanced DNS")

### 2. Add the CNAME records
- Click "Add Record" or "Add DNS Record"
- For each of the 3 records above:
  - Select type: **CNAME**
  - Enter the **Name** (the long string before `._domainkey`)
  - Enter the **Value** (the long string ending in `.dkim.amazonses.com`)
  - Save

### 3. Wait for DNS propagation
- DNS changes can take 5 minutes to 48 hours (usually within 15-30 minutes)
- You can check status at: https://dnschecker.org

### 4. Verify in AWS
After DNS records propagate, run this command to check status:
```bash
aws sesv2 get-email-identity --email-identity maxkantorportfolio.com
```

Look for `"Status": "SUCCESS"` in the DkimAttributes section.

---

## After DNS is Verified

Once the domain is verified (DKIM status shows SUCCESS), we'll update your Lambda function to use:
- **From Email**: `noreply@maxkantorportfolio.com` (or `contact@maxkantorportfolio.com`)
- **To Email**: Your personal email where you want to receive messages

---

## Why This Helps

✅ **Inbox Delivery**: Emails will land in inbox instead of junk  
✅ **Professional**: Emails come from your domain, not a personal email  
✅ **DKIM Signing**: AWS automatically signs emails with cryptographic authentication  
✅ **Trust**: Email providers (Gmail, Outlook) will trust your emails more

---

## Next Steps After DNS Verification

1. Update Lambda environment variable: `SES_FROM_EMAIL=noreply@maxkantorportfolio.com`
2. Redeploy the stack
3. Test the contact form
4. Emails should now go to your inbox! 📧
