# GoDaddy Deployment Guide - Life Line Billing Solutions

This guide provides step-by-step instructions for deploying the Life Line Billing Solutions website to GoDaddy hosting.

---

## 📋 Prerequisites

Before starting deployment, ensure you have:

1. ✅ **GoDaddy Account** with active hosting plan
2. ✅ **Domain Name** registered and pointing to GoDaddy
3. ✅ **cPanel/FTP Access** credentials from GoDaddy
4. ✅ **Production Build** ready (completed `npm run build`)
5. ✅ **EmailJS Configured** and tested locally

---

## 🚀 Deployment Methods

GoDaddy offers multiple ways to upload files. Choose the method you're most comfortable with:

- **Method 1:** GoDaddy File Manager (Web-based, easiest)
- **Method 2:** FTP Client (FileZilla, WinSCP, etc.)
- **Method 3:** cPanel File Manager

This guide covers **Method 1 (File Manager)** and **Method 2 (FTP)**.

---

## 📦 Step 1: Prepare Production Build

### 1.1 Build the Project

Open terminal/command prompt in the project directory and run:

```bash
cd lifeline-billing
npm run build
```

### 1.2 Verify Build Output

After the build completes, you should see:
```
✓ built in X.XXs
```

Check that the `dist/` folder contains:
- `index.html`
- `assets/` folder (with CSS and JS files)
- All files from `public/` folder (images, favicon, etc.)
- `.htaccess` file (for React Router configuration)

### 1.3 Test Build Locally (Optional but Recommended)

```bash
npm run preview
```

Visit `http://localhost:4173` and verify everything works correctly.

---

## 🌐 Step 2: Access GoDaddy Hosting

### 2.1 Login to GoDaddy

1. Go to [godaddy.com](https://www.godaddy.com)
2. Click **"Sign In"** (top right)
3. Enter your credentials

### 2.2 Access Your Hosting

1. Click **"My Products"** (top menu)
2. Find your hosting plan
3. Click **"Manage"** next to your hosting account
4. You'll be redirected to your hosting dashboard

### 2.3 Access File Manager

**Option A: Direct File Manager**
- Look for **"File Manager"** in the hosting dashboard
- Click to open

**Option B: Through cPanel**
- Click **"cPanel Admin"** or **"cPanel"** button
- Find **"Files"** section
- Click **"File Manager"**

---

## 📤 Step 3: Upload Files (Method 1 - File Manager)

### 3.1 Navigate to Root Directory

1. In File Manager, navigate to your domain's root directory:
   - Usually named `public_html` or `www`
   - For addon domains, it might be `public_html/yourdomain.com`
   - For subdomains, it might be `public_html/subdomain`

2. **Important:** If this is your main domain, use `public_html`

### 3.2 Backup Existing Files (If Any)

**If you have an existing website:**

1. Select all files in `public_html`
2. Right-click → **"Compress"** → Choose ZIP format
3. Name it `backup-[date].zip`
4. Download or keep it in a parent directory

### 3.3 Clear Existing Files (If Needed)

**If replacing an old website:**

1. Select all files in `public_html` (except `.htaccess` if you want to keep it)
2. Click **"Delete"** or right-click → **"Delete"**
3. Confirm deletion

### 3.4 Upload New Files

1. **Upload `index.html`:**
   - Click **"Upload"** button (top toolbar)
   - Select `dist/index.html` from your local computer
   - Wait for upload to complete

2. **Upload `assets` folder:**
   - Click **"Upload"** again
   - Select the entire `dist/assets` folder
   - Or upload individual files from `dist/assets/`

3. **Upload static files:**
   - Upload all files from `dist/` that are not in `assets/`
   - This includes images, favicon, etc.

4. **Upload `.htaccess` file:**
   - Upload the `.htaccess` file from `dist/` folder
   - This is crucial for React Router to work correctly

**Note:** If File Manager doesn't support folder uploads:
- Create folders manually in File Manager
- Upload files individually into their respective folders

### 3.5 Verify File Structure

Your `public_html` should now contain:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
├── images/
│   └── [all image files]
├── favicon.svg
└── [other static files]
```

---

## 📤 Step 3: Upload Files (Method 2 - FTP)

### 3.1 Get FTP Credentials

1. In GoDaddy hosting dashboard, find **"FTP Accounts"** or **"FTP"**
2. Note down:
   - **FTP Server/Host:** Usually `ftp.yourdomain.com` or an IP
   - **FTP Username:** Your FTP username
   - **FTP Password:** Your FTP password
   - **Port:** Usually `21` (or `22` for SFTP)

### 3.2 Connect with FTP Client

**Using FileZilla (Free):**

1. Download [FileZilla](https://filezilla-project.org/)
2. Open FileZilla
3. Enter credentials:
   - **Host:** Your FTP server
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21 (or 22 for SFTP)
4. Click **"Quickconnect"**

### 3.3 Navigate to Root Directory

1. In the right panel (Remote site), navigate to:
   - `public_html` (for main domain)
   - Or your domain's specific folder

### 3.4 Upload Files

1. In the left panel (Local site), navigate to your `dist/` folder
2. Select all files and folders in `dist/`
3. Drag and drop to `public_html` on the right panel
4. Wait for upload to complete

**Important:** Make sure to upload the `.htaccess` file as well!

### 3.5 Verify Upload

Check that all files uploaded successfully in the right panel.

---

## ⚙️ Step 4: Configure Server for React Router

React Router requires server configuration to handle client-side routing. Without this, refreshing pages or accessing URLs directly will show 404 errors.

### 4.1 Verify `.htaccess` File

The `.htaccess` file should have been uploaded with your files. If it wasn't uploaded or needs to be created:

1. In File Manager, navigate to `public_html`
2. Click **"New File"** or **"Create File"**
3. Name it `.htaccess` (with the dot at the beginning)
4. Open the file for editing

### 4.2 Add React Router Configuration

Copy and paste this code into `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

### 4.3 Save the File

1. Click **"Save"** or **"Save Changes"**
2. Verify the file exists in `public_html`

**Note:** If `.htaccess` already exists, add the React Router rules to it instead of replacing.

---

## 🔒 Step 5: Configure SSL/HTTPS

### 5.1 Enable SSL Certificate

1. In GoDaddy hosting dashboard, find **"SSL/TLS"** or **"Security"**
2. Look for your domain
3. Enable **"Free SSL"** or **"Let's Encrypt SSL"**
4. Wait for activation (usually a few minutes)

### 5.2 Force HTTPS (Optional but Recommended)

Add this to your `.htaccess` file (before the React Router rules):

```apache
# Force HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

**Note:** Only add this after SSL is fully activated and working.

---

## ✅ Step 6: Test Your Live Website

### 6.1 Basic Checks

1. **Visit Your Domain:**
   - Open browser and go to `https://yourdomain.com`
   - Verify the homepage loads correctly

2. **Test All Pages:**
   - Navigate to each page:
     - `/` (Home)
     - `/about`
     - `/services`
     - `/caqh-services`
     - `/credentialing-mistakes`
     - `/contact`

3. **Test Navigation:**
   - Click all navigation links
   - Verify pages load without 404 errors
   - Test browser back/forward buttons

4. **Test Contact Form:**
   - Go to `/contact`
   - Fill out and submit the form
   - Verify email is received
   - Check for success message

5. **Test Responsive Design:**
   - Open browser DevTools (F12)
   - Test on mobile, tablet, and desktop views
   - Verify all elements display correctly

### 6.2 Performance Check

1. **PageSpeed Insights:**
   - Visit [PageSpeed Insights](https://pagespeed.web.dev/)
   - Enter your domain
   - Review performance score

2. **Browser Console:**
   - Open DevTools (F12)
   - Check Console tab for errors
   - Check Network tab for failed requests

---

## 🔧 Step 7: Troubleshooting

### Issue: 404 Errors on Page Refresh

**Problem:** Pages show 404 when refreshed or accessed directly.

**Solution:**
- Verify `.htaccess` file exists in `public_html`
- Check that `.htaccess` contains React Router rewrite rules
- Ensure `mod_rewrite` is enabled on your server (contact GoDaddy support if needed)
- Make sure `.htaccess` file name starts with a dot (`.htaccess`)

### Issue: Images Not Loading

**Problem:** Images don't display on the live site.

**Solution:**
- Verify images are in `public_html/images/` directory
- Check image paths in code use absolute paths (`/images/...`)
- Clear browser cache
- Check file permissions (should be 644 for files, 755 for folders)

### Issue: CSS/JavaScript Not Loading

**Problem:** Site appears unstyled or broken.

**Solution:**
- Verify `assets/` folder uploaded correctly
- Check that `index.html` references correct asset paths
- Clear browser cache
- Check browser console for 404 errors on assets

### Issue: Contact Form Not Working

**Problem:** Form submissions fail on live site.

**Solution:**
- Verify EmailJS configuration is correct
- Check browser console for JavaScript errors
- Test EmailJS credentials are valid
- Ensure EmailJS account hasn't exceeded limits

### Issue: HTTPS Redirect Loop

**Problem:** Site redirects infinitely.

**Solution:**
- Remove HTTPS force rules from `.htaccess` temporarily
- Verify SSL certificate is properly installed
- Contact GoDaddy support if issue persists

### Issue: .htaccess Not Working

**Problem:** `.htaccess` rules not being applied.

**Solution:**
- Verify file is named exactly `.htaccess` (with leading dot)
- Check file permissions (should be 644)
- Contact GoDaddy support to ensure `mod_rewrite` is enabled
- Try renaming to `.htaccess.txt` then back to `.htaccess`

---

## 🔄 Step 8: Future Updates

### How to Update the Website

1. **Make Changes Locally:**
   ```bash
   npm run dev
   # Make your changes
   ```

2. **Test Locally:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Upload Updated Files:**
   - Upload new files from `dist/` folder
   - Replace existing files in `public_html`
   - Clear browser cache and test

### Quick Update Process

1. Build: `npm run build`
2. Upload `dist/` contents to `public_html`
3. Test live site
4. Done!

---

## 📞 Support

### GoDaddy Support

- **Phone:** 1-480-505-8877 (24/7)
- **Live Chat:** Available in GoDaddy dashboard
- **Help Center:** [help.godaddy.com](https://help.godaddy.com)

### Developer Support

Contact the developer for:
- Code-related issues
- Feature additions
- Custom modifications

---

## ✅ Deployment Checklist

Use this checklist to ensure successful deployment:

- [ ] Production build created (`npm run build`)
- [ ] Build tested locally (`npm run preview`)
- [ ] GoDaddy hosting accessed
- [ ] Old files backed up (if applicable)
- [ ] All files uploaded to `public_html`
- [ ] `.htaccess` file uploaded and configured
- [ ] SSL certificate enabled
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Contact form tested and working
- [ ] Mobile responsive design verified
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Client notified of deployment

---

## 🎉 Deployment Complete!

Your website should now be live! Share the URL with your client and celebrate! 🚀

**Next Steps:**
1. Monitor the site for the first 24-48 hours
2. Gather client feedback
3. Make any necessary adjustments
4. Document any custom configurations

---

**Last Updated:** December 2024  
**For:** Life Line Billing Solutions Website
