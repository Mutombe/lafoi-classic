import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, Sparkle, Lightning, Heart, Target, ShieldCheck } from '@phosphor-icons/react'
import AnimatedSection from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
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
      transition={{ duration: 0.4 }}
    >
      <AboutHero />
      <Mission />
      <Story />
      <WhyLaFoi />
      <Materials />
      <Team />
      <ContactCTA />
    </motion.div>
  )
}

/* HERO ---------------------------------------------------------------- */
function AboutHero() {
  const slides = [
    { src: '/brand/images/30.jpg', alt: 'Lafoi team at the Luxury Stretch Ceilings marquee', vision: 'Real team photo at branded marquee' },
    { src: '/brand/images/1.jpg', alt: 'Starry sky stretch ceiling install', vision: 'Real install: starry sky bedroom' },
    { src: '/brand/images/50.jpg', alt: 'Hospitality lounge install', vision: 'Real install: parquet wood lounge' },
  ]

  return (
    <section className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden">
      <HeroSlideshow slides={slides} />

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pb-24 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-lafoi-green animate-pulse" />
            <span className="text-[11px] font-sora text-white/80 tracking-widest uppercase">
              About the studio
            </span>
          </div>

          <h1 className="font-sora font-medium text-white text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.02em] mb-5">
            A studio for stretch ceilings and architectural lighting.
          </h1>

          <p className="font-general font-light text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
            Founded 2024 in Belgravia, Harare. Working with imported European materials and an in-house install team.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* MISSION -------------------------------------------------------------- */
function Mission() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <AnimatedSection className="lg:col-span-5">
            <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-lafoi-green mb-5">
              Mission
            </p>
            <h2 className="font-sora font-semibold text-lafoi-dark text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] mb-8 max-w-md">
              Transform interiors with durable, beautiful, versatile ceilings.
            </h2>
            <p className="font-general font-normal text-base text-lafoi-gray leading-[1.7] max-w-md">
              We are committed to excellence, innovation and sustainability — pairing premium European stretch membranes with locally engineered architectural lighting. Every project is treated as a flagship, designed and installed by people who care about the work.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-7">
            <div className="aspect-[16/10] lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/brand/images/5.jpg"
                alt="Spiral chandelier in double-volume entrance with linear lights"
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

/* STORY ---------------------------------------------------------------- */
function Story() {
  return (
    <section className="py-20 lg:py-24 bg-lafoi-cream">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-lafoi-green mb-5">
            Our story
          </p>
          <h2 className="font-sora font-semibold text-lafoi-dark text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em]">
            Pioneering a discipline locally, one space at a time.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <AnimatedSection>
            <div className="space-y-6 max-w-xl">
              <p className="font-general font-normal text-base text-lafoi-gray leading-[1.7]">
                La Foi Designs was founded in 2024 to introduce premium stretch ceilings to Zimbabwe — the first dedicated stretch ceiling and lighting studio in the country. We saw a gap between what was built locally and what was possible internationally, and built a studio to close it.
              </p>
              <p className="font-general font-normal text-base text-lafoi-gray leading-[1.7]">
                We curate a catalogue of mirror, lacquered gloss, satin, matte, translucent, art-print and acoustic membranes — Bs-1 d0 fire-rated, with light lines up to fifty metres without joints. Materials are imported from established European mills; lighting is engineered locally.
              </p>
              <p className="font-general font-normal text-base text-lafoi-gray leading-[1.7]">
                Today, we deliver bespoke installations across luxury homes, corporate offices, hospitality venues, gyms, retail and institutions — including projects for the University of Zimbabwe, Pro-Fitness Health Club, GAP Construction and MAG Grip. Every install is owned end-to-end by our in-house team.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/brand/images/30.jpg"
                alt="The full La Foi Designs team at the Luxury Stretch Ceilings marquee"
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
    <section className="py-20 lg:py-24">
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

/* MATERIALS ------------------------------------------------------------ */
function Materials() {
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
    <section className="py-20 lg:py-24 bg-lafoi-cream">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-10">
        <div className="max-w-2xl">
          <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-lafoi-green mb-5">
            Materials
          </p>
          <h2 className="font-sora font-semibold text-lafoi-dark text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] mb-5">
            Eight finishes, sixteen plus standard colours.
          </h2>
          <p className="font-general font-normal text-base text-lafoi-gray leading-[1.7]">
            Every finish is fire-rated, waterproof, and installed by our in-house team.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-6 snap-x snap-mandatory">
        <div className="flex gap-5 lg:gap-6 px-4 sm:px-6 lg:px-10 min-w-max">
          {finishes.map((f) => (
            <div key={f.name} className="snap-start w-72 shrink-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <OptimizedImage
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover object-center"
                  fill
                />
              </div>
              <p className="font-sora font-medium text-lafoi-dark text-base mb-1">
                {f.name}
              </p>
              <p className="font-general font-light text-xs text-lafoi-gray-medium tracking-wide">
                {f.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* TEAM ----------------------------------------------------------------- */
function Team() {
  const team = [
    { name: 'Takudzwa Mhembere', role: 'Managing Director', initials: 'TM', bio: 'With over 5 years of experience in construction and interior design, Mr Mhembere leads La Foi Designs with vision and innovation, ensuring each project exceeds client expectations.' },
    { name: 'Mrs Mhembere', role: 'Head of Marketing', initials: 'MM', bio: 'Mrs Mhembere leads marketing strategy, brand positioning and client communications — driving visibility for our work across residential, commercial and institutional projects.' },
    { name: 'Ashley Tafirenyika', role: 'Operations Manager', initials: 'AT', bio: 'Specialist in project management, logistics and quality assurance — ensuring timely and efficient delivery of every project.' },
    { name: 'Tendekayi K Mavunga', role: 'Projects Director', initials: 'TM', bio: 'Expert in interior aesthetics — designing bespoke solutions tailored to client tastes and contemporary trends.' },
  ]

  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-[11px] font-sora tracking-[0.25em] uppercase text-lafoi-green mb-5">
            Leadership
          </p>
          <h2 className="font-sora font-semibold text-lafoi-dark text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] mb-5">
            Meet the team.
          </h2>
          <p className="font-general font-normal text-base text-lafoi-gray leading-[1.7]">
            In-house designers, project managers and installers — every site visit and every install fully owned by our own people.
          </p>
        </div>

        <AnimatedSection className="mb-16 lg:mb-20">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden">
            <OptimizedImage
              src="/brand/images/30.jpg"
              alt="The full La Foi Designs team at the Luxury Stretch Ceilings marquee"
              className="w-full h-full object-cover object-center"
              fill
            />
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((m) => (
            <AnimatedSection key={m.name}>
              <div className="w-16 h-16 rounded-full bg-lafoi-green/10 text-lafoi-green flex items-center justify-center font-sora font-medium text-lg mb-5">
                {m.initials}
              </div>
              <h3 className="font-sora font-medium text-lafoi-dark text-lg mb-1">
                {m.name}
              </h3>
              <p className="text-[11px] font-sora tracking-[0.2em] uppercase text-lafoi-green mb-4">
                {m.role}
              </p>
              <p className="font-general font-normal text-sm text-lafoi-gray leading-relaxed">
                {m.bio}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* CONTACT CTA ---------------------------------------------------------- */
function ContactCTA() {
  return (
    <section className="pb-20 lg:pb-24 pt-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative h-[60vh] min-h-[480px] rounded-3xl overflow-hidden">
          <OptimizedImage
            src="/brand/images/50.jpg"
            alt="Hospitality lounge with patterned stretch ceiling and statement lighting"
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
                  href="tel:+263712326951"
                  className="inline-flex items-center gap-2 h-12 px-6 text-white rounded-full font-sora text-sm font-medium border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Call +263 712 326 951
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
