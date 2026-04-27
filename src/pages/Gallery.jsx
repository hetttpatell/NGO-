import { useState } from 'react'
import AmbientGlow from '../components/BlurShape'

const categories = ['All', 'Education', 'Meals', 'Elder Care', 'Orphanage', 'Events']

const galleryItems = [
  { id: 1, category: 'Education', title: 'Morning class at village learning center' },
  { id: 2, category: 'Meals', title: 'Community kitchen serving lunch for families' },
  { id: 3, category: 'Elder Care', title: 'Health check-up camp for senior citizens' },
  { id: 4, category: 'Education', title: 'Students receiving new school supplies' },
  { id: 5, category: 'Orphanage', title: 'Children celebrating Diwali together' },
  { id: 6, category: 'Events', title: 'Annual fundraising cultural night' },
  { id: 7, category: 'Meals', title: 'Food packet distribution drive' },
  { id: 8, category: 'Education', title: 'Digital literacy workshop for rural youth' },
  { id: 9, category: 'Elder Care', title: 'Companionship visit to elderly homes' },
  { id: 10, category: 'Orphanage', title: 'Art and craft session with children' },
  { id: 11, category: 'Events', title: 'Volunteer appreciation ceremony 2024' },
  { id: 12, category: 'Meals', title: 'Breakfast program at rural school' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? galleryItems : galleryItems.filter(i => i.category === active)

  return (
    <>
      <section style={{ position: 'relative', padding: 'clamp(120px, 15vw, 180px) 24px 80px', overflow: 'hidden' }}>
        <AmbientGlow color="#B8860B" size="500px" position={{ top: '-200px', right: '-100px' }} opacity={0.02} />
        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '1px', background: '#B8860B' }} />
            Moments of Change
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Our <em style={{ color: '#B8860B' }}>Gallery</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6B6B6B', lineHeight: 1.8, maxWidth: '550px' }}>
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
                <div style={{ height: '200px', background: '#F5F3F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '3rem', fontWeight: 400, color: '#B8860B', opacity: 0.2 }}>{String(item.id).padStart(2, '0')}</div>
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
