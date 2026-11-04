import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
  description: 'Read the Automat Terms of Service covering service definitions, intellectual property rights, monthly service, payment terms, and client responsibilities.',
  alternates: { canonical: 'https://automathub.com/terms' },
  robots: { index: true, follow: true },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">

      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Terms of Service</h1>
        <p className="text-slate-400 mb-12 text-sm">Last Updated: November 4, 2026</p>

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
                Our offerings, including the "Missed-Call Text-Back" service and custom automation projects, constitute professional 
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
            <h2 className="text-2xl font-bold mb-4 text-white">4. Services and Monthly Support</h2>

            <div className="space-y-6">
              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">4.1 Missed-Call Text-Back</h3>
                <p className="text-slate-200 leading-relaxed">
                  A one-time setup fee of <strong className="text-white">$497</strong> covers building and configuring the system.
                  Ongoing service is <strong className="text-white">$197 per month</strong>, and the first month is free, so monthly
                  billing begins in the second month. The service can be cancelled at any time, effective at the end of the current
                  billing month.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">4.2 Custom Automation</h3>
                <p className="text-slate-200 leading-relaxed">
                  Custom projects are quoted at a fixed price before work begins and may be billed in milestones. Optional monthly
                  support is quoted separately.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">4.3 What Monthly Service Covers</h3>
                <ul className="list-disc list-inside text-slate-200 space-y-2 ml-4">
                  <li>Monitoring the system and fixing failures</li>
                  <li>Keeping integrations working when third-party APIs change</li>
                  <li>Updating credentials and access tokens</li>
                  <li>Small changes, such as message wording, alert recipients or follow-up timing</li>
                </ul>
                <p className="text-slate-200 leading-relaxed mt-3">
                  Larger new features are quoted separately.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">4.4 Third-Party Costs</h3>
                <p className="text-slate-200 leading-relaxed">
                  Phone line and messaging costs, and any other third-party subscriptions the system relies on, are paid by the Client
                  directly to those providers and are not included in Automat's fees.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Payment Terms</h2>
            <p className="text-slate-200 leading-relaxed">
              The setup fee is payable before work begins. Monthly fees are payable in advance at the start of each
              billing month, starting in the second month. Custom project fees are payable as set out in the quote.
              Refunds are handled according to our <Link href="/refund" className="text-indigo-400 hover:text-indigo-300">Refund Policy</Link>.
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
              <a href="mailto:hello@automathub.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                hello@automathub.com
              </a>
            </p>
          </section>
        </div>
      </div>

    </div>
  );
}