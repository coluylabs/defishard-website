export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dark-bg text-brand-white font-mono text-sm leading-relaxed">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-dark-border pb-8">
            <h1 className="heading-xl mb-4">TERMS OF SERVICE</h1>
            <p className="text-brand-slate uppercase tracking-wider">LAST_UPDATED: NOVEMBER 15, 2025</p>
          </div>

          <div className="space-y-12 text-brand-slate">
            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using DefiShard's browser extension and mobile application (the "Service"), you agree 
                to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">2. Beta Testing Disclaimer</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-lg">
                <p className="font-bold text-yellow-500 mb-3 uppercase tracking-wider">Warning: Beta Software</p>
                <p className="mb-3 text-brand-white">
                  DefiShard is currently in BETA testing. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>The software may contain bugs, errors, or security vulnerabilities</li>
                  <li>Features may change or be discontinued without notice</li>
                  <li>There is a risk of loss of funds</li>
                  <li>The Service may be temporarily unavailable</li>
                </ul>
                <p className="mt-4 font-bold text-brand-white border-t border-yellow-500/30 pt-4">
                  YOU ACKNOWLEDGE THAT YOU USE THIS BETA SOFTWARE AT YOUR OWN RISK. ONLY USE FUNDS YOU CAN AFFORD TO LOSE.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">3. Cryptocurrency Risks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-dark-border bg-dark-surface rounded hover:border-red-500/50 transition-colors">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Volatility Risk</strong>
                  The value of your assets may increase or decrease rapidly and substantially.
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded hover:border-red-500/50 transition-colors">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Irreversibility</strong>
                  Blockchain transactions cannot be undone. Sending to wrong address = permanent loss.
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded hover:border-red-500/50 transition-colors">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Smart Contracts</strong>
                  We are not responsible for bugs in third-party protocols you interact with.
                </div>
                <div className="p-4 border border-dark-border bg-dark-surface rounded hover:border-red-500/50 transition-colors">
                  <strong className="text-brand-white block mb-2 uppercase text-xs tracking-wider">Regulatory</strong>
                  Future laws may affect legality or value of your assets.
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">4. Key Management</h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg">
                <p className="mb-4">
                  DefiShard uses Distributed Key Generation (DKG) and Threshold Signature Schemes (TSS).
                </p>
                <ul className="list-disc list-inside space-y-2 text-brand-white ml-2">
                  <li>Your private key <strong className="text-brand-lime">never exists</strong> on any device</li>
                  <li>You maintain control of your key shares</li>
                  <li>We cannot access, recover, or restore your key shares</li>
                  <li>Loss of access to devices may result in permanent loss of funds</li>
                </ul>
                <p className="mt-6 font-bold text-brand-white uppercase bg-dark-bg p-3 border border-dark-border inline-block">
                  WE ARE NOT CUSTODIANS.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">5. Prohibited Activities</h2>
              <p className="mb-4">You may not use the Service to:</p>
              <div className="space-y-2 border-l border-dark-border pl-4">
                <p>— Engage in illegal activities or violate laws</p>
                <p>— Transmit malware or harmful code</p>
                <p>— Attempt to reverse engineer the Service</p>
                <p>— Violate sanctions (OFAC, EU, UN)</p>
                <p>— Engage in market manipulation or fraud</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-white mb-4 uppercase tracking-wide border-l-2 border-brand-lime pl-4">6. Limitation of Liability</h2>
              <div className="bg-dark-surface p-6 border border-dark-border rounded-lg text-xs uppercase tracking-wide leading-loose">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEFISHARD SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, 
                  DATA, OR CRYPTOCURRENCY, WHETHER IN CONTRACT, TORT, OR OTHERWISE, ARISING FROM YOUR USE OF 
                  THE SERVICE.
                </p>
                <p className="mt-4 text-brand-lime">
                  TOTAL LIABILITY SHALL NOT EXCEED $100 USD.
                </p>
              </div>
            </section>

            <div className="pt-12 border-t border-dark-border text-xs text-brand-slate uppercase tracking-wider">
              <p>By using DefiShard, you agree to be bound by these Terms of Service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
