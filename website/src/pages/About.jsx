import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Globe, Heart, Shield, Target, Users, Zap, CheckCircle2, Sparkles, Star } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
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
      <PartnersSection />
      <TeamSection />
      <AboutCTA />
    </motion.div>
  )
}

function AboutHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <OptimizedImage
          src="/brand/images/30.jpg"
          alt="La Foi Designs team at the Luxury Stretch Ceilings marquee, Harare"
          className="w-full h-full object-cover"
          fill
          priority
          vision="Real team photo at the Lafoi-branded marquee — the people behind every install"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-lafoi-green/10 blur-[100px] animate-float pointer-events-none" />

      <motion.div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-20" style={{ opacity }}>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-lafoi-green animate-pulse" />
            <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Our Story</span>
          </motion.div>

          <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6">
            Born from passion,
            <br />
            <span className="text-gradient">built on excellence</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 font-general max-w-xl leading-relaxed">
            Founded in 2024 to pioneer premium stretch ceilings and lighting solutions in Southern Africa — engineered for durability, designed around your vision, installed by an in-house team you can trust.
          </p>

          {/* Quick stats */}
          <motion.div
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: 'Since 2024', label: 'Founded' },
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
    </section>
  )
}

function MissionStatement() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-lafoi-green/10 flex items-center justify-center mx-auto mb-8">
            <Sparkles size={28} className="text-lafoi-green" />
          </div>
          <h2 className="heading-lg text-2xl sm:text-3xl lg:text-4xl text-lafoi-dark mb-6">
            To transform interior spaces with <span className="text-gradient">durable, visually stunning</span> and versatile ceilings.
          </h2>
          <p className="body-text text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our team combines expertise in interior design, construction and lighting technology to deliver bespoke solutions tailored to residential, commercial and institutional clients. We are committed to excellence, innovation and sustainability — meeting the highest standards of quality and design.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

function StoryTimeline() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-lafoi-cream">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Journey</span>
          <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-4">
            A journey of <span className="text-gradient">firsts</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <OptimizedImage
                  src="/brand/images/33.jpg"
                  alt="La Foi Designs team at the Zimbabwe Real Estate & Construction Summit (#ZIRECO 2024)"
                  className="w-full h-[500px] object-cover"
                  fill
                  vision="Real team photo at industry trade show — Lafoi staff in branded shirts"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <OptimizedImage
                  src="/brand/images/19.jpg"
                  alt="La Foi Designs team installing an art print stretch ceiling"
                  className="w-full h-full object-cover"
                  fill
                  vision="Real team installing custom art print backlit stretch ceiling"
                />
              </motion.div>
              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center z-10"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Globe size={20} className="text-lafoi-green mb-1" />
                <span className="text-xs font-sora font-bold text-lafoi-dark">Global</span>
                <span className="text-[10px] text-lafoi-gray">Standards</span>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="space-y-8">
              {[
                {
                  year: '2024',
                  title: 'Founded as Regional Pioneers',
                  desc: 'La Foi Designs is established to introduce premium stretch ceilings to Zimbabwe — the first company in Southern Africa to specialise solely in stretch ceilings and lighting solutions.',
                  highlight: true,
                },
                {
                  year: 'Materials & Technique',
                  title: 'Premium Material Catalogue',
                  desc: 'Curated catalogue of mirror, lacquered gloss, satin, matte, translucent, art print and acoustic membranes — Bs-1 d0 fire-rated, with light lines up to 50m without joints.',
                },
                {
                  year: 'In-House Team',
                  title: 'Trained Installation Crew',
                  desc: 'Our in-house installation team is trained in the full discipline — from substrate prep and tracking to lighting integration, finishing and quality assurance.',
                },
                {
                  year: '2024 — Present',
                  title: 'Building Lafoi Spaces',
                  desc: 'Bespoke installations across luxury homes, corporate offices, hospitality venues, gyms, retail and institutions — including projects for the University of Zimbabwe, Pro-Fitness Health Club, GAP Construction and MAG Grip.',
                  highlight: true,
                },
              ].map((item, i) => (
                <div key={i} className={`relative pl-8 border-l-2 ${item.highlight ? 'border-lafoi-green' : 'border-lafoi-green/20'}`}>
                  <div className={`absolute left-0 top-0 w-3.5 h-3.5 rounded-full -translate-x-[9px] ${item.highlight ? 'bg-lafoi-green shadow-lg shadow-lafoi-green/30' : 'bg-lafoi-green/40'}`} />
                  <p className="text-xs font-sora text-lafoi-green font-semibold tracking-wider uppercase">{item.year}</p>
                  <h3 className="font-sora text-lg font-bold text-lafoi-dark mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-lafoi-gray font-general leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const values = [
    { icon: Sparkles, title: 'Innovative & Modern', desc: 'Cutting-edge techniques and premium materials for sleek, seamless finishes that last.', color: 'from-emerald-500 to-green-600' },
    { icon: Award, title: 'Regional Pioneers', desc: 'The first company in Southern Africa specialising solely in stretch ceilings and lighting solutions.', color: 'from-violet-500 to-purple-600' },
    { icon: Zap, title: 'Fast & Cost-Effective', desc: 'Quicker installation times of 1–2 days reduce project costs and timelines — no skimming or painting required.', color: 'from-amber-500 to-orange-600' },
    { icon: Heart, title: 'Eco-Friendly', desc: 'Sustainable materials and energy-efficient lighting integrations — better for your space and the planet.', color: 'from-rose-500 to-pink-600' },
    { icon: Target, title: 'Design Flexibility', desc: 'A wide range of colours, textures, finishes and lighting options to match every brief and budget.', color: 'from-teal-500 to-cyan-600' },
    { icon: Shield, title: 'Durability & Safety', desc: 'Resistant to mould, moisture, cracks and wear — Bs-1 d0 fire-rated and ideal for Zimbabwe’s climate.', color: 'from-blue-500 to-indigo-600' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-lafoi-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-lafoi-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-lafoi-green/5 rounded-full blur-[100px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Values</span>
          <h2 className="heading-lg text-3xl sm:text-4xl text-white mt-4 mb-5">
            The principles that <span className="text-gradient">guide everything</span> we do
          </h2>
          <p className="text-white/40 font-general">
            More than just a company, we are a team united by shared values that inform every decision and every project.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500 h-full group">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon size={22} className="text-white" />
                </div>
                <h3 className="font-sora text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/50 font-general leading-relaxed">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function PartnersSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Materials</span>
          <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-4 mb-5">
            A premium <span className="text-gradient">material catalogue</span>, engineered to last.
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
                      <CheckCircle2 size={14} className="text-lafoi-green shrink-0" />
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
    {
      name: 'Takudzwa Mhembere',
      role: 'Managing Director',
      bio: 'With over 5 years of experience in construction and interior design, Mr Mhembere leads La Foi Designs with vision and innovation, ensuring each project exceeds client expectations.',
    },
    {
      name: 'Ashley Tafirenyika',
      role: 'Operations Manager',
      bio: 'Specialist in project management, logistics and quality assurance — ensuring timely and efficient delivery of every project.',
    },
    {
      name: 'Charmaine Mumbamarwo',
      role: 'Marketing Manager',
      bio: 'Responsible for marketing strategy, client communication and brand visibility for our stretch ceilings and modern lighting solutions.',
    },
    {
      name: 'Tendekayi K Mavunga',
      role: 'Projects Director',
      bio: 'Expert in interior aesthetics — designing bespoke solutions tailored to client tastes and contemporary trends.',
    },
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
    <section className="py-24 lg:py-32 bg-lafoi-cream relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Our Team</span>
          <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-4 mb-5">
            Meet the <span className="text-gradient">people behind</span> La Foi Designs
          </h2>
          <p className="text-lafoi-gray font-general leading-relaxed">
            A dedicated team of professionals committed to delivering exceptional stretch ceiling and lighting solutions. With a focus on quality, innovation and attention to detail, we work together so every project reflects modern design, precision and client satisfaction.
          </p>
        </AnimatedSection>

        {/* Group team band */}
        <AnimatedSection className="relative mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10 relative">
            <OptimizedImage
              src="/brand/images/30.jpg"
              alt="The full La Foi Designs team at the Luxury Stretch Ceilings marquee"
              className="w-full h-[300px] sm:h-[360px] object-cover object-center"
              fill
              vision="Real group photo of Lafoi staff at branded marquee"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lafoi-dark/85 via-lafoi-dark/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <p className="text-white font-sora text-xl sm:text-2xl font-semibold">The La Foi Designs team — Harare, Zimbabwe.</p>
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
              <Star size={16} className="text-white fill-white" />
              <span className="text-white font-sora text-sm font-bold">In-House Team</span>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Leadership grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="h-full p-6 lg:p-7 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-lafoi-green/[0.05] transition-all duration-500 group flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lafoi-green to-lafoi-green-light flex items-center justify-center mb-5 shadow-lg shadow-lafoi-green/20 group-hover:scale-105 transition-transform">
                  <span className="font-sora text-lg font-bold text-white tracking-wider">{initials(member.name)}</span>
                </div>
                <h3 className="font-sora text-base font-bold text-lafoi-dark mb-1">{member.name}</h3>
                <p className="text-xs text-lafoi-green font-sora font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-sm text-lafoi-gray font-general leading-relaxed flex-1">{member.bio}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-10">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 font-sora text-sm font-semibold text-lafoi-green hover:text-lafoi-green-dark transition-colors group"
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
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/brand/images/50.jpg"
          alt="Hospitality lounge with patterned stretch ceiling and statement lighting"
          className="w-full h-full object-cover"
          fill
          vision="Real install: hospitality lounge with patterned ceiling and chairs"
        />
        <div className="absolute inset-0 bg-lafoi-dark/70" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <AnimatedSection>
          <motion.div
            className="w-16 h-16 rounded-2xl bg-lafoi-green/20 flex items-center justify-center mx-auto mb-8"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={28} className="text-lafoi-green" />
          </motion.div>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Partner with Zimbabwe's<br />stretch ceiling pioneers.
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
