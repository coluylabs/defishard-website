import LegalHeader from '@/components/LegalHeader'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-bg text-brand-white font-mono text-sm leading-relaxed">
      <LegalHeader />
      <div className="container-custom pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-dark-border pb-8">
            <h1 className="heading-xl mb-4">PRIVACY POLICY</h1>
            <p className="text-brand-slate uppercase tracking-wider">LAST_UPDATED: JANUARY 7, 2026</p>
          </div>

          <div className="space-y-12 text-brand-slate">
            {/* Introduction */}
            <section>
              <p className="mb-4">
                <strong className="text-brand-white">DeFiShard</strong> ("we," "our," or "us") respects your privacy and is committed to protecting information you may provide 
                through our mobile application and related services (collectively, the "Service").
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information, and describes your choices.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                1. Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <h3 className="text-brand-lime font-bold mb-3 uppercase">1.1 Information You Provide Voluntarily</h3>
                  <p className="mb-4">We collect only the information you expressly provide when using the Service:</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-white">
                    <li><strong>Wallet Addresses:</strong> Blockchain addresses you create or import.</li>
                    <li><strong>Transaction Data:</strong> Data you submit to initiate or authorize transactions.</li>
                    <li><strong>Contact Information:</strong> Email address if you choose to join a waitlist or subscribe to communications.</li>
                  </ul>
                </div>

                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <h3 className="text-brand-lime font-bold mb-3 uppercase">1.2 Information Collected Automatically</h3>
                  <p>
                    We do not collect personal information automatically for analytics or advertising unless you explicitly opt in within the app.
                  </p>
                </div>

                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <h3 className="text-brand-lime font-bold mb-3 uppercase">1.3 Third-Party Services</h3>
                  <p>
                    We do not integrate analytics or advertising SDKs by default. If third-party services are added in the future, 
                    we will update this policy and disclose such practices.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                2. How We Use Your Information
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4">We use the information you provide only to:</p>
                <ul className="list-disc list-inside space-y-2 text-brand-white mb-4">
                  <li>Enable wallet functionality and transaction authorization</li>
                  <li>Support customer service inquiries</li>
                  <li>Communicate updates if you opt in</li>
                </ul>
                <p className="text-brand-lime">We do not use your information for marketing without explicit consent.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                3. Data Sharing
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4 text-brand-white font-bold">
                  We do not sell, rent, or share your personal information with third parties for their marketing purposes.
                </p>
                <p>
                  We may share information with service providers only to the extent necessary to operate the Service 
                  (e.g., hosting or infrastructure providers). Any such providers are contractually required to protect your information.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                4. Encryption and Data Security
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg space-y-4">
                <div className="bg-dark-bg p-4 border border-brand-lime/30 rounded">
                  <p className="text-brand-lime font-bold mb-2">KEY SECURITY</p>
                  <p className="text-brand-white">
                    Your wallet private keys and key shares are never collected by us and remain on your device.
                  </p>
                </div>
                <p>
                  We employ industry practices for data encryption in transit. However, no system is completely secure, 
                  and we do not guarantee protection against all potential security risks.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                5. User Rights and Choices
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4">You may:</p>
                <ul className="list-disc list-inside space-y-2 text-brand-white">
                  <li>Access, correct, or delete your personal information by contacting us (see Section 8).</li>
                  <li>Opt out of any communications from us at any time.</li>
                  <li>Delete your DeFiShard wallet data by removing the app or using built-in wallet export/delete features.</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                6. Data Retention
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p>
                  We retain personal information only as long as necessary to provide the Service and fulfill legal obligations. 
                  Transaction data may remain on blockchain networks independent of us.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                7. Children's Privacy
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p>
                  The Service is not intended for children under 13. We do not knowingly collect personal data from children under 13.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                8. Contact Information
              </h2>
              <div className="bg-dark-surface border border-brand-lime/30 p-6 rounded-lg">
                <p className="mb-4">
                  For questions regarding this Privacy Policy, data deletion requests, or privacy concerns, contact:
                </p>
                <a href="mailto:info@defishard.com" className="text-brand-lime hover:underline text-lg font-bold">
                  info@defishard.com
                </a>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                9. Changes to This Policy
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you by posting the new policy 
                  on this page with an updated effective date.
                </p>
              </div>
            </section>

            <div className="pt-12 border-t border-dark-border text-xs text-brand-slate uppercase tracking-wider">
              <p>By using DeFiShard, you acknowledge this Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
