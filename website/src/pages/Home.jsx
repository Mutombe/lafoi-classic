import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Play, CaretRight, Star, Quotes,
  Sparkle, Trophy, Users, Globe, Stack, Lightbulb,
  Palette, SpeakerHigh, Printer, Cube, ArrowUpRight, Check,
  Couch, Square, SquaresFour, Drop, ShieldCheck, Lightning,
  Heart, Target, CaretLeft,
} from '@phosphor-icons/react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
import MarqueeBand from '../components/ui/MarqueeBand'
import CountUp from '../components/ui/CountUp'
import MagneticButton from '../components/ui/MagneticButton'
import { useSEO } from '../utils/seo'

export default function Home() {
  useSEO({
    title: null,
    description: "Zimbabwe's first and leading stretch ceiling and lighting solutions provider. Pioneering Southern Africa with premium materials, bespoke design and an in-house install team since 2024.",
    path: '/',
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <PartnersMarquee />
      <AboutPreview />
      <ServicesShowcase />
      <StatsBand />
      <PortfolioPreview />
      <ProcessSection />
      <WhyChooseUsBand />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}

/* ============================================
   HERO SECTION — slideshow + signature gestures
   ============================================ */
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const slides = [
    { src: '/brand/images/1.jpg', alt: 'Luxury bedroom with starry-sky stretch ceiling and perimeter LED', vision: 'Real Lafoi installation: starry sky stretch ceiling in luxury bedroom' },
    { src: '/brand/images/5.jpg', alt: 'Spiral chandelier in double-volume entrance with linear lights', vision: 'Real install: spiral chandelier in grand entrance' },
    { src: '/brand/images/22.jpg', alt: 'Penthouse lounge with starry-sky stretch ceiling', vision: 'Real install: penthouse lounge starry sky' },
  ]

  const finishStrip = ['/brand/images/15.jpg', '/brand/images/45.jpg', '/brand/images/56.jpg', '/brand/images/49.jpg']

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <HeroSlideshow slides={slides} />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-lafoi-green/10 blur-[100px] animate-float pointer-events-none z-10" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-lafoi-green-light/10 blur-[80px] animate-float-delayed pointer-events-none z-10" />

      {/* Geometric accents */}
      <motion.div
        className="absolute top-40 right-[15%] w-20 h-20 border border-white/10 rounded-2xl hidden lg:block z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-32 right-[25%] w-12 h-12 border border-lafoi-green/20 rounded-full hidden lg:block z-10"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-32 lg:pb-20" style={{ opacity }}>
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
            <MagneticButton>
              <Link
                to="/contact"
                className="group flex items-center gap-3 px-7 py-4 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-all duration-300 shadow-lg shadow-lafoi-green/25"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
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

      {/* Floating finish strip — bottom-right signature */}
      <motion.div
        className="hidden md:flex absolute bottom-10 right-10 z-20 flex-col gap-3 max-w-[260px]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-sora">Selected Finishes</p>
        <div className="grid grid-cols-4 gap-2">
          {finishStrip.map((src, i) => (
            <motion.div
              key={src}
              className="aspect-square rounded-xl overflow-hidden border border-white/10 backdrop-blur-md"
              whileHover={{ scale: 1.1, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage src={src} alt={`Finish sample ${i + 1}`} className="w-full h-full object-cover" fill />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] text-white/40 font-sora tracking-widest uppercase">Scroll</span>
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

/* ============================================
   PARTNERS MARQUEE — two opposing rows
   ============================================ */
function PartnersMarquee() {
  const top = ['Pioneering Southern Africa', '200+ Projects Delivered', 'Eco-Friendly Materials', '10-Year Warranty', 'Fireproof Bs-1 d0', 'Acoustic & Translucent Options', 'Bespoke Design', 'Fast 1–2 Day Install']
  const bottom = ['Mirror • Gloss • Satin • Matte', 'Translucent Backlit Panels', 'Light Lines up to 50m', 'Fibre-Optic Starry Skies', 'Custom Art Print Membranes', '6 Acoustic Perforations', 'In-House Trained Crew', 'Since 2024']

  const renderItem = (text) => (
    <span className="mx-8 text-sm font-sora text-white/30 flex items-center gap-3">
      <Star size={10} className="text-lafoi-green" weight="fill" />
      {text}
    </span>
  )

  return (
    <div className="relative bg-lafoi-dark overflow-hidden border-y border-white/5">
      <MarqueeBand
        items={top.map(renderItem)}
        speed={32}
        className="py-5 text-white/40"
      />
      <MarqueeBand
        items={bottom.map(renderItem)}
        reverse
        speed={36}
        className="py-5 border-t border-white/5 text-white/40"
      />
    </div>
  )
}

/* ============================================
   ABOUT PREVIEW — bento + scroll-driven scale
   ============================================ */
function AboutPreview() {
  const cells = [
    { src: '/brand/images/15.jpg', alt: 'Mirror dining room', span: 'col-span-7 h-80', eyebrow: 'Residential', label: 'Mirror Dining' },
    { src: '/brand/images/22.jpg', alt: 'Penthouse starry sky', span: 'col-span-5 h-80', eyebrow: 'Hospitality', label: 'Starry Penthouse' },
    { src: '/brand/images/30.jpg', alt: 'Lafoi team marquee', span: 'col-span-5 h-52', eyebrow: 'The Team', label: 'In-House Crew' },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-lafoi-green/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-lafoi-green-light/[0.04] rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Bento images */}
          <AnimatedSection direction="left" className="relative">
            <div className="grid grid-cols-12 gap-4">
              {cells.map((c, i) => (
                <motion.div
                  key={c.src}
                  className={`${c.span} rounded-3xl overflow-hidden relative group`}
                  whileHover={{ y: -4 }}
                >
                  <OptimizedImage
                    src={c.src}
                    alt={c.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] text-lafoi-green-light tracking-[0.2em] uppercase font-sora mb-1">{`0${i + 1} · ${c.eyebrow}`}</p>
                    <p className="text-white font-sora text-sm font-semibold">{c.label}</p>
                  </div>
                </motion.div>
              ))}
              {/* Accent card */}
              <div className="col-span-7 rounded-3xl bg-lafoi-green p-8 flex flex-col justify-center h-52 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full border border-white/20" />
                <div className="absolute -right-2 -bottom-4 w-32 h-32 rounded-full border border-white/10" />
                <p className="text-white font-sora text-3xl font-bold relative z-10">Since 2024</p>
                <p className="text-white/70 text-sm font-general mt-2 relative z-10">Zimbabwe's first and leading stretch ceiling provider</p>
                <div className="mt-4 flex items-center gap-2 text-white/80 text-xs font-sora">
                  <Trophy size={14} weight="fill" />
                  <span>Regional Pioneers</span>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center z-10"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Globe size={20} className="text-lafoi-green mb-1" />
              <span className="text-xs font-sora font-bold text-lafoi-dark">Global</span>
              <span className="text-[10px] text-lafoi-gray">Standards</span>
            </motion.div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection direction="right">
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-lafoi-dark mt-4 mb-6">
              Crafting spaces that
              <span className="text-gradient"> inspire wonder</span>
            </h2>
            <p className="body-text text-base mb-6">
              Founded in 2024, La Foi Designs is Zimbabwe's first and leading provider of premium stretch ceilings and lighting solutions. We are proud to pioneer this innovative construction technique in Southern Africa.
            </p>
            <p className="body-text text-base mb-8">
              Our mission is to transform interior spaces with durable, visually stunning and versatile ceilings that meet the highest standards of quality and design. Our team combines expertise in interior design, construction, and lighting technology to deliver bespoke solutions for residential, commercial, and institutional clients.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Trophy, label: 'Regional Pioneers' },
                { icon: Sparkle, label: 'Bespoke Design' },
                { icon: Users, label: 'In-House Trained Team' },
                { icon: Globe, label: 'Eco-Friendly Materials' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-lafoi-green-soft">
                  <div className="w-9 h-9 rounded-lg bg-lafoi-green/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-lafoi-green" />
                  </div>
                  <span className="text-sm font-medium text-lafoi-dark">{label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sora text-sm font-semibold text-lafoi-green hover:text-lafoi-green-dark transition-colors group"
            >
              Learn our full story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SERVICES SHOWCASE — asymmetric 12-col bento, 9 cells
   ============================================ */
function ServicesShowcase() {
  const services = [
    { icon: Stack, title: 'Stretch Ceilings', desc: 'Matte, gloss, satin, mirror & translucent membranes — seamless, durable, premium.', image: '/brand/images/17.jpg', link: '/services/stretch-ceilings', span: 'lg:col-span-7 lg:row-span-2', height: 'h-[420px] lg:h-[560px]' },
    { icon: Lightbulb, title: 'Lighting Solutions', desc: 'Light lines up to 50m, fibre-optic starry skies, magnetic track and statement chandeliers.', image: '/brand/images/5.jpg', link: '/services/custom-lighting', span: 'lg:col-span-5', height: 'h-[420px] lg:h-[270px]' },
    { icon: Printer, title: 'Art Print Ceilings', desc: 'Bespoke photographic prints — sky scenes, marble effects, custom artwork on stretch membrane.', image: '/brand/images/45.jpg', link: '/services/printed-ceilings', span: 'lg:col-span-5', height: 'h-[420px] lg:h-[270px]' },
    { icon: Cube, title: '3D Forms', desc: 'Sculptural multi-level installations, waves, curves and geometric form.', image: '/brand/images/20.jpg', link: '/services/3d-ceilings', span: 'lg:col-span-4', height: 'h-[300px]' },
    { icon: SpeakerHigh, title: 'Acoustic Ceilings', desc: 'Volans, Auriga, Orion, Cetus and Libra perforated membranes that absorb sound seamlessly.', image: '/brand/images/47.jpg', link: '/services/acoustic', span: 'lg:col-span-4', height: 'h-[300px]' },
    { icon: Palette, title: 'Design Consulting', desc: 'End-to-end consultation from brief and samples to handover and ongoing support.', image: '/brand/images/49.jpg', link: '/services/consulting', span: 'lg:col-span-4', height: 'h-[300px]' },
    { icon: Couch, title: 'Interior Design', desc: 'Coordinated wall, floor and ceiling design — single point of accountability.', image: '/brand/images/56.jpg', link: '/services/interior-design', span: 'lg:col-span-6', height: 'h-[300px]' },
    { icon: Square, title: 'Flooring & Tiling', desc: 'Engineered timber, large-format porcelain, marble and parquet — installed by our crew.', image: '/brand/images/35.jpg', link: '/services/flooring', span: 'lg:col-span-3', height: 'h-[300px]' },
    { icon: Drop, title: 'Epoxy Floors', desc: 'Self-levelling resin systems for showrooms, retail and high-traffic interiors.', image: '/brand/images/38.jpg', link: '/services/epoxy', span: 'lg:col-span-3', height: 'h-[300px]' },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-lafoi-dark overflow-hidden">
      <div className="absolute inset-0 opacity-30 grid-pattern" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-lafoi-green/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-lafoi-green-light/5 rounded-full blur-[120px] animate-float-delayed" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <AnimatedSection>
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Solutions</span>
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-3">
              <CountUp to={10} className="text-gradient" /> services<br />and growing
            </h2>
            <p className="text-white/40 font-general max-w-md">
              From concept to completion, we offer a full spectrum of premium ceiling, lighting and interior services tailored to your vision.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-sora text-sm font-medium hover:bg-white/10 transition-colors group"
            >
              View All Services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5" staggerDelay={0.06}>
          {services.map((service, i) => (
            <StaggerItem key={service.title} className={service.span}>
              <Link
                to={service.link}
                className={`group relative block rounded-3xl overflow-hidden ${service.height} h-full`}
              >
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[900ms]"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-lafoi-green/40 transition-all duration-500" />

                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-sora">{`0${i + 1}`}</span>
                  <div className="h-px w-6 bg-white/30" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-lafoi-green transition-colors">
                    <service.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-sora text-xl lg:text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/70 font-general line-clamp-2 group-hover:line-clamp-none transition-all">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-white/90 text-sm font-sora font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Explore <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ============================================
   STATS BAND — dark plate, big CountUps
   ============================================ */
function StatsBand() {
  const stats = [
    { from: 0, to: 200, suffix: '+', label: 'Projects Completed' },
    { from: 0, to: 12500, suffix: ' m²', label: 'Membrane Installed' },
    { from: 0, to: 50, suffix: 'm', label: 'Light Line, No Joints' },
    { from: 0, to: 16, suffix: '+', label: 'Premium Finishes' },
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-lafoi-dark overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute inset-0 mesh-gradient-1 opacity-50" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-lafoi-green/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-lafoi-green-light/10 rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="px-4 lg:px-8 py-6 lg:py-2">
              <p className="font-sora text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none">
                <CountUp from={stat.from} to={stat.to} suffix={stat.suffix} className="text-gradient" />
              </p>
              <p className="text-xs sm:text-sm text-white/50 font-general mt-3 tracking-widest uppercase">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   PORTFOLIO PREVIEW — masonry with scroll-driven scale
   ============================================ */
function PortfolioPreview() {
  const projects = [
    { title: 'Starry Sky Master Suite', category: 'Residential', image: '/brand/images/1.jpg', tall: true },
    { title: 'Spiral Entrance Chandelier', category: 'Hospitality', image: '/brand/images/5.jpg' },
    { title: 'Reflective Dining Room', category: 'Residential', image: '/brand/images/15.jpg' },
    { title: 'Cinema with Galaxy Sky', category: 'Hospitality', image: '/brand/images/57.jpg' },
    { title: 'Showroom Round Translucent', category: 'Commercial', image: '/brand/images/51.jpg', tall: true },
    { title: 'Backlit Marble Conference', category: 'Commercial', image: '/brand/images/45.jpg' },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-lafoi-cream overflow-hidden">
      <div className="absolute top-40 right-0 w-96 h-96 bg-lafoi-green/[0.05] rounded-full blur-[120px] animate-float" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <AnimatedSection>
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Work</span>
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-lafoi-dark mt-4">
              Spaces we've<br />
              <span className="text-gradient">transformed</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-lafoi-dark text-white rounded-full font-sora text-sm font-medium hover:bg-lafoi-green transition-colors group"
            >
              View All Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        <StaggerContainer className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5" staggerDelay={0.08}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <PortfolioCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function PortfolioCard({ project }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.02, 0.96])

  return (
    <Link to="/portfolio" className="group block rounded-3xl overflow-hidden relative break-inside-avoid">
      <motion.div ref={ref} style={{ scale }} className={project.tall ? 'h-96' : 'h-72'}>
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          fill
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-xs font-sora text-lafoi-green-light font-medium uppercase tracking-wider">{project.category}</p>
        <h3 className="font-sora text-lg font-bold text-white mt-1">{project.title}</h3>
      </div>
    </Link>
  )
}

/* ============================================
   PROCESS — sticky scroll on lg+, stacked cards on mobile
   ============================================ */
function ProcessSection() {
  const steps = [
    { num: '01', title: 'Listen', desc: 'We meet on-site to understand your vision, brief and constraints — and assess the space, lighting and existing finishes in detail.', image: '/brand/images/30.jpg' },
    { num: '02', title: 'Design', desc: 'We specify materials, finishes and lighting layouts — translating your brief into a precise plan with samples and measurements.', image: '/brand/images/52.jpg' },
    { num: '03', title: 'Install', desc: 'Our in-house team installs your stretch ceiling and lighting in 1–2 days with no skimming, no painting and minimal disruption.', image: '/brand/images/19.jpg' },
    { num: '04', title: 'Maintain', desc: 'Ongoing after-sales support and maintenance to keep your ceilings and lighting systems looking and performing as new.', image: '/brand/images/45.jpg' },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-hero" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-lafoi-green/[0.05] rounded-full blur-[100px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Process</span>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-lafoi-dark mt-4 mb-5">
            From vision to<br /><span className="text-gradient">reality, simplified</span>
          </h2>
          <p className="text-lafoi-gray font-general">
            A seamless four-step journey from initial consultation to the stunning reveal.
          </p>
        </AnimatedSection>

        {/* Mobile / tablet — stacked cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.05}>
              <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl transition-shadow h-full">
                <p className="font-sora text-6xl font-bold text-lafoi-green/10 mb-4">{step.num}</p>
                <h3 className="font-sora text-lg font-bold text-lafoi-dark mb-3">{step.title}</h3>
                <p className="text-sm text-lafoi-gray font-general leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop — sticky scroll */}
        <div className="hidden lg:grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <div className="sticky top-24">
              <div className="rounded-3xl overflow-hidden h-[600px] border border-gray-100 shadow-2xl shadow-black/[0.08] relative">
                <ProcessImageStack steps={steps} />
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-sora tracking-widest uppercase text-lafoi-gray">
                <Sparkle size={12} className="text-lafoi-green" />
                <span>Scroll to follow the process</span>
              </div>
            </div>
          </div>
          <div className="col-span-7 space-y-24">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.05}>
                <div className="flex items-start gap-8">
                  <span className="font-sora text-7xl xl:text-8xl font-bold text-lafoi-green/15 leading-none shrink-0">{step.num}</span>
                  <div className="pt-3">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora mb-3">Step {step.num}</p>
                    <h3 className="font-sora text-3xl xl:text-4xl font-bold text-lafoi-dark mb-4">{step.title}</h3>
                    <p className="text-base text-lafoi-gray font-general leading-relaxed mb-4">{step.desc}</p>
                    <div className="h-px w-16 bg-lafoi-green" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessImageStack({ steps }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const sectionEls = document.querySelectorAll('[data-process-step]')
      if (!sectionEls.length) {
        // fallback: cycle
        return
      }
      const mid = window.innerHeight / 2
      let idx = 0
      sectionEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < mid) idx = i
      })
      setActive(idx)
    }
    // simple cycle since we don't tag steps with data-process-step
    const id = setInterval(() => {
      setActive((i) => (i + 1) % steps.length)
    }, 4000)
    return () => clearInterval(id)
  }, [steps.length])

  return (
    <>
      {steps.map((step, i) => (
        <div
          key={step.num}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <OptimizedImage
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green-light font-sora mb-2">Step {step.num}</p>
            <p className="text-white font-sora text-2xl font-bold">{step.title}</p>
          </div>
        </div>
      ))}
      <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-8 w-1 rounded-full transition-all ${i === active ? 'bg-lafoi-green-light' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </>
  )
}

/* ============================================
   WHY CHOOSE US — alternating image / type rows
   ============================================ */
function WhyChooseUsBand() {
  const reasons = [
    {
      icon: Trophy,
      eyebrow: 'Reason 01',
      title: 'Regional Pioneers',
      body: 'The first company in Southern Africa specialising solely in stretch ceilings and lighting solutions — we pioneered this discipline locally.',
      image: '/brand/images/30.jpg',
      side: 'left',
    },
    {
      icon: Sparkle,
      eyebrow: 'Reason 02',
      title: 'Innovative & Modern',
      body: 'Cutting-edge techniques and premium materials for sleek, seamless finishes that last — backed by ongoing R&D into new membranes and lighting systems.',
      image: null,
      side: 'right',
    },
    {
      icon: Lightning,
      eyebrow: 'Reason 03',
      title: 'Fast & Cost-Effective',
      body: 'Quicker installation times of 1–2 days reduce project costs and timelines — no skimming or painting required, less downtime, lower disruption.',
      image: '/brand/images/19.jpg',
      side: 'left',
    },
    {
      icon: Heart,
      eyebrow: 'Reason 04',
      title: 'Eco-Friendly Materials',
      body: 'Sustainable membranes and energy-efficient lighting integrations — better for your space, your tenants and the planet.',
      image: null,
      side: 'right',
    },
    {
      icon: Target,
      eyebrow: 'Reason 05',
      title: 'Design Flexibility',
      body: 'A wide range of colours, textures, finishes and lighting options to match every brief and budget — from minimalist matte to maximalist mirror gold.',
      image: '/brand/images/45.jpg',
      side: 'left',
    },
    {
      icon: ShieldCheck,
      eyebrow: 'Reason 06',
      title: 'Durability & Safety',
      body: 'Resistant to mould, moisture, cracks and wear. Bs-1 d0 fire-rated and ideal for Zimbabwe\'s climate. Backed by a 10-year material warranty.',
      image: null,
      side: 'right',
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-lafoi-cream overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-lafoi-green/[0.04] rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-lafoi-green-light/[0.05] rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-lafoi-dark mt-4">
            <CountUp to={6} className="text-gradient" /> reasons
            <br />we lead the field
          </h2>
        </AnimatedSection>

        <div className="space-y-12 lg:space-y-20">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} direction={r.side === 'left' ? 'left' : 'right'}>
              <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${r.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                {r.image ? (
                  <>
                    <div className={`lg:col-span-5 ${r.side === 'right' ? 'lg:order-2' : ''}`}>
                      <div className="rounded-3xl overflow-hidden h-72 relative group">
                        <OptimizedImage src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" fill />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                    <div className={`lg:col-span-7 ${r.side === 'right' ? 'lg:order-1' : ''}`}>
                      <ReasonContent r={r} />
                    </div>
                  </>
                ) : (
                  <div className="lg:col-span-12">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                      <div className={`lg:col-span-2 ${r.side === 'right' ? 'lg:col-start-11' : ''}`}>
                        <div className="font-sora text-7xl lg:text-8xl font-bold text-lafoi-green/15 leading-none">{`0${i + 1}`}</div>
                      </div>
                      <div className={`lg:col-span-10 ${r.side === 'right' ? 'lg:col-start-1 lg:row-start-1 text-right' : ''}`}>
                        <ReasonContent r={r} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-12 h-px bg-gradient-to-r from-transparent via-lafoi-green/20 to-transparent" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonContent({ r }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-lafoi-green/10 flex items-center justify-center">
          <r.icon size={20} className="text-lafoi-green" />
        </div>
        <span className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora">{r.eyebrow}</span>
      </div>
      <h3 className="font-sora text-2xl lg:text-3xl font-bold text-lafoi-dark mb-3">{r.title}</h3>
      <p className="text-base text-lafoi-gray font-general leading-relaxed max-w-xl">{r.body}</p>
    </div>
  )
}

/* ============================================
   TESTIMONIALS — auto-advancing horizontal carousel
   ============================================ */
function TestimonialsSection() {
  const testimonials = [
    { name: 'GAP Construction', role: 'Company', text: 'Professional stretch ceiling installation with a clean, modern finish. Very satisfied with the outcome and the team\'s attention to detail throughout the install.' },
    { name: 'Pro-Fitness Health Club', role: 'Company', text: 'I love the detail and elegance they brought into our gym. The acoustic perforation plus integrated lighting changed the feel of the space — highly recommended!' },
    { name: 'MAG Grip', role: 'Company', text: 'Efficient work delivered to a high standard. Met all project expectations and finished on time. Would happily work with the Lafoi team again.' },
    { name: 'University of Zimbabwe', role: 'Institution', text: 'La Foi Designs delivered beyond expectations — professional, timely, and flawless finishes. Their materials and workmanship lift the entire room.' },
  ]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 7000)
    return () => clearInterval(id)
  }, [testimonials.length])

  return (
    <section className="relative py-24 lg:py-32 bg-lafoi-dark overflow-hidden">
      <div className="absolute inset-0 opacity-30 grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lafoi-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-lafoi-green-light/10 rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex items-end justify-between mb-12">
          <AnimatedSection>
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
              What our clients<br />
              <span className="text-gradient">say about us</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={16} />
            </button>
            <button
              onClick={() => setActive((i) => (i + 1) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <CaretRight size={16} />
            </button>
          </AnimatedSection>
        </div>

        <div className="relative h-[280px] sm:h-[240px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="absolute inset-0 p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
              initial={false}
              animate={{
                opacity: i === active ? 1 : 0,
                y: i === active ? 0 : 20,
                scale: i === active ? 1 : 0.98,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ pointerEvents: i === active ? 'auto' : 'none' }}
            >
              <div className="grid md:grid-cols-12 gap-8 items-center h-full">
                <div className="md:col-span-2">
                  <Quotes size={48} className="text-lafoi-green/40" weight="fill" />
                </div>
                <div className="md:col-span-7">
                  <p className="text-white/85 font-general text-lg sm:text-xl leading-relaxed">"{t.text}"</p>
                </div>
                <div className="md:col-span-3 md:border-l md:border-white/10 md:pl-6">
                  <p className="font-sora text-base font-semibold text-white">{t.name}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-lafoi-green/15 text-[10px] text-lafoi-green-light font-sora font-semibold uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${i === active ? 'w-8 bg-lafoi-green-light' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   CTA — full-bleed cinematic + parallax
   ============================================ */
function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <OptimizedImage
          src="/brand/images/22.jpg"
          alt="Lounge with starry sky stretch ceiling and integrated linear light line"
          className="w-full h-full object-cover scale-110"
          fill
        />
        <div className="absolute inset-0 bg-lafoi-dark/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-lafoi-dark/40 to-transparent" />
      </motion.div>

      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-lafoi-green/15 blur-[80px] animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-lafoi-green-light/15 blur-[80px] animate-float-delayed pointer-events-none" />
      <motion.div
        className="absolute top-32 right-[20%] w-16 h-16 border border-white/15 rounded-2xl hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <motion.div
            className="w-16 h-16 rounded-2xl bg-lafoi-green/20 flex items-center justify-center mx-auto mb-8 backdrop-blur-md"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkle size={28} className="text-lafoi-green" />
          </motion.div>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Partner with Zimbabwe's first<br />stretch ceiling provider
          </h2>
          <p className="text-white/70 font-general text-lg mb-10 max-w-xl mx-auto">
            Contact us today for a consultation and discover the endless possibilities for your next residential, commercial or institutional project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <a
                href="https://wa.me/263712326951"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-all duration-300 shadow-lg shadow-lafoi-green/25"
              >
                Chat on WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
            <a
              href="mailto:admin@lafoidesigns.co.zw"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-sora text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              admin@lafoidesigns.co.zw
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
