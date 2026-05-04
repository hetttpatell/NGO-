import { Link } from 'react-router-dom'

const footerLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/initiatives', label: 'Our Initiatives' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/connect', label: 'Get Involved' },
]

export default function Footer() {
  return (
    <footer style={{ position: 'relative', color: '#FFFFFF', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img 
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=80" 
          alt="" 
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,12,8,0.98) 0%, rgba(26,26,26,0.92) 100%)' }} />
      </div>

      {/* Top rule — thin gold accent */}
      <div style={{ position: 'relative', zIndex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,134,11,0.5), transparent)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1024px', margin: '0 auto', padding: '80px 24px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '4px',
              }}>
                <span style={{ color: '#B8860B' }}>Shree Sneh</span> Foundation
              </div>
              <div style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
              }}>Foundation</div>
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              maxWidth: '280px',
              fontFamily: '"Source Sans 3", system-ui, sans-serif',
            }}>
              Empowering rural communities through education, hunger relief, and compassionate care. Rooted in the spirit of Nishkama Karma.
            </p>
            <div style={{
              marginTop: '24px',
              padding: '12px 16px',
              borderLeft: '2px solid #B8860B',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.55)',
              fontFamily: '"Playfair Display", Georgia, serif',
              fontStyle: 'italic',
            }}>
              "सर्वे भवन्तु सुखिनः" — May all be happy
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontWeight: 500,
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#B8860B',
              marginBottom: '24px',
            }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease',
                    fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#B8860B'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontWeight: 500,
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#B8860B',
              marginBottom: '24px',
            }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Email', text: 'contact@shreesnehfoundation.org' },
                { label: 'Phone', text: '+91 9879794198' },
                { label: 'Address', text: 'Manekchowk, Ahmedabad 380001' },
                { label: 'Hours', text: 'Mon–Sat: 9 AM – 6 PM' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    marginBottom: '3px',
                  }}>{item.label}</div>
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontWeight: 500,
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#B8860B',
              marginBottom: '24px',
            }}>Make a Difference</h4>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '24px' }}>
              Every rupee, every hour creates a ripple of change across rural India.
            </p>
            <Link
              to="/connect"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 28px',
                borderRadius: '6px',
                background: '#B8860B',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                minHeight: '44px',
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
              Donate Now
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Shree Sneh Foundation. All rights reserved.
          </p>
          <p style={{
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.2)',
            fontFamily: '"Playfair Display", Georgia, serif',
            fontStyle: 'italic',
          }}>
            For rural India, with love
          </p>
        </div>
      </div>
    </footer>
  )
}
