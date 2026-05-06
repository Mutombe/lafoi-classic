import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Play, X, ArrowRight, CaretLeft, CaretRight, Clock, Sparkle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
import { useSEO } from '../utils/seo'

const videos = [
  { id: 1, src: '/brand/videos/1.mp4', poster: '/brand/images/1.jpg', title: 'Starry Sky Master Suite', category: 'Residential', duration: '0:42', desc: 'Walkthrough of a matte black starry-sky stretch ceiling installed in a master bedroom — perimeter LED, fibre-optic stars and crisp shadow edges.' },
  { id: 2, src: '/brand/videos/3.mp4', poster: '/brand/images/17.jpg', title: 'Gloss White Stairwell', category: 'Residential', duration: '0:38', desc: 'Three parallel linear LED light lines across a gloss white stretch ceiling, bouncing daylight through a double-volume stairwell.' },
  { id: 3, src: '/brand/videos/6.mp4', poster: '/brand/images/15.jpg', title: 'Mirror Dining Room', category: 'Residential', duration: '0:29', desc: 'Silver mirror stretch ceiling reflecting a statement chandelier and downlights — a dining room transformed into a reflective gallery.' },
  { id: 4, src: '/brand/videos/11.mp4', poster: '/brand/images/22.jpg', title: 'Penthouse Starry Lounge', category: 'Hospitality', duration: '0:51', desc: 'Matte black starry-sky stretch ceiling with shadow edge and linear light line in a city-view penthouse lounge.' },
  { id: 5, src: '/brand/videos/12.mp4', poster: '/brand/images/57.jpg', title: 'Galaxy Home Cinema', category: 'Hospitality', duration: '0:46', desc: 'Galaxy starry-sky stretch ceiling with downlights in a private home cinema — chevron-padded walls and reclining seats.' },
  { id: 6, src: '/brand/videos/13.mp4', poster: '/brand/images/45.jpg', title: 'Backlit Marble Boardroom', category: 'Commercial', duration: '0:34', desc: 'Custom marble-effect art print stretch ceiling with backlit perimeter — a centrepiece feature for a private boardroom.' },
  { id: 7, src: '/brand/videos/21.mp4', poster: '/brand/images/47.jpg', title: 'Acoustic Cafe Ceiling', category: 'Commercial', duration: '0:40', desc: 'Perforated acoustic stretch ceiling with hidden sound absorption — installed across a busy cafe interior.' },
  { id: 8, src: '/brand/videos/41.mp4', poster: '/brand/images/49.jpg', title: 'Geometric Mirror Retail', category: 'Retail', duration: '0:33', desc: 'Geometric gold mirror stretch ceiling with linear light lines — a sculptural threshold for a high-end retail entrance.' },
  { id: 9, src: '/brand/videos/42.mp4', poster: '/brand/images/42.jpg', title: 'Sculpture Stairwell', category: 'Residential', duration: '0:48', desc: 'High-volume residential stairwell with linear LED geometry framing a hanging sculpture — every angle a view.' },
]

const featuredVideo = videos[0]

export default function Videos() {
  const [selected, setSelected] = useState(null)

  useSEO({
    title: 'Videos',
    description: 'Watch real La Foi Designs stretch ceiling and lighting installations across residential, hospitality, commercial and retail spaces in Zimbabwe.',
    path: '/videos',
  })

  const slides = [
    { src: '/brand/images/22.jpg', alt: 'Penthouse starry sky', vision: 'Real install: penthouse starry sky' },
    { src: '/brand/images/1.jpg', alt: 'Starry sky bedroom', vision: 'Real install: starry sky bedroom' },
    { src: '/brand/images/50.jpg', alt: 'Parquet wood lounge', vision: 'Real install: parquet wood lounge' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <HeroSlideshow slides={slides} />
        <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-lafoi-green/10 blur-[100px] animate-float pointer-events-none z-10" />

        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-16">
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
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mt-4 mb-6">
              Watch the<br /><span className="font-cabinet italic font-light text-gradient">work</span>
            </h1>
            <p className="text-white/75 font-general text-lg max-w-xl">
              Footage from real La Foi Designs installations — finished ceilings, lighting effects and a few behind-the-scenes moments from the team on site.
            </p>
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="font-sora text-2xl font-bold text-white">{videos.length}</p>
                <p className="text-xs text-white/40 font-general mt-1">Featured Clips</p>
              </div>
              <div>
                <p className="font-sora text-2xl font-bold text-white">4K</p>
                <p className="text-xs text-white/40 font-general mt-1">Quality</p>
              </div>
              <div>
                <p className="font-sora text-2xl font-bold text-white">Real</p>
                <p className="text-xs text-white/40 font-general mt-1">Installations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured video */}
      <FeaturedVideo video={featuredVideo} onClick={() => setSelected(featuredVideo)} />

      {/* Video Grid */}
      <section className="py-16 lg:py-24 bg-lafoi-cream relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <AnimatedSection className="mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div>
              <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">All Clips</span>
              <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-3">
                The full <span className="font-cabinet italic font-light text-gradient">archive</span>
              </h2>
            </div>
            <p className="text-sm text-lafoi-gray font-general max-w-sm">
              Tap any tile to play. Use arrow keys in the viewer to flick through the catalogue.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {videos.map((video, i) => (
              <StaggerItem key={video.id}>
                <VideoTile video={video} onClick={() => setSelected(video)} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <VideoCTA />

      <AnimatePresence>
        {selected && <VideoLightbox video={selected} videos={videos} onClose={() => setSelected(null)} onNavigate={setSelected} />}
      </AnimatePresence>
    </motion.div>
  )
}

function FeaturedVideo({ video, onClick }) {
  return (
    <section className="relative -mt-20 z-30 px-4 sm:px-6 lg:px-10">
      <AnimatedSection>
        <div className="max-w-[1440px] mx-auto">
          <button
            onClick={onClick}
            className="group block w-full text-left relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30"
            style={{ borderTopRightRadius: '120px' }}
          >
            <div className="aspect-video relative">
              <video
                src={video.src}
                poster={video.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lafoi-dark/95 via-lafoi-dark/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-lafoi-dark/40 to-transparent pointer-events-none" />

              <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-lafoi-green/90 backdrop-blur-md text-white text-[10px] font-sora font-semibold uppercase tracking-widest">
                Featured · Now Playing
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={32} weight="fill" className="text-lafoi-green ml-1" />
                </motion.div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 lg:left-10 lg:bottom-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green-light font-sora">{video.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="text-xs text-white/70 font-sora flex items-center gap-1"><Clock size={10} /> {video.duration}</span>
                </div>
                <h2 className="font-cabinet italic font-light text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">{video.title}</h2>
                <p className="text-sm text-white/70 font-general mt-3 max-w-md">{video.desc}</p>
              </div>
            </div>
          </button>
        </div>
      </AnimatedSection>
    </section>
  )
}

function VideoTile({ video, onClick, index }) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full aspect-[4/5] rounded-3xl overflow-hidden text-left bg-lafoi-dark"
    >
      <OptimizedImage
        src={video.poster}
        alt={video.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        fill
        vision={`Real install poster for ${video.title}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-lafoi-dark/95 via-lafoi-dark/30 to-transparent" />

      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-sora">{`0${index + 1}`}</span>
        <div className="h-px w-6 bg-white/30" />
      </div>

      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-[10px] font-sora text-white/80 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Clock size={10} />
        {video.duration}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play size={26} weight="fill" className="text-lafoi-green ml-1" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-xs font-sora text-lafoi-green-light font-semibold uppercase tracking-wider mb-1.5">{video.category}</p>
        <h3 className="font-sora text-lg font-bold text-white">{video.title}</h3>
        <div className="h-px w-12 bg-lafoi-green-light mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </button>
  )
}

function VideoCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <OptimizedImage src="/brand/images/22.jpg" alt="Penthouse starry sky" className="w-full h-full object-cover scale-110" fill />
        <div className="absolute inset-0 bg-lafoi-dark/70" />
      </motion.div>
      {/* single blob — compact rule */}
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-lafoi-green/20 blur-[80px] animate-float pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <Sparkle size={26} className="text-lafoi-green-light mx-auto mb-5" weight="fill" />
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-4xl text-white mb-5 tracking-[-0.01em]">
            Want a ceiling like<br /><span className="font-cabinet italic font-light">these in your space?</span>
          </h2>
          <p className="text-white/75 font-general text-lg mb-8 max-w-xl mx-auto">
            Book a consultation and we'll specify the right finish, lighting and installation programme for your project.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 h-12 px-6 bg-lafoi-green text-white rounded-full font-sora text-sm font-medium hover:bg-lafoi-green-dark transition-colors"
          >
            Start Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

function VideoLightbox({ video, videos, onClose, onNavigate }) {
  const idx = videos.findIndex((v) => v.id === video.id)
  const prev = videos[(idx - 1 + videos.length) % videos.length]
  const next = videos[(idx + 1) % videos.length]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(prev)
      if (e.key === 'ArrowRight') onNavigate(next)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onNavigate, prev, next])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <button
        onClick={() => onNavigate(prev)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-dark border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        aria-label="Previous"
      >
        <CaretLeft size={18} />
      </button>
      <button
        onClick={() => onNavigate(next)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-dark border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        aria-label="Next"
      >
        <CaretRight size={18} />
      </button>

      <motion.div
        className="relative w-full max-w-5xl bg-lafoi-dark rounded-3xl overflow-hidden shadow-2xl"
        style={{ borderTopRightRadius: '64px' }}
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
          key={video.id}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full max-h-[75vh] bg-black object-contain"
        />
        <div className="p-6 sm:p-8">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-cabinet italic font-light text-4xl text-lafoi-green/50 leading-none">{`0${idx + 1}`}</span>
            <div className="h-px flex-1 bg-white/15" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-sora">/{String(videos.length).padStart(2, '0')}</span>
          </div>
          <p className="text-xs font-sora text-lafoi-green-light font-semibold uppercase tracking-wider mb-2">{video.category} · {video.duration}</p>
          <h3 className="font-sora text-xl sm:text-2xl font-bold text-white mb-3">{video.title}</h3>
          <p className="text-sm text-white/70 font-general leading-relaxed">{video.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
