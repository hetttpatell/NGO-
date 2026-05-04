import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/initiatives', label: 'Initiatives' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/connect', label: 'Connect' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        background: scrolled ? 'rgba(250,250,248,0.97)' : 'rgba(15,12,8,0.3)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)',
        borderBottom: scrolled ? '1px solid #E8E4DF' : '1px solid transparent',
      }}
    >
      <nav style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              fontFamily: '"Noto Sans Devanagari", sans-serif',
              fontWeight: 700,
              fontSize: '1.5rem',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}>
              <span style={{ color: scrolled ? '#B8860B' : '#D4A84B' }}>श्री</span>
              <span style={{ color: scrolled ? '#1A1A1A' : '#FFFFFF' }}>कृष्ण</span>
            </div>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: scrolled ? '#6B6B6B' : 'rgba(255,255,255,0.6)',
              borderLeft: scrolled ? '1px solid #E8E4DF' : '1px solid rgba(255,255,255,0.25)',
              paddingLeft: '16px',
            }}>
              NGO Foundation
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden-mobile">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '8px 18px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    color: isActive ? '#D4A84B' : (scrolled ? '#1A1A1A' : '#FFFFFF'),
                    borderBottom: isActive ? '1.5px solid #D4A84B' : '1.5px solid transparent',
                    fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = '#D4A84B'
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = scrolled ? '#1A1A1A' : '#FFFFFF'
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            {location.pathname !== '/connect' && (
              <Link
                to="/connect"
                style={{
                  marginLeft: '16px',
                  padding: '10px 24px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  background: '#B8860B',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
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
                Donate
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '8px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'none',
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke={scrolled ? '#1A1A1A' : '#FFFFFF'} viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '400px' : '0',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
          background: 'rgba(250,250,248,0.99)',
        }} className="show-mobile">
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '2px',
            padding: '12px 0 20px',
            borderTop: '1px solid #E8E4DF',
          }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '12px 16px',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 600 : 400,
                    textDecoration: 'none',
                    color: isActive ? '#B8860B' : '#1A1A1A',
                    borderLeft: isActive ? '2px solid #B8860B' : '2px solid transparent',
                    transition: 'all 0.2s ease',
                    fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              to="/connect"
              style={{
                margin: '8px 16px 0',
                padding: '12px 16px',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                background: '#B8860B',
                color: '#FFFFFF',
                textAlign: 'center',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Donate & Get Involved
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
