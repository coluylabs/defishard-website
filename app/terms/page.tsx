import LegalHeader from '@/components/LegalHeader'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dark-bg text-brand-white font-mono text-sm leading-relaxed">
      <LegalHeader />
      <div className="container-custom pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-dark-border pb-8">
            <h1 className="heading-xl mb-4">TERMS OF SERVICE</h1>
            <p className="text-brand-slate uppercase tracking-wider">LAST_UPDATED: JANUARY 7, 2026</p>
          </div>

          <div className="space-y-12 text-brand-slate">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                1. Introduction
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4">
                  These Terms of Service ("Terms") are a binding agreement between you ("User", "you") and DeFiShard ("we", "us", "our").
                </p>
                <p className="mb-4">
                  By accessing or using our mobile application, browser extension, website, or any related services (collectively, the "Service"), 
                  you agree to these Terms.
                </p>
                <p className="text-brand-lime font-bold">
                  If you do not agree with these Terms, do not use or access the Service.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                2. Definitions
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg space-y-3">
                <p><strong className="text-brand-white">"Service"</strong> means the DeFiShard application, software, website, and all associated services.</p>
                <p><strong className="text-brand-white">"Wallet"</strong> refers to the cryptographic account created or imported by a user.</p>
                <p><strong className="text-brand-white">"Digital Assets"</strong> means blockchain-based tokens, cryptocurrencies, or similar assets supported by the Service.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                3. Eligibility
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p>
                  You must be at least 18 years of age and able to enter into legally binding contracts in your jurisdiction to use the Service.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                4. Beta Software Notice
              </h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-lg">
                <p className="mb-4">
                  The current version of DeFiShard may include beta features. Beta features may be modified, limited, 
                  or discontinued without notice, and may contain bugs or security vulnerabilities.
                </p>
                <p className="font-bold text-yellow-500 uppercase tracking-wider mb-2">
                  YOU ACKNOWLEDGE THAT USE OF BETA FEATURES IS AT YOUR OWN RISK.
                </p>
                <p className="text-brand-white">
                  Only use funds you can afford to lose while using beta functionality.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                5. Wallet and Key Management
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg space-y-4">
                <ul className="list-disc list-inside space-y-2 text-brand-white">
                  <li>DeFiShard uses Multi-Party Computation (MPC) techniques including Distributed Key Generation (DKG) and Threshold Signature Schemes (TSS).</li>
                  <li>Your cryptographic key material is split into multiple shares stored locally on your devices.</li>
                  <li>We do not hold, control, or have access to your private key shares or seed phrases, and cannot recover them.</li>
                </ul>
                <div className="bg-dark-bg p-4 border border-brand-lime/30 rounded">
                  <p className="text-brand-lime">
                    No software system can guarantee perfect security against all threats. You are responsible for 
                    safeguarding your devices, backups, and access credentials.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                6. Risks of Cryptocurrency and Blockchain
              </h2>
              <p className="mb-4">Digital assets and blockchain transactions involve inherent risks, including:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Volatility</strong>
                  Price and value fluctuations
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Irreversibility</strong>
                  Transactions cannot be undone
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Technical Failures</strong>
                  Software or network issues
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Key Loss</strong>
                  Loss of private key access
                </div>
              </div>
              <p className="text-brand-lime">
                You acknowledge these risks and agree that DeFiShard is not responsible for losses due to such events.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                7. User Responsibilities
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4">You agree to:</p>
                <div className="space-y-2 text-brand-white">
                  <p>— Securely backup and store private key shares</p>
                  <p>— Verify transaction details before signing</p>
                  <p>— Comply with all applicable laws in your jurisdiction</p>
                  <p>— Not use the Service for illegal or unauthorized activities</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                8. Prohibited Activities
              </h2>
              <div className="bg-red-500/5 p-6 border border-red-500/30 rounded-lg">
                <p className="mb-4">You may not use the Service to:</p>
                <div className="space-y-2">
                  <p>— Transmit malware or harmful code</p>
                  <p>— Reverse engineer or circumvent technical protections</p>
                  <p>— Engage in fraud, money laundering, or sanction violations</p>
                  <p>— Interfere with the Service or third-party networks</p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                9. Intellectual Property
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p>
                  All intellectual property rights in the Service, including software, trademarks, and documentation, 
                  are owned by or licensed to DeFiShard.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                10. Disclaimers
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4 text-brand-white">
                  The Service is provided "AS IS" and "AS AVAILABLE".
                </p>
                <p className="mb-4">
                  We make no warranties, express or implied, regarding uptime, availability, or security.
                </p>
                <p className="text-xs uppercase tracking-wider">
                  To the extent permitted by applicable law, we disclaim liability for any loss of digital assets, 
                  data, or other damages arising from use of the Service.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                11. Limitation of Liability
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg text-xs uppercase tracking-wide leading-loose">
                <p className="mb-4">
                  TO THE FULLEST EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc list-inside space-y-2 text-brand-white mb-4">
                  <li>DeFiShard will not be liable for indirect, incidental, special, consequential, or punitive damages.</li>
                  <li>Our total aggregate liability will not exceed the total amount of fees you have paid us (if any) in the prior 12 months.</li>
                </ul>
                <p className="text-brand-lime">
                  This section survives termination of these Terms.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                12. Governing Law and Dispute Resolution
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p>
                  These Terms are governed by applicable laws. Any dispute will be resolved by binding arbitration, 
                  except claims for injunctive or equitable relief.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                13. Modifications
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4">
                  We may update these Terms occasionally. Updated Terms will be posted on our website with a revised "Last Updated" date.
                </p>
                <p className="text-brand-lime">
                  Your continued use of the Service after revisions constitutes acceptance of the updated Terms.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                14. Contact
              </h2>
              <div className="bg-dark-surface border border-brand-lime/30 p-6 rounded-lg">
                <p className="mb-4">For questions about these Terms or to request support:</p>
                <a href="mailto:info@defishard.com" className="text-brand-lime hover:underline text-lg font-bold">
                  info@defishard.com
                </a>
              </div>
            </section>

            <div className="pt-12 border-t border-dark-border text-xs text-brand-slate uppercase tracking-wider">
              <p>By using DeFiShard, you agree to be bound by these Terms of Service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
