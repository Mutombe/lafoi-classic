import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.4 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-0.5 origin-left bg-gradient-to-r from-lafoi-green via-lafoi-green-light to-lafoi-accent"
      style={{ scaleX }}
    />
  )
}
