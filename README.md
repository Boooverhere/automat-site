# Automat - Workflow Automation Website

A professional, enterprise-grade website for Automat's workflow automation and API engineering services. Built with Next.js, Tailwind CSS, and Lucide React icons.

## Features

- ✅ Modern, responsive design optimized for all devices
- ✅ Professional dark theme with gradient accents
- ✅ Complete legal pages (Terms of Service, Privacy Policy, Refund Policy)
- ✅ Four-tier subscription pricing display
- ✅ Service showcase with custom integrations, workflow design, and maintenance
- ✅ Intellectual property compliance statement
- ✅ Optimized for Stripe manual review compliance

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure build settings

6. Click "Deploy"

### Build Settings (Auto-detected by Vercel)

- **Framework Preset:** Next.js
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

## Project Structure

```
automat-website/
├── app/
│   ├── page.jsx           # Homepage
│   ├── layout.jsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── terms/
│   │   └── page.jsx       # Terms of Service
│   ├── privacy/
│   │   └── page.jsx       # Privacy Policy
│   └── refund/
│       └── page.jsx       # Refund Policy
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Customization

### Update Contact Email

Replace `hello@automat.com` with your actual domain email in:
- `app/page.jsx` (Contact section and Footer)
- `app/terms/page.jsx` (Contact section)
- `app/privacy/page.jsx` (Contact section)
- `app/refund/page.jsx` (Contact section)

### Update Domain References

Update any placeholder domain references throughout the legal pages with your actual domain.

### Pricing Adjustments

Edit the pricing section in `app/page.jsx` to adjust subscription tiers, pricing, or features.

## Legal Pages

All legal pages are designed specifically for subscription-based technical maintenance services:

- **Terms of Service:** Clearly states subscriptions are for ongoing maintenance services
- **Privacy Policy:** Comprehensive data handling and privacy practices
- **Refund Policy:** Detailed refund eligibility for subscription services

## Stripe Compliance Features

This website is designed to pass Stripe manual review:

1. **Professional Design:** Enterprise-grade aesthetic demonstrating legitimacy
2. **Clear Service Description:** Detailed explanation of proprietary services
3. **IP Compliance Statement:** Explicit statement about original, proprietary code
4. **Comprehensive Legal Pages:** Complete Terms, Privacy, and Refund policies
5. **Subscription Clarity:** Clear indication that subscriptions are for maintenance services
6. **Contact Information:** Professional contact email displayed prominently

## Support

For questions or issues, contact: hello@automat.com

## License

All rights reserved. This is proprietary software for Automat.
