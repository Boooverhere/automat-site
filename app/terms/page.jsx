'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <div className="container mx-auto max-w-4xl px-6 py-20">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-slate-400 mb-12">Last Updated: February 11, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing or using Automat's services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Automat provides professional workflow automation and API engineering services, including:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Custom Python-based automation development</li>
              <li>API integration and connection services</li>
              <li>Workflow design and implementation using n8n and Zapier</li>
              <li>Ongoing technical maintenance and support</li>
              <li>Proactive monitoring and API update management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Subscription Services</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our subscription plans are for ongoing technical maintenance services. Subscriptions include:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong>Starter ($14/month):</strong> 1 month of technical support and monitoring services</li>
              <li><strong>Quarterly ($29/3 months):</strong> 3 months of maintenance and bug fix services</li>
              <li><strong>Semi-Annual ($39/6 months):</strong> 6 months of priority workflow support services</li>
              <li><strong>Annual ($55.99/year):</strong> 12 months of full-scale automation management and API update services</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              All subscriptions automatically renew at the end of their term unless cancelled prior to renewal. 
              Subscriptions provide access to ongoing maintenance, support, and monitoring services during the active subscription period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-slate-300 leading-relaxed">
              All code, scripts, and automation solutions delivered by Automat are original and proprietary work. 
              We create custom implementations specific to your requirements. We do not resell third-party software 
              licenses. Upon full payment, clients receive ownership rights to the custom code developed specifically 
              for their project, while Automat retains rights to our proprietary methodologies, frameworks, and general approaches.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              All fees are payable in advance for the subscription period selected. Payments are processed securely 
              through our payment provider. You authorize us to charge your selected payment method at the beginning 
              of each subscription term.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Service Level and Availability</h2>
            <p className="text-slate-300 leading-relaxed">
              We strive to provide reliable, high-quality services. However, we do not guarantee uninterrupted service 
              and are not liable for any downtime, service interruptions, or data loss. Maintenance windows will be 
              communicated when possible. Our monitoring services operate on a best-effort basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Client Responsibilities</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Providing accurate information and access credentials as needed</li>
              <li>Maintaining the security of their account and credentials</li>
              <li>Complying with all applicable laws and regulations in their use of our services</li>
              <li>Ensuring they have the right to provide us with any data or systems access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-slate-300 leading-relaxed">
              Automat's total liability for any claims arising from our services shall not exceed the amount paid 
              by the client in the twelve (12) months preceding the claim. We are not liable for indirect, incidental, 
              special, consequential, or punitive damages, including lost profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Confidentiality</h2>
            <p className="text-slate-300 leading-relaxed">
              We maintain strict confidentiality of all client data, code, and business information. We will not 
              disclose any confidential information to third parties except as required by law or with explicit 
              client permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
            <p className="text-slate-300 leading-relaxed">
              Either party may terminate services with written notice. Clients may cancel subscriptions at any time, 
              with cancellation taking effect at the end of the current billing period. We reserve the right to 
              terminate services immediately for breach of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Modifications to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Significant changes will be communicated to 
              active subscribers. Continued use of our services after modifications constitutes acceptance of the 
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
            <p className="text-slate-300 leading-relaxed">
              These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall 
              be resolved through binding arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="text-slate-300 leading-relaxed">
              For questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:hello@automat.com" className="text-indigo-400 hover:text-indigo-300">
                hello@automat.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
