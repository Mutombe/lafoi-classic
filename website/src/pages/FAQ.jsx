import React, { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CaretDown, ArrowRight, Question, ChatCircle, WhatsappLogo, EnvelopeSimple, Sparkle } from '@phosphor-icons/react'
import AnimatedSection from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
import CountUp from '../components/ui/CountUp'
import MagneticButton from '../components/ui/MagneticButton'
import { useSEO } from '../utils/seo'

const faqCategories = [
  {
    category: 'General',
    questions: [
      { q: 'What are stretch ceilings?', a: 'Stretch ceilings are a modern ceiling finishing system made from PVC or fabric membranes that are stretched and fixed to a perimeter track. They create a perfectly smooth, seamless surface that can be customized with different colors, finishes, prints, and lighting integration.' },
      { q: 'Is La Foi Designs the first stretch ceiling company in Zimbabwe?', a: 'Yes. Founded in 2024, La Foi Designs is Zimbabwe\'s first and leading provider of stretch ceilings and lighting solutions — the first dedicated stretch ceiling and lighting studio in the country.' },
      { q: 'What areas do you service?', a: 'We primarily service Harare and surrounding areas, but we take on projects across Zimbabwe. For large-scale commercial or hospitality projects, we welcome inquiries from anywhere in the country.' },
    ],
  },
  {
    category: 'Products & Materials',
    questions: [
      { q: 'What finishes are available?', a: 'Matte, gloss, satin, mirror (Mirror Silver, Mirror Gold, Mirror Shadow), translucent (for backlighting), perforated acoustic (Volans, Auriga, Orion, Cetus, Libra) and custom art print. The lacquered range alone offers 18+ standard colours including Solaire, Roma, Onyx and Noir.' },
      { q: 'Are your ceilings fire-rated?', a: 'Yes, all our PVC membranes are fire-rated to European standards (Class B-s1, d0). They are self-extinguishing and do not produce toxic fumes — making them safe for residential and commercial use.' },
      { q: 'Are stretch ceilings waterproof?', a: 'Absolutely. PVC stretch ceilings are 100% waterproof and can hold up to 100 liters of water per square meter in case of a leak from above, protecting your furniture and flooring from water damage.' },
      { q: 'How long do stretch ceilings last?', a: 'With proper care, stretch ceilings last 15–25 years. Our materials carry a 10-year warranty and are Bs-1 d0 fire-rated, waterproof and resistant to mould.' },
    ],
  },
  {
    category: 'Installation',
    questions: [
      { q: 'How long does installation take?', a: 'A standard room (20-30 sqm) can be completed in 4-8 hours. Larger spaces or complex designs with lighting integration may take 1-2 days. We work efficiently to minimize disruption.' },
      { q: 'Is the installation process messy?', a: 'No. One of the biggest advantages of stretch ceilings is the clean installation process. Unlike traditional plastering, there\'s minimal dust and debris. We also protect all furniture and surfaces during installation.' },
      { q: 'Do I need to remove existing ceilings?', a: 'No! Stretch ceilings are installed below your existing ceiling using a perimeter track system. They\'re perfect for covering imperfections, cracks, or uneven surfaces without demolition work.' },
      { q: 'Can stretch ceilings be installed in bathrooms?', a: 'Yes. PVC stretch ceilings are ideal for bathrooms and kitchens due to their moisture resistance. They won\'t develop mold, mildew, or condensation stains.' },
    ],
  },
  {
    category: 'Pricing & Process',
    questions: [
      { q: 'How much do stretch ceilings cost?', a: 'Pricing depends on the area size, ceiling type, finish, and lighting requirements. We provide free consultations and detailed quotations. Contact us for a personalized quote tailored to your project.' },
      { q: 'Do you offer free consultations?', a: 'Yes! We offer completely free initial consultations where we assess your space, discuss options, and provide recommendations. There\'s no obligation — we want you to make an informed decision.' },
      { q: 'What is your warranty policy?', a: 'Every install comes with a 10-year material warranty and a 2-year workmanship warranty on installation. Materials are Bs-1 d0 fire-rated, waterproof and acoustic-rated where applicable.' },
    ],
  },
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General')
  const [search, setSearch] = useState('')

  useSEO({
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about stretch ceilings, installation, pricing, and more from La Foi Designs.',
    path: '/faq',
  })

  const allCount = faqCategories.reduce((sum, c) => sum + c.questions.length, 0)
  const activeQuestions = faqCategories.find(c => c.category === activeCategory)?.questions || []
  const filtered = search
    ? faqCategories.flatMap(c => c.questions.filter(q => q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase())))
    : activeQuestions

  const slides = [
    { src: '/brand/images/15.jpg', alt: 'Mirror dining ceiling', vision: 'Real install: mirror dining' },
    { src: '/brand/images/17.jpg', alt: 'Gloss white stairwell', vision: 'Real install: gloss white stairwell' },
    { src: '/brand/images/60.jpg', alt: 'Translucent triangular conference', vision: 'Real install: translucent triangular conference' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <HeroSlideshow slides={slides} />
        <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-lafoi-green/10 blur-[100px] animate-float pointer-events-none z-10" />

        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Question size={14} className="text-lafoi-green" />
              <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Support</span>
            </motion.div>
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mt-4 mb-6">
              Frequently asked<br /><span className="font-cabinet italic font-light text-gradient">questions</span>
            </h1>
            <p className="text-white/75 font-general text-lg max-w-xl">
              Everything you need to know about stretch ceilings, our process, and what makes La Foi Designs different.
            </p>
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="font-sora text-2xl font-bold text-white"><CountUp to={allCount} /></p>
                <p className="text-xs text-white/40 font-general mt-1">Questions Answered</p>
              </div>
              <div>
                <p className="font-sora text-2xl font-bold text-white"><CountUp to={faqCategories.length} /></p>
                <p className="text-xs text-white/40 font-general mt-1">Topic Categories</p>
              </div>
              <div>
                <p className="font-sora text-2xl font-bold text-white">24h</p>
                <p className="text-xs text-white/40 font-general mt-1">Response Time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Cross pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cross" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 20 14 L 20 26 M 14 20 L 26 20" stroke="#1A8A2E" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cross)" />
          </svg>
        </div>
        <div className="absolute top-40 right-0 w-72 h-72 bg-lafoi-green/[0.05] rounded-full blur-[100px] animate-float" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          {/* Search bar */}
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-3 px-5 py-4 rounded-full glass border border-white/40 hover:border-lafoi-green/40 focus-within:border-lafoi-green transition-colors">
              <Question size={18} className="text-lafoi-green shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="flex-1 bg-transparent border-0 outline-none text-sm font-general text-lafoi-dark placeholder:text-lafoi-gray-medium"
              />
              {search && (
                <button onClick={() => setSearch('')} className="text-xs text-lafoi-gray-medium hover:text-lafoi-green font-sora">
                  Clear
                </button>
              )}
            </div>
          </AnimatedSection>

          {/* Category tabs */}
          {!search && (
            <AnimatedSection>
              <div className="flex flex-wrap gap-2 mb-12 justify-center">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-sora font-medium transition-all duration-300 backdrop-blur-md ${
                      activeCategory === cat.category
                        ? 'bg-gradient-to-r from-lafoi-green to-lafoi-green-light text-white shadow-lg shadow-lafoi-green/25'
                        : 'bg-white/70 border border-gray-200 text-lafoi-gray hover:bg-lafoi-green/10 hover:text-lafoi-green hover:border-lafoi-green/30'
                    }`}
                  >
                    {cat.category}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat.category ? 'bg-white/20 text-white' : 'bg-gray-100 text-lafoi-gray-medium'
                    }`}>{cat.questions.length}</span>
                  </button>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Questions */}
          <div className="space-y-1">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={search ? 'search' : activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="divide-y divide-gray-200 border-y border-gray-200"
              >
                {filtered.length === 0 ? (
                  <div className="py-12 text-center text-lafoi-gray font-general">
                    No results for "{search}". Try a different keyword.
                  </div>
                ) : (
                  filtered.map((item, i) => <FAQItem key={`${item.q}-${i}`} item={item} index={i} />)
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <AnimatedSection className="mt-16">
            <div
              className="p-8 lg:p-10 rounded-3xl glass border border-lafoi-green/20 relative overflow-hidden"
              style={{ borderTopRightRadius: '64px' }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-lafoi-green/10 blur-3xl" />
              <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10">
                <div className="lg:col-span-7">
                  <ChatCircle size={28} className="text-lafoi-green mb-4" weight="fill" />
                  <h3 className="font-sora text-2xl lg:text-3xl font-bold text-lafoi-dark mb-3">Still have questions?</h3>
                  <p className="text-sm text-lafoi-gray font-general">Our team is here to help. Reach out and we'll respond within 24 hours.</p>
                </div>
                <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
                  <a
                    href="https://wa.me/263712326951"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full text-sm font-sora font-semibold hover:bg-[#1DA851] transition-colors shadow-lg shadow-[#25D366]/30"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    WhatsApp
                  </a>
                  <MagneticButton>
                    <a
                      href="mailto:admin@lafoidesigns.co.zw"
                      className="inline-flex items-center gap-2 h-12 px-6 bg-lafoi-green text-white rounded-full text-sm font-sora font-semibold hover:bg-lafoi-green-light transition-colors shadow-lg shadow-lafoi-green/25"
                    >
                      <EnvelopeSimple size={16} />
                      Email Us
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="group">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-6 py-6 text-left hover:bg-lafoi-green-soft/30 transition-colors px-2 -mx-2"
      >
        <span className="font-cabinet italic font-light text-3xl text-lafoi-green/30 w-12 shrink-0">{`0${index + 1}`}</span>
        <span className="flex-1 font-cabinet italic font-light text-lg lg:text-xl text-lafoi-dark group-hover:text-lafoi-green transition-colors">{item.q}</span>
        <div className={`w-10 h-10 rounded-full bg-lafoi-green/10 flex items-center justify-center shrink-0 transition-all ${open ? 'rotate-180 bg-lafoi-green' : ''}`}>
          <CaretDown size={14} className={`transition-colors ${open ? 'text-white' : 'text-lafoi-green'}`} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-6 pl-[72px] pr-6">
              <p className="text-base text-lafoi-gray font-general leading-[1.7]">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
