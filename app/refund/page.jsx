import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy',
  description: 'Automat refund policy for the Missed-Call Text-Back setup fee and monthly service, custom automation projects, and how to cancel or request a refund.',
  alternates: { canonical: 'https://automathub.com/refund' },
  robots: { index: true, follow: true },
};

export default function Refunds() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
        <p className="text-slate-400 mb-12 text-sm">Last Updated: November 4, 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Summary</h2>
            <div className="bg-slate-800/20 border-l-4 border-slate-600 p-6 rounded">
              <p className="text-slate-300 leading-relaxed">
                <strong>The setup fee is fully refundable until work begins. The monthly service can be cancelled at any time,
                and your first month is free.</strong> Details for each service are below.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Refunds by Service</h2>

            <div className="space-y-6">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Missed-Call Text-Back: Setup Fee ($497)</h3>
                <p className="text-slate-400 mb-3"><strong>Service Type:</strong> One-time setup</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li><strong className="text-white">Before work begins:</strong> full refund.</li>
                  <li><strong className="text-white">After work begins, before the system goes live:</strong> refund minus work already completed, assessed fairly and explained in writing.</li>
                  <li><strong className="text-white">After the system is built and delivered:</strong> the setup fee is non-refundable.</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Missed-Call Text-Back: Monthly Service ($197/month)</h3>
                <p className="text-slate-400 mb-3"><strong>Service Type:</strong> Ongoing monitoring, fixes and changes</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li><strong className="text-white">First month free:</strong> monthly billing starts in your second month. Cancel during the free month and you owe nothing further.</li>
                  <li><strong className="text-white">Cancel anytime:</strong> cancellation takes effect at the end of the current billing month. There are no long-term contracts.</li>
                  <li><strong className="text-white">No partial-month refunds:</strong> the service stays active until the end of the month you paid for.</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Custom Automation Projects</h3>
                <p className="text-slate-400 mb-3"><strong>Service Type:</strong> Quoted per project</p>
                <p className="text-slate-300 leading-relaxed">
                  Custom projects are quoted at a fixed price and may be billed in milestones. You can cancel before work begins for a
                  full refund, or during the project for a refund of any milestones not yet started. Completed and delivered milestones
                  are non-refundable. Optional monthly support for custom projects follows the same rules as the monthly service above.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Phone and Third-Party Costs</h3>
                <p className="text-slate-400 mb-3"><strong>Service Type:</strong> Billed by other providers</p>
                <p className="text-slate-300 leading-relaxed">
                  Phone line and messaging costs (for example, from your phone provider) and any other third-party subscriptions are
                  billed to you directly by those providers. They are not paid to Automat and are not covered by this policy.
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
                <strong>Contact:</strong> Email hello@automathub.com with "Refund Request" in the subject line
              </li>
              <li className="leading-relaxed">
                <strong>Include:</strong> Your business name, the service, date of purchase, and reason for cancellation
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
              <li>Setup fees after the system has been built and delivered</li>
              <li>Partial months of the monthly service</li>
              <li>Change of mind or business direction after work has been delivered</li>
              <li>Completed milestones of custom projects</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Service Cancellation Process</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              For the monthly service and any optional monthly support:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Cancellation requests must be sent by email to hello@automathub.com</li>
              <li>Cancellation is effective at the end of the current billing month</li>
              <li>Cancelled services remain active until the end of the paid month</li>
              <li>On request, I will hand over your workflows and documentation so you can keep running them yourself</li>
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
                <a href="mailto:hello@automathub.com" className="text-slate-400 hover:text-white transition-colors">
                  hello@automathub.com
                </a>
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Please include "Refund Request" or "Cancellation" in your subject line for faster processing.
              </p>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
