import { Link } from 'react-router-dom'

export default function SectionCTA({ title, description, buttonText, buttonLink }) {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 24px',
      background: '#1A1A1A',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: '#B8860B',
        filter: 'blur(160px)',
        opacity: 0.05,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
      }}>
        {/* Decorative rule */}
        <div style={{
          width: '40px',
          height: '1px',
          background: '#B8860B',
          margin: '0 auto 32px',
        }} />

        <h2 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 400,
          color: '#FFFFFF',
          marginBottom: '20px',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}>{title}</h2>

        <p style={{
          fontSize: '1.05rem',
          color: 'rgba(255,255,255,0.55)',
          maxWidth: '540px',
          margin: '0 auto 40px',
          lineHeight: 1.8,
          fontFamily: '"Source Sans 3", system-ui, sans-serif',
        }}>{description}</p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to={buttonLink}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 36px',
              borderRadius: '6px',
              background: '#B8860B',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.95rem',
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
            {buttonText}
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="tel:+919876543210"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px',
              borderRadius: '6px',
              background: 'transparent',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500,
              fontSize: '0.95rem',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.2s ease',
              minHeight: '48px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#B8860B'
              e.currentTarget.style.color = '#B8860B'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}
