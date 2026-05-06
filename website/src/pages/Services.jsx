import React from 'react';
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check, Layers, Lightbulb, Printer, Box, Volume2, Palette, ChevronRight, Sparkles, Star, ArrowUpRight, Sofa, Square, Grid3x3, Droplets } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import { useSEO } from '../utils/seo'

const allServices = [
  {
    slug: 'stretch-ceilings',
    icon: Layers,
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
    applications: ['Pools & spas', 'Themed restaurants', 'Children\'s rooms & nurseries', 'Hotel lobbies', 'Corporate branding', 'Medical & dental clinics'],
    image: '/brand/images/37.jpg',
    imageVision: 'Real install: bathroom with sky-print stretch ceiling and stone walls',
    color: 'from-violet-500 to-purple-600',
    bgAccent: 'bg-violet-500/10',
  },
  {
    slug: '3d-ceilings',
    icon: Box,
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
  },
  {
    slug: 'acoustic',
    icon: Volume2,
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
  },
  {
    slug: 'interior-design',
    icon: Sofa,
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
  },
  {
    slug: 'tiling',
    icon: Grid3x3,
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
  },
  {
    slug: 'epoxy',
    icon: Droplets,
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
  },
]

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
      <ServicesGrid />
      <ProcessOverview />
      <WhyChooseUs />
      <ServicesCTA />
    </motion.div>
  )
}

function ServicesHero() {
  return (
    <section className="relative min-h-[65vh] flex items-center bg-lafoi-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-lafoi-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lafoi-green/5 rounded-full blur-[100px]" />

      {/* Decorative geometric elements */}
      <motion.div
        className="absolute top-40 right-[15%] w-20 h-20 border border-white/5 rounded-2xl hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-32 right-[25%] w-12 h-12 border border-lafoi-green/10 rounded-full hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-lafoi-green animate-pulse" />
            <span className="text-xs font-sora text-white/70 font-medium tracking-wider uppercase">Our Solutions</span>
          </motion.div>

          <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mt-4 mb-6">
            Ceiling & lighting
            <br />
            <span className="text-gradient">solutions catalogue</span>
          </h1>
          <p className="text-white/60 font-general text-lg max-w-xl leading-relaxed">
            Stretch ceiling installation, integrated lighting, art print, acoustic and bespoke design consultation — backed by ongoing after-sales support and a 10-year material warranty.
          </p>

          {/* Quick service pills */}
          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {allServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-sora font-medium hover:bg-lafoi-green/20 hover:border-lafoi-green/30 hover:text-white transition-all duration-300"
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

function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">What We Offer</span>
          <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-4 mb-5">
            Comprehensive solutions for <span className="text-gradient">every space</span>
          </h2>
          <p className="text-lafoi-gray font-general">
            Every service is delivered by our in-house team — fast 1–2 day installs, fireproof and waterproof materials, and a 10-year material warranty on every project.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {allServices.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                to={`/services/${service.slug}`}
                className="group block h-full rounded-3xl overflow-hidden border border-gray-100 bg-white hover:shadow-2xl hover:shadow-black/[0.06] transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    fill
                    vision={service.imageVision}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className={`absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                    <service.icon size={18} className="text-white" />
                  </div>
                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-lafoi-green font-sora font-semibold uppercase tracking-wider mb-2">{service.subtitle}</p>
                  <h3 className="font-sora text-xl font-bold text-lafoi-dark mb-3 group-hover:text-lafoi-green transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-lafoi-gray font-general line-clamp-3 mb-5 leading-relaxed">{service.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-sora font-semibold text-lafoi-green group-hover:gap-2.5 transition-all duration-300">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
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
    <section className="py-20 lg:py-28 bg-lafoi-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="heading-lg text-2xl sm:text-3xl text-white">
            Our simple <span className="text-gradient">4-step process</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {steps.map((step, i) => (
            <StaggerItem key={step.num}>
              <div className="relative p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-all duration-300 group h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-lafoi-green/20 flex items-center justify-center group-hover:bg-lafoi-green transition-colors duration-300">
                    <span className="font-sora text-sm font-bold text-lafoi-green group-hover:text-white transition-colors">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                  )}
                </div>
                <h3 className="font-sora text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/40 font-general leading-relaxed">{step.desc}</p>
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
    { title: 'Regional Pioneers', desc: 'The first company in Southern Africa specialising solely in stretch ceilings and lighting solutions.', icon: Star },
    { title: 'Innovative & Modern', desc: 'Cutting-edge techniques and premium materials for sleek, seamless finishes that last.', icon: Sparkles },
    { title: 'Fast & Cost-Effective', desc: 'Quicker 1–2 day installs reduce project costs and timelines — no skimming or painting.', icon: Check },
    { title: 'Durability & Safety', desc: 'Resistant to mould, moisture and cracks, Bs-1 d0 fire-rated, with a 10-year material warranty.', icon: Sparkles },
  ]

  return (
    <section className="py-24 lg:py-32 bg-lafoi-green-soft relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Why Us</span>
          <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-4">Why choose <span className="text-gradient">La Foi Designs?</span></h2>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 h-full hover:shadow-xl hover:shadow-lafoi-green/[0.05] transition-all duration-500 group">
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
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/brand/images/51.jpg"
          alt="Luxury car showroom with circular translucent stretch ceiling"
          className="w-full h-full object-cover"
          fill
          vision="Real install: high-end auto showroom under translucent ceiling halo"
        />
        <div className="absolute inset-0 bg-lafoi-dark/70" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Not sure which solution<br />is right for you?
          </h2>
          <p className="text-white/60 font-general text-lg mb-10 max-w-xl mx-auto">
            Contact us today for a consultation and our team will help you choose the right ceiling and lighting combination for your space, brief and budget.
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

function ServiceDetail({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={service.hero}
            alt={service.title}
            className="w-full h-full object-cover"
            fill
            priority
            vision={service.heroVision}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pb-16 pt-40">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-white/60 text-sm font-general mb-6 hover:text-white transition-colors group">
            <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="flex items-center gap-5 mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}>
              <service.icon size={28} className="text-white" />
            </div>
            <div>
              <p className="text-lafoi-green text-xs font-sora font-semibold uppercase tracking-wider mb-1">{service.subtitle}</p>
              <h1 className="heading-xl text-3xl sm:text-4xl lg:text-5xl text-white">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="body-text text-lg mb-10 leading-relaxed">{service.desc}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h3 className="font-sora text-xl font-bold text-lafoi-dark mb-6">Features & Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 p-3.5 rounded-xl bg-lafoi-green-soft border border-lafoi-green/[0.06] hover:border-lafoi-green/20 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-lafoi-green/10 flex items-center justify-center shrink-0">
                        <Check size={14} className="text-lafoi-green" />
                      </div>
                      <span className="text-sm text-lafoi-dark font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Related services */}
              <AnimatedSection delay={0.2} className="mt-12">
                <h3 className="font-sora text-lg font-bold text-lafoi-dark mb-4">Explore Other Services</h3>
                <div className="flex flex-wrap gap-3">
                  {allServices.filter(s => s.slug !== service.slug).slice(0, 3).map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-sm font-sora font-medium text-lafoi-dark hover:bg-lafoi-green/5 hover:border-lafoi-green/20 hover:text-lafoi-green transition-all duration-300"
                    >
                      <s.icon size={14} />
                      {s.title}
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection direction="right">
                <div className="sticky top-28 space-y-6">
                  <div className="p-6 rounded-3xl bg-lafoi-green-soft border border-lafoi-green/10">
                    <h3 className="font-sora text-lg font-bold text-lafoi-dark mb-5">Ideal For</h3>
                    <div className="space-y-3 mb-6">
                      {service.applications.map((a) => (
                        <div key={a} className="flex items-center gap-2.5">
                          <ChevronRight size={14} className="text-lafoi-green" />
                          <span className="text-sm text-lafoi-gray font-general">{a}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-colors shadow-lg shadow-lafoi-green/20 group"
                    >
                      Get a Free Quote
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Trust signals */}
                  <div className="p-5 rounded-2xl bg-white border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex -space-x-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} size={14} className="text-lafoi-green fill-lafoi-green" />
                        ))}
                      </div>
                      <span className="text-xs text-lafoi-gray font-general">100% Satisfaction</span>
                    </div>
                    <p className="text-xs text-lafoi-gray-medium font-general leading-relaxed">
                      Backed by a 10-year material warranty. Bs-1 d0 fire-rated, waterproof and acoustic-rated where applicable.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
