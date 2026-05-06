import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({
  from = 0,
  to = 100,
  duration = 1600,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const ease = (t) => 1 - Math.pow(1 - t, 3)

    const tick = (now) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / duration)
      const v = from + (to - from) * ease(t)
      setValue(v)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, from, to, duration])

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
