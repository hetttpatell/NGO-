import AmbientGlow from '../components/BlurShape'
import SectionCTA from '../components/SectionCTA'

const values = [
  {
    title: 'Seva — Selfless Service',
    description: 'Every action we take is rooted in selfless service, inspired by the Bhagavad Gita\'s call to act without expectation of reward.',
  },
  {
    title: 'Karuna — Compassion',
    description: 'We approach every individual with empathy and kindness, recognizing the inherent dignity in every human being.',
  },
  {
    title: 'Sahayog — Cooperation',
    description: 'We believe lasting change comes through collective effort — partnering with communities, volunteers, and supporters.',
  },
  {
    title: 'Vikas — Growth',
    description: 'We are committed to sustainable development that empowers communities to grow and thrive independently.',
  },
]

const team = [
  { name: 'Rajesh Sharma', role: 'Founder & Director', bio: 'A retired teacher who dedicated his life to rural education after witnessing children walk miles to school.', initial: 'R' },
  { name: 'Priya Patel', role: 'Program Coordinator', bio: 'Social worker with 15 years of experience in community development and hunger relief programs.', initial: 'P' },
  { name: 'Amit Verma', role: 'Elder Care Lead', bio: 'Geriatric care specialist ensuring dignity and comfort for every elder in our support network.', initial: 'A' },
  { name: 'Sunita Devi', role: 'Education Officer', bio: 'Former village schoolteacher who now oversees education programs across 50+ villages.', initial: 'S' },
]

export default function About() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{
        position: 'relative',
        padding: 'clamp(120px, 15vw, 180px) 24px 80px',
        overflow: 'hidden',
      }}>
        <AmbientGlow color="#B8860B" size="500px" position={{ top: '-200px', right: '-100px' }} opacity={0.02} />

        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.7rem', fontWeight: 500,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#B8860B', marginBottom: '24px',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <span style={{ width: '32px', height: '1px', background: '#B8860B' }} />
            Our Story
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
            About <em style={{ color: '#B8860B' }}>Shreekrishna NGO</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6B6B6B', lineHeight: 1.8, maxWidth: '560px' }}>
            Born from a simple act of kindness in a small Uttar Pradesh village,
            Shreekrishna NGO has grown into a beacon of hope for thousands across rural India.
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
                  'In 2015, a group of young professionals from a small village in Uttar Pradesh witnessed children walking over 5 kilometers just to reach the nearest school. They saw elders living alone without medical care, and families struggling to afford a single meal a day.',
                  'Moved by these realities and inspired by the teachings of Lord Krishna — particularly the principle of Nishkama Karma (selfless action) — they decided to act. What began as a small community kitchen feeding 20 families has evolved into a multi-faceted organization touching lives across 50+ villages.',
                  'Today, Shreekrishna NGO runs education centers, daily meal programs, elder care facilities, and orphan shelters — all driven by the belief that compassion can transform communities.',
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
                { year: '2015', event: 'Founded with a community kitchen serving 20 families' },
                { year: '2017', event: 'Launched first free education center in 3 villages' },
                { year: '2019', event: 'Expanded elder care program to 200+ seniors' },
                { year: '2021', event: 'Opened first orphan shelter with 40 children' },
                { year: '2024', event: 'Now serving 50+ villages across Uttar Pradesh' },
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

      {/* ═══ CORE VALUES ═══ */}
      <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden', background: '#F5F3F0' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400, color: '#1A1A1A', letterSpacing: '-0.01em',
            }}>Our Core Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '36px 28px',
                  border: '1px solid #E8E4DF',
                  borderTop: '2px solid #B8860B',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,26,26,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: '#B8860B',
                  opacity: 0.5,
                  lineHeight: 1,
                  marginBottom: '16px',
                }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 600, fontSize: '1.1rem', color: '#1A1A1A',
                  marginBottom: '12px', letterSpacing: '-0.01em',
                }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.8 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400, color: '#1A1A1A', letterSpacing: '-0.01em',
            }}>The People Behind the Mission</h2>
            <p style={{ color: '#6B6B6B', marginTop: '12px' }}>Passionate individuals united by one purpose</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '36px 24px',
                  textAlign: 'center',
                  border: '1px solid #E8E4DF',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,26,26,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '68px', height: '68px', borderRadius: '50%',
                  background: '#F5F3F0',
                  border: '1px solid #E8E4DF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', fontWeight: 400, color: '#B8860B',
                  margin: '0 auto 20px',
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}>
                  {member.initial}
                </div>
                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 600, fontSize: '1.05rem', color: '#1A1A1A',
                  marginBottom: '4px',
                }}>{member.name}</h3>
                <p style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.65rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#B8860B', marginBottom: '14px',
                }}>{member.role}</p>
                <p style={{ fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.7 }}>{member.bio}</p>
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
