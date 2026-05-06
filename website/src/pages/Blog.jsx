import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, ArrowUpRight, EnvelopeSimple, Sparkle, PaperPlaneTilt } from '@phosphor-icons/react'
import { toast } from 'sonner'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
import CountUp from '../components/ui/CountUp'
import { useSEO } from '../utils/seo'

const posts = [
  {
    id: 1,
    title: '5 Ways Stretch Ceilings Transform Small Spaces',
    excerpt: 'How a seamless stretch ceiling and the right lighting layer change the perception of small rooms — adding height, depth and reflection without renovation.',
    category: 'Design Tips',
    date: 'Feb 15, 2026',
    readTime: '4 min',
    image: '/brand/images/15.jpg',
    vision: 'Real install: dining room with mirror stretch ceiling and chandelier',
    featured: true,
  },
  {
    id: 2,
    title: 'The Science Behind Acoustic Stretch Ceilings',
    excerpt: 'How perforated membranes — Volans, Auriga, Orion, Cetus and Libra — absorb sound while keeping the seamless look of a stretch ceiling.',
    category: 'Innovation',
    date: 'Feb 8, 2026',
    readTime: '6 min',
    image: '/brand/images/47.jpg',
    vision: 'Real install: perforated acoustic stretch ceiling in a cafe',
  },
  {
    id: 3,
    title: 'Fibre-Optic Starry Skies: The Ultimate Bedroom Upgrade',
    excerpt: 'Everything you need to know about creating a starry-sky stretch ceiling in your bedroom — fibre count, light source placement and pattern design.',
    category: 'Lighting',
    date: 'Jan 28, 2026',
    readTime: '5 min',
    image: '/brand/images/1.jpg',
    vision: 'Real install: starry sky stretch ceiling in master bedroom',
  },
  {
    id: 4,
    title: 'Stretch Ceilings vs Gypsum: A Cost & Timeline Guide',
    excerpt: 'A practical comparison of installation time, cost over the lifetime of the build, durability and finish quality between stretch ceilings and traditional gypsum.',
    category: 'Guides',
    date: 'Jan 20, 2026',
    readTime: '7 min',
    image: '/brand/images/39.jpg',
    vision: 'Real install: residential kitchen with linear lights and gloss stretch ceiling',
  },
  {
    id: 5,
    title: 'Inside a Stretch Ceiling Install: Day-By-Day',
    excerpt: 'A behind-the-scenes look at how our in-house team delivers a typical stretch ceiling install in 1–2 days — from substrate to handover.',
    category: 'Behind the Scenes',
    date: 'Jan 12, 2026',
    readTime: '5 min',
    image: '/brand/images/19.jpg',
    vision: 'Real install: Lafoi team installing a backlit art print stretch ceiling',
  },
  {
    id: 6,
    title: 'Top Interior Design Trends in Zimbabwe for 2026',
    excerpt: 'From biophilic design and natural light to statement ceilings and integrated lighting — the trends shaping Zimbabwean interior spaces this year.',
    category: 'Trends',
    date: 'Jan 5, 2026',
    readTime: '6 min',
    image: '/brand/images/22.jpg',
    vision: 'Real install: penthouse lounge with starry sky and linear light',
  },
]

const allCategories = ['All', ...Array.from(new Set(posts.map(p => p.category)))]

export default function Blog() {
  const featured = posts.find(p => p.featured)
  const regular = posts.filter(p => !p.featured)
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? regular : regular.filter(p => p.category === filter)

  useSEO({
    title: 'Blog & Design Insights',
    description: 'Expert insights on stretch ceilings, lighting design, interior trends, and more from La Foi Designs.',
    path: '/blog',
  })

  const slides = [
    { src: '/brand/images/1.jpg', alt: 'Bedroom starry sky', vision: 'Real install: starry sky bedroom' },
    { src: '/brand/images/5.jpg', alt: 'Spiral entrance chandelier', vision: 'Real install: spiral entrance' },
    { src: '/brand/images/56.jpg', alt: 'Cinema starry sky', vision: 'Real install: cinema with starry sky' },
  ]

  // Layout for posts grid: varied col-spans
  const gridSpans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4']
  const gridAspects = ['aspect-[16/11]', 'aspect-[4/5]', 'aspect-square', 'aspect-square', 'aspect-square']

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

        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-lafoi-green animate-pulse" />
              <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Blog & Insights</span>
            </motion.div>
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mt-4 mb-6">
              Design insights &<br /><span className="font-cabinet italic font-light text-gradient">inspiration</span>
            </h1>
            <p className="text-white/75 font-general text-lg max-w-xl leading-relaxed">
              Expert articles on stretch ceilings, interior design trends, lighting innovation, and the stories behind our transformations.
            </p>
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="font-sora text-2xl font-bold text-white"><CountUp to={posts.length} /></p>
                <p className="text-xs text-white/40 font-general mt-1">Articles Published</p>
              </div>
              <div>
                <p className="font-sora text-2xl font-bold text-white"><CountUp to={allCategories.length - 1} /></p>
                <p className="text-xs text-white/40 font-general mt-1">Topic Categories</p>
              </div>
              <div>
                <p className="font-sora text-2xl font-bold text-white">Weekly</p>
                <p className="text-xs text-white/40 font-general mt-1">New Insights</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured post — magazine cover */}
      {featured && (
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient-1" />
          <div className="absolute top-40 right-0 w-96 h-96 bg-lafoi-green/[0.05] rounded-full blur-[120px] animate-float" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <AnimatedSection className="mb-10">
              <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Editor's Pick</span>
              <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-3">Featured this <span className="font-cabinet italic font-light text-gradient">issue</span></h2>
            </AnimatedSection>

            <AnimatedSection>
              <Link to="#" className="group block">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7">
                    <div
                      className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[5/4]"
                      style={{ borderTopRightRadius: '120px' }}
                    >
                      <div className="absolute inset-0 bg-lafoi-green" />
                      <OptimizedImage src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" fill vision={featured.vision} />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'rgba(26, 138, 46, 0.45)', mixBlendMode: 'multiply' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/95 text-lafoi-green text-[10px] tracking-widest uppercase font-sora font-semibold">{featured.category}</div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 font-sora">Featured · {featured.date}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4 text-xs text-lafoi-gray-medium font-general">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                      <span className="w-1 h-1 rounded-full bg-lafoi-gray-medium" />
                      <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                    </div>
                    <h2 className="font-sora text-3xl lg:text-5xl font-bold text-lafoi-dark mb-5 leading-[1.1] group-hover:text-lafoi-green transition-colors">
                      <span className="font-cabinet italic font-light">{featured.title.split(' ').slice(0, 2).join(' ')}</span>{' '}
                      {featured.title.split(' ').slice(2).join(' ')}
                    </h2>
                    <p className="text-base text-lafoi-gray font-general leading-relaxed mb-8">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-sora font-semibold text-lafoi-green group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Filter pills */}
      <section className="py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-sora font-medium transition-all duration-300 backdrop-blur-md ${
                    filter === cat
                      ? 'bg-gradient-to-r from-lafoi-green to-lafoi-green-light text-white shadow-lg shadow-lafoi-green/25'
                      : 'bg-white/70 border border-gray-200 text-lafoi-gray hover:bg-lafoi-green/10 hover:text-lafoi-green hover:border-lafoi-green/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts grid — asymmetric */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-12 gap-6" staggerDelay={0.06}>
            {filtered.map((post, i) => (
              <StaggerItem key={post.id} className={gridSpans[i % gridSpans.length]}>
                <PostCard post={post} aspect={gridAspects[i % gridAspects.length]} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter band */}
      <NewsletterBand />
    </motion.div>
  )
}

function PostCard({ post, aspect }) {
  return (
    <Link to="#" className="group block h-full">
      <div className="rounded-3xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        <div className={`${aspect} overflow-hidden relative`}>
          <OptimizedImage src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" fill vision={post.vision} />
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-lafoi-green text-[10px] font-sora font-semibold uppercase tracking-wider">{post.category}</div>
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/0 group-hover:bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <ArrowUpRight size={14} className="text-lafoi-green group-hover:rotate-12 transition-transform" />
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3 text-[10px] tracking-[0.2em] uppercase text-lafoi-gray-medium font-sora">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-lafoi-gray-medium" />
            <span>{post.readTime}</span>
          </div>
          <h3 className="font-sora text-lg lg:text-xl font-bold text-lafoi-dark mb-3 group-hover:text-lafoi-green transition-colors line-clamp-2">{post.title}</h3>
          <p className="text-sm text-lafoi-gray font-general line-clamp-2 flex-1 leading-relaxed">{post.excerpt}</p>
          <div className="h-px bg-gradient-to-r from-lafoi-green/30 to-transparent mt-5" />
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs font-sora font-semibold text-lafoi-green">Read article</span>
            <ArrowRight size={14} className="text-lafoi-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </Link>
  )
}

function NewsletterBand() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) {
      toast.error('Enter a valid email')
      return
    }
    toast.success('Subscribed!', { description: 'Welcome to the Lafoi insights newsletter.' })
    setEmail('')
  }

  return (
    <section className="py-16 lg:py-24 bg-lafoi-cream relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-lafoi-green/[0.05] rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-lafoi-green-light/[0.05] rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection>
          <div
            className="p-8 lg:p-14 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-black/[0.04] relative overflow-hidden"
            style={{ borderTopRightRadius: '80px' }}
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-lafoi-green/[0.05]" />
            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border border-lafoi-green/15" />
            <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6">
                <div className="w-12 h-12 rounded-2xl bg-lafoi-green/10 flex items-center justify-center mb-4">
                  <PaperPlaneTilt size={20} className="text-lafoi-green" />
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora mb-2">The Lafoi Letter</p>
                <h3 className="font-cabinet italic font-light text-3xl lg:text-4xl text-lafoi-dark leading-tight">Get fresh design insights, monthly.</h3>
              </div>
              <form onSubmit={handleSubmit} className="lg:col-span-6 flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-full bg-lafoi-green-soft border border-lafoi-green/15 text-sm font-sora text-lafoi-dark outline-none focus:border-lafoi-green transition-colors placeholder:text-lafoi-gray-medium"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 h-12 px-6 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-colors shadow-lg shadow-lafoi-green/25"
                >
                  Subscribe
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
