import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Play, ChevronRight, Star, Quote,
  Sparkles, Award, Users, Globe, Layers, Lightbulb,
  Palette, Volume2, Printer, Box, ArrowUpRight, Check
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
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
      <StatsCounter />
      <PortfolioPreview />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}

/* ============================================
   HERO SECTION - Immersive fullscreen hero
   Vision: A grand, cinematic hero with a ceiling installation as backdrop,
   floating geometric elements, and smooth parallax scrolling
   ============================================ */
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

/* ============================================
   PARTNERS MARQUEE - Scrolling trust badges
   ============================================ */
function PartnersMarquee() {
  const partners = ['Pioneering Southern Africa', 'Stretch Ceilings & Lighting', 'Eco-Friendly Materials', '10-Year Warranty', 'Fireproof (Bs-1 d0)', 'Acoustic & Translucent Options', 'Bespoke Design', 'Fast 1–2 Day Install']
  return (
    <div className="relative py-6 bg-lafoi-dark overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...partners, ...partners].map((p, i) => (
          <span key={i} className="mx-8 text-sm font-sora text-white/30 flex items-center gap-3">
            <Star size={10} className="text-lafoi-green" />
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================================
   ABOUT PREVIEW - Split layout with offset imagery
   Vision: Elegant split section - left side has text with accent details,
   right side shows overlapping images of ceiling installations
   ============================================ */
function AboutPreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-lafoi-green/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images - Bento-style grid */}
          <AnimatedSection direction="left" className="relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7 rounded-3xl overflow-hidden h-80">
                <OptimizedImage
                  src="/brand/images/15.jpg"
                  alt="Dining room with reflective stretch ceiling and statement chandelier"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  fill
                  vision="Real installation: dining room with reflective stretch ceiling and chandelier"
                />
              </div>
              <div className="col-span-5 rounded-3xl overflow-hidden h-80">
                <OptimizedImage
                  src="/brand/images/22.jpg"
                  alt="Lounge with starry sky stretch ceiling and linear light line"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  fill
                  vision="Real installation: lounge with starry sky and integrated linear light"
                />
              </div>
              <div className="col-span-5 rounded-3xl overflow-hidden h-52">
                <OptimizedImage
                  src="/brand/images/30.jpg"
                  alt="La Foi Designs team at the Luxury Stretch Ceilings marquee"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  fill
                  vision="Real team photo at branded Lafoi marquee"
                />
              </div>
              {/* Accent card */}
              <div className="col-span-7 rounded-3xl bg-lafoi-green p-8 flex flex-col justify-center h-52">
                <p className="text-white font-sora text-3xl font-bold">Since 2024</p>
                <p className="text-white/70 text-sm font-general mt-2">Zimbabwe's first and leading stretch ceiling provider</p>
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
                { icon: Award, label: 'Regional Pioneers' },
                { icon: Sparkles, label: 'Bespoke Design' },
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
   SERVICES SHOWCASE - Asymmetric card layout
   Vision: Services displayed in an offset bento grid with hover animations
   ============================================ */
function ServicesShowcase() {
  const services = [
    {
      icon: Layers,
      title: 'Stretch Ceiling Installation',
      desc: 'Custom-designed, seamless and durable stretch ceilings — matte, gloss, satin, translucent and mirror finishes — for luxury homes, hospitality and corporate interiors.',
      image: '/brand/images/17.jpg',
      vision: 'Real install: gloss white double-volume stairwell with linear light lines',
      link: '/services/stretch-ceilings',
      color: 'from-lafoi-green/80 to-emerald-600/80',
    },
    {
      icon: Lightbulb,
      title: 'Lighting Solutions',
      desc: 'Integrated, energy-efficient lighting that complements every space — linear LED light lines, backlit translucent panels, fibre-optic starry skies and statement chandeliers.',
      image: '/brand/images/5.jpg',
      vision: 'Real install: spiral chandelier and linear ceiling lights in double-volume entrance',
      link: '/services/custom-lighting',
      color: 'from-amber-500/80 to-orange-600/80',
    },
    {
      icon: Printer,
      title: 'Art Print Ceilings',
      desc: 'Bespoke photographic prints on stretch membranes using hypoallergenic, moisture-resistant and eco-friendly inks — sky scenes, marble effects, custom artwork and brand graphics.',
      image: '/brand/images/45.jpg',
      vision: 'Real install: marble art print stretch ceiling with backlighting in conference room',
      link: '/services/printed-ceilings',
      color: 'from-violet-500/80 to-purple-600/80',
    },
    {
      icon: Box,
      title: '3D Ceiling Forms',
      desc: 'Sculptural multi-level installations with curves, waves and geometric 3D forms. Dramatic visual focal points engineered with our seamless membrane system.',
      image: '/brand/images/20.jpg',
      vision: 'Real install: wavy gloss white stretch ceiling in a dressing room',
      link: '/services/3d-ceilings',
      color: 'from-cyan-500/80 to-blue-600/80',
    },
    {
      icon: Volume2,
      title: 'Acoustic Stretch Ceilings',
      desc: 'Micro and macro-perforated membranes — Volans, Auriga, Orion, Cetus and Libra — engineered to absorb sound while staying visually seamless. Ideal for offices, studios and venues.',
      image: '/brand/images/47.jpg',
      vision: 'Real install: perforated acoustic stretch ceiling in a cafe / restaurant',
      link: '/services/acoustic',
      color: 'from-teal-500/80 to-emerald-600/80',
    },
    {
      icon: Palette,
      title: 'Design Consultation',
      desc: 'End-to-end consultation from brief to handover. Work directly with our experts to specify materials, colours and lighting tailored to your needs and style.',
      image: '/brand/images/49.jpg',
      vision: 'Real install: geometric gold mirror ceiling with linear lights in a retail entrance',
      link: '/services',
      color: 'from-rose-500/80 to-pink-600/80',
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-lafoi-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 grid-pattern" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-lafoi-green/5 rounded-full blur-[100px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Solutions</span>
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-5">
              Comprehensive ceiling &<br />lighting solutions
            </h2>
            <p className="text-white/40 font-general">
              From concept to completion, we offer a full spectrum of premium ceiling and lighting services tailored to your vision.
            </p>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                to={service.link}
                className="group relative block h-80 rounded-3xl overflow-hidden"
              >
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  fill
                  vision={service.vision}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity`} />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                    <service.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-sora text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/70 font-general line-clamp-2 group-hover:line-clamp-none transition-all">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-white/80 text-sm font-sora font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Explore <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-sora text-sm font-medium hover:bg-white/10 transition-colors group"
          >
            View All Services
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ============================================
   STATS COUNTER - Animated number counter section
   ============================================ */
function StatsCounter() {
  const stats = [
    { number: 'First', label: 'In Southern Africa', suffix: '' },
    { number: '16+', label: 'Premium Finishes', suffix: '' },
    { number: '50m', label: 'Light Lines, No Joints', suffix: '' },
    { number: '10-Yr', label: 'Material Warranty', suffix: '' },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="font-sora text-4xl sm:text-5xl font-bold text-gradient">{stat.number}</p>
              <p className="text-sm text-lafoi-gray font-general mt-2">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ============================================
   PORTFOLIO PREVIEW - Masonry-style gallery
   Vision: A curated selection of best works in a dynamic masonry layout
   ============================================ */
function PortfolioPreview() {
  const projects = [
    { title: 'Starry Sky Master Suite', category: 'Residential', image: '/brand/images/1.jpg', tall: true, vision: 'Real install: starry sky stretch ceiling with perimeter LED in a master bedroom' },
    { title: 'Spiral Entrance Chandelier', category: 'Hospitality', image: '/brand/images/5.jpg', vision: 'Real install: spiral staircase under custom chandelier and linear lighting' },
    { title: 'Reflective Dining Room', category: 'Residential', image: '/brand/images/15.jpg', vision: 'Real install: dining room with reflective stretch ceiling and statement chandelier' },
    { title: 'Cinema with Galaxy Sky', category: 'Hospitality', image: '/brand/images/57.jpg', vision: 'Real install: home cinema with fibre-optic galaxy sky' },
    { title: 'Showroom Round Translucent', category: 'Commercial', image: '/brand/images/51.jpg', tall: true, vision: 'Real install: car showroom round translucent stretch ceiling' },
    { title: 'Backlit Marble Conference', category: 'Commercial', image: '/brand/images/45.jpg', vision: 'Real install: backlit marble art print stretch ceiling in conference room' },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-lafoi-cream overflow-hidden">
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
          {projects.map((project, i) => (
            <StaggerItem key={project.title}>
              <Link to="/portfolio" className="group block rounded-3xl overflow-hidden relative break-inside-avoid">
                <div className={project.tall ? 'h-96' : 'h-72'}>
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    fill
                    vision={project.vision}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs font-sora text-lafoi-green-light font-medium uppercase tracking-wider">{project.category}</p>
                  <h3 className="font-sora text-lg font-bold text-white mt-1">{project.title}</h3>
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
   PROCESS SECTION - Horizontal scrolling steps
   ============================================ */
function ProcessSection() {
  const steps = [
    { num: '01', title: 'Listen', desc: 'We meet on-site to understand your vision, brief and constraints — and assess the space, lighting and existing finishes in detail.' },
    { num: '02', title: 'Design', desc: 'We specify materials, finishes and lighting layouts — translating your brief into a precise plan with samples and measurements.' },
    { num: '03', title: 'Install', desc: 'Our in-house team installs your stretch ceiling and lighting in 1–2 days with no skimming, no painting and minimal disruption.' },
    { num: '04', title: 'Maintain', desc: 'Ongoing after-sales support and maintenance to keep your ceilings and lighting systems looking and performing as new.' },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-hero" />
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

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {steps.map((step, i) => (
            <StaggerItem key={step.num}>
              <div className="relative p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-lafoi-green/5 transition-all duration-500 group h-full">
                <div className="absolute top-8 right-8 font-sora text-6xl font-bold text-lafoi-green/5 group-hover:text-lafoi-green/10 transition-colors">
                  {step.num}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-lafoi-green/10 flex items-center justify-center mb-6 group-hover:bg-lafoi-green group-hover:text-white transition-all duration-300">
                  <span className="font-sora text-sm font-bold text-lafoi-green group-hover:text-white">{step.num}</span>
                </div>
                <h3 className="font-sora text-lg font-bold text-lafoi-dark mb-3">{step.title}</h3>
                <p className="text-sm text-lafoi-gray font-general leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-lafoi-green/20" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ============================================
   TESTIMONIALS - Card carousel
   ============================================ */
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'GAP Construction',
      role: 'Company',
      text: 'Professional stretch ceiling installation with a clean, modern finish. Very satisfied with the outcome.',
    },
    {
      name: 'Pro-Fitness Health Club',
      role: 'Company',
      text: 'I love the detail and elegance they brought into our gym. Highly recommended!',
    },
    {
      name: 'MAG Grip',
      role: 'Company',
      text: 'Efficient work delivered to a high standard. Met all project expectations.',
    },
    {
      name: 'University of Zimbabwe',
      role: 'Institution',
      text: 'La Foi Designs delivered beyond expectations — professional, timely, and flawless finishes.',
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-lafoi-dark overflow-hidden">
      <div className="absolute inset-0 opacity-30 grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lafoi-green/5 rounded-full blur-[120px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
            What our clients
            <span className="text-gradient"> say about us</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="h-full p-7 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col">
                <Quote size={24} className="text-lafoi-green/30 mb-4" />
                <p className="text-white/70 font-general text-sm leading-relaxed mb-6 flex-1">{t.text}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-sora text-sm font-semibold text-white">{t.name}</p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-lafoi-green/15 text-[10px] text-lafoi-green-light font-sora font-semibold uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ============================================
   CTA SECTION - Full-width call to action
   Vision: Dramatic CTA with background image of stunning ceiling installation
   ============================================ */
function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/brand/images/22.jpg"
          alt="Lounge with starry sky stretch ceiling and integrated linear light line"
          className="w-full h-full object-cover"
          fill
          vision="Real install: penthouse lounge with starry sky and linear light"
        />
        <div className="absolute inset-0 bg-lafoi-dark/70" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <motion.div
            className="w-16 h-16 rounded-2xl bg-lafoi-green/20 flex items-center justify-center mx-auto mb-8"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={28} className="text-lafoi-green" />
          </motion.div>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Partner with Zimbabwe's first<br />stretch ceiling provider
          </h2>
          <p className="text-white/60 font-general text-lg mb-10 max-w-xl mx-auto">
            Contact us today for a consultation and discover the endless possibilities for your next residential, commercial or institutional project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-all duration-300 shadow-lg shadow-lafoi-green/25"
            >
              Book Free Consultation
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
