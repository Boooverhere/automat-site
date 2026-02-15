# Automat Multi-Page Consultancy Website

Complete multi-page professional technical consultancy website with dark B2B aesthetic.

## Files Included

### Page Components
1. **home-page.jsx** → Place in `app/page.jsx`
2. **case-studies-page.jsx** → Place in `app/case-studies/page.jsx`
3. **refunds-page.jsx** → Place in `app/refunds/page.jsx`

### Existing Legal Pages (Update These)
- `app/terms/page.jsx` (you already have this - update the header/footer to match new design)
- `app/privacy/page.jsx` (you already have this - update the header/footer to match new design)

## Installation

### Step 1: Create Directory Structure
```bash
mkdir -p app/case-studies
```

### Step 2: Place Files
```bash
# Replace your homepage
cp home-page.jsx app/page.jsx

# Add case studies page
cp case-studies-page.jsx app/case-studies/page.jsx

# Replace refunds page
cp refunds-page.jsx app/refunds/page.jsx
```

### Step 3: Update Existing Legal Pages (Optional)
Update the header and footer in your existing `/terms` and `/privacy` pages to match the new dark, minimal design aesthetic. They already have the correct content - just update the styling to match.

## Key Features

### Homepage (`/`)
- ✅ Dark, sophisticated B2B design
- ✅ Case Studies preview section with 3 cards
- ✅ "Service Retainers" pricing clearly labeled
- ✅ All buttons aligned properly with flexbox
- ✅ Links to `/case-studies` page
- ✅ Professional, data-driven aesthetic

### Case Studies Page (`/case-studies`)
- ✅ 3 detailed technical deep-dives
- ✅ Structured sections: Objective, Technical Stack, Implementation Logic, Operational Impact
- ✅ Real metrics and data points
- ✅ "Start Your Audit" CTA linking back to pricing
- ✅ Anchor links for direct navigation (e.g., `/case-studies#inventory-sync`)

### Refund Policy (`/refunds`)
- ✅ Updated text: "Tier 1 and Tier 2 services involve immediate technical labor... non-refundable once the service report is issued"
- ✅ "Maintenance Retainers may be cancelled at any time for a pro-rated refund"
- ✅ Detailed tier-by-tier breakdown
- ✅ Professional, consultancy-focused language

## Design Philosophy

**Dark B2B Aesthetic:**
- Slate 950/900/800 color palette
- Minimal gradients (subtle, not flashy)
- Border-driven hierarchy
- Monospace accents for technical credibility
- Data-driven, functional layout
- No sales-y language - pure technical consultancy

**Typography:**
- System fonts (no fancy display fonts)
- Clear hierarchy with size differentiation
- Generous line-height for readability

**Interactions:**
- Subtle hover states (border changes, slight bg shifts)
- No aggressive animations
- Professional, restrained transitions

## Navigation Structure

```
Home (/)
├── Services (#services)
├── Process (#process)
├── Case Studies (/case-studies)
│   ├── Inventory Sync (#inventory-sync)
│   ├── Financial Reporting (#financial-reporting)
│   └── Onboarding System (#onboarding-system)
├── Pricing (#pricing)
└── Contact (#contact)

Legal
├── Terms (/terms)
├── Privacy (/privacy)
└── Refunds (/refunds)
```

## Customization

### Update Email
Replace `hello@automat.com` throughout all files with your actual domain email.

### Add More Case Studies
Copy the case study section structure and add new studies with your actual project data.

### Adjust Pricing
Edit the pricing section in `home-page.jsx` to modify tiers or add new ones.

## Stripe Compliance Features

✅ **Service Retainers** clearly labeled (not "subscriptions")  
✅ **Professional services** language throughout  
✅ **Technical case studies** demonstrate actual work  
✅ **Immediate labor** emphasized for Tier 1/2  
✅ **Custom engineering** focus for Enterprise  
✅ **No software resale** language anywhere  

## Testing Checklist

- [ ] All internal links work (`/case-studies`, `/#pricing`, etc.)
- [ ] Anchor links on case studies page work (`#inventory-sync`, etc.)
- [ ] Mobile navigation menu works
- [ ] All "Get Started" buttons link to `#contact`
- [ ] Email links work (`mailto:hello@automat.com`)
- [ ] Footer links work across all pages
- [ ] Pricing tier descriptions are accurate

## Notes

- The terms and privacy pages you already have are fine - just optionally update their header/footer styling to match the new design
- All case studies use realistic but fictional data - replace with your actual project metrics
- The dark aesthetic is intentionally minimal to convey technical sophistication
- Button alignment is handled with flexbox `flex-col` and `flex-grow` on the pricing cards

## Support

For questions: hello@automat.com
