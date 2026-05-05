import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionCTA from '../components/SectionCTA'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    title: 'Seva — Selfless Service',
    description: 'Every action we take is rooted in selfless service, inspired by the Bhagavad Gita\'s call to act without expectation of reward.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Karuna — Compassion',
    description: 'We approach every individual with empathy and kindness, recognizing the inherent dignity in every human being.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Sahayog — Cooperation',
    description: 'We believe lasting change comes through collective effort — partnering with communities, volunteers, and supporters.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Vikas — Growth',
    description: 'We are committed to sustainable development that empowers communities to grow and thrive independently.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'Dhwani panchal',
    role: 'Activity Head & Executer',
    bio: 'I believe that every small step can bring a big change in someone\'s life.I am here to do my bit for the society with my team.I am looking forward to gain a lot of love and support from all of you to make this initiative a success.',
    image: '/Dwanipanchal.png'
  },
  {
    name: 'Hardik Shah',
    role: 'Management Head & Executer',
    bio: 'I believe that every small step can bring a big change in someone\'s life.I am here to do my bit for the society with my team.I am looking forward to gain a lot of love and support from all of you to make this initiative a success.',
    image: '/hardik.png'
  },
  // {
  //   name: 'Amit Verma',
  //   role: 'Elder Care Lead',
  //   bio: 'Geriatric care specialist ensuring dignity and comfort for every elder in our support network.',
  //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  // },
  // {
  //   name: 'Sunita Devi',
  //   role: 'Education Officer',
  //   bio: 'Former village schoolteacher who now oversees education programs across 40+ villages.',
  //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  // },
]

const wwdItems = [
  {
    title: 'Hunger Relief',
    desc: 'Daily meal programs nourishing families across 5+ villages with dignity and care.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    stat: '55+',
    statLabel: 'Meals Served Weekly',
  },
  {
    title: 'Education',
    desc: 'Free education centers empowering children with knowledge and equal opportunity.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    stat: '50+',
    statLabel: 'Students Enrolled',
  },
  {
    title: 'Elder Care',
    desc: 'Compassionate support ensuring our elders live with dignity, comfort, and belonging.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    stat: '45+',
    statLabel: 'Seniors Supported',
  },
  {
    title: 'Orphan Shelter',
    desc: 'A loving home for children without families — giving them safety, warmth, and hope.',
    img: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=800&q=80',
    stat: '35+',
    statLabel: 'Children Sheltered',
  },
]

export default function About() {
  const wwdRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered before ScrollTrigger calculates positions
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // What We Do cards
        gsap.fromTo('.wwd-card',
          { y: 60, opacity: 0 },
          {
            scrollTrigger: { trigger: wwdRef.current, start: 'top 85%', toggleActions: 'play none none none', once: true },
            y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          }
        )

        // Values cards
        gsap.fromTo('.value-card',
          { y: 50, opacity: 0 },
          {
            scrollTrigger: { trigger: valuesRef.current, start: 'top 85%', toggleActions: 'play none none none', once: true },
            y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          }
        )

        // Team cards
        gsap.fromTo('.team-card',
          { y: 50, opacity: 0, scale: 0.95 },
          {
            scrollTrigger: { trigger: teamRef.current, start: 'top 85%', toggleActions: 'play none none none', once: true },
            y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.13, ease: 'power3.out',
          }
        )

        // Section headers
        gsap.utils.toArray('.about-section-header').forEach(el => {
          gsap.fromTo(el,
            { y: 30, opacity: 0 },
            {
              scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none', once: true },
              y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
            }
          )
        })

        // Refresh ScrollTrigger after all animations are set up
        ScrollTrigger.refresh()
      })

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '160px 24px 80px',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
        }}>
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920&q=80"
            alt=""
            aria-hidden="true"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 40%',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(15,12,8,0.75) 0%, rgba(15,12,8,0.6) 40%, rgba(15,12,8,0.85) 100%)',
          }} />
        </div>

        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.7rem', fontWeight: 500,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)', marginBottom: '24px',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
            Our Story
            <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
          </div>

          <h1 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '24px',
            maxWidth: '800px',
            letterSpacing: '-0.02em',
          }}>
            About <em style={{ color: '#D4A84B', fontStyle: 'italic' }}>Shree Sneh Foundation</em>
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.8,
            maxWidth: '600px',
            fontFamily: '"Source Sans 3", system-ui, sans-serif',
          }}>
            Born from a simple act of kindness in Ahmedabad, Gujarat,
            Shree Sneh Foundation has grown into a beacon of hope for communities across Gujarat.
          </p>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section style={{ padding: '0 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <hr style={{ border: 'none', height: '1px', background: '#E8E4DF', marginBottom: '80px' }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px', alignItems: 'start',
          }}>
            {/* Story text */}
            <div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.75rem', fontWeight: 500,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#B8860B',
                }}>The Beginning</span>
                <span style={{ flex: 1, height: '1px', background: '#E8E4DF' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  'In 2022, a group of young professionals from Ahmedabad, Gujarat witnessed children walking long distances just to reach the nearest school. They saw elders living alone without medical care, and families struggling to afford a single meal a day.',
                  'Moved by these realities and inspired by the teachings of Lord Krishna — particularly the principle of Nishkama Karma (selfless action) — they decided to act. What began as a small community kitchen feeding 20 families has evolved into a multi-faceted organization touching lives across 5+ villages.',
                  'Today, Shree Sneh Foundation runs education centers, daily meal programs, elder care facilities, and orphan shelters — all driven by the belief that compassion can transform communities.',
                ].map((para, i) => (
                  <p key={i} style={{ fontSize: '0.95rem', color: '#6B6B6B', lineHeight: 1.9 }}>{para}</p>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.75rem', fontWeight: 500,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#B8860B',
                }}>Milestones</span>
                <span style={{ flex: 1, height: '1px', background: '#E8E4DF' }} />
              </div>

              {[
                { year: '2022', event: 'Founded with a community kitchen serving 20 families' },
                { year: '2023', event: 'Launched first free education center in 3 villages' },
                { year: '2024', event: 'Officially registered as Shree Sneh Foundation' },
                { year: '2025', event: 'Expanded elder care to support 45+ seniors' },
                { year: '2026', event: 'Now serving 5+ villages across Ahmedabad and surrounding areas' },
              ].map((item, i) => (
                <div key={item.year} style={{
                  display: 'flex', gap: '20px',
                  paddingBottom: i < 4 ? '24px' : '0',
                  marginBottom: i < 4 ? '24px' : '0',
                  borderBottom: i < 4 ? '1px solid #E8E4DF' : 'none',
                }}>
                  <div style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#B8860B',
                    lineHeight: 1,
                    minWidth: '60px',
                    flexShrink: 0,
                  }}>{item.year}</div>
                  <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.7 }}>{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE DO — Redesigned ═══ */}
      <section ref={wwdRef} style={{
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #1A1A1A 0%, #2A2420 100%)',
      }}>
        {/* Subtle pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

        <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="about-section-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              marginBottom: '1.5rem', justifyContent: 'center',
            }}>
              <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.75rem', fontWeight: 500,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#D4A84B',
              }}>What We Do</span>
              <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 400, color: '#FFFFFF', letterSpacing: '-0.01em',
              marginBottom: '16px',
            }}>Transforming Lives Through <em style={{ color: '#D4A84B', fontStyle: 'italic' }}>Action</em></h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '540px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Four pillars of service that drive our mission to uplift communities across Gujarat.
            </p>
          </div>

          <div className="about-grid-4">
            {wwdItems.map((item) => (
              <div key={item.title} className="wwd-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
                {/* Image */}
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <img className="wwd-img" src={item.img} alt={item.title} loading="lazy" />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                  }} />
                  {/* Stat badge */}
                  <div style={{
                    position: 'absolute', bottom: '14px', left: '16px',
                    display: 'flex', alignItems: 'baseline', gap: '6px', flexWrap: 'wrap'
                  }}>
                    <span className="wwd-stat" style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '1.5rem', fontWeight: 700, color: '#D4A84B',
                      lineHeight: 1,
                    }}>{item.stat}</span>
                    <span className="wwd-stat-label" style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '0.55rem', fontWeight: 500,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.8)',
                    }}>{item.statLabel}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="wwd-content" style={{ padding: '24px 20px 28px' }}>
                  <h3 style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 600, fontSize: '1.15rem', color: '#FFFFFF',
                    marginBottom: '8px', letterSpacing: '-0.01em',
                  }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GUIDING PRINCIPLES — Redesigned ═══ */}
      <section ref={valuesRef} style={{
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden',
        background: '#F5F3F0',
      }}>
        {/* Decorative blur */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-80px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,134,11,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '250px', height: '250px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,134,11,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="about-section-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              marginBottom: '1.5rem', justifyContent: 'center',
            }}>
              <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.75rem', fontWeight: 500,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#B8860B',
              }}>Guiding Principles</span>
              <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 400, color: '#1A1A1A', letterSpacing: '-0.01em',
              marginBottom: '14px',
            }}>The Values That <em style={{ color: '#B8860B', fontStyle: 'italic' }}>Guide Us</em></h2>
            <p style={{ color: '#6B6B6B', maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Ancient wisdom meets modern compassion — the four pillars of our foundation.
            </p>
          </div>

          <div className="about-grid-4">
            {values.map((v, i) => (
              <div key={v.title} className="value-card">
                {/* Number watermark */}
                <div style={{
                  position: 'absolute', top: '16px', right: '20px',
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '3.5rem', fontWeight: 700,
                  color: 'rgba(184,134,11,0.05)',
                  lineHeight: 1, pointerEvents: 'none',
                }}>{String(i + 1).padStart(2, '0')}</div>

                <div className="value-icon">
                  {v.icon}
                </div>
                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 600, fontSize: '1.1rem', color: '#1A1A1A',
                  marginBottom: '10px', letterSpacing: '-0.01em',
                }}>{v.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.8 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OUR TEAM — Redesigned ═══ */}
      <section ref={teamRef} style={{
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden',
        background: '#FFFFFF',
      }}>
        {/* Subtle bg pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle at 1px 1px, #B8860B 0.5px, transparent 0)',
          backgroundSize: '40px 40px', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="about-section-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              marginBottom: '1.5rem', justifyContent: 'center',
            }}>
              <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.75rem', fontWeight: 500,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#B8860B',
              }}>Our Team</span>
              <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 400, color: '#1A1A1A', letterSpacing: '-0.01em',
              marginBottom: '14px',
            }}>The People Behind the <em style={{ color: '#B8860B', fontStyle: 'italic' }}>Mission</em></h2>
            <p style={{ color: '#6B6B6B', maxWidth: '460px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Passionate individuals united by one purpose — uplifting lives.
            </p>
          </div>

          <div className="about-grid-4">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                {/* Decorative accent circle behind avatar */}
                <div style={{
                  position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
                  width: '120px', height: '120px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(184,134,11,0.04) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                <div className="team-avatar">
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>

                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 600, fontSize: '1.1rem', color: '#1A1A1A',
                  marginBottom: '6px',
                }}>{member.name}</h3>

                <p style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.6rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#B8860B', marginBottom: '16px',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                }}>
                  <span style={{
                    width: '16px', height: '1px', background: '#B8860B', opacity: 0.4,
                  }} />
                  <span className="team-role">{member.role}</span>
                  <span style={{
                    width: '16px', height: '1px', background: '#B8860B', opacity: 0.4,
                  }} />
                </p>

                <p style={{ fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.75 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Want to Be Part of Our Journey?"
        description="We are always looking for passionate individuals who want to make a difference in rural communities. Join our family of changemakers."
        buttonText="Get Involved"
        buttonLink="/connect"
      />
    </>
  )
}
