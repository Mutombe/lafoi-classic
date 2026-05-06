import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check, Stack, Lightbulb, Printer, Cube, SpeakerHigh, Palette, CaretRight, Sparkle, Star, ArrowUpRight, Couch, Square, SquaresFour, Drop, ShieldCheck, Trophy, Lightning, Heart, Target } from '@phosphor-icons/react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
import { useSEO } from '../utils/seo'

const allServices = [
  {
    slug: 'stretch-ceilings',
    icon: Stack,
    title: 'Stretch Ceiling Installation',
    subtitle: 'Premium Membrane Systems',
    hero: '/brand/images/17.jpg',
    heroVision: 'Real install: gloss white double-volume stairwell with linear LED light lines',
    desc: 'Custom-designed, seamless and durable stretch ceilings in matte, gloss, satin, mirror and translucent finishes. Suitable for every interior — from luxury homes and corporate offices to hotels, gyms and retail. Installation takes 1–2 days with no skimming or painting required.',
    features: [
      'Matte, gloss, satin, mirror & translucent',
      '18+ lacquered colours available',
      'Mirror panels up to 1.25m × 28m',
      'Bs-1 d0 / Bs-2 d0 fire-rated',
      'Resistant to mould, moisture & cracks',
      'Installed in 1–2 days',
      '10-year material warranty',
      'No skimming or painting needed',
    ],
    applications: ['Luxury homes & bedrooms', 'Bathrooms & kitchens', 'Hotels & restaurants', 'Offices & boardrooms', 'Hospitals & clinics', 'Retail & showrooms'],
    image: '/brand/images/17.jpg',
    imageVision: 'Real install: gloss white double-volume stairwell with linear LED',
    color: 'from-lafoi-green to-emerald-600',
    bgAccent: 'bg-lafoi-green/10',
    fallbackHeroes: ['/brand/images/3.jpg', '/brand/images/58.jpg'],
  },
  {
    slug: 'custom-lighting',
    icon: Lightbulb,
    title: 'Lighting Solutions',
    subtitle: 'Integrated Architectural Lighting',
    hero: '/brand/images/5.jpg',
    heroVision: 'Real install: spiral chandelier in double-volume entrance with linear ceiling lights',
    desc: 'Integrated, energy-efficient lighting systems engineered to complement and enhance your space — linear LED light lines up to 50 metres without joints, fibre-optic starry skies, magnetic track systems, downlights and statement chandeliers.',
    features: [
      'Linear light lines up to 50m, no joints',
      'Fibre-optic starry sky ceilings',
      'Backlit translucent panels',
      'Magnetic track lighting',
      'Statement chandelier integration',
      'Energy-efficient LED systems',
      'Dimmable & smart-home ready',
      'Custom light patterns & layouts',
    ],
    applications: ['Master bedrooms & cinemas', 'Spa & wellness rooms', 'Hotel lobbies & lounges', 'Restaurants & bars', 'Showrooms & retail', 'Conference & boardrooms'],
    image: '/brand/images/22.jpg',
    imageVision: 'Real install: lounge with starry sky stretch ceiling and linear light line',
    color: 'from-amber-500 to-orange-600',
    bgAccent: 'bg-amber-500/10',
    fallbackHeroes: ['/brand/images/22.jpg', '/brand/images/39.jpg'],
  },
  {
    slug: 'printed-ceilings',
    icon: Printer,
    title: 'Art Print Ceilings',
    subtitle: 'Bespoke Photographic Prints',
    hero: '/brand/images/45.jpg',
    heroVision: 'Real install: backlit marble art print stretch ceiling in conference room',
    desc: 'Transform your ceiling into a canvas with custom photographic prints on stretch membranes — sky scenes, marble effects, floral motifs, custom artwork or brand graphics. Printed with hypoallergenic, moisture-resistant inks that are eco-friendly and safe for every room.',
    features: [
      'Hypoallergenic, eco-friendly inks',
      'Moisture-resistant & washable',
      'Custom photography & artwork',
      'Floral, marble & sky scenes',
      'Brand graphics & logos',
      'Backlit options for glow effect',
      'Seamless large-format printing',
      'Colour-accurate reproduction',
    ],
    applications: ['Pools & spas', 'Themed restaurants', "Children's rooms & nurseries", 'Hotel lobbies', 'Corporate branding', 'Medical & dental clinics'],
    image: '/brand/images/37.jpg',
    imageVision: 'Real install: bathroom with sky-print stretch ceiling and stone walls',
    color: 'from-violet-500 to-purple-600',
    bgAccent: 'bg-violet-500/10',
    fallbackHeroes: ['/brand/images/19.jpg', '/brand/images/52.jpg'],
  },
  {
    slug: '3d-ceilings',
    icon: Cube,
    title: '3D Ceiling Forms',
    subtitle: 'Sculptural Multi-Level Designs',
    hero: '/brand/images/20.jpg',
    heroVision: 'Real install: wavy gloss white stretch ceiling in a dressing room',
    desc: 'Push interior design beyond the flat plane with sculptural, multi-level stretch ceiling installations. Waves, curves, recessed coves and geometric forms — engineered with our seamless membrane system and integrated lighting.',
    features: [
      'Wave, curve & dome forms',
      'Multi-level recessed coves',
      'Custom organic geometries',
      'Integrated lighting channels',
      'Lightweight & seamless',
      'Combined with mirror & gloss',
      'Architectural focal points',
      'Bespoke to space dimensions',
    ],
    applications: ['Hotel lobbies & ballrooms', 'Corporate reception areas', 'Showrooms & retail', 'Event venues', 'Luxury residences', 'Architectural features'],
    image: '/brand/images/42.jpg',
    imageVision: 'Real install: high-volume stairwell with linear light geometry around sculpture',
    color: 'from-cyan-500 to-blue-600',
    bgAccent: 'bg-cyan-500/10',
    fallbackHeroes: ['/brand/images/42.jpg', '/brand/images/49.jpg'],
  },
  {
    slug: 'acoustic',
    icon: SpeakerHigh,
    title: 'Acoustic Stretch Ceilings',
    subtitle: 'Sound Absorption + Visual Calm',
    hero: '/brand/images/47.jpg',
    heroVision: 'Real install: perforated acoustic stretch ceiling in cafe / restaurant interior',
    desc: 'Perforated stretch membranes — Volans, Volans premium, Auriga, Orion (micro-perforation) and Cetus, Libra (macro-perforation) — engineered to absorb sound while staying visually seamless. Perfect where aesthetics and acoustics need to coexist.',
    features: [
      '6 perforated membrane options',
      'Volans, Auriga, Orion micro-perf',
      'Cetus, Libra macro-perf',
      'Hidden acoustic backing',
      'Seamless visual appearance',
      'Echo & reverberation control',
      'All standard finishes available',
      'Meets acoustic standards',
    ],
    applications: ['Conference & boardrooms', 'Open-plan offices', 'Restaurants & cafes', 'Cinemas & home theatres', 'Recording studios', 'Educational & lecture spaces'],
    image: '/brand/images/48.jpg',
    imageVision: 'Real install: perforated star ceiling with backlit dot pattern',
    color: 'from-teal-500 to-emerald-600',
    bgAccent: 'bg-teal-500/10',
    fallbackHeroes: ['/brand/images/56.jpg', '/brand/images/57.jpg'],
  },
  {
    slug: 'consulting',
    icon: Palette,
    title: 'Design Consultation',
    subtitle: 'Bespoke Solutions, Brief to Handover',
    hero: '/brand/images/49.jpg',
    heroVision: 'Real install: geometric gold mirror ceiling with linear lights in retail entrance',
    desc: 'Work directly with our experts to create bespoke solutions tailored to your space, taste and budget. Site assessment, material specification, lighting design, samples and full project management — all delivered with ongoing maintenance support.',
    features: [
      'Free initial site assessment',
      'Material & finish specification',
      'Lighting layout design',
      'Material sampling on request',
      'Colour & finish matching',
      'Project programme & budgeting',
      'In-house project management',
      'Ongoing maintenance support',
    ],
    applications: ['New builds', 'Renovations', 'Commercial fit-outs', 'Hotel & hospitality projects', 'Institutional installations', 'Retail rebrand programmes'],
    image: '/brand/images/52.jpg',
    imageVision: 'Real install: reception with sky-print ceiling and modern signage',
    color: 'from-rose-500 to-pink-600',
    bgAccent: 'bg-rose-500/10',
    fallbackHeroes: ['/brand/images/45.jpg', '/brand/images/30.jpg'],
  },
  {
    slug: 'interior-design',
    icon: Couch,
    title: 'Interior Design',
    subtitle: 'Holistic Spaces, Designed End-to-End',
    hero: '/brand/images/56.jpg',
    heroVision: 'Real install: home cinema with starry sky stretch ceiling and quilted upholstered walls',
    desc: 'Beyond the ceiling, we design the room. Wall finishes, lighting design, joinery, soft furnishings and material palettes — coordinated with our stretch ceiling and lighting work to deliver complete interiors that feel considered, cohesive and undeniably bespoke.',
    features: [
      'Concept design & moodboards',
      'Material & finish palettes',
      'Wall, ceiling & floor coordination',
      'Lighting design integrated with ceiling',
      'Joinery & built-in specification',
      'Soft furnishing direction',
      '3D visualisation on request',
      'Single point of design accountability',
    ],
    applications: ['Luxury residences', 'Master suites & cinemas', 'Hotel guest suites', 'Boutique retail', 'Restaurants & bars', 'Executive offices'],
    image: '/brand/images/56.jpg',
    imageVision: 'Real install: home cinema with starry sky and upholstered feature walls',
    color: 'from-fuchsia-500 to-rose-600',
    bgAccent: 'bg-fuchsia-500/10',
    fallbackHeroes: ['/brand/images/57.jpg', '/brand/images/50.jpg'],
  },
  {
    slug: 'flooring',
    icon: Square,
    title: 'Flooring',
    subtitle: 'Engineered, Marble, Timber & Vinyl',
    hero: '/brand/images/35.jpg',
    heroVision: 'Real install: marble entrance hall with linear ceiling lights and floor-to-ceiling glazing',
    desc: 'A complete flooring offering to match the precision of our ceilings — engineered timber, large-format porcelain, calacatta and statuario marble, luxury vinyl tile and herringbone parquet. Specified, supplied and installed by our in-house team with the same warranty culture as our membrane work.',
    features: [
      'Engineered & solid hardwood',
      'Large-format porcelain (1.2m × 2.4m)',
      'Calacatta, statuario & onyx marble',
      'Luxury vinyl tile (LVT)',
      'Herringbone & chevron parquet',
      'Underfloor heating compatible',
      'Acoustic underlay options',
      'Skirting & threshold detailing',
    ],
    applications: ['Living areas & bedrooms', 'Kitchens & bathrooms', 'Hotel lobbies & corridors', 'Retail & showrooms', 'Restaurants & bars', 'Commercial offices'],
    image: '/brand/images/35.jpg',
    imageVision: 'Real install: marble entrance hall with linear lighting',
    color: 'from-amber-700 to-stone-700',
    bgAccent: 'bg-amber-700/10',
    fallbackHeroes: ['/brand/images/50.jpg', '/brand/images/15.jpg'],
  },
  {
    slug: 'tiling',
    icon: SquaresFour,
    title: 'Tiling',
    subtitle: 'Marble, Porcelain & Mosaic',
    hero: '/brand/images/41.jpg',
    heroVision: 'Real install: marble feature wall with linear LED detailing and reflective gloss ceiling',
    desc: 'Wall and floor tiling executed to a finish that holds up beside our gloss and mirror ceilings — book-matched marble feature walls, large-format porcelain, decorative mosaics and rectified joints. Installed by trained tilers with mitred edges and grout colour-matched to the design.',
    features: [
      'Book-matched marble feature walls',
      'Large-format rectified porcelain',
      'Mosaic & decorative inlays',
      'Mitred edges & shadow gaps',
      'Colour-matched grouts',
      'Wet-room waterproofing',
      'Niche & bench detailing',
      'Heated wall option for steam rooms',
    ],
    applications: ['Bathrooms & en-suites', 'Kitchen splashbacks', 'Spa & pool walls', 'Hotel feature walls', 'Restaurant interiors', 'Retail accent walls'],
    image: '/brand/images/41.jpg',
    imageVision: 'Real install: marble feature wall with linear lights',
    color: 'from-slate-500 to-zinc-700',
    bgAccent: 'bg-slate-500/10',
    fallbackHeroes: ['/brand/images/15.jpg', '/brand/images/45.jpg'],
  },
  {
    slug: 'epoxy',
    icon: Drop,
    title: 'Epoxy Floors & Coatings',
    subtitle: 'Seamless, Hard-Wearing, High-Gloss',
    hero: '/brand/images/38.jpg',
    heroVision: 'Real install: RGB-lit feature wall with seamless polished floor finish',
    desc: 'Self-levelling epoxy and polyurethane systems for floors and feature surfaces. A continuous, joint-free, easy-clean finish in solid colours, metallic effects, flake systems and clear-coat over decorative substrates. Engineered for both luxury residential moments and hard-working commercial environments.',
    features: [
      'Self-levelling — joint-free',
      'Solid colour, metallic & flake systems',
      'Clear-coat over photographic substrates',
      'Anti-slip aggregate option',
      'Chemical & abrasion resistant',
      'High-gloss or matte sealer',
      'Underfloor heating compatible',
      'Curing in 24-48 hours',
    ],
    applications: ['Showrooms & retail', 'Garages & workshops', 'Restaurants & cafes', 'Offices & lobbies', 'Galleries', 'Industrial & commercial floors'],
    image: '/brand/images/38.jpg',
    imageVision: 'Real install: RGB lighting feature with seamless polished floor',
    color: 'from-indigo-500 to-violet-600',
    bgAccent: 'bg-indigo-500/10',
    fallbackHeroes: ['/brand/images/51.jpg', '/brand/images/49.jpg'],
  },
]

const applicationIcons = [Sparkle, Star, Trophy, ShieldCheck, Lightning, Heart]

export default function Services() {
  const { serviceSlug } = useParams()
  const [activeService, setActiveService] = useState(
    serviceSlug ? allServices.find(s => s.slug === serviceSlug) || allServices[0] : null
  )

  useSEO({
    title: activeService ? activeService.title : 'Our Services',
    description: activeService
      ? activeService.desc
      : 'Explore La Foi Designs\' comprehensive ceiling and lighting solutions -- stretch ceilings, custom lighting, printed ceilings, 3D forms, and acoustic solutions.',
    path: activeService ? `/services/${activeService.slug}` : '/services',
  })

  if (activeService) return <ServiceDetail service={activeService} />

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ServicesHero />
      <ServiceSpreads />
      <ProcessOverview />
      <WhyChooseUs />
      <ServicesCTA />
    </motion.div>
  )
}

function ServicesHero() {
  const slides = [
    { src: '/brand/images/17.jpg', alt: 'Gloss white stretch ceiling stairwell', vision: 'gloss white stairwell' },
    { src: '/brand/images/5.jpg', alt: 'Spiral chandelier entrance', vision: 'chandelier entrance' },
    { src: '/brand/images/45.jpg', alt: 'Marble print boardroom ceiling', vision: 'marble boardroom' },
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center bg-lafoi-dark overflow-hidden">
      <HeroSlideshow slides={slides} />

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

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-lafoi-green animate-pulse" />
            <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Our Solutions</span>
          </motion.div>

          <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mt-4 mb-6">
            Ceiling & lighting<br />
            <span className="font-cabinet italic font-light text-gradient">solutions catalogue</span>
          </h1>
          <p className="text-white/70 font-general text-lg max-w-xl leading-relaxed">
            Stretch ceiling installation, integrated lighting, art print, acoustic and bespoke design consultation — backed by ongoing after-sales support and a 10-year material warranty.
          </p>

          <motion.div
            className="flex flex-wrap gap-2 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {allServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 text-xs font-sora font-medium hover:bg-lafoi-green/30 hover:border-lafoi-green/50 hover:text-white transition-all duration-300"
              >
                <s.icon size={12} />
                {s.title}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceSpreads() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-12 relative">
        <AnimatedSection className="text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-lafoi-green/40" />
            <span className="text-lafoi-green font-sora text-xs font-semibold tracking-widest uppercase">Editorial Catalogue</span>
            <div className="h-px w-8 bg-lafoi-green/40" />
          </div>
          <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mb-4 tracking-[-0.01em]">
            10 services, every one delivered by our in-house team
          </h2>
          <p className="text-lafoi-gray font-general">
            Fast 1–2 day installs, fireproof and waterproof materials, and a 10-year material warranty on every project.
          </p>
        </AnimatedSection>
      </div>

      <div className="space-y-12 lg:space-y-20 relative">
        {allServices.map((service, i) => (
          <ServiceSpread key={service.slug} service={service} index={i} reverse={i % 2 === 1} featured={i === 0} />
        ))}
      </div>
    </section>
  )
}

function ServiceSpread({ service, index, reverse, featured = false }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  const imageBlock = (
    <div ref={ref} className="rounded-3xl overflow-hidden h-[420px] lg:h-[480px] relative group">
      <motion.div className="absolute inset-0" style={{ y }}>
        <OptimizedImage src={service.image} alt={service.title} className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[1500ms]" fill vision={service.imageVision} />
      </motion.div>
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent`} />
      <div className={`absolute top-5 left-5 w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center`}>
        <service.icon size={18} className="text-white" />
      </div>
      {featured && (
        <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lafoi-green/90 backdrop-blur-md text-[10px] font-sora font-semibold tracking-widest uppercase text-white">
          <Sparkle size={10} weight="fill" /> Featured
        </div>
      )}
    </div>
  )

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-2 lg:py-4">
      <div className={`grid lg:grid-cols-12 gap-6 lg:gap-12 items-center`}>
        <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
          {imageBlock}
        </div>

        <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-cabinet italic font-light text-6xl lg:text-7xl text-lafoi-green/25 leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="h-px flex-1 bg-lafoi-green/20" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-lafoi-gray-medium font-sora">{`/ ${String(allServices.length).padStart(2, '0')}`}</span>
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora mb-3">{service.subtitle}</p>
          <h3 className="font-sora text-3xl lg:text-4xl font-bold text-lafoi-dark mb-4 leading-[1.1] tracking-[-0.01em]">
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="font-cabinet italic font-light text-gradient">{service.title.split(' ').slice(-1)}</span>
          </h3>
          <p className="text-base text-lafoi-gray font-general leading-relaxed mb-5 max-w-xl">{service.desc}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {service.applications.slice(0, 4).map((a) => (
              <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lafoi-green-soft text-xs text-lafoi-dark font-sora font-medium">
                <CaretRight size={10} className="text-lafoi-green" />
                {a}
              </span>
            ))}
          </div>

          <Link
            to={`/services/${service.slug}`}
            className="group inline-flex items-center gap-2 font-sora text-sm font-semibold text-lafoi-green hover:text-lafoi-green-dark transition-colors"
          >
            Explore {service.title}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProcessOverview() {
  const steps = [
    { num: '01', title: 'Listen', desc: 'On-site visit, brief and assessment of substrate, lighting and finishes.' },
    { num: '02', title: 'Design', desc: 'Material, finish and lighting specification with samples and measurements.' },
    { num: '03', title: 'Install', desc: '1–2 day install by our in-house team — no skimming, no painting, minimal disruption.' },
    { num: '04', title: 'Maintain', desc: 'Ongoing after-sales support to keep ceilings and lighting performing at their best.' },
  ]

  return (
    <section className="py-16 lg:py-24 bg-lafoi-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-lafoi-green/[0.05] rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-lafoi-green-light/[0.05] rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">How We Work</span>
          <h2 className="heading-lg text-2xl sm:text-3xl lg:text-4xl text-white mt-4">
            Our simple <span className="font-cabinet italic font-light text-gradient">4-step process</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {steps.map((step, i) => (
            <StaggerItem key={step.num}>
              <div className="relative p-8 rounded-3xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-all duration-300 group h-full overflow-hidden">
                <div className="absolute -right-4 -top-4 font-cabinet italic font-light text-8xl text-lafoi-green/15 leading-none">{step.num}</div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-lafoi-green/20 flex items-center justify-center group-hover:bg-lafoi-green transition-colors duration-300">
                    <span className="font-sora text-sm font-bold text-lafoi-green group-hover:text-white transition-colors">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                  )}
                </div>
                <h3 className="font-sora text-lg font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-white/50 font-general leading-relaxed relative z-10">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const reasons = [
    { title: "Zimbabwe's First", desc: "Zimbabwe's first dedicated stretch ceiling and lighting studio.", icon: Trophy, count: { to: 1, suffix: 'st' } },
    { title: 'Innovative & Modern', desc: 'Cutting-edge techniques and premium materials for sleek, seamless finishes that last.', icon: Sparkle, count: { to: 16, suffix: '+' } },
    { title: 'Fast & Cost-Effective', desc: 'Quicker 1–2 day installs reduce project costs and timelines — no skimming or painting.', icon: Lightning, count: { to: 2, suffix: ' days' } },
    { title: 'Durability & Safety', desc: 'Resistant to mould, moisture and cracks, Bs-1 d0 fire-rated, with a 10-year material warranty.', icon: ShieldCheck, count: { to: 10, suffix: ' yrs' } },
  ]

  return (
    <section className="py-16 lg:py-24 bg-lafoi-green-soft relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Why Us</span>
          <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-4">
            Why choose <span className="font-cabinet italic font-light text-gradient">La Foi Designs?</span>
          </h2>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 h-full hover:shadow-xl hover:shadow-lafoi-green/[0.05] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-4 right-4 font-sora text-2xl font-bold text-lafoi-green opacity-90">
                  {r.count.to}{r.count.suffix || ''}
                </div>
                <div className="w-11 h-11 rounded-xl bg-lafoi-green/10 flex items-center justify-center mb-4 group-hover:bg-lafoi-green transition-colors duration-300">
                  <r.icon size={18} className="text-lafoi-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-sora text-base font-bold text-lafoi-dark mb-2">{r.title}</h3>
                <p className="text-sm text-lafoi-gray font-general leading-relaxed">{r.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function ServicesCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <OptimizedImage
          src="/brand/images/51.jpg"
          alt="Luxury car showroom with circular translucent stretch ceiling"
          className="w-full h-full object-cover scale-110"
          fill
        />
        <div className="absolute inset-0 bg-lafoi-dark/70" />
      </motion.div>
      {/* single blob — compact rule */}
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-lafoi-green/20 blur-[80px] animate-float pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-4xl text-white mb-5 tracking-[-0.01em]">
            Not sure which solution<br /><span className="font-cabinet italic font-light">is right for you?</span>
          </h2>
          <p className="text-white/70 font-general text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a consultation and our team will help you choose the right ceiling and lighting combination for your space, brief and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 h-12 px-6 bg-lafoi-green text-white rounded-full font-sora text-sm font-medium hover:bg-lafoi-green-dark transition-colors"
            >
              Book Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+263712326951"
              className="inline-flex items-center gap-2 h-12 px-6 bg-white/10 backdrop-blur-md text-white rounded-full font-sora text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Call +263 712 326 951
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function ServiceDetail({ service }) {
  const slides = [
    { src: service.hero, alt: service.title, vision: service.heroVision },
    ...(service.fallbackHeroes || []).map((src) => ({ src, alt: service.title, vision: service.heroVision })),
  ]

  const otherServices = allServices.filter(s => s.slug !== service.slug).slice(0, 4)
  const galleryImages = ['/brand/images/15.jpg', '/brand/images/45.jpg', '/brand/images/22.jpg']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <HeroSlideshow slides={slides} />
        <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-lafoi-green/10 blur-[100px] animate-float pointer-events-none z-10" />

        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pb-16 pt-40">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-white/70 text-sm font-general mb-8 hover:text-white transition-colors group">
            <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="flex flex-col gap-5 max-w-3xl">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}>
                <service.icon size={24} className="text-white" />
              </div>
              <div className="h-px flex-1 bg-white/20 max-w-[80px]" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green-light font-sora">{service.subtitle}</p>
            </div>
            <h1 className="heading-xl text-3xl sm:text-4xl lg:text-6xl text-white">
              {service.title}
            </h1>
            <p className="text-white/75 text-base sm:text-lg font-general max-w-xl leading-relaxed">{service.desc}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-1 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-cabinet italic font-light text-6xl text-lafoi-green/25 leading-none">01</span>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora">Features & Benefits</p>
                  <div className="h-px flex-1 bg-lafoi-green/20" />
                </div>
                <h2 className="font-sora text-3xl font-bold text-lafoi-dark mb-8">Built to perform, designed to last</h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="divide-y divide-gray-100 border-y border-gray-100">
                  {service.features.map((f, i) => (
                    <div key={f} className="flex items-center gap-4 py-4 group hover:pl-2 transition-all duration-300">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora w-12">{`0${i + 1}`}</span>
                      <Check size={16} className="text-lafoi-green shrink-0" weight="bold" />
                      <span className="text-base text-lafoi-dark font-general flex-1">{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15} className="mt-16">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-cabinet italic font-light text-6xl text-lafoi-green/25 leading-none">02</span>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora">Applications</p>
                  <div className="h-px flex-1 bg-lafoi-green/20" />
                </div>
                <h3 className="font-sora text-2xl font-bold text-lafoi-dark mb-6">Where this works best</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.applications.map((a, i) => {
                    const Icon = applicationIcons[i % applicationIcons.length]
                    return (
                      <div key={a} className="p-5 rounded-2xl bg-white border border-gray-100 hover:border-lafoi-green/30 hover:shadow-lg hover:shadow-lafoi-green/[0.05] transition-all duration-300 group">
                        <div className="w-10 h-10 rounded-xl bg-lafoi-green/10 flex items-center justify-center mb-3 group-hover:bg-lafoi-green transition-colors">
                          <Icon size={18} className="text-lafoi-green group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-sm font-sora font-semibold text-lafoi-dark">{a}</p>
                      </div>
                    )
                  })}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="mt-16">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-cabinet italic font-light text-6xl text-lafoi-green/25 leading-none">03</span>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora">Recent Installs</p>
                  <div className="h-px flex-1 bg-lafoi-green/20" />
                </div>
                <h3 className="font-sora text-2xl font-bold text-lafoi-dark mb-6">See it in real spaces</h3>
                <div className="grid grid-cols-3 gap-3">
                  {galleryImages.map((src, i) => (
                    <Link key={src} to="/portfolio" className="block aspect-[4/5] rounded-2xl overflow-hidden group">
                      <OptimizedImage src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" fill />
                    </Link>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.25} className="mt-16">
                <h3 className="font-sora text-lg font-bold text-lafoi-dark mb-4">Explore Other Services</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="group flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:border-lafoi-green/30 hover:bg-lafoi-green/5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-lafoi-green/10 flex items-center justify-center group-hover:bg-lafoi-green transition-colors shrink-0">
                        <s.icon size={16} className="text-lafoi-green group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sora text-sm font-bold text-lafoi-dark">{s.title}</p>
                        <p className="text-xs text-lafoi-gray-medium font-general truncate">{s.subtitle}</p>
                      </div>
                      <ArrowUpRight size={16} className="text-lafoi-green opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection direction="right">
                <div className="sticky top-28 space-y-6">
                  <div
                    className="p-6 rounded-3xl bg-gradient-to-br from-lafoi-green to-lafoi-green-light text-white relative overflow-hidden"
                    style={{ borderTopRightRadius: '64px' }}
                  >
                    <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full border border-white/20" />
                    <div className="absolute -right-2 -bottom-4 w-32 h-32 rounded-full border border-white/10" />
                    <Sparkle size={20} className="text-white/80 mb-4 relative z-10" weight="fill" />
                    <h3 className="font-sora text-xl font-bold mb-2 relative z-10">Free Consultation</h3>
                    <p className="text-sm text-white/80 font-general mb-6 relative z-10">Site visit, sample pack and a no-obligation quote within 48 hours.</p>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white text-lafoi-green rounded-full font-sora text-sm font-semibold hover:bg-lafoi-cream transition-colors group relative z-10"
                    >
                      Request Quote
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="p-6 rounded-3xl bg-lafoi-green-soft border border-lafoi-green/15">
                    <h3 className="font-sora text-base font-bold text-lafoi-dark mb-4">Ideal For</h3>
                    <div className="space-y-3">
                      {service.applications.slice(0, 4).map((a) => (
                        <div key={a} className="flex items-center gap-2.5">
                          <CaretRight size={14} className="text-lafoi-green shrink-0" />
                          <span className="text-sm text-lafoi-gray font-general">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-white border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex -space-x-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} size={14} weight="fill" className="text-lafoi-green" />
                        ))}
                      </div>
                      <span className="text-xs text-lafoi-gray font-general">100% Satisfaction</span>
                    </div>
                    <p className="text-xs text-lafoi-gray-medium font-general leading-relaxed mb-4">
                      Backed by a 10-year material warranty. Bs-1 d0 fire-rated, waterproof and acoustic-rated where applicable.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                      <div>
                        <p className="font-sora text-2xl font-bold text-lafoi-dark">10-Yr</p>
                        <p className="text-[10px] tracking-widest uppercase text-lafoi-gray-medium mt-1">Warranty</p>
                      </div>
                      <div>
                        <p className="font-sora text-2xl font-bold text-lafoi-dark">1–2</p>
                        <p className="text-[10px] tracking-widest uppercase text-lafoi-gray-medium mt-1">Day Install</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />
    </motion.div>
  )
}
