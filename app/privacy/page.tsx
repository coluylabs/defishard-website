export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-bg text-brand-white font-mono text-sm leading-relaxed">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-dark-border pb-8">
            <h1 className="heading-xl mb-4">PRIVACY POLICY</h1>
            <p className="text-brand-slate uppercase tracking-wider">LAST_UPDATED: NOVEMBER 15, 2025</p>
          </div>

          <div className="space-y-12 text-brand-slate">
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">1. Introduction</h2>
              <p>
                DefiShard ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our browser extension and mobile application (collectively, the "Service").
              </p>
              <p className="mt-4">
                This Privacy Policy complies with applicable data protection laws, including:
              </p>
              <ul className="list-none space-y-2 mt-4 ml-4">
                <li><strong className="text-brand-white">[GDPR]</strong> General Data Protection Regulation - EU/EEA</li>
                <li><strong className="text-brand-white">[CCPA]</strong> California Consumer Privacy Act - California, USA</li>
                <li><strong className="text-brand-white">[UK GDPR]</strong> United Kingdom</li>
                <li><strong className="text-brand-white">[PIPEDA]</strong> Personal Information Protection and Electronic Documents Act - Canada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">2. Information We Collect</h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg mb-6">
                <h3 className="text-brand-lime font-bold mb-3 uppercase">2.1 Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 text-brand-white">
                  <li>Email address (when you join our waitlist)</li>
                  <li>Wallet addresses you create or import</li>
                  <li>Transaction data you initiate</li>
                </ul>
              </div>

              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <h3 className="text-red-500 font-bold mb-3 uppercase">2.2 Information We Do NOT Collect</h3>
                <ul className="list-disc list-inside space-y-2 text-brand-white">
                  <li>Your private keys or key shares (these never leave your devices)</li>
                  <li>Your seed phrases or recovery phrases</li>
                  <li>Personal identification information beyond what you provide</li>
                  <li>Browsing history or activity outside our application</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">3. Data Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2">End-to-End Encryption</strong>
                  All sensitive data is encrypted in transit and at rest.
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2">MPC Architecture</strong>
                  Ensures your private keys never exist in one place.
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2">Regular Audits</strong>
                  Security audits conducted by top-tier firms.
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2">Secure Protocols</strong>
                  TLS 1.3+ for all communications.
                </div>
              </div>
            </section>

            {/* ... keeping other sections with updated styling ... */}
            
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">Contact Information</h2>
              <div className="bg-dark-surface border border-brand-lime/30 p-6 rounded-lg">
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
                <a href="mailto:info@defishard.com" className="text-brand-lime hover:underline block mb-2">info@defishard.com</a>
                <p className="text-xs text-brand-slate mt-4 uppercase">Response Time: Within 24-48 Hours</p>
              </div>
            </section>

            <div className="pt-12 border-t border-dark-border text-xs text-brand-slate uppercase tracking-wider">
              <p>Disclaimer: This is a beta version. Use funds you can afford to lose.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
