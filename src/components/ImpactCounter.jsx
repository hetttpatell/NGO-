import { useEffect, useRef, useState } from 'react'

function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2200
          const startTime = performance.now()
          function animate(currentTime) {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Children Educated' },
  { value: 10000, suffix: '+', label: 'Meals Served' },
  { value: 200, suffix: '+', label: 'Elders Supported' },
  { value: 50, suffix: '+', label: 'Villages Reached' },
]

export default function ImpactCounter() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 24px',
      background: '#1A1A1A',
    }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img 
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920&q=80" 
          alt="" 
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.85) 100%)' }} />
      </div>

      {/* Ambient gold glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: '#B8860B',
        filter: 'blur(200px)',
        opacity: 0.15,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginBottom: '1.5rem', justifyContent: 'center',
        }}>
          <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
          <span style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#B8860B',
          }}>Our Impact</span>
          <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
        </div>

        <h2 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          fontWeight: 400,
          color: '#FFFFFF',
          lineHeight: 1.2,
          textAlign: 'center',
          marginBottom: '56px',
          letterSpacing: '-0.01em',
        }}>Measuring Lives Changed</h2>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
        }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '24px 16px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <div style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
                color: '#B8860B',
                lineHeight: 1,
                marginBottom: '12px',
              }}>
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section > div > div:last-child > div {
            border-bottom: 1px solid rgba(255,255,255,0.06);
            padding: 24px 8px !important;
          }
          section > div > div:last-child > div:nth-child(even) {
            border-right: none !important;
          }
          section > div > div:last-child > div:nth-child(n+3) {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  )
}
