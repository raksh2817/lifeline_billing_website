# EmailJS Setup Guide

## Quick Setup Steps

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Add Email Service**
   - Go to "Email Services" in dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - **Copy your Service ID** (e.g., `service_xxxxx`)

3. **Create Email Template**
   - Go to "Email Templates" in dashboard
   - Click "Create New Template"
   - Use this template structure:
     ```
     From: {{from_name}} <{{from_email}}>
     Reply-To: {{reply_to}}
     
     Subject: New Contact Form Submission - Life Line Billing Solutions
     
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Company: {{company}}
     
     Message:
     {{message}}
     ```
   - **Copy your Template ID** (e.g., `template_xxxxx`)

4. **Get Public Key**
   - Go to "Account" → "General"
   - Find "Public Key"
   - **Copy your Public Key**

5. **Update Configuration**
   - Open `src/config/emailjs.js`
   - Replace the placeholder values:
     ```javascript
     SERVICE_ID: 'your_service_id_here',
     TEMPLATE_ID: 'your_template_id_here',
     PUBLIC_KEY: 'your_public_key_here',
     ADMIN_EMAIL: 'rakshithsrinath17@gmail.com' // Change this to your admin email
     ```

6. **Test the Form**
   - Fill out the contact form
   - Submit and check your email inbox

## Changing Admin Email

To change the recipient email address, simply update the `ADMIN_EMAIL` value in `src/config/emailjs.js`:

```javascript
ADMIN_EMAIL: 'your-new-email@example.com'
```

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- All basic features

For production use with higher volume, consider upgrading to a paid plan.
