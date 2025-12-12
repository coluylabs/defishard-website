export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-dark-bg text-brand-white font-mono text-sm leading-relaxed">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-dark-border pb-8">
            <h1 className="heading-xl mb-4">COOKIE POLICY</h1>
            <p className="text-brand-slate uppercase tracking-wider">LAST_UPDATED: NOVEMBER 15, 2025</p>
          </div>

          <div className="space-y-12 text-brand-slate">
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how DefiShard ("we", "our", or "us") uses cookies and similar technologies 
                on our website and in our browser extension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">2. Technologies We Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Cookies</strong>
                  Small text files stored on your device.
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Local Storage</strong>
                  Browser storage for larger data (e.g., encrypted key shares).
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Session Storage</strong>
                  Temporary storage cleared on close.
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">IndexedDB</strong>
                  Structured database storage.
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">3. Cookie Categories</h2>
              
              <div className="space-y-6">
                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-brand-white font-bold uppercase">Essential</h3>
                    <span className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded border border-red-500/20">MANDATORY</span>
                  </div>
                  <p className="mb-3">Required for the Service to function properly (Auth, Security, Wallet Connection).</p>
                  <p className="text-xs text-brand-slate">Cannot be disabled.</p>
                </div>

                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-brand-white font-bold uppercase">Functional</h3>
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-500 rounded border border-blue-500/20">OPTIONAL</span>
                  </div>
                  <p className="mb-3">Enhance experience (Theme, Language, Recent Transactions).</p>
                </div>

                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-brand-white font-bold uppercase">Analytics</h3>
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-500 rounded border border-blue-500/20">OPTIONAL</span>
                  </div>
                  <p className="mb-3">Help us understand usage. All data is anonymized.</p>
                  <p className="text-xs text-brand-lime">✓ No personal info or wallet data collected.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">4. What We Do NOT Track</h2>
              <div className="bg-dark-surface border border-brand-lime/30 p-6 rounded-lg">
                <ul className="list-none space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">[X]</span>
                    <span>Your private keys or key shares</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">[X]</span>
                    <span>Browsing activity outside DefiShard</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">[X]</span>
                    <span>Personal ID for advertising</span>
                  </li>
                </ul>
                <p className="mt-6 pt-4 border-t border-dark-border text-brand-lime uppercase text-xs font-bold tracking-widest">
                  WE DO NOT SELL DATA TO ADVERTISERS.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">5. Managing Cookies</h2>
              <p className="mb-4">
                You can control cookies through your browser settings. Blocking essential cookies may break wallet functionality.
              </p>
              <div className="bg-dark-surface p-4 border border-dark-border rounded text-xs font-mono">
                <p>Chrome: Settings → Privacy and Security → Cookies</p>
                <p>Firefox: Options → Privacy & Security → Cookies</p>
                <p>Brave: Settings → Shields → Cookies</p>
              </div>
            </section>

            <div className="pt-12 border-t border-dark-border text-xs text-brand-slate uppercase tracking-wider">
              <p>Questions? Contact <a href="mailto:info@defishard.com" className="text-brand-lime hover:underline">info@defishard.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
