import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Briefcase, CaretDown, Heart, Lightning, Globe, Users, Sparkle, Trophy, GraduationCap, ArrowUpRight } from '@phosphor-icons/react'
import { toast } from 'sonner'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
import CountUp from '../components/ui/CountUp'
import MagneticButton from '../components/ui/MagneticButton'
import { useSEO } from '../utils/seo'

const openings = [
  {
    title: 'Senior Ceiling Installer',
    department: 'Installation',
    type: 'Full-time',
    location: 'Harare',
    desc: 'Lead stretch ceiling installations across residential and commercial projects. 3+ years experience in construction or interior finishing preferred.',
  },
  {
    title: 'Interior Design Consultant',
    department: 'Design',
    type: 'Full-time',
    location: 'Harare',
    desc: 'Guide clients through design consultations, material selection, and project visualization. Interior design qualification preferred.',
  },
  {
    title: 'Marketing Coordinator',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Harare',
    desc: 'Drive brand awareness through social media, content creation, and event marketing. Creative mindset with digital marketing experience.',
  },
  {
    title: 'Apprentice Installer',
    department: 'Installation',
    type: 'Internship',
    location: 'Harare',
    desc: 'Learn the art of stretch ceiling installation under the guidance of our experienced team. No prior experience needed — just passion and dedication.',
  },
]

const perks = [
  { icon: GraduationCap, title: 'On-the-Job Training', desc: 'Learn the full stretch ceiling and lighting discipline from our in-house team. Apprenticeship pathway from zero experience to lead installer.', image: '/brand/images/19.jpg' },
  { icon: Lightning, title: 'Growth Opportunities', desc: 'A fast-growing company with real room to advance into senior roles, project management or specialist tracks.', image: null },
  { icon: Heart, title: 'Team Culture', desc: 'Collaborative, supportive and creative — every voice on the team is heard. Tight-knit, ambitious and proud of the craft.', image: null },
  { icon: Trophy, title: 'Diverse Projects', desc: 'Work across luxury residential, commercial, hospitality and institutional installs. Every site is different.', image: '/brand/images/30.jpg' },
]

const process = [
  { num: '01', title: 'Apply', desc: 'Send your CV with a short note about why this role and what excites you about Lafoi.' },
  { num: '02', title: 'Conversation', desc: 'A relaxed call with our team — we want to hear about your craft, ambitions and questions.' },
  { num: '03', title: 'Site Day', desc: 'Spend a half-day on a live install or in our showroom to see how we work and meet the team.' },
  { num: '04', title: 'Offer', desc: 'A clear offer with role, package, growth path and start date. We move fast for the right people.' },
]

export default function Careers() {
  useSEO({
    title: 'Careers',
    description: 'Join La Foi Designs — Zimbabwe\'s premier stretch ceiling company. Explore career opportunities and grow with us.',
    path: '/careers',
  })

  const slides = [
    { src: '/brand/images/30.jpg', alt: 'Lafoi team marquee', vision: 'Real team photo' },
    { src: '/brand/images/1.jpg', alt: 'Lafoi installation', vision: 'Real install' },
    { src: '/brand/images/38.jpg', alt: 'RGB lit feature wall', vision: 'Real install: RGB lit feature' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
              <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Careers</span>
            </motion.div>
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mt-4 mb-6">
              Build the future of<br /><span className="font-cabinet italic font-light text-gradient">interior design</span>
            </h1>
            <p className="text-white/75 font-general text-lg max-w-xl">
              Join Zimbabwe's most innovative ceiling and lighting company. We're always looking for talented, passionate people.
            </p>
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: <CountUp to={openings.length} />, label: 'Open Roles' },
                { value: <CountUp to={4} />, label: 'Departments' },
                { value: 'In-House', label: 'Trained Crew' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-sora text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/40 font-general mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why work here — mixed bento */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-1" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-lafoi-green/[0.05] rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-lafoi-green-light/[0.05] rounded-full blur-[100px] animate-float-delayed" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <AnimatedSection className="mb-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div>
                <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Why Work With Us</span>
                <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-lafoi-dark mt-4">
                  Build a craft<br />
                  <span className="font-cabinet italic font-light text-gradient">worth showing off</span>
                </h2>
              </div>
              <p className="text-sm text-lafoi-gray font-general max-w-sm">
                Real installs, real growth, real ownership of your work — every day on the team.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-12 gap-6" staggerDelay={0.08}>
            {perks.map((p, i) => {
              const span = i === 0 ? 'lg:col-span-7' : i === 1 ? 'lg:col-span-5' : i === 2 ? 'lg:col-span-5' : 'lg:col-span-7'
              const hasImage = !!p.image
              return (
                <StaggerItem key={p.title} className={span}>
                  <div className={`group h-full rounded-3xl overflow-hidden relative border ${hasImage ? 'border-transparent' : 'border-gray-100 bg-white'} transition-all duration-500 ${!hasImage && 'p-8'}`}>
                    {hasImage ? (
                      <div className="relative h-full min-h-[280px]">
                        <OptimizedImage src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" fill />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-4">
                            <p.icon size={20} className="text-white" />
                          </div>
                          <span className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green-light font-sora mb-2">{`Perk 0${i + 1}`}</span>
                          <h3 className="font-sora text-2xl font-bold text-white mb-3">{p.title}</h3>
                          <p className="text-sm text-white/80 font-general leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-full">
                        <div className="absolute -right-4 -top-4 font-cabinet italic font-light text-7xl text-lafoi-green/10 leading-none">{`0${i + 1}`}</div>
                        <motion.div
                          className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-lafoi-green/10 blur-2xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 6, repeat: Infinity, delay: i * 0.5 }}
                        />
                        <div className="relative z-10">
                          <div className="w-12 h-12 rounded-2xl bg-lafoi-green/10 flex items-center justify-center mb-5 group-hover:bg-lafoi-green transition-colors">
                            <p.icon size={20} className="text-lafoi-green group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora mb-2 block">{`Perk 0${i + 1}`}</span>
                          <h3 className="font-sora text-xl lg:text-2xl font-bold text-lafoi-dark mb-3">{p.title}</h3>
                          <p className="text-sm text-lafoi-gray font-general leading-relaxed">{p.desc}</p>
                          <div className="h-px w-12 bg-lafoi-green mt-6" />
                        </div>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Open positions — editorial table */}
      <section className="py-16 lg:py-24 bg-lafoi-cream relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Open Positions</span>
            <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-4 mb-4">
              <CountUp to={openings.length} className="text-gradient" /> roles open<br /><span className="font-cabinet italic font-light text-gradient">right now</span>
            </h2>
            <p className="text-lafoi-gray font-general max-w-md mx-auto">Explore current opportunities. Tap a row to expand the brief and apply directly via email.</p>
          </AnimatedSection>

          <div className="rounded-3xl bg-white border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {openings.map((job, i) => (
              <JobRow key={i} job={job} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-1" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Hiring Process</span>
            <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-4">
              From hello to <span className="font-cabinet italic font-light text-gradient">first day</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-12 lg:left-16 top-0 bottom-0 w-px bg-lafoi-green/20" />
            <div className="space-y-12">
              {process.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.05}>
                  <div className="flex items-start gap-6 lg:gap-10">
                    <div className="relative z-10 shrink-0">
                      <div className="w-24 lg:w-32 text-right">
                        <span className="font-cabinet italic font-light text-6xl lg:text-7xl text-lafoi-green/30 leading-none">{step.num}</span>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-lafoi-green ring-4 ring-lafoi-green/20 mt-3" />
                    </div>
                    <div className="pt-1 flex-1">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora mb-2">{`Step ${step.num}`}</p>
                      <h3 className="font-sora text-xl lg:text-2xl font-bold text-lafoi-dark mb-2">{step.title}</h3>
                      <p className="text-sm text-lafoi-gray font-general leading-relaxed max-w-md">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/brand/images/38.jpg" alt="Lafoi feature install" className="w-full h-full object-cover" fill />
          <div className="absolute inset-0 bg-lafoi-dark/75" />
        </div>
        <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-lafoi-green/20 blur-[80px] animate-float pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-lafoi-green-light/20 blur-[80px] animate-float-delayed pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <Sparkle size={28} className="text-lafoi-green-light mx-auto mb-6" weight="fill" />
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
              Don't see your role? <span className="font-cabinet italic font-light text-gradient">Apply anyway.</span>
            </h2>
            <p className="text-white/70 font-general text-lg mb-10 max-w-xl mx-auto">
              We're always interested in hearing from talented individuals. Send your CV to admin@lafoidesigns.co.zw
            </p>
            <MagneticButton>
              <a
                href="mailto:admin@lafoidesigns.co.zw?subject=General Application — La Foi Designs"
                className="group inline-flex items-center gap-2 h-12 px-6 bg-lafoi-green text-white rounded-full font-sora text-sm font-semibold hover:bg-lafoi-green-light transition-colors shadow-lg shadow-lafoi-green/25"
              >
                Send Your CV
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}

function JobRow({ job, index }) {
  const [open, setOpen] = useState(false)

  const handleApply = () => {
    toast.success(`Application started for ${job.title}`, { description: 'Redirecting to email...' })
    window.location.href = `mailto:admin@lafoidesigns.co.zw?subject=Application: ${job.title}`
  }

  return (
    <div className="group">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 lg:gap-6 p-6 lg:p-7 text-left hover:bg-lafoi-green-soft/40 transition-colors"
      >
        <span className="font-cabinet italic font-light text-3xl lg:text-4xl text-lafoi-green/40 w-12 lg:w-16 shrink-0">{`0${index + 1}`}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-sora text-lg lg:text-xl font-bold text-lafoi-dark mb-2 group-hover:text-lafoi-green transition-colors">{job.title}</h3>
          <div className="flex flex-wrap items-center gap-3 text-xs text-lafoi-gray-medium font-sora">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lafoi-green/10 text-lafoi-green font-medium uppercase tracking-wider">
              <Briefcase size={11} /> {job.department}
            </span>
            <span className="inline-flex items-center gap-1"><Clock size={11} /> {job.type}</span>
            <span className="inline-flex items-center gap-1"><MapPin size={11} /> {job.location}</span>
          </div>
        </div>
        <div className={`w-10 h-10 rounded-full bg-lafoi-green/10 flex items-center justify-center shrink-0 transition-all ${open ? 'rotate-180 bg-lafoi-green' : ''}`}>
          <CaretDown size={14} className={`transition-colors ${open ? 'text-white' : 'text-lafoi-green'}`} />
        </div>
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="px-6 lg:px-7 pb-7 pt-0 lg:pl-[88px]">
            <div className="h-px bg-gray-100 mb-5" />
            <p className="text-sm text-lafoi-gray font-general mb-5 leading-relaxed max-w-2xl">{job.desc}</p>
            <button
              onClick={handleApply}
              className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-lafoi-green text-white rounded-full text-sm font-sora font-medium hover:bg-lafoi-green-light transition-colors shadow-lg shadow-lafoi-green/20"
            >
              Apply Now
              <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
