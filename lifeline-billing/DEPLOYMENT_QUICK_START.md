# Quick Deployment Checklist

## Before You Start
- [ ] GoDaddy hosting account ready
- [ ] Domain name configured
- [ ] EmailJS configured and tested locally

## Build & Deploy (5 Steps)

### 1. Build the Project
```bash
npm run build
```
This creates the `dist/` folder with all production files.

### 2. Access GoDaddy
- Login to GoDaddy
- Go to "My Products" → Your Hosting → "Manage"
- Open "File Manager"

### 3. Navigate to Root
- Go to `public_html` folder (main domain root)

### 4. Upload Files
- Upload ALL contents from `dist/` folder to `public_html`
- **Important:** Make sure `.htaccess` file is uploaded!

### 5. Test
- Visit your domain: `https://yourdomain.com`
- Test all pages and contact form

## Files to Upload
From `dist/` folder, upload:
- ✅ `index.html`
- ✅ `.htaccess` (critical for routing!)
- ✅ `assets/` folder (entire folder)
- ✅ `images/` folder (entire folder)
- ✅ All other files (favicon.svg, logos, etc.)

## Troubleshooting

**404 on page refresh?** → Check `.htaccess` is uploaded  
**Images not loading?** → Check `images/` folder uploaded  
**Contact form not working?** → Check EmailJS configuration  

## Full Guide
See [DEPLOYMENT_GODADDY.md](./DEPLOYMENT_GODADDY.md) for detailed instructions.

---

**Ready to deploy?** Run `npm run build` and follow the steps above! 🚀
