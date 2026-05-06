import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Play, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import { useSEO } from '../utils/seo'

const videos = [
  {
    id: 1,
    src: '/brand/videos/1.mp4',
    poster: '/brand/images/1.jpg',
    title: 'Starry Sky Master Suite',
    category: 'Residential',
    desc: 'Walkthrough of a matte black starry-sky stretch ceiling installed in a master bedroom — perimeter LED, fibre-optic stars and crisp shadow edges.',
  },
  {
    id: 2,
    src: '/brand/videos/3.mp4',
    poster: '/brand/images/17.jpg',
    title: 'Gloss White Stairwell',
    category: 'Residential',
    desc: 'Three parallel linear LED light lines across a gloss white stretch ceiling, bouncing daylight through a double-volume stairwell.',
  },
  {
    id: 3,
    src: '/brand/videos/6.mp4',
    poster: '/brand/images/15.jpg',
    title: 'Mirror Dining Room',
    category: 'Residential',
    desc: 'Silver mirror stretch ceiling reflecting a statement chandelier and downlights — a dining room transformed into a reflective gallery.',
  },
  {
    id: 4,
    src: '/brand/videos/11.mp4',
    poster: '/brand/images/22.jpg',
    title: 'Penthouse Starry Lounge',
    category: 'Hospitality',
    desc: 'Matte black starry-sky stretch ceiling with shadow edge and linear light line in a city-view penthouse lounge.',
  },
  {
    id: 5,
    src: '/brand/videos/12.mp4',
    poster: '/brand/images/57.jpg',
    title: 'Galaxy Home Cinema',
    category: 'Hospitality',
    desc: 'Galaxy starry-sky stretch ceiling with downlights in a private home cinema — chevron-padded walls and reclining seats.',
  },
  {
    id: 6,
    src: '/brand/videos/13.mp4',
    poster: '/brand/images/45.jpg',
    title: 'Backlit Marble Boardroom',
    category: 'Commercial',
    desc: 'Custom marble-effect art print stretch ceiling with backlit perimeter — a centrepiece feature for a private boardroom.',
  },
  {
    id: 7,
    src: '/brand/videos/21.mp4',
    poster: '/brand/images/47.jpg',
    title: 'Acoustic Cafe Ceiling',
    category: 'Commercial',
    desc: 'Perforated acoustic stretch ceiling with hidden sound absorption — installed across a busy cafe interior.',
  },
  {
    id: 8,
    src: '/brand/videos/41.mp4',
    poster: '/brand/images/49.jpg',
    title: 'Geometric Mirror Retail',
    category: 'Retail',
    desc: 'Geometric gold mirror stretch ceiling with linear light lines — a sculptural threshold for a high-end retail entrance.',
  },
  {
    id: 9,
    src: '/brand/videos/42.mp4',
    poster: '/brand/images/42.jpg',
    title: 'Sculpture Stairwell',
    category: 'Residential',
    desc: 'High-volume residential stairwell with linear LED geometry framing a hanging sculpture — every angle a view.',
  },
]

export default function Videos() {
  const [selected, setSelected] = useState(null)

  useSEO({
    title: 'Videos',
    description: 'Watch real La Foi Designs stretch ceiling and lighting installations across residential, hospitality, commercial and retail spaces in Zimbabwe.',
    path: '/videos',
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/brand/images/57.jpg"
            alt="Galaxy starry sky stretch ceiling in a luxury home cinema"
            className="w-full h-full object-cover"
            fill
            priority
            vision="Real install: galaxy ceiling in a luxury home cinema"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lafoi-dark/90 via-lafoi-dark/75 to-lafoi-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-lafoi-green animate-pulse" />
              <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Videos</span>
            </motion.div>
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl text-white mt-4 mb-6">
              Watch the<br /><span className="text-gradient">work</span>
            </h1>
            <p className="text-white/70 font-general text-lg max-w-xl">
              Footage from real La Foi Designs installations — finished ceilings, lighting effects and a few behind-the-scenes moments from the team on site.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 lg:py-24 bg-lafoi-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {videos.map((video) => (
              <StaggerItem key={video.id}>
                <button
                  onClick={() => setSelected(video)}
                  className="group relative block w-full aspect-[4/5] rounded-3xl overflow-hidden text-left bg-lafoi-dark"
                >
                  <OptimizedImage
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    fill
                    vision={`Real install poster for ${video.title}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lafoi-dark/90 via-lafoi-dark/30 to-transparent" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={26} className="text-lafoi-green ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs font-sora text-lafoi-green-light font-semibold uppercase tracking-wider mb-1.5">{video.category}</p>
                    <h3 className="font-sora text-lg font-bold text-white">{video.title}</h3>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/brand/images/22.jpg"
            alt="Penthouse lounge with starry sky stretch ceiling and integrated linear light"
            className="w-full h-full object-cover"
            fill
            vision="Real install: penthouse lounge starry sky"
          />
          <div className="absolute inset-0 bg-lafoi-dark/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Want a ceiling like<br />these in your space?
            </h2>
            <p className="text-white/70 font-general text-lg mb-10 max-w-xl mx-auto">
              Book a consultation and we'll specify the right finish, lighting and installation programme for your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-all duration-300 shadow-lg shadow-lafoi-green/25 group"
            >
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && <VideoLightbox video={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </motion.div>
  )
}

function VideoLightbox({ video, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-5xl bg-lafoi-dark rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          aria-label="Close video"
        >
          <X size={18} />
        </button>
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full max-h-[75vh] bg-black object-contain"
        />
        <div className="p-6 sm:p-8">
          <p className="text-xs font-sora text-lafoi-green font-semibold uppercase tracking-wider">{video.category}</p>
          <h3 className="font-sora text-xl sm:text-2xl font-bold text-white mt-2 mb-3">{video.title}</h3>
          <p className="text-sm text-white/60 font-general leading-relaxed">{video.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
