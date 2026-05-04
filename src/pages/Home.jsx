import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

import ImpactCounter from '../components/ImpactCounter'
import SectionCTA from '../components/SectionCTA'

const initiatives = [
  {
    title: 'Education for All',
    tagline: 'शिक्षा सबके लिए',
    description: 'Free education, books, and school supplies to underprivileged children in rural villages.',
    longDescription: 'We believe every child deserves the gift of knowledge. Our education programs provide free schooling, learning materials, uniforms, and mentorship to children who would otherwise never see the inside of a classroom.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    stat: '500+',
    statLabel: 'Children Educated',
    color: '#D4A84B',
  },
  {
    title: 'Hunger Relief',
    tagline: 'भूख से मुक्ति',
    description: 'Serving nutritious meals daily to children, elderly, and families facing food insecurity.',
    longDescription: 'No one should go to bed hungry. Our hunger relief drives serve hot, nutritious meals daily across villages, ensuring that children can focus on learning and families can focus on rebuilding their lives.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
    stat: '10K+',
    statLabel: 'Meals Monthly',
    color: '#C97B3A',
  },
  {
    title: 'Elder Care',
    tagline: 'बुजुर्गों की सेवा',
    description: 'Medical support, companionship, and dignity to abandoned and neglected elders.',
    longDescription: 'Our elders built the world we live in. We provide medical check-ups, daily care, emotional companionship, and a home filled with warmth for those who have been abandoned or forgotten.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    stat: '200+',
    statLabel: 'Elders Cared For',
    color: '#A67C52',
  },
  {
    title: 'Orphan Support',
    tagline: 'अनाथ बच्चों का सहारा',
    description: 'A safe, loving environment for orphaned children with shelter, education, and care.',
    longDescription: 'Every orphaned child deserves a chance at life filled with love. We provide safe shelter, nutrition, education, and emotional support — building a family where there was none.',
    image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=1200&q=80',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    stat: '150+',
    statLabel: 'Children Sheltered',
    color: '#B8860B',
  },
]

function MobileInitiativeCard({ item, index }) {
  return (
    <Link
      to="/initiatives"
      className="mobile-initiative-card"
      style={{
        position: 'relative', borderRadius: '16px', overflow: 'hidden',
        minHeight: '400px', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', textDecoration: 'none',
        border: 'none', boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
        flexShrink: 0, width: '85vw',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={item.image} alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.7) 40%, rgba(17,17,17,0.2) 100%)'
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '32px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <span style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.2rem', color: '#D4A84B', lineHeight: 1,
            }}>{String(index + 1).padStart(2, '0')}</span>
            <h3 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.5rem', fontWeight: 500, color: '#FFFFFF',
              marginTop: '4px', marginBottom: '4px',
            }}>{item.title}</h3>
            <p style={{
              fontFamily: '"Noto Sans Devanagari", sans-serif',
              fontSize: '0.8rem', color: 'rgba(212,168,75,0.8)',
            }}>{item.tagline}</p>
          </div>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" fill="none" stroke="#D4A84B" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
            </svg>
          </div>
        </div>

        <p style={{
          fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.6, marginBottom: '24px',
        }}>{item.description}</p>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px',
        }}>
          <div>
            <div style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.5rem', color: '#FFFFFF', lineHeight: 1,
            }}>{item.stat}</div>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.65rem', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)', marginTop: '4px',
            }}>{item.statLabel}</div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: '#D4A84B', fontSize: '0.9rem', fontWeight: 500,
          }}>
            Explore
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const [activeInitiative, setActiveInitiative] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const initiativeSectionRef = useRef(null)
  const featuredImageRef = useRef(null)
  const contentRef = useRef(null)
  const mobileCardsRef = useRef(null)

  const handleInitiativeChange = useCallback((index) => {
    if (index === activeInitiative || isTransitioning) return
    setIsTransitioning(true)

    // Animate out current content
    const tl = gsap.timeline({
      onComplete: () => {
        setActiveInitiative(index)
        setIsTransitioning(false)
      }
    })

    if (featuredImageRef.current) {
      tl.to(featuredImageRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.35,
        ease: 'power2.in',
      }, 0)
    }
    if (contentRef.current) {
      tl.to(contentRef.current.children, {
        opacity: 0,
        y: -15,
        duration: 0.25,
        stagger: 0.04,
        ease: 'power2.in',
      }, 0)
    }
  }, [activeInitiative, isTransitioning])

  // Animate IN when activeInitiative changes
  useEffect(() => {
    if (featuredImageRef.current) {
      gsap.fromTo(featuredImageRef.current,
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out', delay: 0.05 }
      )
    }
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
      )
    }
  }, [activeInitiative])

  // Scroll-triggered entrance for the section
  useEffect(() => {
    const section = initiativeSectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.fromTo(section.querySelectorAll('.wwd-animate'),
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
            )
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Mobile cards scroll animation
  useEffect(() => {
    const cards = mobileCardsRef.current
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.fromTo(cards.querySelectorAll('.mobile-initiative-card'),
              { opacity: 0, y: 50, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out' }
            )
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(cards)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-alert', { y: -20, opacity: 0, duration: 0.7, delay: 0.2, ease: 'power3.out' })
      gsap.from('.hero-label', { y: 15, opacity: 0, duration: 0.5, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-title', { y: 40, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' })
      gsap.from('.hero-subtitle', { y: 25, opacity: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' })
      gsap.from('.hero-cta', { y: 20, opacity: 0, duration: 0.7, delay: 0.8, ease: 'power3.out' })
      gsap.from('.hero-stats > div', { y: 30, opacity: 0, duration: 0.6, delay: 1, ease: 'power3.out', stagger: 0.12 })
      gsap.from('.hero-scroll', { opacity: 0, duration: 1, delay: 1.5, ease: 'power3.out' })
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
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
        }}>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80"
            alt=""
            aria-hidden="true"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 30%',
              display: 'block',
            }}
          />
          {/* Gradient Overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(15,12,8,0.72) 0%, rgba(15,12,8,0.55) 40%, rgba(15,12,8,0.80) 100%)',
          }} />
        </div>

        {/* Urgent Alert Bar */}
        <div className="hero-alert" style={{
          position: 'absolute', top: '80px', left: 0, right: 0, zIndex: 5,
          display: 'flex', justifyContent: 'center', padding: '0 24px',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            {/* Elegant Diamond Accent */}
            <span style={{
              width: '6px', height: '6px',
              transform: 'rotate(45deg)',
              background: '#D4A84B',
            }} />
            
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#D4A84B',
            }}>
              Active Campaign
            </span>
            
            <span style={{
              width: '1px', height: '14px',
              background: 'rgba(255,255,255,0.25)'
            }} />
            
            <span style={{
              fontFamily: '"Source Sans 3", system-ui, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '0.04em',
            }}>
              Summer Hunger Relief Drive 2026
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: '1200px', margin: '0 auto', width: '100%',
          padding: '160px 24px 80px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center',
        }}>
          {/* Section label */}
          <div className="hero-label" style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.7rem', fontWeight: 500,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '24px',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
            Regd. No.: E/24300/AHMEDABAD
            <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
          </div>

          {/* Headline */}
          <h1
            className="hero-title"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1.08,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              maxWidth: '800px',
            }}
          >
            Empowering{' '}
            <em style={{ color: '#D4A84B', fontStyle: 'italic' }}>Rural India</em>
            <br />with Compassion & Care
          </h1>

          <p
            className="hero-subtitle"
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: '40px',
              maxWidth: '600px',
              fontFamily: '"Source Sans 3", system-ui, sans-serif',
            }}
          >
            Shree Sneh Foundation transforms lives through education, hunger relief,
            elder care, and orphan support across India's most underserved villages.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta" style={{
            display: 'flex', flexWrap: 'wrap', gap: '16px',
            justifyContent: 'center', marginBottom: '60px',
          }}>
            <Link
              to="/connect"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '16px 40px', borderRadius: '6px',
                background: '#B8860B', color: '#FFFFFF',
                fontWeight: 600, fontSize: '1rem',
                textDecoration: 'none', transition: 'all 0.25s ease',
                minHeight: '52px', letterSpacing: '0.02em',
                boxShadow: '0 4px 20px rgba(184,134,11,0.35)',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#D4A84B'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(184,134,11,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#B8860B'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(184,134,11,0.35)'
              }}
            >
              Donate Now
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <Link
              to="/about"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '16px 36px', borderRadius: '6px',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF', fontWeight: 500, fontSize: '1rem',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.25s ease',
                minHeight: '52px', cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Our Story
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Impact Stats — Glassmorphism Cards */}
          <div className="hero-stats" style={{
            display: 'flex', flexWrap: 'wrap', gap: '16px',
            justifyContent: 'center', width: '100%', maxWidth: '700px',
          }}>
            {[
              { num: '500+', label: 'Children Educated', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              { num: '10K+', label: 'Meals Monthly', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' },
              { num: '50+', label: 'Villages Reached', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
            ].map((stat) => (
              <div key={stat.label} style={{
                flex: '1 1 180px',
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px', padding: '24px 20px',
                textAlign: 'center',
                transition: 'all 0.3s ease', cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.borderColor = 'rgba(212,168,75,0.4)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <svg width="20" height="20" fill="none" stroke="#D4A84B" viewBox="0 0 24 24" style={{ marginBottom: '8px', opacity: 0.8 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
                <div style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '2rem', fontWeight: 400,
                  color: '#FFFFFF', lineHeight: 1, marginBottom: '6px',
                }}>{stat.num}</div>
                <div style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.65rem', fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" style={{
          position: 'absolute', bottom: '32px',
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 3, display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '8px',
          animation: 'float 3s ease-in-out infinite',
        }}>
          <span style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.6rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
          }}>Scroll</span>
          <svg width="16" height="24" fill="none" stroke="rgba(255,255,255,0.4)" viewBox="0 0 16 24">
            <rect x="1" y="1" width="14" height="22" rx="7" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2" fill="rgba(255,255,255,0.5)">
              <animate attributeName="cy" values="8;14;8" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
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
      <section style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src="https://images.unsplash.com/photo-1608555855762-2b657eb1c348?auto=format&fit=crop&w=1920&q=80" 
            alt="" 
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.85) 50%, rgba(26,26,26,0.7) 100%)' }} />
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            marginBottom: '1.5rem', justifyContent: 'center',
          }}>
            <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#D4A84B',
            }}>Our Mission</span>
            <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          </div>

          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 400, color: '#FFFFFF',
            marginBottom: '28px', lineHeight: 1.2, letterSpacing: '-0.01em',
          }}>Why We Do What We Do</h2>

          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.9, marginBottom: '32px' }}>
            Rooted in the teachings of Lord Krishna —{' '}
            <em style={{ color: '#D4A84B', fontFamily: '"Playfair Display", Georgia, serif', fontStyle: 'italic' }}>
              "Perform your duty selflessly, without attachment"
            </em>{' '}
            — we serve the most vulnerable in rural India. Every child deserves education,
            every elder deserves dignity, and no one should sleep hungry.
          </p>

          <div style={{ width: '40px', height: '1px', background: '#D4A84B', margin: '0 auto' }} />
        </div>
      </section>

      {/* ═══ WHAT WE DO — INTERACTIVE SHOWCASE ═══ */}
      <section
        ref={initiativeSectionRef}
        style={{
          background: '#FAFAFA',
          position: 'relative',
          overflow: 'hidden',
          padding: '100px 24px 120px',
        }}
      >
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute', top: '-200px', right: '-200px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,134,11,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-150px', left: '-150px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,134,11,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div className="wwd-animate" style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              marginBottom: '1.5rem', justifyContent: 'center',
            }}>
              <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(0,0,0,0.1)' }} />
              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#B8860B',
              }}>What We Do</span>
              <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(0,0,0,0.1)' }} />
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 500, color: '#1A1A1A',
              letterSpacing: '-0.01em', marginBottom: '16px',
            }}>Four Pillars of Change</h2>
            <p style={{
              color: 'rgba(0,0,0,0.6)', fontSize: '1.05rem',
              fontFamily: '"Source Sans 3", system-ui, sans-serif',
              maxWidth: '500px', margin: '0 auto',
            }}>Transforming lives through compassion, education, and unwavering dedication</p>
          </div>

          {/* ── DESKTOP: Interactive Tabbed Showcase ── */}
          <div className="wwd-animate hidden-mobile">
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1.2fr',
              gap: '48px', alignItems: 'stretch', minHeight: '520px',
            }}>
              {/* Left: Tab Selector */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {initiatives.map((item, i) => {
                  const isActive = i === activeInitiative
                  return (
                      <button
                      key={item.title}
                      onClick={() => handleInitiativeChange(i)}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: '20px',
                        padding: '28px 24px',
                        background: isActive ? '#FFFFFF' : 'transparent',
                        border: 'none', borderLeft: `3px solid ${isActive ? '#D4A84B' : 'transparent'}`,
                        boxShadow: isActive ? '0 12px 32px rgba(0,0,0,0.06)' : 'none',
                        cursor: 'pointer', textAlign: 'left', width: '100%',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative', overflow: 'hidden',
                        borderRadius: isActive ? '0 16px 16px 0' : '0',
                      }}
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'rgba(0,0,0,0.02)'
                          e.currentTarget.style.borderLeftColor = 'rgba(212,168,75,0.4)'
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.borderLeftColor = 'transparent'
                        }
                      }}
                    >
                      {/* Number */}
                      <span style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: '1.6rem', fontWeight: 500,
                        color: isActive ? '#D4A84B' : 'rgba(0,0,0,0.2)',
                        lineHeight: 1, minWidth: '36px',
                        transition: 'color 0.3s ease',
                      }}>{String(i + 1).padStart(2, '0')}</span>

                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontFamily: '"Playfair Display", Georgia, serif',
                          fontSize: '1.25rem', fontWeight: 600,
                          color: isActive ? '#1A1A1A' : 'rgba(0,0,0,0.5)',
                          marginBottom: '6px', transition: 'color 0.3s ease',
                          letterSpacing: '-0.01em',
                        }}>{item.title}</h3>
                        <p style={{
                          fontFamily: '"Noto Sans Devanagari", sans-serif',
                          fontSize: '0.85rem', fontWeight: 500,
                          color: isActive ? '#D4A84B' : 'rgba(0,0,0,0.4)',
                          transition: 'color 0.3s ease',
                        }}>{item.tagline}</p>
                        {isActive && (
                          <p style={{
                            fontSize: '0.95rem', color: 'rgba(0,0,0,0.65)',
                            lineHeight: 1.7, marginTop: '12px',
                          }}>{item.description}</p>
                        )}
                      </div>

                      {/* Icon */}
                      <svg width="22" height="22" fill="none" stroke={isActive ? '#D4A84B' : 'rgba(0,0,0,0.25)'} viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '4px', transition: 'stroke 0.3s ease' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive ? 2 : 1.5} d={item.icon} />
                      </svg>
                    </button>
                  )
                })}
              </div>

              {/* Right: Featured Image + Content */}
              <div style={{
                position: 'relative', borderRadius: '16px',
                overflow: 'hidden', background: '#111',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              }}>
                {/* Featured Image */}
                <div ref={featuredImageRef} style={{
                  position: 'absolute', inset: 0, zIndex: 0,
                }}>
                  <img
                    src={initiatives[activeInitiative].image}
                    alt={initiatives[activeInitiative].title}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', display: 'block',
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.4) 50%, rgba(17,17,17,0.15) 100%)',
                  }} />
                </div>

                {/* Content Overlay */}
                <div ref={contentRef} style={{
                  position: 'relative', zIndex: 1,
                  padding: '48px 36px', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                  {/* Stat Badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '12px',
                    marginBottom: '20px',
                  }}>
                    <span style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '2.8rem', fontWeight: 400,
                      color: '#D4A84B', lineHeight: 1,
                    }}>{initiatives[activeInitiative].stat}</span>
                    <span style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '0.7rem', fontWeight: 500,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.4,
                    }}>{initiatives[activeInitiative].statLabel}</span>
                  </div>

                  {/* Long Description */}
                  <p style={{
                    fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.8, marginBottom: '28px', maxWidth: '440px',
                  }}>{initiatives[activeInitiative].longDescription}</p>

                  {/* CTA */}
                  <Link
                    to="/initiatives"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '10px',
                      padding: '14px 28px', borderRadius: '8px',
                      background: 'rgba(184,134,11,0.15)',
                      border: '1px solid rgba(184,134,11,0.3)',
                      color: '#D4A84B', fontWeight: 600, fontSize: '0.9rem',
                      textDecoration: 'none', transition: 'all 0.25s ease',
                      cursor: 'pointer', alignSelf: 'flex-start',
                      backdropFilter: 'blur(8px)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(184,134,11,0.25)'
                      e.currentTarget.style.borderColor = 'rgba(184,134,11,0.5)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(184,134,11,0.15)'
                      e.currentTarget.style.borderColor = 'rgba(184,134,11,0.3)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    Explore This Initiative
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE: Card Stack (Horizontal Scroll) ── */}
          <div ref={mobileCardsRef} className="show-mobile-flex mobile-scroll-container hide-scrollbar" style={{
            display: 'none', flexDirection: 'row', gap: '16px', margin: '0 -20px'
          }}>
            {initiatives.map((item, i) => (
              <MobileInitiativeCard key={item.title} item={item} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="wwd-animate" style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link
              to="/initiatives"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '16px 36px', borderRadius: '8px',
                background: '#B8860B', color: '#FFFFFF',
                fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none', transition: 'all 0.25s ease',
                boxShadow: '0 4px 24px rgba(184,134,11,0.3)',
                cursor: 'pointer', letterSpacing: '0.02em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#D4A84B'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(184,134,11,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#B8860B'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(184,134,11,0.3)'
              }}
            >
              View All Initiatives
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT ═══ */}
      <ImpactCounter />

      {/* ═══ CTA ═══ */}
      <SectionCTA
        title="Join Hands with Shree Sneh Foundation"
        description="Your support can change lives. Whether through volunteering, donating, or spreading the word — every act of kindness becomes a ripple of hope."
        buttonText="Connect With Us"
        buttonLink="/connect"
      />
    </>
  )
}
