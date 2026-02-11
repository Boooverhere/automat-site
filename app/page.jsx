'use client';

import { useState } from 'react';
import { Check, Zap, Code, Settings, Shield, Mail, Menu, X } from 'lucide-react';

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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Maintenance Plans</h2>
            <p className="text-xl text-slate-400">Choose the support tier that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter Plan */}
            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$14</span>
                  <span className="text-slate-400">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">1 Month of technical support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">System monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Email support</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-center transition-colors">
                Get Started
              </a>
            </div>

            {/* Quarterly Plan */}
            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Quarterly</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-slate-400">/3 months</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">3 Months of maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Bug fixes included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Priority email support</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-center transition-colors">
                Get Started
              </a>
            </div>

            {/* Semi-Annual Plan */}
            <div className="p-8 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-2 border-indigo-500/50 rounded-2xl hover:border-indigo-400/50 transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-indigo-500 rounded-full text-sm font-semibold">Popular</span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Semi-Annual</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-slate-400">/6 months</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">6 Months of support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Priority workflow support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Workflow optimization</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-center transition-colors">
                Get Started
              </a>
            </div>

            {/* Annual Plan */}
            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Annual</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$55.99</span>
                  <span className="text-slate-400">/year</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">12 Months of management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">API updates included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Dedicated support channel</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-center transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-6 bg-slate-900/30">
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
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Mail className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Automate?</h2>
          <p className="text-xl text-slate-400 mb-8">Get in touch to discuss your automation needs</p>
          <a 
            href="mailto:hello@automat.com" 
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-indigo-500/50"
          >
            hello@automat.com
          </a>
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
