import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import AmbientGlow from '../components/BlurShape'
import ImpactCounter from '../components/ImpactCounter'
import SectionCTA from '../components/SectionCTA'

const initiatives = [
  {
    title: 'Education for All',
    description: 'Free education, books, and school supplies to underprivileged children in rural villages.',
  },
  {
    title: 'Hunger Relief',
    description: 'Serving nutritious meals daily to children, elderly, and families facing food insecurity.',
  },
  {
    title: 'Elder Care',
    description: 'Medical support, companionship, and dignity to abandoned and neglected elders.',
  },
  {
    title: 'Orphan Support',
    description: 'A safe, loving environment for orphaned children with shelter, education, and care.',
  },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-label', { y: 15, opacity: 0, duration: 0.5, ease: 'power3.out' })
      gsap.from('.hero-title', { y: 30, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' })
      gsap.from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.7, delay: 0.25, ease: 'power3.out' })
      gsap.from('.hero-cta', { y: 15, opacity: 0, duration: 0.6, delay: 0.4, ease: 'power3.out' })
      gsap.from('.hero-stats', { y: 15, opacity: 0, duration: 0.6, delay: 0.55, ease: 'power3.out' })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#FAFAF8',
        }}
      >
        <AmbientGlow color="#B8860B" size="700px" position={{ top: '-300px', right: '-200px' }} opacity={0.025} />

        <div style={{
          maxWidth: '1024px', margin: '0 auto', padding: '140px 24px 100px',
          position: 'relative', zIndex: 1, width: '100%',
        }}>
          <div style={{ maxWidth: '680px' }}>
            {/* Section label */}
            <div className="hero-label" style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#B8860B',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <span style={{ width: '32px', height: '1px', background: '#B8860B' }} />
              Serving Since 2015
            </div>

            {/* Headline */}
            <h1
              className="hero-title"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 400,
                color: '#1A1A1A',
                lineHeight: 1.1,
                marginBottom: '28px',
                letterSpacing: '-0.02em',
              }}
            >
              Empowering<br />
              <em style={{ color: '#B8860B' }}>Rural India</em> with<br />
              Compassion & Care
            </h1>

            <p
              className="hero-subtitle"
              style={{
                fontSize: '1.1rem',
                color: '#6B6B6B',
                lineHeight: 1.8,
                marginBottom: '40px',
                maxWidth: '520px',
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
              }}
            >
              Shreekrishna NGO transforms lives through education, hunger relief,
              elder care, and orphan support across India's most underserved villages.
            </p>

            <div className="hero-cta" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '64px' }}>
              <Link
                to="/connect"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '14px 36px',
                  borderRadius: '6px',
                  background: '#B8860B',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  minHeight: '48px',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#D4A84B'
                  e.currentTarget.style.transform = 'translateY(-0.5px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#B8860B'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Get Involved
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '14px 32px',
                  borderRadius: '6px',
                  background: 'transparent',
                  color: '#1A1A1A',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  border: '1px solid #E8E4DF',
                  transition: 'all 0.2s ease',
                  minHeight: '48px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#B8860B'
                  e.currentTarget.style.color = '#B8860B'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E8E4DF'
                  e.currentTarget.style.color = '#1A1A1A'
                }}
              >
                Our Story
              </Link>
            </div>

            {/* Mini stats */}
            <div className="hero-stats" style={{
              display: 'flex', gap: '0',
              borderTop: '1px solid #E8E4DF',
              paddingTop: '28px',
            }}>
              {[
                { num: '500+', label: 'Children Educated' },
                { num: '10K+', label: 'Meals Monthly' },
                { num: '50+', label: 'Villages Reached' },
              ].map((stat, i) => (
                <div key={stat.label} style={{
                  flex: 1,
                  paddingRight: i < 2 ? '24px' : '0',
                  borderRight: i < 2 ? '1px solid #E8E4DF' : 'none',
                  marginRight: i < 2 ? '24px' : '0',
                }}>
                  <div style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: '#B8860B',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}>{stat.num}</div>
                  <div style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#6B6B6B',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSION STRIP ═══ */}
      <section style={{
        background: '#1A1A1A',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
          color: 'rgba(255,255,255,0.7)',
          fontStyle: 'italic',
          letterSpacing: '0.01em',
        }}>
          "योगः कर्मसु कौशलम्" — Excellence in action is Yoga.{' '}
          <span style={{
            fontStyle: 'normal',
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.35)',
          }}>— Bhagavad Gita 2.50</span>
        </p>
      </section>

      {/* ═══ MISSION ═══ */}
      <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            marginBottom: '1.5rem', justifyContent: 'center',
          }}>
            <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#B8860B',
            }}>Our Mission</span>
            <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
          </div>

          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '24px',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
          }}>Why We Do What We Do</h2>

          <p style={{ fontSize: '1.05rem', color: '#6B6B6B', lineHeight: 1.9, marginBottom: '24px' }}>
            Rooted in the teachings of Lord Krishna —{' '}
            <em style={{ color: '#B8860B', fontFamily: '"Playfair Display", Georgia, serif' }}>
              "Perform your duty selflessly, without attachment"
            </em>{' '}
            — we serve the most vulnerable in rural India. Every child deserves education,
            every elder deserves dignity, and no one should sleep hungry.
          </p>

          <div style={{
            width: '40px', height: '1px',
            background: '#B8860B',
            margin: '0 auto',
          }} />
        </div>
      </section>

      {/* ═══ INITIATIVES GRID ═══ */}
      <section style={{ padding: '0 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section divider */}
          <hr style={{ border: 'none', height: '1px', background: '#E8E4DF', marginBottom: '80px' }} />

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              marginBottom: '1.5rem', justifyContent: 'center',
            }}>
              <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#B8860B',
              }}>What We Do</span>
              <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              letterSpacing: '-0.01em',
            }}>Four Pillars of Change</h2>
            <p style={{ color: '#6B6B6B', marginTop: '12px', fontSize: '1rem' }}>One mission of hope</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {initiatives.map((item, i) => (
              <div
                key={item.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '36px 28px',
                  border: '1px solid #E8E4DF',
                  borderTop: '2px solid #B8860B',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,26,26,0.06)'
                  e.currentTarget.style.borderColor = '#D4CFC8'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#E8E4DF'
                }}
              >
                <div style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '2.5rem',
                  fontWeight: 400,
                  color: '#B8860B',
                  lineHeight: 1,
                  marginBottom: '20px',
                  opacity: 0.6,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 600,
                  fontSize: '1.15rem',
                  color: '#1A1A1A',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.75 }}>{item.description}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/initiatives"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: '#B8860B', fontWeight: 500, fontSize: '0.9rem',
                textDecoration: 'none', transition: 'gap 0.2s ease',
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => e.currentTarget.style.gap = '12px'}
              onMouseLeave={e => e.currentTarget.style.gap = '8px'}
            >
              Explore all initiatives
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT ═══ */}
      <ImpactCounter />

      {/* ═══ CTA ═══ */}
      <SectionCTA
        title="Join Hands with Shreekrishna NGO"
        description="Your support can change lives. Whether through volunteering, donating, or spreading the word — every act of kindness becomes a ripple of hope."
        buttonText="Connect With Us"
        buttonLink="/connect"
      />
    </>
  )
}
