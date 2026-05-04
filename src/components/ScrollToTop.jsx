import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // Use layoutEffect + requestAnimationFrame to ensure scroll happens
    // before GSAP ScrollTrigger calculates positions
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Double-ensure after paint in case ScrollTrigger resets position
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return null
}
