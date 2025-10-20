'use client'

export default function StatsSection() {
  const stats = [
    { value: '120+', label: 'Protocol Integrations' },
    { value: '$2.5B+', label: 'Total Value Secured' },
    { value: '50K+', label: 'Developers & Users' },
    { value: '99.9%', label: 'Network Uptime' },
  ]

  const chips = [
    'Low-latency updates',
    'Cross-chain ready',
    'First-party sources',
    'Tamper-resistant',
  ]

  return (
    <section className="py-20 bg-primary text-primary-content animate-slide-in-left">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className={`stat rounded-2xl bg-primary/10 backdrop-blur-md border border-primary/20 animate-fade-in ${i===1?'animate-delay-100':''} ${i===2?'animate-delay-200':''} ${i===3?'animate-delay-300':''}`}>
              <div className="stat-value text-4xl">{s.value}</div>
              <div className="stat-title text-primary-content/80">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {chips.map((chip, i) => (
            <div key={chip} className={`px-4 py-2 rounded-full bg-primary/20 text-primary-content text-sm text-center animate-pulse-soft ${i===1?'animate-delay-100':''} ${i===2?'animate-delay-200':''} ${i===3?'animate-delay-300':''}`}>{chip}</div>
          ))}
        </div>
      </div>
    </section>
  )
}


