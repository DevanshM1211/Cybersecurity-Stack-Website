# Email Setup Instructions

The contact form uses [Resend](https://resend.com) for email delivery. Follow these steps to set it up:

## Setup Steps

### 1. Create a Resend Account
1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Free tier includes 100 emails/day, 3,000 emails/month

### 2. Get Your API Key
1. Navigate to [API Keys](https://resend.com/api-keys) in your Resend dashboard
2. Click "Create API Key"
3. Give it a name (e.g., "CSS Website Production")
4. Copy the API key (starts with `re_`)

### 3. Configure Environment Variable
1. Create a `.env.local` file in the project root (already gitignored)
2. Add your API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

### 4. Update Email Recipients
In `app/api/contact/route.ts`, update line 42:
```typescript
to: ["your-actual-email@domain.com"], // Replace with your email
```

### 5. (Optional) Use Your Own Domain
For production, verify your domain in Resend:
1. Go to [Domains](https://resend.com/domains)
2. Add your domain and verify DNS records
3. Update line 41 in `app/api/contact/route.ts`:
   ```typescript
   from: "Cyber Security Stack <noreply@yourdomain.com>",
   ```

## Testing Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Fill out and submit the contact form at `http://localhost:3000/#contact`

3. Check your email inbox for the formatted message

## Production Deployment

### Vercel
1. Add the environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` with your key
   - Redeploy

### Other Platforms
Add `RESEND_API_KEY` to your platform's environment variables configuration.

## Email Format

The emails include:
- ✅ Professional HTML formatting
- ✅ Sender contact details (name, email, company)
- ✅ Message content
- ✅ Reply-to functionality (replies go directly to sender)
- ✅ Responsive design

## Troubleshooting

### Build Error: "Missing API key"
This is normal if you haven't set up the API key yet. The contact form will show a friendly error message to users if they try to submit without Resend configured.

### Emails Not Sending
1. Verify your API key is correct
2. Check Resend dashboard for logs
3. Verify the recipient email is correct
4. Check your spam folder

### Rate Limiting
Free tier: 100 emails/day. For higher volumes, upgrade your Resend plan.

## Alternative Email Services

If you prefer not to use Resend, you can modify `app/api/contact/route.ts` to use:
- **SendGrid**: Popular enterprise solution
- **Nodemailer**: Self-hosted SMTP
- **AWS SES**: Amazon's email service
- **Mailgun**: Transactional email API

## Support

For Resend-specific issues, check their [documentation](https://resend.com/docs) or [Discord community](https://resend.com/discord).
