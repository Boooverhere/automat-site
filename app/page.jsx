import { Check, Zap, Github, Linkedin, Twitter, Code, Settings, Shield, Mail, ArrowRight, CheckCircle2, FileText, TrendingUp, Database, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: { absolute: 'Automat | Automation for Home-Service & Trades Businesses' },
  description: 'Automations for plumbers, electricians, HVAC, roofers, cleaners and other home-service businesses: instant lead replies, quote follow-ups, booking reminders and review requests. Free 30-minute audit call.',
  alternates: { canonical: 'https://automathub.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Automat',
  url: 'https://automathub.com',
  logo: 'https://automathub.com/AutomatHub-logo.svg',
  description: 'Technical automation consultancy specializing in Python-based automation, API engineering, and lead follow-up and admin automation for home-service and trades businesses.',
  email: 'hello@automathub.com',
  priceRange: '$197 - $497',
  founder: { '@type': 'Person', name: 'Mehdi Elyoussoufi' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Automation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Missed-Call Text-Back: setup',
        description: 'One-time setup of instant text-back for missed calls and web enquiries, lead logging, owner alerts, and automatic follow-up.',
        price: '497.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Missed-Call Text-Back: monthly service',
        description: 'Monitoring, fixes and changes for the missed-call text-back system. First month free.',
        price: '197.00',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: '197.00', priceCurrency: 'USD', unitText: 'MONTH' },
      },
    ],
  },
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom API Integrations' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Design & Automation' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ongoing Maintenance Retainers' } },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium">
                Automation for Home-Service &amp; Trades Businesses
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                More Booked Jobs.
              </span>
              <br />
              <span className="text-slate-300">
                Less Admin.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              I&apos;m Mehdi. I build automations for plumbers, electricians, HVAC, roofers, cleaners and other home-service businesses,
              so every lead gets an instant reply, every quote gets followed up, and you spend your evenings off instead of on paperwork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a 
                href="https://calendly.com/automathub/30min" 
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-indigo-500/50"
              >
                Book a Free Automation Audit
              </a>
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 rounded-lg font-semibold text-lg transition-colors"
              >
                See Pricing
              </a>
            </div>
            <p className="text-sm text-slate-400">
              30-minute call. I&apos;ll map out what in your business can be automated, whether or not you hire me.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 border-y border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">What I Automate</h2>
            <p className="text-xl text-slate-300">The admin that costs trades businesses jobs, handled automatically</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 bg-slate-800/40 border border-indigo-500/20 rounded-xl hover:border-indigo-500/40 transition-all backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Never Miss a Lead</h3>
              <p className="text-slate-300 leading-relaxed">
                Instant text or email replies to web enquiries and missed calls, with every lead collected in one place (CRM or Google Sheets) so nothing slips through while you&apos;re on a job.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 bg-slate-800/40 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quotes, Bookings &amp; Reviews</h3>
              <p className="text-slate-300 leading-relaxed">
                Automatic quote follow-ups, appointment reminders that cut no-shows, and review requests sent after every finished job to build up your Google reviews.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-slate-800/40 border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Set Up &amp; Looked After</h3>
              <p className="text-slate-300 leading-relaxed">
                I connect the tools you already use, like your calendar, invoicing, Jobber or Housecall Pro, and Gmail, then monitor and fix everything so you never have to touch it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="shrink-0 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold shadow-lg shadow-indigo-500/30" aria-hidden="true">
              ME
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Hi, I&apos;m Mehdi Elyoussoufi</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                I&apos;m the engineer behind Automat. When you work with me, you deal directly with the person building your
                systems: no account managers and no tech jargon.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Most trades businesses don&apos;t lose jobs because of bad work. They lose them because a call went unanswered, a quote
                was never followed up, or the owner was too busy on site to reply. I build the systems (with n8n, Zapier, and Python)
                that handle that follow-up for you, and I keep them running.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                <a href="https://calendly.com/automathub/30min" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold transition-all">
                  Book a Free Audit <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/elyoussoufimehdi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 rounded-lg font-semibold transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com/boooverhere" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 rounded-lg font-semibold transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Implementation Process</h2>
            <p className="text-xl text-slate-300">Systematic approach to automation deployment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold shadow-lg shadow-indigo-500/50">
                  01
                </div>
                <h3 className="text-2xl font-bold mb-4">Consultation</h3>
                <p className="text-slate-300 leading-relaxed">
                  I analyze your existing workflows, API infrastructure, and automation requirements to design a tailored solution that fits your specific business needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold shadow-lg shadow-purple-500/50">
                  02
                </div>
                <h3 className="text-2xl font-bold mb-4">Custom Engineering</h3>
                <p className="text-slate-300 leading-relaxed">
                  I develop custom Python scripts, custom API integrations, and n8n workflows built exclusively for your environment—no off-the-shelf solutions.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold shadow-lg shadow-cyan-500/50">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4">Deployment & Support</h3>
              <p className="text-slate-300 leading-relaxed">
                I deploy directly to your environment, provide comprehensive documentation, and deliver ongoing maintenance and support to keep everything running smoothly.
              </p>
            </div>
          </div>

          {/* Process Note */}
          <div className="mt-16 p-6 bg-indigo-500/5 border border-indigo-500/30 rounded-xl max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-slate-200 text-center leading-relaxed">
              <strong className="text-white">Service retainers cover professional implementation and ongoing support</strong> — not pre-packaged software licenses. Every solution is custom-engineered for your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="py-20 px-6 border-y border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Projects I&apos;ve Built</h2>
            <p className="text-xl text-slate-300">Working automation systems I designed and built myself</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-slate-800/40 border border-indigo-500/20 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all backdrop-blur-sm">
              <div className="p-6 border-b border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">API Integration</span>
                </div>
                <h3 className="text-xl font-bold mb-2">E-Commerce Inventory Sync</h3>
                <p className="text-slate-300 text-sm">Multi-platform synchronization system</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">Real-time inventory updates across Shopify, WooCommerce, and custom POS</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">Python-based webhook handlers with Redis caching</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">Two-way sync with retries and a full audit log</p>
                  </div>
                </div>
                <Link 
                  href="/case-studies#inventory-sync"
                  className="block w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-medium text-center transition-all text-sm shadow-lg shadow-indigo-500/30"
                >
                  See How It Works →
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-slate-800/40 border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all backdrop-blur-sm">
              <div className="p-6 border-b border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">Data Pipeline</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Reporting Automation</h3>
                <p className="text-slate-300 text-sm">Automated executive dashboard system</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">Daily aggregation of Stripe, QuickBooks, and Salesforce data</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">Custom n8n workflows with error handling and retry logic</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">Dashboard ready every morning, no manual CSV exports</p>
                  </div>
                </div>
                <Link 
                  href="/case-studies#financial-reporting"
                  className="block w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-medium text-center transition-all text-sm shadow-lg shadow-purple-500/30"
                >
                  See How It Works →
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-slate-800/40 border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all backdrop-blur-sm">
              <div className="p-6 border-b border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">Workflow Automation</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Onboarding System</h3>
                <p className="text-slate-300 text-sm">End-to-end onboarding automation</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">Automated document collection, verification, and CRM updates</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">Zapier + Python webhooks with Airtable integration</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">OCR pulls key details from signed documents automatically</p>
                  </div>
                </div>
                <Link 
                  href="/case-studies#onboarding-system"
                  className="block w-full py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg font-medium text-center transition-all text-sm shadow-lg shadow-cyan-500/30"
                >
                  See How It Works →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition-colors font-medium"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300">One recovered job usually pays for months of service.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-stretch">

            {/* Main package */}
            <div className="lg:col-span-3 relative p-8 md:p-10 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500 rounded-2xl flex flex-col shadow-xl shadow-indigo-500/20">
              <div className="absolute -top-4 left-8">
                <span className="px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                  FIRST MONTH FREE
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-3">For plumbing, HVAC &amp; home-service businesses</p>
              <h3 className="text-3xl font-bold mb-6">Missed-Call Text-Back</h3>
              <div className="flex flex-wrap items-end gap-x-6 gap-y-2 mb-2">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold">$497</span>
                  <span className="text-slate-300 text-sm mb-2">one-time setup</span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold text-slate-200">+ $197</span>
                  <span className="text-slate-300 text-sm mb-1">/month</span>
                </div>
              </div>
              <p className="text-sm text-indigo-200 mb-8">Your first month is free. Monthly billing starts in month two.</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Missed callers get a text back within seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Website enquiries answered instantly by text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Every lead logged in one place (Google Sheets or your CRM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Text alert to your phone for every new lead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Automatic follow-up if a lead goes quiet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Keeps your existing business number</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Monitoring, fixes and tweaks included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Cancel anytime</span>
                  </li>
              </ul>
              <a href="https://calendly.com/automathub/30min" className="block text-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-indigo-500/40">
                Book a Free Call
              </a>
              <p className="text-xs text-slate-400 mt-4 text-center">
                Phone line costs (usually $5–10/month) are billed directly by the phone provider.
              </p>
            </div>

            {/* Custom work */}
            <div className="lg:col-span-2 p-8 bg-slate-800/40 border border-slate-700 rounded-2xl hover:border-indigo-500/40 transition-all flex flex-col backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Anything else</p>
              <h3 className="text-2xl font-bold mb-6">Custom Automation</h3>
              <div className="mb-2">
                <span className="text-4xl font-extrabold">Quoted</span>
              </div>
              <p className="text-sm text-slate-400 mb-8">Per project, with optional monthly support.</p>
              <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Quotes, invoicing and payment reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Scheduling and appointment reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Review requests after every job</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">CRM, spreadsheet and app syncing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">Fixed-price quote after a free call</span>
                  </li>
              </ul>
              <a href="https://calendly.com/automathub/30min" className="block text-center px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors">
                Get a Quote
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-6 border-y border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 bg-slate-800/40 border border-indigo-500/20 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Intellectual Property & Compliance</h3>
                <p className="text-slate-300 leading-relaxed">
                  Every retainer and one-off build is original work, built from the ground up for your business. You own
                  what I build for you, and I never resell third-party software licenses or &quot;premium&quot; accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Building Section */}
      <section id="web-design" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-slate-800/60 via-emerald-900/20 to-slate-800/60 backdrop-blur-sm p-10 md:p-16">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Left copy */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  New Service
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Don't have a website yet?
                  </span>
                </h2>

                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Every serious business needs a strong web presence. I design and build custom websites — fast-loading, professional, and built to convert — so you can focus on running your business.
                </p>

                <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </span>
                    Landing pages, portfolios, business sites & e-commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </span>
                    Custom-built to your brand — no templates, no page builders
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </span>
                    SEO-ready, mobile-first, and fast by default
                  </li>
                </ul>

                <Link
                  href="/website-brief"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-emerald-500/30"
                >
                  <Globe className="w-5 h-5" />
                  Tell us about your vision
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right visual */}
              <div className="hidden md:grid grid-cols-2 gap-4">
                {[
                  { label: "Landing Page", desc: "Capture leads & drive conversions", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/30" },
                  { label: "Portfolio", desc: "Show your work professionally", color: "from-teal-500/20 to-cyan-500/20", border: "border-teal-500/30" },
                  { label: "Business Site", desc: "Full presence for your company", color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30" },
                  { label: "E-Commerce", desc: "Sell online with a custom store", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/30" },
                ].map((item) => (
                  <div key={item.label} className={`p-5 bg-gradient-to-br ${item.color} border ${item.border} rounded-xl`}>
                    <Globe className="w-5 h-5 text-emerald-400 mb-3" />
                    <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/50">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Let&apos;s Talk</h2>
            <p className="text-xl text-slate-300 mb-8">Tell me what&apos;s eating your time. I&apos;ll reply personally.</p>
            
            <div className="bg-slate-800/40 border border-indigo-500/20 rounded-xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
              <a 
                href="mailto:hello@automathub.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-indigo-500/50 mb-6"
              >
                <Mail className="w-5 h-5" />
                hello@automathub.com
              </a>
              
              <div className="mt-6 pt-6 border-t border-indigo-500/20">
                <p className="text-slate-300 flex items-center justify-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  Response time: Within 24 business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


</div>
  );
}