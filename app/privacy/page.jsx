import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Automat collects, uses, and protects your personal information when you use our workflow automation and API engineering services.',
  alternates: { canonical: 'https://automathub.com/privacy' },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-400 mb-12">Last Updated: February 11, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-slate-300 leading-relaxed">
              Automat ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our workflow automation 
              and API engineering services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Information You Provide</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              We collect information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information (company name, role, industry)</li>
              <li>Payment information (processed securely through our payment provider)</li>
              <li>Technical requirements and specifications for automation projects</li>
              <li>API credentials and access information necessary to provide services</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              When you access our website or services, we may automatically collect:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>Log data (access times, error logs, performance metrics)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Technical and System Data</h3>
            <p className="text-slate-300 leading-relaxed">
              In the course of providing automation services, we may have access to technical data from your systems, 
              including API responses, workflow execution logs, and system integration details necessary to maintain 
              and monitor your automations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>To provide, maintain, and improve our automation and API engineering services</li>
              <li>To process payments and manage subscriptions</li>
              <li>To communicate with you about services, updates, and support</li>
              <li>To monitor and troubleshoot technical issues</li>
              <li>To ensure security and prevent fraud</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To develop new features and improve service quality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in providing our services (payment processing, hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our legal rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-slate-300 leading-relaxed">
              We implement industry-standard security measures to protect your information, including encryption, 
              secure access controls, and regular security assessments. However, no method of transmission over the 
              Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot 
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-slate-300 leading-relaxed">
              We retain your information for as long as necessary to provide services, comply with legal obligations, 
              resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or 
              anonymize it. Active subscription data is retained throughout the subscription period and for a 
              reasonable period thereafter for business and legal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Your Privacy Rights</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to processing of your information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at hello@automat.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-slate-300 leading-relaxed">
              We use cookies and similar tracking technologies to enhance user experience, analyze usage patterns, 
              and improve our services. You can control cookie settings through your browser preferences, though 
              disabling cookies may limit certain functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
            <p className="text-slate-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review the privacy policies of any third-party 
              sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
            <p className="text-slate-300 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
              information from children. If we become aware that we have collected information from a child, we will 
              take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. International Data Transfers</h2>
            <p className="text-slate-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place to protect your information in compliance with applicable 
              data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by 
              posting the new policy on our website and updating the "Last Updated" date. Your continued use of our 
              services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <p className="text-slate-300 leading-relaxed">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:{' '}
              <a href="mailto:hello@automat.com" className="text-indigo-400 hover:text-indigo-300">
                contact@automathub.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
