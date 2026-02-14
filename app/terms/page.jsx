'use client';

import { ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      {/* Header */}
      <header className="border-b border-indigo-500/20 bg-slate-900/95">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/50">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Automat</span>
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Terms of Service</h1>
        <p className="text-slate-400 mb-12 text-sm">Last Updated: February 14, 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="text-slate-200 leading-relaxed">
              By accessing or using Automat's services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Service Definition</h2>
            <div className="bg-slate-800/40 border-l-4 border-indigo-500 p-6 rounded backdrop-blur-sm">
              <p className="text-slate-200 leading-relaxed mb-4">
                Automat provides custom software engineering, API integration, and technical maintenance services. 
                Our offerings, including "Technical Audits" and "System Oversight Retainers," constitute professional 
                labor and technical consulting.
              </p>
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-white">Automat is not a reseller of third-party software licenses, "premium" accounts, 
                or unauthorized access tools.</strong> We provide professional services that integrate with your own properly 
                licensed software and API accounts.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Intellectual Property (IP) Ownership</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">3.1 Original Work</h3>
                <p className="text-slate-200 leading-relaxed">
                  All custom Python scripts, n8n workflows, and automation logic developed by Automat are original works 
                  created specifically for the Client. Each implementation is built from the ground up to meet your specific 
                  requirements and business logic.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">3.2 Ownership Rights</h3>
                <p className="text-slate-200 leading-relaxed">
                  Upon full payment, the Client is granted a <strong className="text-white">non-exclusive, perpetual license</strong> to 
                  use the custom code and workflows within their own business environment. This license includes the right to:
                </p>
                <ul className="list-disc list-inside text-slate-200 space-y-2 ml-4 mt-3">
                  <li>Deploy and execute the code within your infrastructure</li>
                  <li>Modify the code to suit your evolving business needs</li>
                  <li>Create derivative works based on the delivered implementations</li>
                  <li>Use the code indefinitely without additional licensing fees</li>
                </ul>
                <p className="text-slate-200 leading-relaxed mt-3">
                  Automat retains rights to our proprietary methodologies, frameworks, and general technical approaches that 
                  may be applied across multiple client engagements.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">3.3 Third-Party Compliance</h3>
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-white">Automat warrants that our custom implementations do not infringe upon the 
                  intellectual property rights of any third party.</strong> Our services are designed to integrate with the 
                  Client's own properly licensed software accounts (e.g., Zapier, n8n, Shopify, Salesforce, or other API providers).
                </p>
                <p className="text-slate-200 leading-relaxed mt-3">
                  Clients are responsible for maintaining valid licenses and accounts with any third-party services that our 
                  custom implementations integrate with. Automat does not provide, resell, or facilitate access to third-party 
                  software licenses.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Maintenance & Retainers</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">4.1 Purpose</h3>
                <p className="text-slate-200 leading-relaxed">
                  The Tier 1 ($14.99 - $17.99), Tier 2 ($39.00 - $49.99), and Tier 3 ($55.99 - $79.99) pricing plans are 
                  <strong className="text-white"> service-based retainers</strong> for ongoing technical labor and professional support.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">4.2 Scope</h3>
                <p className="text-slate-200 leading-relaxed mb-3">
                  These fees cover ongoing technical labor, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-slate-200 space-y-2 ml-4">
                  <li>Monitoring for API changes and deprecations</li>
                  <li>Applying security patches to custom scripts and workflows</li>
                  <li>Ensuring continuous workflow stability and uptime</li>
                  <li>Troubleshooting integration failures and errors</li>
                  <li>Updating authentication credentials and access tokens</li>
                  <li>Performance optimization and efficiency improvements</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">4.3 Delivery</h3>
                <p className="text-slate-200 leading-relaxed">
                  Maintenance services are active for the duration of the selected term (1 month, 3 months, or 12 months) and 
                  involve <strong className="text-white">human-led technical oversight</strong>. Our team actively monitors your 
                  automation systems and proactively addresses issues before they impact operations.
                </p>
                <p className="text-slate-200 leading-relaxed mt-3">
                  This is not passive software maintenance or automated monitoring—each retainer includes dedicated engineering 
                  time allocated to reviewing, testing, and maintaining your specific automation implementations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Payment Terms</h2>
            <p className="text-slate-200 leading-relaxed">
              All fees are payable in advance for the subscription period selected. Payments are processed securely 
              through our payment provider. You authorize us to charge your selected payment method at the beginning 
              of each subscription term.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Service Level and Availability</h2>
            <p className="text-slate-200 leading-relaxed">
              We strive to provide reliable, high-quality services. However, we do not guarantee uninterrupted service 
              and are not liable for any downtime, service interruptions, or data loss. Maintenance windows will be 
              communicated when possible. Our monitoring services operate on a best-effort basis with response times 
              determined by your selected service tier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">7. Client Responsibilities</h2>
            <p className="text-slate-200 leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside text-slate-200 space-y-2 ml-4">
              <li>Providing accurate information and access credentials as needed</li>
              <li>Maintaining the security of their account and credentials</li>
              <li>Complying with all applicable laws and regulations in their use of our services</li>
              <li>Ensuring they have the right to provide us with any data or systems access</li>
              <li>Maintaining valid licenses for any third-party services our implementations integrate with</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">8. Limitation of Liability</h2>
            <p className="text-slate-200 leading-relaxed">
              Automat's total liability for any claims arising from our services shall not exceed the amount paid 
              by the client in the twelve (12) months preceding the claim. We are not liable for indirect, incidental, 
              special, consequential, or punitive damages, including lost profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">9. Confidentiality</h2>
            <p className="text-slate-200 leading-relaxed">
              We maintain strict confidentiality of all client data, code, and business information. We will not 
              disclose any confidential information to third parties except as required by law or with explicit 
              client permission. All custom implementations and business logic remain confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">10. Termination</h2>
            <p className="text-slate-200 leading-relaxed">
              Either party may terminate services with written notice. Clients may cancel subscriptions at any time, 
              with cancellation taking effect at the end of the current billing period. We reserve the right to 
              terminate services immediately for breach of these terms. Upon termination, clients retain all rights 
              to custom code previously delivered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">11. Warranty and Indemnification</h2>
            <p className="text-slate-200 leading-relaxed">
              Automat warrants that our custom implementations are original works and do not knowingly infringe upon 
              third-party intellectual property rights. We will indemnify clients against claims arising from IP 
              infringement in our custom code, provided the client has not modified the code in ways that introduce 
              such infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">12. Modifications to Terms</h2>
            <p className="text-slate-200 leading-relaxed">
              We reserve the right to modify these terms at any time. Significant changes will be communicated to 
              active subscribers. Continued use of our services after modifications constitutes acceptance of the 
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">13. Governing Law</h2>
            <p className="text-slate-200 leading-relaxed">
              These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall 
              be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">14. Contact Information</h2>
            <p className="text-slate-200 leading-relaxed">
              For questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:hello@automat.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                hello@automat.com
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-indigo-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Automat</span>
              </Link>
              <p className="text-slate-400 text-sm">
                Technical automation consultancy for enterprise systems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">Custom Integrations</Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">Workflow Design</Link>
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
                  hello@automat.com
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