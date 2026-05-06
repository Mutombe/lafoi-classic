import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import { useSEO } from '../utils/seo'

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail']

const projects = [
  { id: 1, title: 'Matte Black with Linear & Starry Sky', category: 'Residential', image: '/brand/images/1.jpg', desc: 'Matte black stretch ceiling integrated with linear lights and starry-sky perimeter — a master bedroom transformed into a calm, cinematic space.', tall: true, vision: 'Real install: matte black starry-sky stretch ceiling with linear LEDs in master bedroom' },
  { id: 2, title: 'Gloss White with Linear Lights', category: 'Residential', image: '/brand/images/17.jpg', desc: 'Gloss white stretch ceiling with three parallel linear light lines spanning a double-volume stairwell — bouncing daylight through the entire space.', tall: true, vision: 'Real install: gloss white stretch ceiling with linear lights in stairwell' },
  { id: 3, title: 'Art Print with Backlighting', category: 'Commercial', image: '/brand/images/45.jpg', desc: 'Custom marble-effect art print stretch ceiling with backlit perimeter — a centrepiece feature for a private boardroom.', vision: 'Real install: backlit marble art print stretch ceiling in conference room' },
  { id: 4, title: 'Stars on Matte Black', category: 'Hospitality', image: '/brand/images/16.jpg', desc: 'Matte black stretch ceiling with embedded fibre-optic stars for a private home cinema — every screening becomes a night under the sky.', vision: 'Real install: matte black home cinema with fibre-optic starry sky' },
  { id: 5, title: 'Dark Brown Satin with Linear Lights', category: 'Commercial', image: '/brand/images/24.jpg', desc: 'Satin dark-brown stretch ceiling with crossed linear light lines — a refined geometric statement for a premium hallway.', vision: 'Real install: dark brown satin stretch ceiling with crossed linear lights' },
  { id: 6, title: 'Galaxy Stars with Downlights', category: 'Hospitality', image: '/brand/images/57.jpg', desc: 'Galaxy stretch ceiling with embedded fibre-optic stars and downlights — used in a luxury home cinema with chevron-padded walls.', tall: true, vision: 'Real install: galaxy starry sky stretch ceiling in luxury cinema' },
  { id: 7, title: 'Silver Stretch Mirror with Downlights', category: 'Residential', image: '/brand/images/15.jpg', desc: 'Silver mirror stretch ceiling reflecting a statement chandelier — paired with downlights in an upscale dining room.', vision: 'Real install: silver mirror stretch ceiling with chandelier in dining room' },
  { id: 8, title: 'Gloss Black with Shadow Edge', category: 'Commercial', image: '/brand/images/28.jpg', desc: 'Gloss black stretch ceiling with shadow-edge perimeter glow — high-rise corporate lounge with city views.', vision: 'Real install: gloss black stretch ceiling with shadow edge in office' },
  { id: 9, title: 'White Translucent with Backlighting', category: 'Commercial', image: '/brand/images/52.jpg', desc: 'White translucent stretch ceiling acting as the primary light source over a corporate reception — paired with sky-print accent panel.', tall: true, vision: 'Real install: white translucent backlit ceiling in reception' },
  { id: 10, title: 'Gloss White with Downlights', category: 'Residential', image: '/brand/images/3.jpg', desc: 'Gloss white stretch ceiling with embedded downlights and integrated linear LED — a high-volume stairwell turned into a sculptural lightwell.', vision: 'Real install: gloss white stretch ceiling with downlights in stairwell' },
  { id: 11, title: 'Satin White Ceiling', category: 'Residential', image: '/brand/images/58.jpg', desc: 'Satin white stretch ceiling embedded with a soft starry-sky pattern — a serene principal bedroom with floor-to-ceiling drapes.', vision: 'Real install: satin white starry sky stretch ceiling in master bedroom' },
  { id: 12, title: 'Matte White with Magnetic Track Lights', category: 'Commercial', image: '/brand/images/25.jpg', desc: 'Matte white stretch ceiling with parallel linear LED runs and magnetic track spots — a sharp, scalable system across an entire office floor.', vision: 'Real install: matte white office ceiling with linear LEDs and magnetic track' },
  { id: 13, title: 'Floral Art Print with Backlighting', category: 'Hospitality', image: '/brand/images/19.jpg', desc: 'Backlit floral art print stretch ceiling — installed live by our team during a hospitality fit-out, with the print acting as the room\'s focal artwork.', vision: 'Real install: floral art print stretch ceiling being installed by Lafoi team' },
  { id: 14, title: 'Matte Black with Shadow Edge', category: 'Hospitality', image: '/brand/images/22.jpg', desc: 'Matte black starry-sky stretch ceiling with shadow-edge perimeter and linear light line — penthouse lounge with cityscape views.', vision: 'Real install: matte black ceiling with starry sky and shadow edge in penthouse lounge' },
  { id: 15, title: 'Satin White with Linear & Magnetic Tracks', category: 'Residential', image: '/brand/images/39.jpg', desc: 'Satin white stretch ceiling threaded with linear LEDs and magnetic track lights across an open-plan residential kitchen.', vision: 'Real install: satin white stretch ceiling with linear LEDs in residential kitchen' },
  { id: 16, title: 'White Translucent Custom Lamps', category: 'Retail', image: '/brand/images/49.jpg', desc: 'White translucent custom-lit panels combined with silver mirror stretch ceiling and white perforated acoustic membrane — a layered retail entrance.', vision: 'Real install: geometric mirror ceiling with linear lights and translucent panels in retail' },
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
            src="/brand/images/5.jpg"
            alt="Spiral staircase under custom chandelier and gloss stretch ceiling"
            className="w-full h-full object-cover"
            fill
            priority
            vision="Real install: hospitality entrance with chandelier and gloss ceiling"
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
              <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Portfolio</span>
            </motion.div>
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl text-white mt-4 mb-6">
              Spaces we've<br /><span className="text-gradient">transformed</span>
            </h1>
            <p className="text-white/70 font-general text-lg max-w-xl">
              A selection of real La Foi Designs installations across residential, hospitality, commercial and retail spaces in Zimbabwe — every photo a project we delivered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-sora font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-lafoi-green text-white shadow-lg shadow-lafoi-green/20'
                    : 'bg-gray-100 text-lafoi-gray hover:bg-lafoi-green/10 hover:text-lafoi-green'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
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
                  <button
                    onClick={() => setSelected(project)}
                    className="group block w-full rounded-3xl overflow-hidden relative text-left"
                  >
                    <div className={project.tall ? 'h-96' : 'h-72'}>
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        fill
                        vision={project.vision}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-xs font-sora text-lafoi-green-light font-medium uppercase tracking-wider">{project.category}</p>
                      <h3 className="font-sora text-lg font-bold text-white mt-1 flex items-center gap-2">
                        {project.title} <ArrowUpRight size={16} />
                      </h3>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelected(null)} />
            <motion.div
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="h-80 sm:h-96">
                <OptimizedImage
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                  fill
                  priority
                  vision={selected.vision}
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-sora text-lafoi-green font-semibold uppercase tracking-wider">{selected.category}</p>
                <h3 className="font-sora text-2xl font-bold text-lafoi-dark mt-2 mb-3">{selected.title}</h3>
                <p className="text-lafoi-gray font-general">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
