# SEO Setup Guide for Automat Website

Complete guide to get your website indexed on Google and optimize for search engines.

## 📁 Files to Add

### 1. **app/layout.jsx** (Replace existing)
- Location: `app/layout.jsx`
- File: `layout-with-seo.jsx`
- Contains: Meta tags, Open Graph, Twitter Cards, structured data

### 2. **public/robots.txt**
- Location: `public/robots.txt`
- File: `robots.txt`
- Purpose: Tells search engines what to crawl

### 3. **public/sitemap.xml**
- Location: `public/sitemap.xml`
- File: `sitemap.xml`
- Purpose: Lists all your pages for Google to index

## 🔧 Required Updates

### Step 1: Update Your Domain
Replace `yourdomain.com` in these files:
- `app/layout.jsx` (line 14, 21, 28)
- `public/robots.txt` (line 9)
- `public/sitemap.xml` (all `<loc>` tags)

### Step 2: Create Open Graph Image
Create an image `public/og-image.jpg`:
- Size: 1200 x 630 pixels
- Content: Your logo + tagline
- Use Canva or Figma to create it

### Step 3: Update Dates in Sitemap
In `sitemap.xml`, update `<lastmod>` dates to when you publish

## 🚀 Google Search Console Setup

### 1. Add Your Site
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter your domain: `https://yourdomain.com`
4. Choose verification method (recommend HTML file upload)

### 2. Verify Ownership
**Option A: HTML File Upload (Easiest)**
1. Download verification file from Google
2. Place in `public/` folder
3. Deploy your site
4. Click "Verify" in Google Search Console

**Option B: Meta Tag**
1. Google gives you a meta tag like: `<meta name="google-site-verification" content="abc123..." />`
2. Add to `app/layout.jsx` in the verification object:
```javascript
verification: {
  google: 'abc123...',
},
```

### 3. Submit Sitemap
1. In Google Search Console, go to "Sitemaps"
2. Enter: `https://yourdomain.com/sitemap.xml`
3. Click "Submit"

## 📊 What Each Meta Tag Does

### Title & Description
```javascript
title: 'Automat - Custom Workflow Automation & API Engineering Services'
description: 'Professional Python-based automation...'
```
- Shows in Google search results
- Keep title under 60 characters
- Keep description under 160 characters

### Keywords
```javascript
keywords: 'workflow automation, API engineering, Python automation...'
```
- Helps Google understand your content
- Include services you offer

### Open Graph (Social Media)
```javascript
openGraph: { ... }
```
- Controls how your site looks when shared on Facebook, LinkedIn
- Requires og-image.jpg

### Twitter Card
```javascript
twitter: { ... }
```
- Controls how your site looks when shared on Twitter/X

### Robots
```javascript
robots: { index: true, follow: true }
```
- Tells Google: "Yes, index my site and follow all links"

## 🎯 Quick Indexing Tips

### 1. Submit URL Directly
In Google Search Console:
- Go to "URL Inspection"
- Enter: `https://yourdomain.com`
- Click "Request Indexing"

### 2. Create Quality Content
Google prioritizes:
- ✅ Original content (your case studies are perfect!)
- ✅ Clear service descriptions
- ✅ Professional language
- ✅ Fast loading pages

### 3. Get Backlinks
- List on directories: Clutch, G2, Product Hunt
- Guest post on automation blogs
- Share on LinkedIn, Reddit (r/automation, r/nocode)

## 📈 Monitoring & Analytics

### Google Analytics (Optional but Recommended)
1. Create account at https://analytics.google.com
2. Get tracking ID (like `G-XXXXXXXXXX`)
3. Add to `app/layout.jsx`:

```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## ⏱️ Timeline for Indexing

- **Initial crawl:** 1-3 days after submitting to Google Search Console
- **Full indexing:** 1-2 weeks
- **Ranking improvement:** 1-3 months (with good content)

## ✅ Launch Checklist

Before going live:
- [ ] Replace all `yourdomain.com` with actual domain
- [ ] Create and add `og-image.jpg` to `public/` folder
- [ ] Update sitemap.xml dates
- [ ] Add robots.txt to `public/` folder
- [ ] Add sitemap.xml to `public/` folder
- [ ] Update app/layout.jsx with SEO metadata
- [ ] Deploy to Vercel/production
- [ ] Add site to Google Search Console
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Request indexing for main pages

## 🔍 Testing Your SEO

### Check Meta Tags
1. View page source (right-click → View Page Source)
2. Look for `<meta>` tags in `<head>`
3. Should see title, description, og:image, etc.

### Test Robots.txt
Visit: `https://yourdomain.com/robots.txt`
- Should show content, not 404

### Test Sitemap
Visit: `https://yourdomain.com/sitemap.xml`
- Should show XML with all your pages

### Test Social Sharing
Use these tools:
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

## 💡 Pro Tips

1. **Content is King:** Your case studies with real metrics are GOLD for SEO
2. **Use Exact Keywords:** People search "Python automation services" - use that phrase
3. **Update Regularly:** Add new case studies every few months
4. **Mobile-First:** Google prioritizes mobile-friendly sites (yours is ✅)
5. **Page Speed:** Optimize images, use modern formats (WebP)

## 🆘 Troubleshooting

**Site not showing in Google after 2 weeks?**
- Check robots.txt allows crawling
- Verify Google Search Console ownership
- Check Coverage report for errors
- Make sure site is actually deployed and accessible

**Getting indexing errors?**
- Check sitemap.xml format (must be valid XML)
- Ensure all URLs in sitemap are accessible (200 status)
- Look at Coverage report in Search Console for specific errors

## 📞 Need Help?

If stuck:
1. Check Google Search Console "Coverage" tab for specific errors
2. Use "URL Inspection" tool to see how Google sees your page
3. Contact: hello@automat.com
