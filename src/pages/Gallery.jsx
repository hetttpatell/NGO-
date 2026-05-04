import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'

// ─── Real local gallery items (public/gallery/) ─────────────────────────────
// Tab name = first word of filename (capitalised). "all-*" files appear in All.
// "awards-*" files are mapped to the "Events" tab.
const galleryItems = [
  // ── All ──────────────────────────────────────────────────────────────────
  { id: 'all-1',       src: '/gallery/all-1.jpeg',       tab: 'All',      type: 'image', title: 'All – 1' },
  { id: 'all-2',       src: '/gallery/all-2.jpeg',       tab: 'All',      type: 'image', title: 'All – 2' },
  { id: 'all-3',       src: '/gallery/all-3.jpeg',       tab: 'All',      type: 'image', title: 'All – 3' },
  { id: 'all-4',       src: '/gallery/all-4.jpeg',       tab: 'All',      type: 'image', title: 'All – 4' },
  { id: 'all-video-1', src: '/gallery/all-video-1.mp4',  tab: 'All',      type: 'video', title: 'All – Video 1', poster: '/gallery/all-1.jpeg' },

  // ── Orphanage ────────────────────────────────────────────────────────────
  { id: 'orphanage-1',  src: '/gallery/Orphanage-1.jpeg',  tab: 'Orphanage', type: 'image', title: 'Orphanage – 1'  },
  { id: 'orphanage-2',  src: '/gallery/Orphanage-2.jpeg',  tab: 'Orphanage', type: 'image', title: 'Orphanage – 2'  },
  { id: 'orphanage-3',  src: '/gallery/Orphanage-3.jpeg',  tab: 'Orphanage', type: 'image', title: 'Orphanage – 3'  },
  { id: 'orphanage-4',  src: '/gallery/Orphanage-4.jpeg',  tab: 'Orphanage', type: 'image', title: 'Orphanage – 4'  },
  { id: 'orphanage-5',  src: '/gallery/Orphanage-5.jpeg',  tab: 'Orphanage', type: 'image', title: 'Orphanage – 5'  },
  { id: 'orphanage-6',  src: '/gallery/Orphanage-6.jpeg',  tab: 'Orphanage', type: 'image', title: 'Orphanage – 6'  },
  { id: 'orphanage-7',  src: '/gallery/Orphanage-7.jpeg',  tab: 'Orphanage', type: 'image', title: 'Orphanage – 7'  },
  { id: 'orphanage-8',  src: '/gallery/Orphanage-8.jpeg',  tab: 'Orphanage', type: 'image', title: 'Orphanage – 8'  },
  { id: 'orphanage-9',  src: '/gallery/Orphanage-9.jpeg',  tab: 'Orphanage', type: 'image', title: 'Orphanage – 9'  },
  { id: 'orphanage-10', src: '/gallery/Orphanage-10.jpeg', tab: 'Orphanage', type: 'image', title: 'Orphanage – 10' },
  { id: 'orphanage-11', src: '/gallery/Orphanage-11.jpeg', tab: 'Orphanage', type: 'image', title: 'Orphanage – 11' },

  // ── Events (awards) ──────────────────────────────────────────────────────
  { id: 'awards-1', src: '/gallery/awards-1.jpeg', tab: 'Events', type: 'image', title: 'Events – 1' },
]

const TABS = ['All', 'Orphanage', 'Events']

// ─── Tiny play-button SVG overlay for video cards ────────────────────────────
const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.55)" />
    <polygon points="19,15 37,24 19,33" fill="#fff" />
  </svg>
)

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ item, onClose, onPrev, onNext }) {
  const boxRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(boxRef.current, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.28, ease: 'power2.out' })
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(10,8,5,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
      }}
    >
      {/* prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
        style={navBtn}
      >
        ‹
      </button>

      {/* media */}
      <div ref={boxRef} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', position: 'relative' }}>
        {item.type === 'video' ? (
          <video
            src={item.src}
            controls
            autoPlay
            style={{ maxWidth: '90vw', maxHeight: '86vh', borderRadius: '10px', display: 'block' }}
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            style={{ maxWidth: '90vw', maxHeight: '86vh', borderRadius: '10px', display: 'block', objectFit: 'contain' }}
          />
        )}
        <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginTop: '12px', fontSize: '0.85rem', fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.06em' }}>
          {item.title}
        </p>
      </div>

      {/* next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next"
        style={navBtn}
      >
        ›
      </button>

      {/* close */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'fixed', top: '20px', right: '24px',
          background: 'none', border: 'none', color: '#fff', fontSize: '2rem',
          cursor: 'pointer', lineHeight: 1, padding: '4px 8px',
        }}
      >
        ×
      </button>
    </div>
  )
}

const navBtn = {
  background: 'none', border: 'none',
  color: 'rgba(255,255,255,0.7)', fontSize: '3.5rem',
  cursor: 'pointer', padding: '0 20px', lineHeight: 1,
  flexShrink: 0,
  transition: 'color 0.15s',
}

// ─── Gallery Card ─────────────────────────────────────────────────────────────
function GalleryCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        background: '#F5F3F0',
        border: hovered ? '2px solid #B8860B' : '2px solid #E0D9CF',
        cursor: 'pointer',
        boxShadow: hovered ? '0 8px 28px rgba(184,134,11,0.18)' : '0 2px 8px rgba(26,26,26,0.06)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        aspectRatio: '4/3',
        position: 'relative',
      }}
    >
      {item.type === 'image' ? (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          decoding="async"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.5s ease',
            display: 'block',
          }}
        />
      ) : (
        <>
          <img
            src={item.poster}
            alt={item.title}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s ease',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.18)',
          }}>
            <PlayIcon />
          </div>
        </>
      )}

      {/* Subtle bottom tag */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.52) 0%, transparent 100%)',
        padding: '20px 10px 8px',
        pointerEvents: 'none',
      }}>
        <span style={{
          fontSize: '0.58rem',
          fontFamily: '"IBM Plex Mono", monospace',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.75)',
          fontWeight: 500,
        }}>
          {item.tab}
        </span>
      </div>
    </div>
  )
}

// ─── Responsive grid CSS (2-col on mobile, auto-fill on wider) ──────────────
const gridCss = `
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media (min-width: 600px) {
    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 18px;
    }
  }
`

// ─── Main Gallery Page ────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const gridRef = useRef(null)

  const filtered = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.tab === activeTab)

  // GSAP stagger when tab changes
  const animateGrid = useCallback(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-card]')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: 0.38, stagger: 0.045, ease: 'power2.out', clearProps: 'opacity,transform' }
    )
  }, [])

  useEffect(() => { animateGrid() }, [activeTab, animateGrid])

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevItem = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)
  const nextItem = () => setLightboxIndex((i) => (i + 1) % filtered.length)

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '160px 24px 80px',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/gallery/all-1.jpeg"
            alt="Gallery hero"
            aria-hidden="true"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(15,12,8,0.72) 0%, rgba(15,12,8,0.55) 40%, rgba(15,12,8,0.88) 100%)',
          }} />
        </div>

        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
            Moments of Change
            <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Our <em style={{ color: '#D4A84B', fontStyle: 'italic' }}>Gallery</em>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto', fontFamily: '"Source Sans 3", system-ui, sans-serif' }}>
            A glimpse into the lives we touch. Every image tells a story of hope.
          </p>
        </div>
      </section>

      {/* ── Grid Section ── */}
      <section style={{ padding: '0 24px 100px', background: '#FDFBF8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <hr style={{ border: 'none', height: '1px', background: '#E8E4DF', marginBottom: '48px' }} />

          {/* Tab filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '48px' }}>
            {TABS.map((tab) => {
              const isAct = activeTab === tab
              return (
                <button
                  key={tab}
                  id={`gallery-tab-${tab.toLowerCase()}`}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '10px 26px',
                    borderRadius: '6px',
                    border: isAct ? '1px solid #B8860B' : '1px solid #E8E4DF',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease',
                    background: isAct ? '#B8860B' : '#FFFFFF',
                    color: isAct ? '#FFFFFF' : '#6B6B6B',
                    minHeight: '44px',
                    fontFamily: '"IBM Plex Mono", monospace',
                  }}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          {/* Responsive grid: 2-col on mobile, auto-fill on desktop */}
          <style>{gridCss}</style>
          <div ref={gridRef} className="gallery-grid">
            {filtered.map((item, index) => (
              <div key={item.id} data-card>
                <GalleryCard item={item} onClick={() => openLightbox(index)} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 24px', color: '#6B6B6B' }}>
              <p style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic' }}>
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </>
  )
}
