'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Refund() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Refund Policy</h1>
        <p className="text-slate-400 mb-12">Last Updated: February 11, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
            <p className="text-slate-300 leading-relaxed">
              This Refund Policy governs the terms under which Automat may provide refunds for our workflow automation 
              and API engineering services. Our subscriptions are for ongoing technical maintenance services, and this 
              policy reflects the nature of those services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Subscription Services Nature</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              All Automat subscription plans provide access to ongoing technical maintenance services, including:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Continuous monitoring and support during the subscription period</li>
              <li>Regular maintenance and system updates</li>
              <li>Bug fixes and troubleshooting assistance</li>
              <li>API update management and compatibility maintenance</li>
              <li>Technical consultation and workflow optimization</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              Because these are ongoing maintenance services rather than one-time purchases, refund eligibility is 
              evaluated based on service delivery and performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Refund Eligibility</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Service Non-Delivery</h3>
            <p className="text-slate-300 leading-relaxed">
              If we fail to provide the subscribed maintenance services as outlined in your plan, you may be eligible 
              for a prorated refund for the unused portion of your subscription period. This includes situations where 
              we are unable to maintain, monitor, or support your automation systems as contracted.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Service Quality Issues</h3>
            <p className="text-slate-300 leading-relaxed">
              If you experience significant, documented service quality issues that we are unable to resolve within 
              a reasonable timeframe (typically 14 business days), you may request a partial refund for affected 
              service periods.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Early Cancellation</h3>
            <p className="text-slate-300 leading-relaxed">
              For prepaid multi-month subscriptions (Quarterly, Semi-Annual, or Annual plans), if you cancel before 
              the end of your subscription period, you may be eligible for a prorated refund of unused months, minus 
              any services already delivered. Refunds are calculated based on the remaining full months in your 
              subscription term.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Non-Refundable Situations</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Refunds will not be provided in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Change of mind or no longer needing the services after services have been rendered</li>
              <li>Failure to use the subscribed services during the active period</li>
              <li>Third-party service outages or API changes beyond our control</li>
              <li>Client-side technical issues, infrastructure changes, or lack of access</li>
              <li>Violation of our Terms of Service</li>
              <li>Services already delivered or completed work</li>
              <li>Monthly subscriptions (Starter plan) after the current month has begun</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Refund Request Process</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal list-inside text-slate-300 space-y-3 ml-4">
              <li className="leading-relaxed">
                <strong>Contact Us:</strong> Email hello@automat.com with your refund request within 30 days of 
                the issue or cancellation
              </li>
              <li className="leading-relaxed">
                <strong>Provide Details:</strong> Include your account information, subscription plan, reason for 
                the refund request, and any relevant documentation
              </li>
              <li className="leading-relaxed">
                <strong>Review Period:</strong> We will review your request within 5-7 business days
              </li>
              <li className="leading-relaxed">
                <strong>Decision Notice:</strong> You will receive notification of approval or denial with explanation
              </li>
              <li className="leading-relaxed">
                <strong>Processing:</strong> Approved refunds are processed within 10 business days to your original 
                payment method
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Prorated Refund Calculation</h2>
            <p className="text-slate-300 leading-relaxed">
              When applicable, prorated refunds are calculated as follows:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mt-4">
              <li>We determine the unused full months remaining in your subscription period</li>
              <li>We calculate the per-month cost of your subscription plan</li>
              <li>The refund amount equals unused months × per-month cost</li>
              <li>Partial months are generally not refunded unless services were completely undelivered</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Custom Development Projects</h2>
            <p className="text-slate-300 leading-relaxed">
              For custom automation development projects outside of standard subscription plans, refunds are handled 
              on a case-by-case basis. Generally, completed work is non-refundable, but we will work with clients to 
              find fair resolutions if project deliverables do not meet agreed-upon specifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Automatic Renewal Cancellations</h2>
            <p className="text-slate-300 leading-relaxed">
              You may cancel your subscription's automatic renewal at any time before the next billing cycle. 
              Cancellations made before renewal will prevent future charges, but do not result in refunds for the 
              current active subscription period unless you meet the criteria outlined in Section 3.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Dispute Resolution</h2>
            <p className="text-slate-300 leading-relaxed">
              If you disagree with a refund decision, you may request a review by providing additional information 
              or documentation. We are committed to fair and reasonable resolution of all refund disputes. If we 
              cannot reach an agreement, disputes may be resolved through the mechanisms outlined in our Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Refund Method and Timing</h2>
            <p className="text-slate-300 leading-relaxed">
              Approved refunds will be issued to your original payment method. Processing times may vary depending 
              on your payment provider, but typically occur within 5-10 business days after approval. You will receive 
              confirmation once the refund has been processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Service Modifications</h2>
            <p className="text-slate-300 leading-relaxed">
              If we significantly modify or discontinue a service included in your subscription, we will provide 
              advance notice and, where appropriate, offer alternatives or prorated refunds for affected services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately 
              upon posting to our website. Your continued use of our services after changes constitutes acceptance 
              of the updated policy. However, any changes will not affect refund requests submitted prior to the 
              policy update.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="text-slate-300 leading-relaxed">
              For refund requests or questions about this policy, please contact:{' '}
              <a href="mailto:hello@automat.com" className="text-indigo-400 hover:text-indigo-300">
                hello@automat.com
              </a>
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Please include "Refund Request" in your email subject line and provide all relevant details to expedite 
              the review process.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
