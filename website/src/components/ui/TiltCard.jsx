import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * 3D hover-tilt wrapper for featured cards.
 * Disabled on devices without hover (touch).
 * Use sparingly — featured cards / hero blocks only.
 */
export default function TiltCard({ children, className = '', max = 4, ...rest }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 20 })

  const handleMove = (e) => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={className}
      style={{ transformStyle: 'preserve-3d', rotateX: rx, rotateY: ry }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
