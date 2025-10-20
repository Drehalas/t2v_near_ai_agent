'use client'

import Image from 'next/image'

export default function IntegrationsSection() {
  const logos = [
    { src: '/globe.svg', alt: 'Globe' },
    { src: '/next.svg', alt: 'Next.js' },
    { src: '/vercel.svg', alt: 'Vercel' },
    { src: '/file.svg', alt: 'File' },
    { src: '/window.svg', alt: 'Window' },
    { src: '/Ines.svg', alt: 'Ines' },
  ]

  return (
    <section className="py-12 bg-base-100 animate-fade-in">
      <div className="container mx-auto px-4">
        <p className="text-center uppercase tracking-widest text-xs text-base-content/60 mb-6">Integrated with</p>
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
            {logos.map((logo) => (
              <div key={logo.alt} className="transition transform hover:scale-105">
                <Image src={logo.src} alt={logo.alt} width={96} height={32} className="w-24 h-auto opacity-70 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


