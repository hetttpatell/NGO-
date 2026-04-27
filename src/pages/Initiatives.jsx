import AmbientGlow from '../components/BlurShape'
import SectionCTA from '../components/SectionCTA'

const initiatives = [
  {
    title: 'Education for All',
    tagline: 'Lighting the path of knowledge',
    description: 'We believe education is the most powerful tool for breaking the cycle of poverty. Our education initiative provides free schooling, books, uniforms, and school supplies to children in rural villages.',
    highlights: ['Free learning centers in 30+ villages', 'School supplies & uniforms distributed', 'After-school tutoring programs', 'Digital literacy workshops for youth'],
  },
  {
    title: 'Hunger Relief Program',
    tagline: 'No one should sleep hungry',
    description: 'Our hunger relief program serves nutritious meals daily to children, elderly, and families facing food insecurity. We operate community kitchens and distribute food packets across 15 key locations.',
    highlights: ['10,000+ meals served monthly', 'Community kitchens in 15 locations', 'Nutritional supplements for children', 'Emergency food relief during crises'],
  },
  {
    title: 'Elder Care Initiative',
    tagline: 'Dignity in every sunset',
    description: 'Many elders in rural India live alone, abandoned without support. Our elder care initiative provides medical assistance, daily meals, companionship visits, and a safe space to live with dignity.',
    highlights: ['Medical check-ups & medicine distribution', 'Daily meal delivery to 200+ elders', 'Companionship & counseling services', 'Assisted living support programs'],
  },
  {
    title: 'Orphan Support Program',
    tagline: 'Every child deserves a home',
    description: 'Our orphan support program creates a nurturing environment for children who have lost their parents. We provide shelter, education, emotional support, and life skills training.',
    highlights: ['Safe shelter with caring staff', 'Full education sponsorship', 'Emotional & psychological support', 'Vocational training for older youth'],
  },
]

export default function Initiatives() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{
        position: 'relative',
        padding: 'clamp(120px, 15vw, 180px) 24px 80px',
        overflow: 'hidden',
      }}>
        <AmbientGlow color="#B8860B" size="500px" position={{ top: '-200px', left: '-100px' }} opacity={0.02} />
        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.7rem', fontWeight: 500,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#B8860B', marginBottom: '24px',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <span style={{ width: '32px', height: '1px', background: '#B8860B' }} />
            What We Do
          </div>
          <h1 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.15,
            marginBottom: '24px',
            maxWidth: '650px',
            letterSpacing: '-0.02em',
          }}>
            Our <em style={{ color: '#B8860B' }}>Initiatives</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6B6B6B', lineHeight: 1.8, maxWidth: '560px' }}>
            Each of our programs addresses a critical need in rural communities —
            from education and hunger relief to elder care and orphan support.
          </p>
        </div>
      </section>

      {/* ═══ INITIATIVE SECTIONS ═══ */}
      {initiatives.map((item, index) => (
        <section
          key={item.title}
          style={{
            padding: '80px 24px',
            position: 'relative',
            overflow: 'hidden',
            background: index % 2 === 0 ? '#F5F3F0' : '#FAFAF8',
          }}
        >
          <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
              alignItems: 'start',
            }}>
              {/* Content */}
              <div>
                <div style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '3rem',
                  fontWeight: 400,
                  color: '#B8860B',
                  opacity: 0.35,
                  lineHeight: 1,
                  marginBottom: '20px',
                }}>{String(index + 1).padStart(2, '0')}</div>
                <h2 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 600,
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  color: '#1A1A1A',
                  lineHeight: 1.2,
                  marginBottom: '6px',
                  letterSpacing: '-0.01em',
                }}>{item.title}</h2>
                <p style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '0.9rem', color: '#B8860B',
                  fontStyle: 'italic', marginBottom: '20px',
                }}>{item.tagline}</p>
                <p style={{ fontSize: '0.95rem', color: '#6B6B6B', lineHeight: 1.9 }}>
                  {item.description}
                </p>
              </div>

              {/* Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {item.highlights.map((h) => (
                  <div
                    key={h}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '18px',
                      border: '1px solid #E8E4DF',
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#B8860B'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#E8E4DF'
                    }}
                  >
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#B8860B',
                      flexShrink: 0, marginTop: '6px',
                    }} />
                    <span style={{ fontSize: '0.8rem', color: '#6B6B6B', lineHeight: 1.6, fontWeight: 500 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <SectionCTA
        title="Support Our Initiatives"
        description="Your contribution — whether time, resources, or funds — directly impacts the lives of those who need it most."
        buttonText="Connect With Us"
        buttonLink="/connect"
      />
    </>
  )
}
