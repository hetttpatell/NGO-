import { Link } from 'react-router-dom'
import SectionCTA from '../components/SectionCTA'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const initiatives = [
  {
    title: 'Education for All',
    tagline: 'Lighting the path of knowledge',
    description: 'We believe education is the most powerful tool for breaking the cycle of poverty. Our education initiative provides free schooling, books, uniforms, and school supplies to children in rural villages who otherwise have no access to learning.',
    highlights: ['Free learning centers in 5+ villages', 'School supplies & uniforms distributed', 'After-school tutoring programs', 'Digital literacy workshops for youth'],
    metrics: [
      { label: 'Students', value: '50+' },
      { label: 'Centers', value: '5' },
      { label: 'Literacy', value: '+25%' }
    ],
    impactStory: "Rahul, a 12-year-old from a small hamlet, is now the first in his family to read and write, aspiring to be a teacher one day.",
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Hunger Relief Program',
    tagline: 'No one should sleep hungry',
    description: 'Our hunger relief program serves nutritious meals daily to children, elderly, and families facing food insecurity. We operate community kitchens and distribute food packets across 5 key locations to combat chronic malnutrition.',
    highlights: ['55+ meals served weekly', 'Community kitchens in 5 locations', 'Nutritional supplements for children', 'Emergency food relief during crises'],
    metrics: [
      { label: 'Meals Served', value: '55+' },
      { label: 'Daily Feed', value: '45+' },
      { label: 'Locations', value: '5' }
    ],
    impactStory: "Our community kitchen has become a lifeline for elderly residents, providing not just food but a sense of belonging.",
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Elder Care Initiative',
    tagline: 'Dignity in every sunset',
    description: 'Many elders in our communities live alone, abandoned without support. Our elder care initiative provides medical assistance, daily meals, companionship visits, and a safe space to live with dignity and respect.',
    highlights: ['Medical check-ups & medicine distribution', 'Daily meal delivery to 45+ elders', 'Companionship & counseling services', 'Assisted living support programs'],
    metrics: [
      { label: 'Elders', value: '45+' },
      { label: 'Medical', value: 'Weekly' },
      { label: 'Visits', value: 'Daily' }
    ],
    impactStory: "Mrs. Sharma, 78, now receives daily visits and warm meals, restoring her smile and will to live.",
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Orphan Support Program',
    tagline: 'Every child deserves a home',
    description: 'Our orphan support program creates a nurturing environment for children who have lost their parents. We provide shelter, education, emotional support, and life skills training to help them build a bright future.',
    highlights: ['Safe shelter with caring staff', 'Full education sponsorship', 'Emotional & psychological support', 'Vocational training for older youth'],
    metrics: [
      { label: 'Children', value: '35' },
      { label: 'Success', value: '100%' },
      { label: 'Ratio', value: '5:1' }
    ],
    impactStory: "Young Amit has transformed from a shy child to a confident student who recently won his school's science fair.",
    image: 'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=800&auto=format&fit=crop',
  },
]

export default function Initiatives() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, y: 0, 
          duration: 0.6, 
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      )
    })
  }, [])

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      {/* ═══ HERO ═══ */}
      <section style={{
        position: 'relative',
        padding: '200px 24px 140px',
        textAlign: 'center',
        color: '#FFFFFF',
        overflow: 'hidden',
        background: '#1A1A1A', // Fallback
      }}>
        {/* Background Image with Professional Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src="/initiative.jpg" 
            alt="Initiatives Hero" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} 
          />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to bottom, rgba(26,26,26,0.8), rgba(26,26,26,0.9))' 
          }} />
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="small-caps" style={{ color: '#D4A84B', marginBottom: '20px' }}>
            Our Commitment
          </div>
          <h1 className="font-display" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}>
            Programs That <em style={{ color: '#D4A84B', fontStyle: 'italic' }}>Transform</em> Communities
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We implement structured, sustainable initiatives that address 
            the root causes of social inequality in rural areas.
          </p>
        </div>
      </section>

      {/* ═══ INITIATIVES LIST ═══ */}
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {initiatives.map((item, index) => (
          <section
            key={item.title}
            className="reveal"
            style={{
              padding: '100px 24px',
              borderBottom: '1px solid #F0F0F0',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center',
              direction: index % 2 === 0 ? 'ltr' : 'rtl',
            }}>
              {/* Content Column */}
              <div style={{ direction: 'ltr' }}>
                <div style={{ color: '#B8860B', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {item.tagline}
                </div>
                
                <h2 className="font-display" style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: '#1A1A1A',
                  marginBottom: '24px',
                }}>{item.title}</h2>
                
                <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '32px', fontSize: '1rem' }}>
                  {item.description}
                </p>

                {/* Metrics Bar - Simple & Professional */}
                <div style={{ 
                  display: 'flex', 
                  gap: '40px', 
                  marginBottom: '40px',
                  padding: '20px 0',
                  borderTop: '1px solid #F5F5F5'
                }}>
                  {item.metrics.map((m) => (
                    <div key={m.label}>
                      <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1A1A1A' }}>{m.value}</div>
                      <div className="small-caps" style={{ fontSize: '0.55rem', opacity: 0.6 }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                  {item.highlights.map((h) => (
                    <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '6px', height: '6px', background: '#D4A84B', borderRadius: '1px' }} />
                      <span style={{ fontSize: '0.85rem', color: '#444' }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Success Quote - Simple & Subtle */}
                <div style={{ borderLeft: '2px solid #D4A84B', paddingLeft: '20px', marginBottom: '32px' }}>
                  <p style={{ fontSize: '0.9rem', color: '#1A1A1A', fontStyle: 'italic', lineHeight: 1.5 }}>
                    "{item.impactStory}"
                  </p>
                </div>

                <Link to="/connect" style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  border: '1px solid #1A1A1A',
                  color: '#1A1A1A',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1A1A1A';
                  e.currentTarget.style.color = '#FFF';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#1A1A1A';
                }}>
                  Connect to Support
                </Link>
              </div>

              {/* Image Column */}
              <div style={{ direction: 'ltr' }}>
                <div style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  borderRadius: '4px', // Simpler, sharper corners for professional look
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <SectionCTA
        title="Be Part of the Solution"
        description="Every initiative is powered by people like you. Join us in making a measurable difference."
        buttonText="Get Involved"
        buttonLink="/connect"
      />
    </div>
  )
}


