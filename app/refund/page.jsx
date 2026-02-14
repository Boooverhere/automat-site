'use client';

import { ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Refunds() {
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
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
        <p className="text-slate-400 mb-12 text-sm">Last Updated: February 14, 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Service-Specific Refund Terms</h2>
            <div className="bg-slate-800/20 border-l-4 border-slate-600 p-6 rounded">
              <p className="text-slate-300 leading-relaxed">
                <strong>Since our Tier 1 and Tier 2 services involve immediate technical labor (Audits and Configuration Checks), 
                these fees are non-refundable once the service report is issued.</strong> Maintenance Retainers may be cancelled 
                at any time for a pro-rated refund.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Tier-By-Tier Refund Policy</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Tier 1: Entry ($14.99 - $17.99)</h3>
                <p className="text-slate-400 mb-3"><strong>Service Type:</strong> Logic & Script Audits</p>
                <p className="text-slate-300 leading-relaxed">
                  These services involve immediate technical labor including automation settings review and script health checks. 
                  <strong className="text-white"> Fees are non-refundable once the audit report has been issued to the client.</strong> 
                  Work product includes detailed technical documentation and recommendations which represent completed deliverables.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Tier 2: Standard ($39.00 - $49.99)</h3>
                <p className="text-slate-400 mb-3"><strong>Service Type:</strong> Operational Retainer</p>
                <p className="text-slate-300 leading-relaxed">
                  Quarterly maintenance services including workflow optimization and API stability checks constitute immediate technical work. 
                  <strong className="text-white"> Fees are non-refundable once configuration checks have been performed and results documented.</strong> 
                  Services involve hands-on technical evaluation and system modifications which cannot be reversed once completed.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Tier 3: Pro ($55.99 - $79.99)</h3>
                <p className="text-slate-400 mb-3"><strong>Service Type:</strong> Annual Oversight (Maintenance Retainer)</p>
                <p className="text-slate-300 leading-relaxed mb-3">
                  This 12-month maintenance retainer may be cancelled at any time with a pro-rated refund for unused months. 
                  Pro-rated refunds are calculated as follows:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Determine the number of complete unused months remaining in the service period</li>
                  <li>Calculate monthly rate: Total paid ÷ 12 months</li>
                  <li>Refund amount: Monthly rate × unused complete months</li>
                  <li>Partial months are not refunded; only complete unused months qualify</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Tier 4: Enterprise ($99.00 - $800+)</h3>
                <p className="text-slate-400 mb-3"><strong>Service Type:</strong> Custom Engineering</p>
                <p className="text-slate-300 leading-relaxed">
                  Custom development projects are billed based on milestones or deliverables. Refund eligibility is determined 
                  on a case-by-case basis depending on work completed. Generally, completed development work, code delivered, 
                  and deployed infrastructure are non-refundable. Clients may cancel projects before work begins for a full refund, 
                  or during development for a partial refund minus completed milestones.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Requesting a Refund</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              To request a refund for eligible services, please follow this process:
            </p>
            <ol className="list-decimal list-inside text-slate-300 space-y-3 ml-4">
              <li className="leading-relaxed">
                <strong>Contact:</strong> Email hello@automat.com with "Refund Request" in the subject line
              </li>
              <li className="leading-relaxed">
                <strong>Include:</strong> Account information, service tier, date of purchase, and reason for cancellation
              </li>
              <li className="leading-relaxed">
                <strong>Timeline:</strong> Refund requests must be submitted within 30 days of the cancellation effective date
              </li>
              <li className="leading-relaxed">
                <strong>Review:</strong> We will review your request within 5-7 business days and respond with approval or explanation
              </li>
              <li className="leading-relaxed">
                <strong>Processing:</strong> Approved refunds are processed within 10 business days to the original payment method
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Non-Refundable Situations</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Refunds will not be provided in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Tier 1 or Tier 2 services after technical work has been completed and reports issued</li>
              <li>Change of mind or business direction after work has commenced</li>
              <li>Failure to utilize maintenance retainer services during the active period</li>
              <li>Third-party service outages, API deprecations, or changes beyond our control</li>
              <li>Client-side technical issues, infrastructure changes, or lack of system access</li>
              <li>Violation of our Terms of Service</li>
              <li>Custom code or infrastructure that has been deployed to production environments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Service Cancellation Process</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              For maintenance retainers (Tier 3 and applicable Tier 4 contracts):
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Cancellation requests must be submitted in writing to hello@automat.com</li>
              <li>Cancellation is effective at the end of the current billing period unless otherwise specified</li>
              <li>Pro-rated refunds for prepaid annual retainers are calculated based on complete unused months</li>
              <li>Cancelled services remain active until the end of the paid period</li>
              <li>Upon cancellation, access to monitoring dashboards and support channels terminates at period end</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Service Quality Disputes</h2>
            <p className="text-slate-300 leading-relaxed">
              If you believe service quality did not meet the standards outlined in your service agreement, you may request 
              a review within 14 days of service completion. We will evaluate your claim based on documented deliverables, 
              technical specifications, and agreed-upon success criteria. If we determine that services were deficient, 
              we will either re-perform the work at no charge or issue a partial refund commensurate with the deficiency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">7. Payment Disputes and Chargebacks</h2>
            <p className="text-slate-300 leading-relaxed">
              We encourage clients to contact us directly to resolve any billing concerns before initiating payment disputes 
              or chargebacks. Chargebacks initiated without prior contact may result in immediate service suspension and 
              may incur administrative fees. We maintain detailed records of all services rendered and will provide 
              comprehensive documentation to payment processors in the event of disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">8. Modifications to This Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon 
              posting to our website with an updated "Last Updated" date. Modifications do not affect refund requests 
              submitted prior to the policy change. Your continued use of our services after changes constitutes acceptance 
              of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">9. Contact Information</h2>
            <p className="text-slate-300 leading-relaxed">
              For refund requests, cancellations, or questions about this policy:
            </p>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 mt-4">
              <p className="text-slate-300">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:hello@automat.com" className="text-slate-400 hover:text-white transition-colors">
                  hello@automat.com
                </a>
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Please include "Refund Request" or "Cancellation" in your subject line for faster processing.
              </p>
            </div>
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

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Automat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
