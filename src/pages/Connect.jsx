import { useState } from 'react'

const waysToHelp = [
  { title: 'Volunteer', description: 'Join our on-ground team and directly impact lives through teaching, meal distribution, or elder care visits.' },
  { title: 'Donate', description: 'Your financial contribution helps us sustain and expand our programs across more villages.' },
  { title: 'Spread Awareness', description: 'Share our mission with your network. Awareness is the first step toward transformative change.' },
  { title: 'In-Kind Support', description: 'Donate books, clothes, food supplies, or medical equipment that directly reaches those in need.' },
]

const inputBase = {
  width: '100%', padding: '14px 16px', borderRadius: '6px',
  border: '1px solid #E8E4DF', background: 'transparent',
  color: '#1A1A1A', fontSize: '0.9rem', outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  fontFamily: '"Source Sans 3", system-ui, sans-serif',
  minHeight: '48px',
}

export default function Connect() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: 'volunteer' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()

    const WHATSAPP_NUMBER = '919879794198' // +91 9879794198 without leading +

    const typeLabel = {
      volunteer: 'Volunteer',
      donate: 'Donate',
      'in-kind': 'In-Kind Support',
      other: 'Other Inquiry',
    }[form.type] || form.type

    const message =
      `*New Message — Shree Sneh Foundation*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      (form.phone ? `*Phone:* ${form.phone}\n` : '') +
      `*Interest:* ${typeLabel}\n\n` +
      `*Message:*\n${form.message}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer')

    setSubmitted(true)
  }
  const getFocusStyle = (name) => focused === name
    ? { ...inputBase, borderColor: '#B8860B', boxShadow: '0 0 0 2px rgba(184,134,11,0.1)' }
    : inputBase

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
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1920&auto=format&fit=crop"
            alt=""
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
            Join the Mission
            <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '24px', maxWidth: '800px', letterSpacing: '-0.02em' }}>
            Connect <em style={{ color: '#D4A84B', fontStyle: 'italic' }}>With Us</em>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, maxWidth: '600px', fontFamily: '"Source Sans 3", system-ui, sans-serif' }}>
            Whether you want to volunteer, donate, or simply learn more — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section style={{ padding: '0 24px 80px', background: '#F5F3F0' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
              <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B' }}>How to Help</span>
              <span style={{ flex: '0 0 60px', height: '1px', background: '#E8E4DF' }} />
            </div>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 400, color: '#1A1A1A', letterSpacing: '-0.01em' }}>Ways You Can Make a Difference</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {waysToHelp.map((item, i) => (
              <div key={item.title} style={{ background: '#FFFFFF', borderRadius: '8px', padding: '32px 24px', textAlign: 'center', border: '1px solid #E8E4DF', borderTop: '2px solid #B8860B', transition: 'all 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,26,26,0.06)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '2rem', fontWeight: 400, color: '#B8860B', opacity: 0.5, lineHeight: 1, marginBottom: '16px' }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.7 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
            {/* Form */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B' }}>Get in Touch</span>
                <span style={{ flex: 1, height: '1px', background: '#E8E4DF' }} />
              </div>
              <p style={{ color: '#6B6B6B', fontSize: '0.9rem', marginBottom: '32px' }}>We typically respond within 24 hours</p>

              {submitted ? (
                <div style={{ background: '#F5F3F0', border: '1px solid #E8E4DF', borderRadius: '8px', padding: '48px 32px', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.4rem', fontWeight: 400, color: '#1A1A1A', marginBottom: '12px' }}>
                    <em>Dhanyavaad!</em>
                  </h3>
                  <p style={{ color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px' }}>Your message has been received. Our team will reach out soon.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '', type: 'volunteer' }) }}
                    style={{ background: '#B8860B', color: '#FFFFFF', border: 'none', borderRadius: '6px', padding: '12px 28px', fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem', transition: 'all 0.2s ease', minHeight: '44px' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: false },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{ display: 'block', fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '8px' }}>
                        {field.label} {field.required && <span style={{ color: '#B8860B' }}>*</span>}
                      </label>
                      <input name={field.name} type={field.type} required={field.required} value={form[field.name]} onChange={handleChange} placeholder={field.placeholder} style={getFocusStyle(field.name)} onFocus={() => setFocused(field.name)} onBlur={() => setFocused(null)} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '8px' }}>I want to <span style={{ color: '#B8860B' }}>*</span></label>
                    <select name="type" value={form.type} onChange={handleChange} style={getFocusStyle('type')} onFocus={() => setFocused('type')} onBlur={() => setFocused(null)}>
                      <option value="volunteer">Volunteer</option>
                      <option value="donate">Donate</option>
                      <option value="in-kind">Provide In-Kind Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '8px' }}>Message <span style={{ color: '#B8860B' }}>*</span></label>
                    <textarea name="message" rows={4} required value={form.message} onChange={handleChange} placeholder="Tell us how you'd like to help..." style={{ ...getFocusStyle('message'), resize: 'none' }} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
                  </div>
                  <button type="submit" style={{ width: '100%', padding: '14px 24px', borderRadius: '6px', border: 'none', background: '#B8860B', color: '#FFFFFF', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'all 0.2s ease', minHeight: '48px', letterSpacing: '0.02em' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#D4A84B'; e.currentTarget.style.transform = 'translateY(-0.5px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#B8860B'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >Send Message</button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B' }}>Contact Information</span>
                <span style={{ flex: 1, height: '1px', background: '#E8E4DF' }} />
              </div>
              <p style={{ color: '#6B6B6B', fontSize: '0.9rem', marginBottom: '32px' }}>Reach us through any of these channels</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                {[
                  { label: 'Email', value: 'contact@shreesnehfoundation.org', sub: 'For general inquiries' },
                  { label: 'Phone', value: '+91 9879794198', sub: 'Mon–Sat, 9 AM – 6 PM' },
                  { label: 'Address', value: '1445, Piplawalo Khancho,\nSheth Ni Pole, Mandvi Ni Pole,\nManekchowk, Ahmedabad-380001.' },
                  { label: 'Office Hours', value: 'Monday – Saturday: 9 AM – 6 PM', sub: 'Emergency helpline available Sundays' },
                ].map(item => (
                  <div key={item.label} style={{ paddingBottom: '20px', borderBottom: '1px solid #E8E4DF' }}>
                    <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '6px' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#1A1A1A', fontWeight: 500, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.value}</div>
                    {item.sub && <div style={{ fontSize: '0.8rem', color: '#6B6B6B', marginTop: '4px' }}>{item.sub}</div>}
                  </div>
                ))}
              </div>

              {/* Bank Details */}
              {/* <div style={{ background: '#F5F3F0', border: '1px solid #E8E4DF', borderRadius: '8px', padding: '28px' }}>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600, fontSize: '1rem', color: '#1A1A1A', marginBottom: '16px' }}>Bank Details for Donation</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    ['Account Name', 'Shree Sneh Foundation'],
                    ['Account No.', '1234 5678 9012'],
                    ['IFSC Code', 'SBIN0001234'],
                    ['Bank', 'State Bank of India'],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#6B6B6B' }}>{k}</span>
                      <span style={{ color: '#1A1A1A', fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
