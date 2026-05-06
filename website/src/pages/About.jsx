import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, Globe, Heart, Shield, Target, Users, Lightning, CheckCircle, Sparkle, Star, Quotes } from '@phosphor-icons/react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
import CountUp from '../components/ui/CountUp'
import { useSEO } from '../utils/seo'

export default function About() {
  useSEO({
    title: 'Our Story',
    description: "Learn about La Foi Designs — Zimbabwe's first stretch ceiling provider. Our journey, values, and commitment to excellence.",
    path: '/about',
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <MissionStatement />
      <StoryTimeline />
      <ValuesSection />
      <MaterialsBand />
      <PartnersSection />
      <TeamSection />
      <AboutCTA />
    </motion.div>
  )
}

function AboutHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const slides = [
    { src: '/brand/images/30.jpg', alt: 'Lafoi team at the Luxury Stretch Ceilings marquee', vision: 'Real team photo at branded marquee' },
    { src: '/brand/images/1.jpg', alt: 'Starry sky stretch ceiling install', vision: 'Real install: starry sky bedroom' },
    { src: '/brand/images/50.jpg', alt: 'Hospitality lounge install', vision: 'Real install: parquet wood lounge' },
  ]

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center overflow-hidden">
      <HeroSlideshow slides={slides} />

      <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-lafoi-green/10 blur-[100px] animate-float pointer-events-none z-10" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-lafoi-green-light/10 blur-[80px] animate-float-delayed pointer-events-none z-10" />

      <motion.div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-20" style={{ opacity }}>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-cabinet italic text-4xl text-white/40">Vol.</span>
            <span className="font-sora text-5xl font-bold text-gradient">02</span>
            <div className="h-px w-20 bg-white/30" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-sora">Our Story</span>
          </div>

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-lafoi-green animate-pulse" />
            <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">A Pioneer's Story</span>
          </motion.div>

          <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6">
            Born from passion,
            <br />
            <span className="font-cabinet italic font-light text-gradient">built on excellence</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 font-general max-w-xl leading-relaxed">
            Founded in 2024 to pioneer premium stretch ceilings and lighting solutions in Southern Africa — engineered for durability, designed around your vision, installed by an in-house team you can trust.
          </p>

          <motion.div
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: '2024', label: 'Founded' },
              { value: 'First', label: 'In Southern Africa' },
              { value: '10-Yr', label: 'Material Warranty' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-sora text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/40 font-general mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] text-white/40 font-sora tracking-widest uppercase">Read Our Story</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-white/40"
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function MissionStatement() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-lafoi-green/[0.05] rounded-full blur-[120px] animate-float" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <AnimatedSection className="lg:col-span-7">
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Mission</span>
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-lafoi-dark mt-4 mb-6">
              To transform interior spaces with{' '}
              <span className="font-cabinet italic font-light text-gradient">durable, visually stunning</span> and versatile ceilings.
            </h2>
            <p className="body-text text-lg leading-relaxed mb-6">
              Our team combines expertise in interior design, construction and lighting technology to deliver bespoke solutions tailored to residential, commercial and institutional clients.
            </p>
            <p className="body-text text-base leading-relaxed mb-8">
              We are committed to excellence, innovation and sustainability — meeting the highest standards of quality and design. Every project is treated as a flagship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="group inline-flex items-center gap-2 font-sora text-sm font-semibold text-lafoi-green hover:text-lafoi-green-dark transition-colors">
                Explore our services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="group inline-flex items-center gap-2 font-sora text-sm font-semibold text-lafoi-dark hover:text-lafoi-green transition-colors">
                Browse our work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-5">
            <div className="relative">
              {/* Duotone tile */}
              <div className="relative rounded-3xl overflow-hidden h-[480px]" style={{ borderTopRightRadius: '120px' }}>
                <div className="absolute inset-0 bg-lafoi-green" />
                <OptimizedImage
                  src="/brand/images/45.jpg"
                  alt="Backlit marble stretch ceiling — luxurious depth"
                  className="w-full h-full object-cover"
                  fill
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(26, 138, 46, 0.55)', mixBlendMode: 'multiply' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lafoi-green/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <Sparkle size={24} className="text-white/80 mb-3" weight="fill" />
                  <p className="text-white font-cabinet italic text-2xl leading-tight">"We don't just install ceilings — we engineer atmosphere."</p>
                </div>
              </div>
              {/* Floating orb behind */}
              <motion.div
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-lafoi-green/20 blur-3xl -z-0"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              {/* Stat badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 z-10 border border-gray-100"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="font-sora text-3xl font-bold text-lafoi-dark"><CountUp to={200} suffix="+" /></p>
                <p className="text-xs text-lafoi-gray font-general mt-1">Spaces transformed</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function StoryTimeline() {
  const milestones = [
    {
      year: '2024',
      eyebrow: 'The Beginning',
      title: 'Founded as Regional Pioneers',
      desc: 'La Foi Designs is established to introduce premium stretch ceilings to Zimbabwe — the first company in Southern Africa to specialise solely in stretch ceilings and lighting solutions.',
      image: '/brand/images/30.jpg',
    },
    {
      year: '01',
      eyebrow: 'Materials',
      title: 'Premium Material Catalogue',
      desc: 'Curated catalogue of mirror, lacquered gloss, satin, matte, translucent, art print and acoustic membranes — Bs-1 d0 fire-rated, with light lines up to 50m without joints.',
      image: '/brand/images/45.jpg',
    },
    {
      year: '02',
      eyebrow: 'The Crew',
      title: 'In-House Trained Installers',
      desc: 'Our in-house installation team is trained in the full discipline — from substrate prep and tracking to lighting integration, finishing and quality assurance.',
      image: '/brand/images/19.jpg',
    },
    {
      year: 'Now',
      eyebrow: 'Today',
      title: 'Building Lafoi Spaces',
      desc: 'Bespoke installations across luxury homes, corporate offices, hospitality venues, gyms, retail and institutions — including projects for the University of Zimbabwe, Pro-Fitness Health Club, GAP Construction and MAG Grip.',
      image: '/brand/images/22.jpg',
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-lafoi-cream overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-lafoi-green/[0.05] rounded-full blur-[100px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Journey</span>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-lafoi-dark mt-4">
            A journey of <span className="font-cabinet italic font-light text-gradient">firsts</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-16 lg:space-y-24">
          {milestones.map((m, i) => {
            const left = i % 2 === 0
            return (
              <AnimatedSection key={i} direction={left ? 'left' : 'right'}>
                <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                  <div className={`lg:col-span-5 ${left ? '' : 'lg:order-2'}`}>
                    <ParallaxImage src={m.image} alt={m.title} />
                  </div>
                  <div className={`lg:col-span-7 ${left ? '' : 'lg:order-1'}`}>
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-cabinet italic font-light text-7xl lg:text-8xl text-lafoi-green/25 leading-none">{m.year}</span>
                      <div className="h-px flex-1 bg-lafoi-green/20" />
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora mb-3">{m.eyebrow}</p>
                    <h3 className="font-sora text-2xl lg:text-3xl font-bold text-lafoi-dark mb-4">{m.title}</h3>
                    <p className="text-base text-lafoi-gray font-general leading-relaxed mb-6 max-w-xl">{m.desc}</p>
                    <div className="flex items-center gap-3 text-xs font-sora tracking-widest uppercase text-lafoi-gray">
                      <span className="w-8 h-px bg-lafoi-green" />
                      <span>Milestone {String(i + 1).padStart(2, '0')} / {String(milestones.length).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ParallaxImage({ src, alt }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <div ref={ref} className="rounded-3xl overflow-hidden h-80 lg:h-[420px] shadow-2xl shadow-black/[0.08] relative group">
      <motion.div className="absolute inset-0" style={{ y }}>
        <OptimizedImage src={src} alt={alt} className="w-full h-full object-cover scale-110" fill />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  )
}

function ValuesSection() {
  const values = [
    { icon: Sparkle, title: 'Innovative & Modern', desc: 'Cutting-edge techniques and premium materials for sleek, seamless finishes that last.', color: 'from-emerald-500 to-green-600' },
    { icon: Trophy, title: 'Regional Pioneers', desc: 'The first company in Southern Africa specialising solely in stretch ceilings and lighting solutions.', color: 'from-violet-500 to-purple-600' },
    { icon: Lightning, title: 'Fast & Cost-Effective', desc: 'Quicker installation times of 1–2 days reduce project costs and timelines — no skimming or painting required.', color: 'from-amber-500 to-orange-600' },
    { icon: Heart, title: 'Eco-Friendly', desc: 'Sustainable materials and energy-efficient lighting integrations — better for your space and the planet.', color: 'from-rose-500 to-pink-600' },
    { icon: Target, title: 'Design Flexibility', desc: 'A wide range of colours, textures, finishes and lighting options to match every brief and budget.', color: 'from-teal-500 to-cyan-600' },
    { icon: Shield, title: 'Durability & Safety', desc: 'Resistant to mould, moisture, cracks and wear — Bs-1 d0 fire-rated and ideal for Zimbabwe\'s climate.', color: 'from-blue-500 to-indigo-600' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-lafoi-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-lafoi-green/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-lafoi-green-light/5 rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <AnimatedSection className="max-w-2xl">
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Values</span>
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-5">
              The principles that <span className="font-cabinet italic font-light text-gradient">guide everything</span> we do
            </h2>
            <p className="text-white/40 font-general">
              More than just a company, we are a team united by shared values that inform every decision and every project.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="text-right">
            <p className="font-sora text-6xl font-bold text-gradient leading-none"><CountUp to={6} /></p>
            <p className="text-xs tracking-widest uppercase text-white/40 mt-2">core values</p>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {values.map((v, i) => (
            <StaggerItem key={v.title}>
              <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500 h-full group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 font-sora text-7xl font-bold text-white/[0.03] leading-none">{`0${i + 1}`}</div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon size={22} className="text-white" />
                </div>
                <h3 className="font-sora text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/50 font-general leading-relaxed">{v.desc}</p>
                <div className="h-px bg-gradient-to-r from-lafoi-green/30 to-transparent mt-6" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function MaterialsBand() {
  const finishes = [
    { name: 'Mirror', meta: 'Silver / Gold / Shadow', image: '/brand/images/15.jpg' },
    { name: 'Lacquered Gloss', meta: '18+ standard colours', image: '/brand/images/17.jpg' },
    { name: 'Matte', meta: 'Velvet, calm finish', image: '/brand/images/24.jpg' },
    { name: 'Satin', meta: 'Soft sheen finish', image: '/brand/images/58.jpg' },
    { name: 'Translucent', meta: 'Backlit primary light', image: '/brand/images/52.jpg' },
    { name: 'Acoustic', meta: 'Volans · Auriga · Orion', image: '/brand/images/47.jpg' },
    { name: 'Art Print', meta: 'Bespoke photographic', image: '/brand/images/45.jpg' },
    { name: '3D Form', meta: 'Sculptural multi-level', image: '/brand/images/42.jpg' },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <AnimatedSection>
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Material Library</span>
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-lafoi-dark mt-4">
              Eight finishes,<br /><span className="font-cabinet italic font-light text-gradient">infinite palettes</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-sm text-lafoi-gray font-general max-w-sm">
              Scroll the catalogue. Every finish is fire-rated, waterproof, and installed by our in-house team.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-5 px-4 sm:px-6 lg:px-10 min-w-max">
          {finishes.map((f, i) => (
            <motion.div
              key={f.name}
              className="snap-start w-[260px] sm:w-[300px] shrink-0 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative">
                <OptimizedImage src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" fill />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-sora">{`0${i + 1} / 08`}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-cabinet italic font-light text-3xl text-white mb-1">{f.name}</p>
                  <p className="text-xs text-white/70 font-general tracking-wide">{f.meta}</p>
                  <div className="mt-3 h-px w-12 bg-lafoi-green-light" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnersSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-lafoi-cream">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Engineering & Performance</span>
          <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-4 mb-5">
            A premium <span className="font-cabinet italic font-light text-gradient">material catalogue</span>, engineered to last
          </h2>
          <p className="text-lafoi-gray font-general">
            From mirror panels and gloss lacquer to translucent backlit and acoustic membranes — our material catalogue is curated for performance, longevity and design flexibility.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              country: 'Membranes & Finishes',
              flag: 'M',
              title: 'Mirror, Gloss, Satin, Matte',
              desc: 'Mirror Silver, Mirror Gold and Mirror Shadow up to 1.25m × 28m per panel. Lacquered gloss in 18+ colours including Solaire, Gala, Mastic, Citron, Roma, Granit, Onyx and Noir.',
              features: ['Bs-1 d0 fire-rated', '10-year warranty', 'Waterproof & washable', 'No skimming or painting'],
              accent: 'border-l-4 border-l-lafoi-green',
            },
            {
              country: 'Lighting & Acoustic',
              flag: 'L',
              title: 'Translucent, Light Lines, Acoustic',
              desc: 'Translucent membranes that act as a primary light source. Light lines up to 50m without joints. Acoustic membranes — Volans, Auriga, Orion, Cetus and Libra — for sound absorption.',
              features: ['Up to 50m light line', 'Translucent backlit panels', '6 acoustic perforations', 'Eco-friendly inks'],
              accent: 'border-l-4 border-l-lafoi-green-light',
            },
          ].map((partner) => (
            <AnimatedSection key={partner.country}>
              <div className={`p-8 lg:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-lafoi-green/[0.06] transition-all duration-500 h-full ${partner.accent}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-lafoi-green/10 text-lafoi-green flex items-center justify-center font-sora text-lg font-bold shrink-0">{partner.flag}</span>
                  <div>
                    <h3 className="font-sora text-xl font-bold text-lafoi-dark">{partner.title}</h3>
                    <p className="text-xs text-lafoi-gray-medium font-general">{partner.country}</p>
                  </div>
                </div>
                <p className="text-sm text-lafoi-gray font-general leading-relaxed mb-6">{partner.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {partner.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-lafoi-green-soft">
                      <CheckCircle size={14} className="text-lafoi-green shrink-0" />
                      <span className="text-xs text-lafoi-dark font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    { name: 'Takudzwa Mhembere', role: 'Managing Director', bio: 'With over 5 years of experience in construction and interior design, Mr Mhembere leads La Foi Designs with vision and innovation, ensuring each project exceeds client expectations.' },
    { name: 'Ashley Tafirenyika', role: 'Operations Manager', bio: 'Specialist in project management, logistics and quality assurance — ensuring timely and efficient delivery of every project.' },
    { name: 'Charmaine Mumbamarwo', role: 'Marketing Manager', bio: 'Responsible for marketing strategy, client communication and brand visibility for our stretch ceilings and modern lighting solutions.' },
    { name: 'Tendekayi K Mavunga', role: 'Projects Director', bio: 'Expert in interior aesthetics — designing bespoke solutions tailored to client tastes and contemporary trends.' },
  ]

  const initials = (name) =>
    name
      .split(' ')
      .filter(Boolean)
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()

  return (
    <section className="py-24 lg:py-32 bg-lafoi-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bp" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bp)" />
        </svg>
      </div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-lafoi-green/5 rounded-full blur-[120px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Meet the Experts</span>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-5">
            The <span className="font-cabinet italic font-light text-gradient">people behind</span> La Foi Designs
          </h2>
          <p className="text-white/50 font-general leading-relaxed">
            A dedicated team committed to delivering exceptional stretch ceiling and lighting solutions. Quality, innovation and attention to detail in every project.
          </p>
        </AnimatedSection>

        {/* Group team band */}
        <AnimatedSection className="relative mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30 relative">
            <OptimizedImage
              src="/brand/images/30.jpg"
              alt="The full La Foi Designs team at the Luxury Stretch Ceilings marquee"
              className="w-full h-[300px] sm:h-[400px] object-cover object-center"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lafoi-dark via-lafoi-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green-light font-sora mb-2">Team Photo</p>
              <p className="text-white font-sora text-xl sm:text-3xl font-semibold">The La Foi Designs team — Harare, Zimbabwe</p>
              <p className="text-white/70 text-sm font-general mt-2 max-w-xl">
                In-house designers, project managers and installers — every site visit, every install, fully owned by our own people.
              </p>
            </div>
          </div>
          <motion.div
            className="absolute -top-4 -right-4 px-5 py-3 bg-lafoi-green rounded-2xl shadow-xl z-10"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <Star size={16} weight="fill" className="text-white" />
              <span className="text-white font-sora text-sm font-bold">In-House Team</span>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Leadership grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {team.map((member, i) => (
            <StaggerItem key={member.name}>
              <div className="h-full p-6 lg:p-7 rounded-3xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500 group flex flex-col relative overflow-hidden">
                <div className="absolute -right-4 -top-4 font-cabinet italic font-light text-7xl text-white/[0.06]">{`0${i + 1}`}</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lafoi-green to-lafoi-green-light flex items-center justify-center mb-5 shadow-lg shadow-lafoi-green/30 group-hover:scale-105 transition-transform">
                  <span className="font-sora text-lg font-bold text-white tracking-wider">{initials(member.name)}</span>
                </div>
                <h3 className="font-sora text-base font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs text-lafoi-green-light font-sora font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-sm text-white/55 font-general leading-relaxed flex-1">{member.bio}</p>
                <div className="h-px bg-gradient-to-r from-lafoi-green/40 to-transparent mt-5" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-12">
          <Link
            to="/careers"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-colors shadow-lg shadow-lafoi-green/25"
          >
            Join our team
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

function AboutCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <OptimizedImage
          src="/brand/images/50.jpg"
          alt="Hospitality lounge with patterned stretch ceiling and statement lighting"
          className="w-full h-full object-cover scale-110"
          fill
        />
        <div className="absolute inset-0 bg-lafoi-dark/70" />
      </motion.div>

      <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-lafoi-green/15 blur-[80px] animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-lafoi-green-light/15 blur-[80px] animate-float-delayed pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <AnimatedSection>
          <motion.div
            className="w-16 h-16 rounded-2xl bg-lafoi-green/20 flex items-center justify-center mx-auto mb-8 backdrop-blur-md"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkle size={28} className="text-lafoi-green" />
          </motion.div>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Partner with Zimbabwe's<br />
            <span className="font-cabinet italic font-light">stretch ceiling pioneers</span>
          </h2>
          <p className="text-white/70 font-general text-lg mb-10 max-w-xl mx-auto">
            Contact us today for a consultation and discover the endless possibilities for your next residential, commercial or institutional project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-all duration-300 shadow-lg shadow-lafoi-green/25"
            >
              Get Started Today
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+263712326951"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-sora text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Call +263 712 326 951
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
