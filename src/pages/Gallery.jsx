import { useState } from 'react'

const categories = ['All', 'Elder Care', 'Orphanage', 'Events']

const galleryItems = [
  { id: 1, title: 'Morning classes at the village learning center', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80', category: 'Education' },
  { id: 2, title: 'Children receiving school supplies and books', image: 'https://images.unsplash.com/photo-1427504494785-319ce515cd69?auto=format&fit=crop&w=800&q=80', category: 'Education' },
  { id: 3, title: 'Community kitchen serving daily meals', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80', category: 'Meals' },
  { id: 4, title: 'Volunteers distributing food packets to families', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80', category: 'Meals' },
  { id: 5, title: 'Medical check-up camp for senior citizens', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80', category: 'Elder Care' },
  { id: 6, title: 'Daily care and companionship visits', image: 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Elder Care' },
  { id: 7, title: 'Children at the shelter enjoying activities', image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=800&q=80', category: 'Orphanage' },
  { id: 8, title: 'Orphan support program graduation ceremony', image: 'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?auto=format&fit=crop&w=800&q=80', category: 'Orphanage' },
  { id: 9, title: 'Annual community celebration and cultural event', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80', category: 'Events' },
  { id: 10, title: 'Volunteer orientation and training session', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80', category: 'Events' },
  { id: 11, title: 'Digital literacy workshop for village youth', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', category: 'Education' },
  { id: 12, title: 'Festival meal drive reaching 500+ families', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80', category: 'Meals' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? galleryItems : galleryItems.filter(i => i.category === active)

  return (
    <>
      <section style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '160px 24px 80px',
        overflow: 'hidden',
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
        }}>
          <img
            src="gallery.jpg"
            alt="NGO community moments"
            aria-hidden="true"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 40%',
              display: 'block',
            }}
          />
          {/* Gradient Overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(15,12,8,0.75) 0%, rgba(15,12,8,0.6) 40%, rgba(15,12,8,0.85) 100%)',
          }} />
        </div>

        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
            Moments of Change
            <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '24px', maxWidth: '800px', letterSpacing: '-0.02em' }}>
            Our <em style={{ color: '#D4A84B', fontStyle: 'italic' }}>Gallery</em>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, maxWidth: '600px', fontFamily: '"Source Sans 3", system-ui, sans-serif' }}>
            A glimpse into the lives we touch. Every image tells a story of hope.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <hr style={{ border: 'none', height: '1px', background: '#E8E4DF', marginBottom: '48px' }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '48px' }}>
            {categories.map(cat => {
              const isAct = active === cat
              return (
                <button key={cat} onClick={() => setActive(cat)} style={{ padding: '10px 22px', borderRadius: '6px', border: isAct ? '1px solid #B8860B' : '1px solid #E8E4DF', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.03em', transition: 'all 0.2s ease', background: isAct ? '#B8860B' : '#FFFFFF', color: isAct ? '#FFFFFF' : '#6B6B6B', minHeight: '44px' }}>
                  {cat}
                </button>
              )
            })}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {filtered.map(item => (
              <div key={item.id} style={{ background: '#FFFFFF', borderRadius: '8px', overflow: 'hidden', border: '1px solid #E8E4DF', transition: 'all 0.2s ease', cursor: 'pointer' }} onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,26,26,0.06)'; e.currentTarget.style.borderColor = '#D4CFC8' }} onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E8E4DF' }}>
                <div style={{ height: '240px', background: '#F5F3F0', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: '20px' }}>
                  <span style={{ fontFamily: '"IBM Plex Mono", monospace', display: 'inline-block', fontSize: '0.65rem', fontWeight: 500, color: '#B8860B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>{item.category}</span>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1A1A1A', lineHeight: 1.5 }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 24px', color: '#6B6B6B' }}>
              <p style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic' }}>No items found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
