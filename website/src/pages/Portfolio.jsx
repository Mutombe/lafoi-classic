import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, X, ArrowRight, FunnelSimple, CaretLeft, CaretRight, Calendar, Ruler, Clock, Sparkle } from '@phosphor-icons/react'
import AnimatedSection from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
import CountUp from '../components/ui/CountUp'
import MagneticButton from '../components/ui/MagneticButton'
import { useSEO } from '../utils/seo'

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail']

const projects = [
  { id: 1, title: 'Matte Black with Linear & Starry Sky', category: 'Residential', image: '/brand/images/1.jpg', desc: 'Matte black stretch ceiling integrated with linear lights and starry-sky perimeter — a master bedroom transformed into a calm, cinematic space.', tall: true, year: '2025', area: '32 m²', duration: '2 days', vision: 'Real install: matte black starry-sky stretch ceiling with linear LEDs in master bedroom' },
  { id: 2, title: 'Gloss White with Linear Lights', category: 'Residential', image: '/brand/images/17.jpg', desc: 'Gloss white stretch ceiling with three parallel linear light lines spanning a double-volume stairwell — bouncing daylight through the entire space.', tall: true, year: '2025', area: '48 m²', duration: '2 days', vision: 'Real install: gloss white stretch ceiling with linear lights in stairwell' },
  { id: 3, title: 'Art Print with Backlighting', category: 'Commercial', image: '/brand/images/45.jpg', desc: 'Custom marble-effect art print stretch ceiling with backlit perimeter — a centrepiece feature for a private boardroom.', year: '2025', area: '24 m²', duration: '1 day', vision: 'Real install: backlit marble art print stretch ceiling in conference room' },
  { id: 4, title: 'Stars on Matte Black', category: 'Hospitality', image: '/brand/images/16.jpg', desc: 'Matte black stretch ceiling with embedded fibre-optic stars for a private home cinema — every screening becomes a night under the sky.', year: '2025', area: '28 m²', duration: '2 days', vision: 'Real install: matte black home cinema with fibre-optic starry sky' },
  { id: 5, title: 'Dark Brown Satin with Linear Lights', category: 'Commercial', image: '/brand/images/24.jpg', desc: 'Satin dark-brown stretch ceiling with crossed linear light lines — a refined geometric statement for a premium hallway.', year: '2025', area: '18 m²', duration: '1 day', vision: 'Real install: dark brown satin stretch ceiling with crossed linear lights' },
  { id: 6, title: 'Galaxy Stars with Downlights', category: 'Hospitality', image: '/brand/images/57.jpg', desc: 'Galaxy stretch ceiling with embedded fibre-optic stars and downlights — used in a luxury home cinema with chevron-padded walls.', tall: true, year: '2025', area: '36 m²', duration: '2 days', vision: 'Real install: galaxy starry sky stretch ceiling in luxury cinema' },
  { id: 7, title: 'Silver Stretch Mirror with Downlights', category: 'Residential', image: '/brand/images/15.jpg', desc: 'Silver mirror stretch ceiling reflecting a statement chandelier — paired with downlights in an upscale dining room.', year: '2025', area: '22 m²', duration: '1 day', vision: 'Real install: silver mirror stretch ceiling with chandelier in dining room' },
  { id: 8, title: 'Gloss Black with Shadow Edge', category: 'Commercial', image: '/brand/images/28.jpg', desc: 'Gloss black stretch ceiling with shadow-edge perimeter glow — high-rise corporate lounge with city views.', year: '2024', area: '40 m²', duration: '2 days', vision: 'Real install: gloss black stretch ceiling with shadow edge in office' },
  { id: 9, title: 'White Translucent with Backlighting', category: 'Commercial', image: '/brand/images/52.jpg', desc: 'White translucent stretch ceiling acting as the primary light source over a corporate reception — paired with sky-print accent panel.', tall: true, year: '2025', area: '30 m²', duration: '2 days', vision: 'Real install: white translucent backlit ceiling in reception' },
  { id: 10, title: 'Gloss White with Downlights', category: 'Residential', image: '/brand/images/3.jpg', desc: 'Gloss white stretch ceiling with embedded downlights and integrated linear LED — a high-volume stairwell turned into a sculptural lightwell.', year: '2024', area: '34 m²', duration: '2 days', vision: 'Real install: gloss white stretch ceiling with downlights in stairwell' },
  { id: 11, title: 'Satin White Ceiling', category: 'Residential', image: '/brand/images/58.jpg', desc: 'Satin white stretch ceiling embedded with a soft starry-sky pattern — a serene principal bedroom with floor-to-ceiling drapes.', year: '2024', area: '26 m²', duration: '1 day', vision: 'Real install: satin white starry sky stretch ceiling in master bedroom' },
  { id: 12, title: 'Matte White with Magnetic Track Lights', category: 'Commercial', image: '/brand/images/25.jpg', desc: 'Matte white stretch ceiling with parallel linear LED runs and magnetic track spots — a sharp, scalable system across an entire office floor.', year: '2024', area: '120 m²', duration: '3 days', vision: 'Real install: matte white office ceiling with linear LEDs and magnetic track' },
  { id: 13, title: 'Floral Art Print with Backlighting', category: 'Hospitality', image: '/brand/images/19.jpg', desc: 'Backlit floral art print stretch ceiling — installed live by our team during a hospitality fit-out, with the print acting as the room\'s focal artwork.', year: '2024', area: '16 m²', duration: '1 day', vision: 'Real install: floral art print stretch ceiling being installed by Lafoi team' },
  { id: 14, title: 'Matte Black with Shadow Edge', category: 'Hospitality', image: '/brand/images/22.jpg', desc: 'Matte black starry-sky stretch ceiling with shadow-edge perimeter and linear light line — penthouse lounge with cityscape views.', year: '2024', area: '38 m²', duration: '2 days', vision: 'Real install: matte black ceiling with starry sky and shadow edge in penthouse lounge' },
  { id: 15, title: 'Satin White with Linear & Magnetic Tracks', category: 'Residential', image: '/brand/images/39.jpg', desc: 'Satin white stretch ceiling threaded with linear LEDs and magnetic track lights across an open-plan residential kitchen.', year: '2024', area: '44 m²', duration: '2 days', vision: 'Real install: satin white stretch ceiling with linear LEDs in residential kitchen' },
  { id: 16, title: 'White Translucent Custom Lamps', category: 'Retail', image: '/brand/images/49.jpg', desc: 'White translucent custom-lit panels combined with silver mirror stretch ceiling and white perforated acoustic membrane — a layered retail entrance.', year: '2024', area: '20 m²', duration: '1 day', vision: 'Real install: geometric mirror ceiling with linear lights and translucent panels in retail' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  useSEO({
    title: 'Our Portfolio',
    description: 'Explore La Foi Designs\' portfolio of stunning stretch ceiling and lighting installations across Zimbabwe.',
    path: '/portfolio',
  })

  const heroSlides = [
    { src: '/brand/images/1.jpg', alt: 'Starry sky bedroom', vision: 'Real install: starry sky bedroom' },
    { src: '/brand/images/17.jpg', alt: 'Gloss white stairwell', vision: 'Real install: gloss white stairwell' },
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
        <HeroSlideshow slides={heroSlides} />
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
              <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Portfolio</span>
            </motion.div>
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mt-4 mb-6">
              Spaces we've<br /><span className="font-cabinet italic font-light text-gradient">transformed</span>
            </h1>
            <p className="text-white/75 font-general text-lg max-w-xl leading-relaxed">
              A selection of real La Foi Designs installations across residential, hospitality, commercial and retail spaces in Zimbabwe — every photo a project we delivered.
            </p>

            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: <CountUp to={projects.length} />, label: 'Featured Projects' },
                { value: <CountUp to={4} />, label: 'Sectors Served' },
                { value: <CountUp to={16} suffix="+" />, label: 'Finishes Used' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-sora text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/40 font-general mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
              <div>
                <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Filter by Sector</span>
                <h2 className="font-sora text-2xl sm:text-3xl font-bold text-lafoi-dark mt-2">Browse the catalogue</h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                <FunnelSimple size={14} className="text-lafoi-green" />
                <span className="text-xs font-sora text-lafoi-gray uppercase tracking-wider">{filtered.length} projects</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-sora font-medium transition-all duration-300 backdrop-blur-md ${
                    filter === cat
                      ? 'bg-gradient-to-r from-lafoi-green to-lafoi-green-light text-white shadow-lg shadow-lafoi-green/25'
                      : 'bg-white/70 border border-gray-200 text-lafoi-gray hover:bg-lafoi-green/10 hover:text-lafoi-green hover:border-lafoi-green/30'
                  }`}
                >
                  {cat}
                  <span className={`ml-2 text-[10px] ${filter === cat ? 'text-white/70' : 'text-lafoi-gray-medium'}`}>
                    {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid"
                >
                  <PortfolioCard project={project} onClick={() => setSelected(project)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Featured CTA band */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/brand/images/45.jpg" alt="Backlit marble boardroom ceiling" className="w-full h-full object-cover" fill />
          <div className="absolute inset-0 bg-lafoi-dark/75" />
        </div>
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-lafoi-green/20 blur-[80px] animate-float pointer-events-none" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-12 gap-6 items-center p-6 lg:p-10 rounded-3xl glass-dark border border-white/10" style={{ borderTopRightRadius: '64px' }}>
              <div className="lg:col-span-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green-light font-sora mb-2">Featured Projects</p>
                <h2 className="heading-lg text-3xl sm:text-4xl text-white tracking-[-0.01em]">Want yours featured here?</h2>
                <p className="text-white/70 font-general mt-2 max-w-xl">Book a free site assessment and join the gallery — every install is documented, photographed and added to our public catalogue.</p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                <MagneticButton>
                  <Link to="/contact" className="group inline-flex items-center gap-2 h-12 px-6 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-all duration-300 shadow-lg shadow-lafoi-green/25">
                    Book Free Survey
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {selected && <Lightbox project={selected} projects={filtered} onClose={() => setSelected(null)} onNavigate={setSelected} />}
      </AnimatePresence>
    </motion.div>
  )
}

function PortfolioCard({ project, onClick }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1.02, 0.97])

  return (
    <button onClick={onClick} className="group block w-full rounded-3xl overflow-hidden relative text-left">
      <motion.div ref={ref} style={{ scale }} className={project.tall ? 'h-96' : 'h-72'}>
        <OptimizedImage src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" fill vision={project.vision} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] tracking-widest uppercase text-white font-sora">{project.year}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-xs font-sora text-lafoi-green-light font-medium uppercase tracking-wider mb-1">{project.category} · {project.area}</p>
        <h3 className="font-sora text-lg font-bold text-white flex items-center gap-2">
          {project.title} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
      </div>
    </button>
  )
}

function Lightbox({ project, projects, onClose, onNavigate }) {
  const idx = projects.findIndex((p) => p.id === project.id)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(prev)
      if (e.key === 'ArrowRight') onNavigate(next)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
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
        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl"
        style={{ borderTopRightRadius: '64px' }}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="h-72 sm:h-[480px] relative">
          <OptimizedImage src={project.image} alt={project.title} className="w-full h-full object-cover" fill priority vision={project.vision} />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/40">
            <span className="text-[10px] tracking-widest uppercase text-lafoi-green font-sora font-semibold">{project.category}</span>
          </div>
        </div>
        <div className="p-8 lg:p-10">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-cabinet italic font-light text-5xl text-lafoi-green/25 leading-none">{`0${idx + 1}`}</span>
            <div className="h-px flex-1 bg-lafoi-green/20" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-lafoi-gray-medium font-sora">/{String(projects.length).padStart(2, '0')}</span>
          </div>
          <h3 className="font-sora text-2xl lg:text-3xl font-bold text-lafoi-dark mb-3">{project.title}</h3>
          <p className="text-lafoi-gray font-general leading-relaxed mb-6">{project.desc}</p>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            <Meta icon={Calendar} label="Year" value={project.year} />
            <Meta icon={Ruler} label="Area" value={project.area} />
            <Meta icon={Clock} label="Duration" value={project.duration} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Meta({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-lafoi-green/10 flex items-center justify-center shrink-0">
        <Icon size={14} className="text-lafoi-green" />
      </div>
      <div>
        <p className="text-[10px] tracking-widest uppercase text-lafoi-gray-medium font-sora">{label}</p>
        <p className="text-sm font-sora font-semibold text-lafoi-dark mt-0.5">{value}</p>
      </div>
    </div>
  )
}
