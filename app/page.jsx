'use client';

import { useState } from 'react';
import { Check, Zap, Code, Settings, Shield, Mail, Menu, X, ArrowRight, CheckCircle2, FileText, TrendingUp, Database } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-indigo-500/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/50">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Automat</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
              <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</Link>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/30">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-indigo-500/20">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
                <a href="#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
                <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</Link>
                <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
                <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-medium transition-all text-center shadow-lg shadow-indigo-500/30">
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

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
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Service Retainers</h2>
            <p className="text-xl text-slate-300">Implementation and maintenance plans for the projects described in our case studies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tier 1: Entry */}
            <div className="p-8 bg-slate-800/40 border border-indigo-500/20 rounded-xl hover:border-indigo-500/40 transition-all flex flex-col backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Entry</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$14.99</span>
                  <span className="text-slate-500 text-sm">– $17.99</span>
                </div>
                <p className="text-indigo-300 text-sm font-medium">Logic & Script Audits</p>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                One-time review of automation settings or single-script health checks.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Automation settings review</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Single-script health check</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Detailed audit report</span>
                </li>
              </ul>
              <div className="flex-grow"></div>
              <a href="#contact" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-center transition-colors border border-slate-600">
                Get Started
              </a>
            </div>

            {/* Tier 2: Standard */}
            <div className="p-8 bg-slate-800/40 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all flex flex-col backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Standard</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-slate-500 text-sm">– $49.99</span>
                </div>
                <p className="text-purple-300 text-sm font-medium">Operational Retainer</p>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                Quarterly maintenance for small business workflows and API stability.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Quarterly maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Workflow optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">API stability monitoring</span>
                </li>
              </ul>
              <div className="flex-grow"></div>
              <a href="#contact" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-center transition-colors border border-slate-600">
                Get Started
              </a>
            </div>

            {/* Tier 3: Pro */}
            <div className="p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/50 rounded-xl hover:border-indigo-500/70 transition-all relative flex flex-col backdrop-blur-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-sm font-semibold shadow-lg">Popular</span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$55.99</span>
                  <span className="text-slate-500 text-sm">– $79.99</span>
                </div>
                <p className="text-indigo-300 text-sm font-medium">Annual Oversight</p>
              </div>
              <p className="text-slate-200 leading-relaxed mb-6 text-sm">
                12 months of proactive system monitoring and security updates.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">12-month coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">Proactive monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">Security updates</span>
                </li>
              </ul>
              <div className="flex-grow"></div>
              <a href="#contact" className="block w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-center transition-all shadow-lg shadow-indigo-500/50">
                Get Started
              </a>
            </div>

            {/* Tier 4: Enterprise */}
            <div className="p-8 bg-slate-800/40 border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all flex flex-col backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-slate-500 text-sm">– $800+</span>
                </div>
                <p className="text-cyan-300 text-sm font-medium">Custom Engineering</p>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                Dedicated Python builds and complex n8n infrastructure projects.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Custom Python development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Complex n8n infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Dedicated engineering team</span>
                </li>
              </ul>
              <div className="flex-grow"></div>
              <a href="#contact" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-center transition-colors border border-slate-600">
                Contact Sales
              </a>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="mt-12 p-6 bg-indigo-500/5 border border-indigo-500/30 rounded-xl max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-slate-300 text-sm text-center leading-relaxed">
              Service retainers cover implementation and maintenance of custom automation projects. Pricing varies based on technical complexity and infrastructure requirements.
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
                href="mailto:hello@automat.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-indigo-500/50 mb-6"
              >
                <Mail className="w-5 h-5" />
                hello@automat.com
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-indigo-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Automat</span>
              </div>
              <p className="text-slate-400 text-sm">
                Technical automation consultancy for enterprise systems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">Custom Integrations</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">Workflow Design</a>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/refunds" className="hover:text-white transition-colors">Refund Policy</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Contact</h4>
              <p className="text-slate-400 text-sm">
                <a href="mailto:hello@automat.com" className="hover:text-white transition-colors">
                  contact@automathub.com
                </a>
              </p>
              <p className="text-slate-500 text-xs mt-2">
                24-hour response time
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-indigo-500/10 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Automat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}