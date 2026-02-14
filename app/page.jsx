'use client';

import { useState } from 'react';
import { Check, Zap, Code, Settings, Shield, Mail, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Automat</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors">
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
            <div className="md:hidden mt-4 py-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
                <a href="#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
                <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
                <a href="#contact" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors text-center">
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
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium">
                Enterprise Automation Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Custom Workflow Automation
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                & API Engineering
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We build and maintain proprietary Python-based automations for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-indigo-500/50"
              >
                View Pricing
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold text-lg transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Services</h2>
            <p className="text-xl text-slate-400">End-to-end automation solutions tailored to your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <Code className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Integrations</h3>
              <p className="text-slate-400 leading-relaxed">
                Specialized Python scripts and API connections designed specifically for your infrastructure and business logic.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Settings className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Workflow Design</h3>
              <p className="text-slate-400 leading-relaxed">
                Enterprise-grade n8n and Zapier architecture that scales with your organization's evolving needs.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Shield className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ongoing Maintenance</h3>
              <p className="text-slate-400 leading-relaxed">
                Proactive monitoring and API update management to ensure your automations run flawlessly 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-slate-400">A proven approach to delivering custom automation solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold shadow-lg shadow-indigo-500/50">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Consultation</h3>
                <p className="text-slate-400 leading-relaxed">
                  We analyze your existing workflows, API infrastructure, and automation requirements to design a tailored solution that fits your specific business needs.
                </p>
              </div>
              {/* Connector Arrow */}
              <div className="hidden md:flex absolute top-8 left-full w-full items-center justify-center -z-10">
                <ArrowRight className="w-8 h-8 text-indigo-500/30" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold shadow-lg shadow-purple-500/50">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Custom Engineering</h3>
                <p className="text-slate-400 leading-relaxed">
                  Our team develops proprietary Python scripts, custom API integrations, and n8n workflows built exclusively for your environment—no off-the-shelf solutions.
                </p>
              </div>
              {/* Connector Arrow */}
              <div className="hidden md:flex absolute top-8 left-full w-full items-center justify-center -z-10">
                <ArrowRight className="w-8 h-8 text-purple-500/30" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold shadow-lg shadow-cyan-500/50">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Deployment & Support</h3>
              <p className="text-slate-400 leading-relaxed">
                We deploy directly to your environment, provide comprehensive documentation, and deliver ongoing maintenance and support to keep everything running smoothly.
              </p>
            </div>
          </div>

          {/* Process Note */}
          <div className="mt-16 p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-xl max-w-3xl mx-auto">
            <p className="text-slate-300 text-center leading-relaxed">
              <strong className="text-indigo-300">Our subscriptions cover professional services and ongoing support</strong> — not pre-packaged software licenses. Every solution is custom-engineered for your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Service Tiers</h2>
            <p className="text-xl text-slate-400">Professional automation services tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tier 1: Entry */}
            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Entry</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$14.99</span>
                  <span className="text-slate-400 text-sm">– $17.99</span>
                </div>
                <p className="text-indigo-400 text-sm font-semibold">Logic & Script Audits</p>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                One-time review of automation settings or single-script health checks.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Automation settings review</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Single-script health check</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Detailed audit report</span>
                </li>
              </ul>
              <div className="flex-grow"></div>
              <a href="#contact" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-center transition-colors">
                Get Started
              </a>
            </div>

            {/* Tier 2: Standard */}
            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Standard</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-slate-400 text-sm">– $49.99</span>
                </div>
                <p className="text-purple-400 text-sm font-semibold">Operational Retainer</p>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Quarterly maintenance for small business workflows and API stability.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Quarterly maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Workflow optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">API stability monitoring</span>
                </li>
              </ul>
              <div className="flex-grow"></div>
              <a href="#contact" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-center transition-colors">
                Get Started
              </a>
            </div>

            {/* Tier 3: Pro */}
            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-indigo-500 rounded-full text-sm font-semibold">Popular</span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$55.99</span>
                  <span className="text-slate-400 text-sm">– $79.99</span>
                </div>
                <p className="text-indigo-400 text-sm font-semibold">Annual Oversight</p>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                12 months of proactive system monitoring and security updates.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">12-month coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Proactive monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Security updates</span>
                </li>
              </ul>
              <div className="flex-grow"></div>
              <a href="#contact" className="block w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-center transition-colors">
                Get Started
              </a>
            </div>

            {/* Tier 4: Enterprise */}
            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 border-purple-500/50 rounded-2xl hover:border-purple-400/50 transition-all">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-slate-400 text-sm">– $800+</span>
                </div>
                <p className="text-purple-400 text-sm font-semibold">Custom Engineering</p>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Dedicated Python builds and complex n8n infrastructure projects.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Custom Python development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Complex n8n infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Dedicated engineering team</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-center transition-colors">
                Contact Sales
              </a>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              All tiers include professional consultation and custom implementation. Prices vary based on project scope and complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="p-10 bg-slate-800/40 border border-slate-700/50 rounded-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Intellectual Property & Compliance</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
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
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <Mail className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Automate?</h2>
            <p className="text-xl text-slate-400 mb-8">Get in touch to discuss your automation needs</p>
            
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <a 
                href="mailto:hello@automat.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-indigo-500/50 mb-6"
              >
                <Mail className="w-5 h-5" />
                hello@automat.com
              </a>
              
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <p className="text-slate-400 flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  We typically respond to inquiries within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Automat</span>
              </div>
              <p className="text-slate-400">
                Professional workflow automation and API engineering services for modern enterprises.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/refund" className="hover:text-white transition-colors">Refund Policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-slate-400">
                <a href="mailto:hello@automat.com" className="hover:text-white transition-colors">
                  hello@automat.com
                </a>
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Response time: Within 24 hours
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Automat. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}