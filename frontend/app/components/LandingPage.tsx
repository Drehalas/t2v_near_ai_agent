'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <nav className="navbar bg-base-100 shadow-sm animate-fade-in">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#features">Features</a></li>
              <li><a href="#ecosystem">Ecosystem</a></li>
              <li><Link href="/docs">Developers</Link></li>
              <li><a href="#community">Community</a></li>
              <li className="menu-title"><span>Apps</span></li>
              <li><Link href="/lending">Lending App</Link></li>
              <li><Link href="/mythos-reply">Mythos Reply</Link></li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">MythOS NEAR</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#features" className="btn btn-ghost">Features</a></li>
            <li><a href="#ecosystem" className="btn btn-ghost">Ecosystem</a></li>
            <li><Link href="/docs" className="btn btn-ghost">Developers</Link></li>
            <li><a href="#community" className="btn btn-ghost">Community</a></li>
            <li>
              <details>
                <summary className="btn btn-ghost">Apps</summary>
                <ul className="p-2 bg-base-100 rounded-box shadow">
                  <li><Link href="/lending">Lending App</Link></li>
                  <li><Link href="/mythos-reply">Mythos Reply</Link></li>
                  <li><Link href="/mythos-reply/dashboard">Reply Dashboard</Link></li>
                  <li><Link href="/lending/docs">Lending Docs</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/mythos-reply" className="btn btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 animate-fade-in">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              The AI Agent of Everything. Everywhere.
            </h1>
            <p className="py-6 text-xl md:text-2xl text-base-content/80 max-w-3xl mx-auto">
              Intelligent AI agents powered directly by NEAR Protocol, providing real-time assistance, 
              DeFi interactions, and blockchain automation in a decentralized, self-sustainable environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mythos-reply" className="btn btn-primary btn-lg floating-btn">Start Building</Link>
              <Link href="/docs" className="btn btn-outline btn-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Integrations (pyth-like marquee grid) */}
      <section className="py-12 bg-base-100 animate-fade-in">
        <div className="container mx-auto px-4">
          <p className="text-center uppercase tracking-widest text-xs text-base-content/60 mb-6">Integrated with</p>
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
              {[
                { src: '/globe.svg', alt: 'Globe' },
                { src: '/next.svg', alt: 'Next.js' },
                { src: '/vercel.svg', alt: 'Vercel' },
                { src: '/file.svg', alt: 'File' },
                { src: '/window.svg', alt: 'Window' },
                { src: '/Ines.svg', alt: 'Ines' },
              ].map((logo, i) => (
                <div key={i} className="transition transform hover:scale-105">
                  <Image src={logo.src} alt={logo.alt} width={96} height={32} className="w-24 h-auto opacity-70 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
            {/* Feature 1 */}
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

            {/* Feature 2 */}
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

            {/* Feature 3 */}
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

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 animate-slide-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Leading Protocols</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Our AI agents are integrated with the most innovative projects in the NEAR ecosystem and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Placeholder for partner logos */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center p-4 bg-base-200 rounded-lg">
                <div className="w-16 h-8 bg-base-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Feeds / Live Stats */}
      <section className="py-20 bg-primary text-primary-content animate-slide-in-left">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { v: '120+', t: 'Protocol Integrations' },
              { v: '$2.5B+', t: 'Total Value Secured' },
              { v: '50K+', t: 'Developers & Users' },
              { v: '99.9%', t: 'Network Uptime' },
            ].map((s, i) => (
              <div key={s.t} className={`stat rounded-2xl bg-primary/10 backdrop-blur-md border border-primary/20 animate-fade-in ${i===1?'animate-delay-100':''} ${i===2?'animate-delay-200':''} ${i===3?'animate-delay-300':''}`}>
                <div className="stat-value text-4xl">{s.v}</div>
                <div className="stat-title text-primary-content/80">{s.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Low-latency updates',
              'Cross-chain ready',
              'First-party sources',
              'Tamper-resistant',
            ].map((chip, i) => (
              <div key={chip} className={`px-4 py-2 rounded-full bg-primary/20 text-primary-content text-sm text-center animate-pulse-soft ${i===1?'animate-delay-100':''} ${i===2?'animate-delay-200':''} ${i===3?'animate-delay-300':''}`}>{chip}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white animate-slide-in-right">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers building intelligent applications with our AI agent infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mythos-reply" className="btn btn-accent btn-lg floating-btn">Start Building Now</Link>
            <Link href="/docs" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">View Documentation</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a className="link link-hover">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a className="link link-hover">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2024 MythOS NEAR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
