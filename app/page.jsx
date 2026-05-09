import { Check, Zap, Github, Linkedin, Twitter, Code, Settings, Shield, Mail, ArrowRight, CheckCircle2, FileText, TrendingUp, Database, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Custom Workflow Automation & API Engineering Services',
  description: 'Professional Python-based automation, API integration, and technical consulting for enterprises. Custom n8n workflows, system monitoring, and ongoing maintenance retainers.',
  alternates: { canonical: 'https://automathub.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Automat',
  url: 'https://automathub.com',
  logo: 'https://automathub.com/AutomatHub-logo.svg',
  description: 'Technical automation consultancy specializing in Python-based automation, API engineering, and custom workflow design for enterprise systems.',
  email: 'contact@automathub.com',
  priceRange: '$14.99 - $800+',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Automation Service Retainers',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Entry – Logic & Script Audits',
        description: 'One-time review of automation settings or single-script health checks.',
        price: '14.99',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Standard – Operational Retainer',
        description: 'Quarterly maintenance for small business workflows and API stability.',
        price: '39.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Pro – Annual Oversight',
        description: '12 months of proactive system monitoring and security updates.',
        price: '55.99',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise – Custom Engineering',
        description: 'Full-scale custom automation engineering and API integration for enterprise systems.',
        price: '99.00',
        priceCurrency: 'USD',
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
                Technical Automation Consultancy
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                Custom Workflow Automation
              </span>
              <br />
              <span className="text-slate-300">
                & API Engineering
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We build and maintain proprietary Python-based automations for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-indigo-500/50"
              >
                View Service Retainers
              </a>
              <Link 
                href="/case-studies" 
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 rounded-lg font-semibold text-lg transition-colors"
              >
                Technical Reports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 border-y border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Technical Capabilities</h2>
            <p className="text-xl text-slate-300">Specialized automation services for enterprise systems</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 bg-slate-800/40 border border-indigo-500/20 rounded-xl hover:border-indigo-500/40 transition-all backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Integrations</h3>
              <p className="text-slate-300 leading-relaxed">
                Specialized Python scripts and API connections designed specifically for your infrastructure and business logic.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 bg-slate-800/40 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Workflow Design</h3>
              <p className="text-slate-300 leading-relaxed">
                Enterprise-grade n8n and Zapier architecture that scales with your organization's evolving needs.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-slate-800/40 border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ongoing Maintenance</h3>
              <p className="text-slate-300 leading-relaxed">
                Proactive monitoring and API update management to ensure your automations run flawlessly 24/7.
              </p>
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
                  We analyze your existing workflows, API infrastructure, and automation requirements to design a tailored solution that fits your specific business needs.
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
                  Our team develops proprietary Python scripts, custom API integrations, and n8n workflows built exclusively for your environment—no off-the-shelf solutions.
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
                We deploy directly to your environment, provide comprehensive documentation, and deliver ongoing maintenance and support to keep everything running smoothly.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Technical Case Studies</h2>
            <p className="text-xl text-slate-300">Implementation reports from recent automation projects</p>
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
                    <p className="text-slate-300 text-sm leading-relaxed">99.7% sync accuracy, 4-second average latency</p>
                  </div>
                </div>
                <Link 
                  href="/case-studies#inventory-sync"
                  className="block w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-medium text-center transition-all text-sm shadow-lg shadow-indigo-500/30"
                >
                  Read Full Report →
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
                    <p className="text-slate-300 text-sm leading-relaxed">Reduced reporting time from 6 hours to 12 minutes</p>
                  </div>
                </div>
                <Link 
                  href="/case-studies#financial-reporting"
                  className="block w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-medium text-center transition-all text-sm shadow-lg shadow-purple-500/30"
                >
                  Read Full Report →
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
                    <p className="text-slate-300 text-sm leading-relaxed">73% reduction in onboarding completion time</p>
                  </div>
                </div>
                <Link 
                  href="/case-studies#onboarding-system"
                  className="block w-full py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg font-medium text-center transition-all text-sm shadow-lg shadow-cyan-500/30"
                >
                  Read Full Report →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition-colors font-medium"
            >
              View All Technical Reports
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300">Fraction of agency rates. No hidden fees. Cancel anytime.</p>
          </div>

          {/* Agency comparison callout */}
          <div className="mb-12 inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Agencies charge $1,500–$5,000/month for the same work. We don't.
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

            {/* Tier 1: Starter */}
            <div className="p-8 bg-slate-800/40 border border-slate-700 rounded-xl hover:border-indigo-500/40 transition-all flex flex-col backdrop-blur-sm">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Starter</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-extrabold">$49</span>
                  <span className="text-slate-400 text-sm mb-2">/month</span>
                </div>
                <p className="text-indigo-300 text-sm font-medium">Audit & Health Check</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Best for businesses new to automation. Get a clear picture of what's working and what isn't.
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  '1 workflow or script audit/month',
                  'Detailed written report',
                  'Fix recommendations',
                  '48-hour turnaround',
                  'Email support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://calendly.com/automathub/30min" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg font-semibold text-center transition-colors text-sm">
                Get Started
              </a>
            </div>

            {/* Tier 2: Build */}
            <div className="p-8 bg-slate-800/40 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all flex flex-col backdrop-blur-sm">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Build</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-extrabold">$199</span>
                  <span className="text-slate-400 text-sm mb-2">/month</span>
                </div>
                <p className="text-purple-300 text-sm font-medium">Active Automation</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Ideal for growing businesses ready to start automating. We build and maintain your workflows.
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  'Up to 3 workflow builds/month',
                  'n8n, Zapier, or Python',
                  'API integrations & connections',
                  'Setup documentation',
                  '14-day post-launch support',
                  'Priority email support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://calendly.com/automathub/30min" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg font-semibold text-center transition-colors text-sm">
                Get Started
              </a>
            </div>

            {/* Tier 3: Scale — Most Popular */}
            <div className="relative p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/60 rounded-xl flex flex-col backdrop-blur-sm shadow-xl shadow-indigo-500/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-xs font-bold tracking-wide shadow-lg shadow-indigo-500/40">
                  MOST POPULAR
                </span>
              </div>
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Scale</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-extrabold">$399</span>
                  <span className="text-slate-400 text-sm mb-2">/month</span>
                </div>
                <p className="text-indigo-300 text-sm font-medium">Full Automation Partner</p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                For businesses that want automation as a continuous advantage — not a one-off project.
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  'Unlimited workflow builds',
                  'Custom Python scripting',
                  'Proactive monitoring & fixes',
                  '24-hour support response',
                  'Monthly strategy call',
                  'API update management',
                  'Full documentation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://calendly.com/automathub/30min" className="block w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-center transition-all shadow-lg shadow-indigo-500/40 text-sm">
                Get Started
              </a>
            </div>

            {/* Tier 4: Enterprise */}
            <div className="p-8 bg-slate-800/40 border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all flex flex-col backdrop-blur-sm">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Enterprise</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-extrabold">$799</span>
                  <span className="text-slate-400 text-sm mb-2">/month+</span>
                </div>
                <p className="text-cyan-300 text-sm font-medium">Dedicated Engineering</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Large-scale infrastructure builds and dedicated capacity for complex, evolving systems.
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  'Dedicated engineering capacity',
                  'Full infrastructure design',
                  'Custom Python development',
                  'SLA guarantees',
                  'Direct Slack channel',
                  'Onboarding & training',
                  'Custom contract & terms',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://calendly.com/automathub/30min" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg font-semibold text-center transition-colors text-sm">
                Book a Call
              </a>
            </div>

          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm mb-2">
              <strong className="text-white">Multiple currencies accepted:</strong> USD · EUR · GBP · DKK
            </p>
            <p className="text-slate-500 text-xs">Prices shown in USD. Pay in your preferred currency at checkout.</p>
          </div>

          <div className="mt-12 p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-xl max-w-3xl mx-auto backdrop-blur-sm text-center">
            <p className="text-slate-300 text-sm leading-relaxed">
              Not sure which plan fits? <a href="https://calendly.com/automathub/30min" className="text-indigo-300 hover:text-white underline underline-offset-2 transition-colors">Book a free 30-minute call</a> and we'll recommend the right starting point for your stack.
            </p>
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
                  All code delivered is original and proprietary. We provide professional services and custom implementations; 
                  we do not resell third-party software licenses. Every automation solution is built from the ground up to meet 
                  your specific requirements, ensuring full compliance and ownership rights.
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
                  Every serious business needs a strong web presence. We design and build custom websites — fast-loading, professional, and built to convert — so you can focus on running your business.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Initiate Consultation</h2>
            <p className="text-xl text-slate-300 mb-8">Discuss your automation requirements with our technical team</p>
            
            <div className="bg-slate-800/40 border border-indigo-500/20 rounded-xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
              <a 
                href="mailto:contact@automathub.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-indigo-500/50 mb-6"
              >
                <Mail className="w-5 h-5" />
                contact@automathub.com
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