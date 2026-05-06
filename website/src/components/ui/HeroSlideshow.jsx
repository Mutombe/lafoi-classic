import React, { useEffect, useRef, useState } from 'react'
import OptimizedImage from './OptimizedImage'

export default function HeroSlideshow({
  slides = [],
  interval = 6500,
  overlay = true,
  parallax = true,
  kenBurns = true,
  className = '',
}) {
  const [active, setActive] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, interval)
    return () => clearInterval(id)
  }, [slides.length, interval])

  useEffect(() => {
    if (!parallax) return
    const onScroll = () => setScrollY(window.scrollY || 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [parallax])

  if (!slides.length) return null

  const parallaxY = parallax ? Math.min(scrollY * 0.18, 220) : 0

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-roledescription="carousel"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={`${slide.src}-${i}`}
            className="absolute inset-0"
            style={{
              opacity: i === active ? 1 : 0,
              transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: i === active ? 2 : 1,
            }}
            aria-hidden={i !== active}
          >
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                animation:
                  kenBurns && i === active
                    ? `hsKenBurns ${interval + 1500}ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
                    : 'none',
              }}
              key={`kb-${active}-${i}`}
            >
              <OptimizedImage
                src={slide.src}
                alt={slide.alt || ''}
                className="w-full h-full object-cover object-center"
                fill
                priority={i === 0}
                vision={slide.vision || ''}
              />
            </div>
          </div>
        ))}
      </div>

      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 z-10" />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 35%, rgba(34,197,94,0.10), transparent 55%)',
            }}
          />
        </>
      )}

      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'w-8 bg-lafoi-green-light' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes hsKenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }
      `}</style>
    </div>
  )
}
