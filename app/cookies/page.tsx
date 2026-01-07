import LegalHeader from '@/components/LegalHeader'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-dark-bg text-brand-white font-mono text-sm leading-relaxed">
      <LegalHeader />
      <div className="container-custom pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-dark-border pb-8">
            <h1 className="heading-xl mb-4">COOKIE POLICY</h1>
            <p className="text-brand-slate uppercase tracking-wider">LAST_UPDATED: JANUARY 7, 2026</p>
          </div>

          <div className="space-y-12 text-brand-slate">
            {/* Introduction */}
            <section>
              <p className="mb-4">
                This Cookie Policy explains how <strong className="text-brand-white">DeFiShard</strong> ("we", "us", "our") 
                uses cookies and similar technologies on our website and related services.
              </p>
              <p>
                We are committed to transparency and compliance with applicable privacy laws, including the 
                <strong className="text-brand-white"> General Data Protection Regulation (GDPR)</strong> and the 
                <strong className="text-brand-white"> California Consumer Privacy Act (CCPA)</strong>.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                1. What Are Cookies?
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4">
                  Cookies are small text files placed on your device when you visit a website. They help websites function 
                  properly, remember your preferences, and understand how users interact with the site.
                </p>
                <p>
                  We may also use similar technologies such as local storage or session storage to store limited information on your device.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                2. Types of Cookies We Use
              </h2>
              <p className="mb-6">We use the following categories of cookies:</p>
              
              <div className="space-y-6">
                {/* Essential */}
                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-brand-white font-bold uppercase">a. Essential Cookies</h3>
                    <span className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded border border-red-500/20">REQUIRED</span>
                  </div>
                  <div className="space-y-2">
                    <p><strong className="text-brand-white">Purpose:</strong> Required for the website to function correctly (e.g., security, session management).</p>
                    <p><strong className="text-brand-white">Consent:</strong> These cookies are strictly necessary and do not require user consent.</p>
                    <p><strong className="text-brand-white">Impact if disabled:</strong> Core functionality may not work properly.</p>
                  </div>
                </div>

                {/* Functional */}
                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-brand-white font-bold uppercase">b. Functional Cookies</h3>
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-500 rounded border border-blue-500/20">OPTIONAL</span>
                  </div>
                  <div className="space-y-2">
                    <p><strong className="text-brand-white">Purpose:</strong> Improve user experience by remembering preferences such as language or theme settings.</p>
                    <p><strong className="text-brand-white">Consent:</strong> Used only after you provide consent.</p>
                    <p><strong className="text-brand-white">Data collected:</strong> Non-identifying preference information.</p>
                  </div>
                </div>

                {/* Analytics */}
                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-brand-white font-bold uppercase">c. Analytics Cookies</h3>
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-500 rounded border border-blue-500/20">OPTIONAL</span>
                  </div>
                  <div className="space-y-2">
                    <p><strong className="text-brand-white">Purpose:</strong> Help us understand how visitors use our website so we can improve performance and usability.</p>
                    <p><strong className="text-brand-white">Consent:</strong> Used only after you provide consent.</p>
                    <p><strong className="text-brand-white">Data collected:</strong> Aggregated and anonymized usage data.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-brand-lime/10 border border-brand-lime/30 p-4 rounded-lg">
                <p className="text-brand-lime font-bold uppercase text-xs tracking-wider">
                  We do not use advertising, tracking, or profiling cookies.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                3. Cookies We May Use
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-dark-border">
                        <th className="text-left py-3 px-4 text-brand-white uppercase text-xs tracking-wider">Cookie Name</th>
                        <th className="text-left py-3 px-4 text-brand-white uppercase text-xs tracking-wider">Category</th>
                        <th className="text-left py-3 px-4 text-brand-white uppercase text-xs tracking-wider">Purpose</th>
                        <th className="text-left py-3 px-4 text-brand-white uppercase text-xs tracking-wider">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      <tr className="border-b border-dark-border/50">
                        <td className="py-3 px-4 text-brand-lime">_session_id</td>
                        <td className="py-3 px-4">Essential</td>
                        <td className="py-3 px-4">Maintains user session</td>
                        <td className="py-3 px-4">Session</td>
                      </tr>
                      <tr className="border-b border-dark-border/50">
                        <td className="py-3 px-4 text-brand-lime">_preferences</td>
                        <td className="py-3 px-4">Functional</td>
                        <td className="py-3 px-4">Stores user interface preferences</td>
                        <td className="py-3 px-4">1 year</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-brand-lime">_analytics</td>
                        <td className="py-3 px-4">Analytics</td>
                        <td className="py-3 px-4">Anonymous usage statistics</td>
                        <td className="py-3 px-4">Up to 2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-brand-slate">
                  Cookie names and durations may change as our services evolve.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                4. Consent Management
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4">
                  When you visit our website, you may see a <strong className="text-brand-white">cookie consent banner</strong> that allows you to:
                </p>
                <div className="space-y-2 mb-4 text-brand-white">
                  <p>— Accept all cookies</p>
                  <p>— Accept only essential cookies</p>
                  <p>— Customize cookie preferences</p>
                </div>
                <p>
                  We do <strong className="text-brand-white">not set non-essential cookies unless you give consent</strong>. 
                  You can withdraw or change your consent at any time through your browser settings or our cookie management tools (if available).
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                5. How to Control Cookies
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4">
                  You can manage or delete cookies through your browser settings:
                </p>
                <div className="font-mono text-xs space-y-2 text-brand-white">
                  <p><strong>Chrome:</strong> Settings → Privacy & Security → Cookies</p>
                  <p><strong>Firefox:</strong> Settings → Privacy & Security</p>
                  <p><strong>Safari:</strong> Preferences → Privacy</p>
                  <p><strong>Brave:</strong> Settings → Shields → Cookies</p>
                </div>
                <p className="mt-4 text-brand-lime text-xs">
                  Disabling essential cookies may affect website functionality.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                6. Your Privacy Rights
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* GDPR */}
                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <h3 className="text-brand-white font-bold uppercase mb-3">GDPR (EU/EEA Users)</h3>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="space-y-2 text-sm">
                    <li>— Access, correct, or delete your personal data</li>
                    <li>— Restrict or object to processing</li>
                    <li>— Withdraw consent at any time</li>
                  </ul>
                </div>

                {/* CCPA */}
                <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                  <h3 className="text-brand-white font-bold uppercase mb-3">CCPA (California Residents)</h3>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="space-y-2 text-sm">
                    <li>— Know what personal data is collected</li>
                    <li>— Request deletion of your data</li>
                    <li>— Opt out of data sharing</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-brand-lime/10 border border-brand-lime/30 p-4 rounded-lg">
                <p className="text-brand-lime font-bold uppercase text-xs tracking-wider mb-3">
                  We do not sell personal data.
                </p>
                <p>
                  To exercise your rights, contact us at: 
                  <a href="mailto:info@defishard.com" className="text-brand-lime hover:underline ml-1">info@defishard.com</a>
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                7. Third-Party Services
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p>
                  We may use trusted third-party service providers (such as analytics services) that set cookies on our behalf. 
                  These providers are contractually required to safeguard your data and use it only for authorized purposes.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                8. Updates to This Policy
              </h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">
                9. Contact Us
              </h2>
              <div className="bg-dark-surface border border-brand-lime/30 p-6 rounded-lg">
                <p className="mb-4">
                  If you have questions about this Cookie Policy or our privacy practices, please contact:
                </p>
                <p className="text-brand-white font-bold mb-2">DeFiShard</p>
                <a href="mailto:info@defishard.com" className="text-brand-lime hover:underline text-lg font-bold">
                  info@defishard.com
                </a>
              </div>
            </section>

            <div className="pt-12 border-t border-dark-border text-xs text-brand-slate uppercase tracking-wider">
              <p>By using DeFiShard, you acknowledge this Cookie Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
