import React, { useEffect, useRef, useState } from 'react'
import OptimizedImage from './OptimizedImage'

export default function HeroSlideshow({
  slides = [],
  interval = 6500,
  overlay = true,
  className = '',
}) {
  const [active, setActive] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, interval)
    return () => clearInterval(id)
  }, [slides.length, interval])

  if (!slides.length) return null

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-roledescription="carousel"
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
          <OptimizedImage
            src={slide.src}
            alt={slide.alt || ''}
            className="w-full h-full object-cover object-center"
            fill
            priority={i === 0}
            vision={slide.vision || ''}
          />
        </div>
      ))}

      {overlay && (
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/30 to-black/55" />
      )}

      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
