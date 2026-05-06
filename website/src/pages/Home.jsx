import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Play, Quotes, Trophy, Sparkle, Lightning, Heart, Target, ShieldCheck,
  Stack, Lightbulb, Printer, Cube, SpeakerHigh, Palette,
} from '@phosphor-icons/react'
import AnimatedSection from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import CountUp from '../components/ui/CountUp'
import { useSEO } from '../utils/seo'

export default function Home() {
  useSEO({
    title: null,
    description: "Zimbabwe's first and leading stretch ceiling and lighting solutions provider. Premium materials, bespoke design and an in-house install team since 2024.",
    path: '/',
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <ClientsStrip />
      <AboutIntro />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyLaFoi />
      <StatsBand />
      <Testimonials />
      <ClosingCTA />
    </motion.div>
  )
}

/* HERO ---------------------------------------------------------------- */
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <OptimizedImage
          src="/brand/images/1.jpg"
          alt="Luxury bedroom with starry sky stretch ceiling and perimeter LED — La Foi Designs installation"
          className="w-full h-full object-cover"
          fill
          priority
          vision="Real Lafoi installation: starry sky stretch ceiling with perimeter LED in a luxury bedroom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-lafoi-green/10 blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-lafoi-green-light/10 blur-[80px] animate-float-delayed pointer-events-none" />

      {/* Geometric accents */}
      <motion.div
        className="absolute top-40 right-[15%] w-20 h-20 border border-white/10 rounded-2xl hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-32 right-[25%] w-12 h-12 border border-lafoi-green/20 rounded-full hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-20" style={{ opacity }}>
        <div className="max-w-3xl">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-lafoi-green animate-pulse" />
            <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Zimbabwe's First Stretch Ceiling Provider</span>
          </motion.div>

          <motion.h1
            className="heading-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Redefining
            <br />
            <span className="relative">
              Ceilings
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <motion.path
                  d="M2 8C50 2 100 2 150 6C200 10 250 4 298 4"
                  stroke="#22C55E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.2, ease: 'easeInOut' }}
                />
              </svg>
            </span>
            {' '}as Art
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80 font-general max-w-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Premium stretch ceilings and integrated lighting, pioneering Southern Africa's most innovative interior finish — durable, seamless, and designed around your vision.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-7 py-4 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-all duration-300 shadow-lg shadow-lafoi-green/25"
            >
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="group flex items-center gap-3 px-7 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-sora text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Play size={16} className="group-hover:scale-110 transition-transform" />
              View Our Work
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { value: 'First', label: 'In Southern Africa' },
              { value: '10-Yr', label: 'Material Warranty' },
              { value: '1–2 Days', label: 'Typical Install' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-sora text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/50 font-general mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] text-white/30 font-sora tracking-widest uppercase">Scroll</span>
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

/* CLIENTS STRIP -------------------------------------------------------- */
function ClientsStrip() {
  const clients = ['GAP Construction', 'University of Zimbabwe', 'MAG Grip', 'Pro-Fitness Health Club']

  return (
    <section className="bg-lafoi-cream border-y border-black/[0.06]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <p className="text-[10px] font-sora tracking-[0.3em] uppercase text-lafoi-gray-medium text-center mb-6">
          Selected clients
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
          {clients.map((c) => (
            <span
              key={c}
              className="text-[11px] sm:text-xs font-sora tracking-[0.2em] uppercase text-lafoi-dark/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ABOUT INTRO ---------------------------------------------------------- */
function AboutIntro() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <AnimatedSection className="lg:col-span-7">
            <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-lafoi-green mb-5">
              About La Foi Designs
            </p>
            <h2 className="font-sora font-semibold text-lafoi-dark text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] max-w-2xl mb-8">
              A studio of designers and installers shaping Zimbabwean interiors from the ceiling down.
            </h2>
            <div className="space-y-5 max-w-xl">
              <p className="font-general font-normal text-base text-lafoi-gray leading-[1.7]">
                Founded in 2024 in Belgravia, Harare, La Foi Designs is the first dedicated stretch ceiling and architectural lighting studio in Zimbabwe. We import premium European membranes and engineer lighting locally, in-house.
              </p>
              <p className="font-general font-normal text-base text-lafoi-gray leading-[1.7]">
                Every project is designed, installed and serviced by our own team — typically delivered in one to two days, backed by a ten-year material warranty.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sora text-sm font-medium text-lafoi-green hover:text-lafoi-green-dark transition-colors group"
            >
              Read about the studio
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-5">
            <div className="aspect-[3/4] lg:aspect-auto lg:h-[560px] rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/brand/images/50.jpg"
                alt="Hospitality lounge with parquet wood floor and custom stretch ceiling"
                className="w-full h-full object-cover object-center"
                fill
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* SERVICES PREVIEW ----------------------------------------------------- */
function ServicesPreview() {
  const services = [
    { slug: 'stretch-ceilings', category: 'Stretch Ceilings', title: 'Stretch ceiling installation', desc: 'Matte, gloss, satin, mirror and translucent membranes — seamless, durable, premium.', image: '/brand/images/17.jpg' },
    { slug: 'custom-lighting', category: 'Lighting', title: 'Lighting solutions', desc: 'Light lines up to 50m, fibre-optic starry skies, magnetic track and statement chandeliers.', image: '/brand/images/5.jpg' },
    { slug: 'printed-ceilings', category: 'Print', title: 'Art print ceilings', desc: 'Bespoke photographic prints — sky scenes, marble effects, custom artwork on stretch membrane.', image: '/brand/images/45.jpg' },
    { slug: '3d-ceilings', category: 'Forms', title: '3D ceiling forms', desc: 'Sculptural multi-level installations, waves, curves and geometric form.', image: '/brand/images/20.jpg' },
    { slug: 'acoustic', category: 'Acoustic', title: 'Acoustic stretch ceilings', desc: 'Volans, Auriga, Orion, Cetus and Libra perforated membranes that absorb sound seamlessly.', image: '/brand/images/47.jpg' },
    { slug: 'consulting', category: 'Design', title: 'Design consultation', desc: 'End-to-end consultation from brief and samples to handover and ongoing support.', image: '/brand/images/49.jpg' },
  ]

  return (
    <section className="py-20 lg:py-24 bg-lafoi-cream">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-lafoi-green mb-5">
            Solutions
          </p>
          <h2 className="font-sora font-semibold text-lafoi-dark text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em]">
            A complete catalogue of ceiling, lighting and interior services.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => (
            <AnimatedSection key={s.slug}>
              <Link to={`/services/${s.slug}`} className="group block">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                  <OptimizedImage
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    fill
                  />
                </div>
                <p className="text-[11px] font-sora tracking-[0.2em] uppercase text-lafoi-gray-medium mb-2">
                  {s.category}
                </p>
                <h3 className="font-sora font-medium text-lafoi-dark text-xl leading-snug mb-2">
                  {s.title}
                </h3>
                <p className="font-general font-light text-sm text-lafoi-gray leading-relaxed mb-3 max-w-md">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 font-sora text-sm font-medium text-lafoi-green">
                  View service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-sora text-sm font-medium text-lafoi-dark hover:text-lafoi-green transition-colors group"
          >
            View all 10 services
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* FEATURED PROJECTS ---------------------------------------------------- */
function FeaturedProjects() {
  const projects = [
    { title: 'Starry Sky Master Suite', category: 'Residential', image: '/brand/images/1.jpg' },
    { title: 'Spiral Entrance Chandelier', category: 'Hospitality', image: '/brand/images/5.jpg' },
    { title: 'Reflective Dining Room', category: 'Residential', image: '/brand/images/15.jpg' },
    { title: 'Cinema with Galaxy Sky', category: 'Hospitality', image: '/brand/images/57.jpg' },
    { title: 'Showroom Translucent', category: 'Commercial', image: '/brand/images/51.jpg' },
    { title: 'Backlit Marble Conference', category: 'Commercial', image: '/brand/images/45.jpg' },
  ]

  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-lafoi-green mb-5">
              Selected work
            </p>
            <h2 className="font-sora font-semibold text-lafoi-dark text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em]">
              Recent projects across residential, hospitality and commercial spaces.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-sora text-sm font-medium text-lafoi-dark hover:text-lafoi-green transition-colors group shrink-0"
          >
            All projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((p) => (
            <AnimatedSection key={p.title}>
              <Link to="/portfolio" className="group block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                  <OptimizedImage
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    fill
                  />
                </div>
                <p className="text-[11px] font-sora tracking-[0.2em] uppercase text-lafoi-gray-medium mb-2">
                  {p.category}
                </p>
                <h3 className="font-sora font-medium text-lafoi-dark text-lg leading-snug">
                  {p.title}
                </h3>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* WHY LA FOI ----------------------------------------------------------- */
function WhyLaFoi() {
  const reasons = [
    { icon: Trophy, title: "Zimbabwe's first", body: "The first dedicated stretch ceiling and lighting studio in Zimbabwe — pioneers of the discipline locally." },
    { icon: Sparkle, title: 'Premium materials', body: 'Imported European membranes — Bs-1 d0 fire-rated, washable, and engineered to last over a decade in service.' },
    { icon: Lightning, title: 'Fast install', body: 'Most projects complete in one to two days, with no skimming, no painting and minimal disruption to your space.' },
    { icon: Heart, title: 'Eco-friendly', body: 'Sustainable membranes and energy-efficient LED lighting — chosen for low impact and long service life.' },
    { icon: Target, title: 'Design flexibility', body: 'Sixteen plus finishes across mirror, gloss, satin, matte, translucent, acoustic, art print and 3D forms.' },
    { icon: ShieldCheck, title: 'Ten-year warranty', body: 'Material warranty backed by an in-house install team — the same people who fit it service it.' },
  ]

  return (
    <section className="py-20 lg:py-24 bg-lafoi-cream">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-lafoi-green mb-5">
            Why La Foi
          </p>
          <h2 className="font-sora font-semibold text-lafoi-dark text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em]">
            Six reasons clients choose us for premium ceiling and lighting work.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {reasons.map((r) => (
            <AnimatedSection key={r.title}>
              <div className="border-t border-lafoi-dark/10 pt-6">
                <r.icon size={24} className="text-lafoi-green mb-5" />
                <h3 className="font-sora font-medium text-lafoi-dark text-lg mb-3">
                  {r.title}
                </h3>
                <p className="font-general font-normal text-sm text-lafoi-gray leading-relaxed">
                  {r.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* STATS BAND ----------------------------------------------------------- */
function StatsBand() {
  const stats = [
    { from: 0, to: 200, suffix: '+', label: 'Projects completed' },
    { from: 0, to: 12500, suffix: ' m²', label: 'Membrane installed' },
    { from: 0, to: 50, suffix: 'm', label: 'Light line, no joints' },
    { from: 0, to: 16, suffix: '+', label: 'Premium finishes' },
  ]

  return (
    <section className="py-20 lg:py-24 bg-lafoi-dark">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {stats.map((s) => (
            <AnimatedSection key={s.label}>
              <p className="font-sora font-semibold text-white text-4xl lg:text-5xl leading-none tracking-[-0.02em] mb-4">
                <CountUp from={s.from} to={s.to} suffix={s.suffix} />
              </p>
              <p className="font-general font-normal text-xs text-white/60 tracking-widest uppercase">
                {s.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* TESTIMONIALS --------------------------------------------------------- */
function Testimonials() {
  const quotes = [
    { name: 'GAP Construction', role: 'Company', text: "Professional stretch ceiling installation with a clean, modern finish. Very satisfied with the outcome and the team's attention to detail throughout the install." },
    { name: 'Pro-Fitness Health Club', role: 'Company', text: 'I love the detail and elegance they brought into our gym. The acoustic perforation plus integrated lighting changed the feel of the space — highly recommended.' },
    { name: 'MAG Grip', role: 'Company', text: 'Efficient work delivered to a high standard. Met all project expectations and finished on time. Would happily work with the La Foi team again.' },
    { name: 'University of Zimbabwe', role: 'Institution', text: 'La Foi Designs delivered beyond expectations — professional, timely, and flawless finishes. Their materials and workmanship lift the entire room.' },
  ]

  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-lafoi-green mb-5">
            Testimonials
          </p>
          <h2 className="font-sora font-semibold text-lafoi-dark text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em]">
            What clients say after working with us.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-14">
          {quotes.map((q) => (
            <AnimatedSection key={q.name}>
              <Quotes size={24} className="text-lafoi-green/40" />
              <p className="font-sora italic font-normal text-lafoi-dark text-lg leading-[1.6] mt-5 mb-6 max-w-xl">
                {q.text}
              </p>
              <div className="border-t border-lafoi-dark/10 pt-4">
                <p className="text-[11px] font-sora tracking-[0.2em] uppercase text-lafoi-gray">
                  {q.name} · {q.role}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* CLOSING CTA ---------------------------------------------------------- */
function ClosingCTA() {
  return (
    <section className="pb-20 lg:pb-24 pt-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative h-[60vh] min-h-[480px] rounded-3xl overflow-hidden">
          <OptimizedImage
            src="/brand/images/22.jpg"
            alt="Lounge with starry sky stretch ceiling and integrated linear light line"
            className="w-full h-full object-cover object-center"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/35" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-2xl text-center px-6">
              <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-white/70 mb-5">
                Begin a project
              </p>
              <h2 className="font-sora font-medium text-white text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] mb-8">
                Speak with our team about your space, brief and timeline.
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-12 px-6 bg-lafoi-green text-white rounded-full font-sora text-sm font-medium hover:bg-lafoi-green-dark transition-colors"
                >
                  Request a consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/263712326951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 text-white rounded-full font-sora text-sm font-medium border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
