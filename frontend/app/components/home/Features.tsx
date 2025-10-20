'use client'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-base-200 animate-slide-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powered by First-Party Intelligence</h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Over 120+ integrations with leading DeFi protocols, exchanges, and blockchain networks—including
            some of the world's biggest market makers and trading firms—provide data directly to our AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl animate-fade-in">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="card-title ml-4">Real-Time Intelligence</h3>
              </div>
              <p className="text-base-content/70">
                Continuous real-world data processing on-chain in a tamper-resistant, decentralized,
                and self-sustainable environment.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl animate-fade-in animate-delay-200">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="card-title ml-4">Secure & Decentralized</h3>
              </div>
              <p className="text-base-content/70">
                Built on NEAR Protocol's secure infrastructure with decentralized governance and
                community-driven development.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl animate-fade-in animate-delay-300">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="card-title ml-4">Multi-Chain Support</h3>
              </div>
              <p className="text-base-content/70">
                Seamlessly interact with multiple blockchain networks and DeFi protocols
                through intelligent cross-chain automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


