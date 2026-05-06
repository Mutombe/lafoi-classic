import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Envelope, Clock, PaperPlaneRight, ArrowRight, CheckCircle, ChatCircle, WhatsappLogo, Sparkle, NavigationArrow, EnvelopeSimple } from '@phosphor-icons/react'
import { toast } from 'sonner'
import AnimatedSection from '../components/ui/AnimatedSection'
import OptimizedImage from '../components/ui/OptimizedImage'
import HeroSlideshow from '../components/ui/HeroSlideshow'
import { useSEO } from '../utils/seo'

export default function Contact() {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with La Foi Designs for a free consultation. Visit our Belgravia showroom or call us today.',
    path: '/contact',
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactHero />
      <ContactBento />
      <ContactContent />
      <WhatsAppCard />
      <MapSection />
      <ContactCTA />
    </motion.div>
  )
}

function ContactHero() {
  const slides = [
    { src: '/brand/images/56.jpg', alt: 'Cinema starry sky', vision: 'Real install: cinema with starry sky' },
    { src: '/brand/images/47.jpg', alt: 'Acoustic cafe ceiling', vision: 'Real install: acoustic cafe' },
    { src: '/brand/images/22.jpg', alt: 'Penthouse starry lounge', vision: 'Real install: starry sky penthouse' },
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <HeroSlideshow slides={slides} />
      <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-lafoi-green/10 blur-[100px] animate-float pointer-events-none z-10" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-lafoi-green-light/10 blur-[80px] animate-float-delayed pointer-events-none z-10" />

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-lafoi-green animate-pulse" />
            <span className="text-xs font-sora text-white/80 font-medium tracking-wider uppercase">Get in Touch</span>
          </motion.div>
          <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mt-4 mb-6">
            Let's bring your<br /><span className="font-cabinet italic font-light text-gradient">vision to life</span>
          </h1>
          <p className="text-white/75 font-general text-lg max-w-xl leading-relaxed">
            Partner with Zimbabwe's first and leading stretch ceiling provider. Contact us today for a consultation and discover the endless possibilities for your next project.
          </p>
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: '24h', label: 'Response Time' },
              { value: 'Free', label: 'Consultations' },
              { value: '200+', label: 'Happy Clients' },
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
  )
}

function ContactBento() {
  const cells = [
    {
      icon: MapPin,
      label: 'Visit Our Showroom',
      value: 'Suite 26, 6 Chelmsford Road, Belgravia, Harare',
      detail: 'Walk-ins welcome during business hours',
      span: 'sm:col-span-2 sm:row-span-2',
      large: true,
      cornerRadius: '64px',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+263 712 326 951',
      detail: '+263 782 931 472',
      span: 'sm:col-span-2',
      large: true,
      cornerRadius: '48px',
    },
    {
      icon: Envelope,
      label: 'Email Us',
      value: 'admin@lafoidesigns.co.zw',
      detail: 'We reply within 24 hours',
      span: '',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon – Fri: 8am – 5pm',
      detail: 'Sat: 9am – 1pm',
      span: '',
    },
  ]

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="mb-12">
          <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Reach Us</span>
          <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-3">Four ways to <span className="font-cabinet italic font-light text-gradient">say hello</span></h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-4 gap-5">
          {cells.map((cell) => (
            <AnimatedSection key={cell.label} className={cell.span}>
              <div
                className={`p-6 lg:p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-lafoi-green/[0.05] transition-all duration-500 h-full group relative overflow-hidden ${cell.large ? 'min-h-[180px]' : ''}`}
                style={cell.cornerRadius ? { borderTopRightRadius: cell.cornerRadius } : {}}
              >
                {cell.large && (
                  <>
                    <div className="absolute -right-4 -top-4 w-32 h-32 rounded-full bg-lafoi-green/[0.04] group-hover:bg-lafoi-green/[0.08] transition-colors duration-500" />
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border border-lafoi-green/15" />
                  </>
                )}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-lafoi-green/10 flex items-center justify-center mb-5 group-hover:bg-lafoi-green transition-colors duration-300`}>
                    <cell.icon size={20} className="text-lafoi-green group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora mb-2">{cell.label}</p>
                  <div className="h-px w-8 bg-lafoi-green mb-3" />
                  <p className={`font-cabinet italic font-light ${cell.large ? 'text-2xl lg:text-3xl' : 'text-lg'} text-lafoi-dark leading-tight`}>{cell.value}</p>
                  {cell.detail && <p className="text-xs text-lafoi-gray font-general mt-3 leading-relaxed">{cell.detail}</p>}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactContent() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [channel, setChannel] = useState('email')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }
    if (channel === 'whatsapp') {
      const text = `Hello La Foi Designs%0A%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0AService: ${encodeURIComponent(formData.service)}%0A%0A${encodeURIComponent(formData.message)}`
      window.open(`https://wa.me/263712326951?text=${text}`, '_blank')
      toast.success('Opening WhatsApp...')
      return
    }
    setSubmitted(true)
    toast.success('Message sent successfully!', { description: "We'll get back to you within 24 hours." })
  }

  return (
    <section className="py-16 lg:py-24 bg-lafoi-cream relative overflow-hidden">
      <div className="absolute top-40 right-0 w-96 h-96 bg-lafoi-green/[0.05] rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-lafoi-green-light/[0.05] rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimatedSection className="lg:col-span-5">
            <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Send a Message</span>
            <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-3 mb-5">
              Tell us about<br />
              <span className="font-cabinet italic font-light text-gradient">your project</span>
            </h2>
            <p className="body-text mb-8">
              Fill in the form and we'll get back to you within 24 hours with a tailored proposal — or message us directly on WhatsApp for faster replies.
            </p>

            <div className="space-y-3">
              {[
                { icon: Sparkle, label: 'Free initial consultation' },
                { icon: NavigationArrow, label: 'Site visit at your convenience' },
                { icon: CheckCircle, label: 'Detailed quote within 48 hours' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-lafoi-dark font-sora">
                  <div className="w-9 h-9 rounded-lg bg-lafoi-green/10 flex items-center justify-center shrink-0">
                    <item.icon size={14} className="text-lafoi-green" />
                  </div>
                  {item.label}
                </div>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-lafoi-green/20 to-transparent my-8" />

            <p className="text-xs tracking-widest uppercase text-lafoi-gray-medium font-sora mb-3">Prefer instant chat?</p>
            <a
              href="https://wa.me/263712326951"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white font-sora text-sm font-semibold hover:bg-[#1DA851] transition-colors shadow-lg shadow-[#25D366]/30"
            >
              <WhatsappLogo size={18} weight="fill" />
              Chat on WhatsApp
            </a>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-7">
            {submitted ? (
              <motion.div
                className="p-12 rounded-3xl bg-lafoi-green-soft border border-lafoi-green/15 text-center"
                style={{ borderTopRightRadius: '80px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className="text-lafoi-green mx-auto mb-4" weight="fill" />
                <h3 className="font-sora text-2xl font-bold text-lafoi-dark mb-3">Message Sent!</h3>
                <p className="text-lafoi-gray font-general mb-6">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }) }}
                  className="text-sm font-sora font-semibold text-lafoi-green hover:text-lafoi-green-dark transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div
                className="p-8 lg:p-10 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-black/[0.04]"
                style={{ borderTopRightRadius: '80px' }}
              >
                <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora mb-2">01 / Inquiry Form</p>
                    <h3 className="font-sora text-xl font-bold text-lafoi-dark">Request a Free Consultation</h3>
                  </div>
                  <div className="flex items-center gap-1 p-1 rounded-full bg-gray-100">
                    {['email', 'whatsapp'].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setChannel(c)}
                        className={`px-4 py-1.5 rounded-full text-xs font-sora font-semibold uppercase tracking-wider transition-all ${
                          channel === c
                            ? c === 'whatsapp'
                              ? 'bg-[#25D366] text-white shadow-md'
                              : 'bg-lafoi-green text-white shadow-md'
                            : 'text-lafoi-gray hover:text-lafoi-dark'
                        }`}
                      >
                        {c === 'email' ? 'Email' : 'WhatsApp'}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <HairlineInput label="Full Name *" type="text" value={formData.name} onChange={(v) => setFormData({ ...formData, name: v })} placeholder="Your name" />
                    <HairlineInput label="Email Address *" type="email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} placeholder="your@email.com" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <HairlineInput label="Phone Number" type="tel" value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} placeholder="+263..." />
                    <HairlineSelect label="Service Interested In" value={formData.service} onChange={(v) => setFormData({ ...formData, service: v })}>
                      <option value="">Select a service</option>
                      <option value="stretch-ceilings">Stretch Ceilings</option>
                      <option value="custom-lighting">Custom Lighting</option>
                      <option value="printed-ceilings">Printed Ceilings</option>
                      <option value="3d-ceilings">3D Ceiling Forms</option>
                      <option value="acoustic">Acoustic Solutions</option>
                      <option value="consulting">Design Consulting</option>
                      <option value="interior-design">Interior Design</option>
                    </HairlineSelect>
                  </div>
                  <HairlineInput label="Project Details *" type="textarea" value={formData.message} onChange={(v) => setFormData({ ...formData, message: v })} placeholder="Tell us about your project — space type, approximate size, desired look..." />

                  <button
                    type="submit"
                    className={`group flex items-center justify-center gap-2 w-full h-12 px-6 text-white rounded-full font-sora text-sm font-semibold transition-all shadow-lg ${
                      channel === 'whatsapp' ? 'bg-[#25D366] hover:bg-[#1DA851] shadow-[#25D366]/30' : 'bg-lafoi-green hover:bg-lafoi-green-light shadow-lafoi-green/25'
                    }`}
                  >
                    {channel === 'whatsapp' ? <WhatsappLogo size={16} weight="fill" /> : <PaperPlaneRight size={16} />}
                    {channel === 'whatsapp' ? 'Send via WhatsApp' : 'Send Message'}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function HairlineInput({ label, type, value, onChange, placeholder }) {
  if (type === 'textarea') {
    return (
      <div>
        <label className="block text-[10px] tracking-[0.3em] uppercase font-sora font-semibold text-lafoi-green mb-3">{label}</label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent text-lafoi-dark font-sora text-base outline-none focus:border-lafoi-green transition-colors resize-none placeholder:text-lafoi-gray-medium"
          placeholder={placeholder}
        />
      </div>
    )
  }
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase font-sora font-semibold text-lafoi-green mb-3">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent text-lafoi-dark font-sora text-base outline-none focus:border-lafoi-green transition-colors placeholder:text-lafoi-gray-medium"
        placeholder={placeholder}
      />
    </div>
  )
}

function HairlineSelect({ label, value, onChange, children }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase font-sora font-semibold text-lafoi-green mb-3">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent text-lafoi-dark font-sora text-base outline-none focus:border-lafoi-green transition-colors"
      >
        {children}
      </select>
    </div>
  )
}

function WhatsAppCard() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <AnimatedSection>
          <div
            className="p-8 lg:p-12 rounded-3xl glass border border-white/30 relative overflow-hidden"
            style={{ borderTopRightRadius: '80px' }}
          >
            <motion.div
              className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#25D366]/15 blur-[60px]"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full bg-lafoi-green/15 blur-[60px]"
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-2 flex justify-center lg:justify-start">
                <div className="w-20 h-20 rounded-3xl bg-[#25D366] flex items-center justify-center shadow-2xl shadow-[#25D366]/40">
                  <WhatsappLogo size={36} weight="fill" className="text-white" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[10px] tracking-[0.3em] uppercase text-lafoi-green font-sora mb-3">Fastest Reply</p>
                <h2 className="font-cabinet italic font-light text-3xl lg:text-5xl text-lafoi-dark mb-3 leading-tight">
                  Chat with our team on WhatsApp
                </h2>
                <p className="text-lafoi-gray font-general max-w-xl">
                  Quick replies, project photos and instant quotes — straight to our installation managers. Average response under 2 hours during business hours.
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="https://wa.me/263712326951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] text-white rounded-full font-sora text-sm font-semibold hover:bg-[#1DA851] transition-all duration-300 shadow-lg shadow-[#25D366]/30"
                >
                  Start Chat
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="pb-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="mb-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-lafoi-green font-sora text-sm font-semibold tracking-widest uppercase">Find Us</span>
              <h2 className="heading-lg text-3xl sm:text-4xl text-lafoi-dark mt-3">
                Belgravia, <span className="font-cabinet italic font-light text-gradient">Harare</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-lafoi-green/10 border border-lafoi-green/20">
              <NavigationArrow size={14} className="text-lafoi-green" />
              <span className="text-xs font-sora text-lafoi-green font-medium">Suite 26, 6 Chelmsford Road</span>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div
            className="rounded-3xl overflow-hidden h-96 bg-gray-200 border border-lafoi-green/20"
            style={{ borderTopRightRadius: '80px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0429!3d-17.8052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBelgravia%2C+Harare%2C+Zimbabwe!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Foi Designs Location"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function ContactCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <OptimizedImage src="/brand/images/22.jpg" alt="Penthouse starry sky lounge" className="w-full h-full object-cover scale-110" fill />
        <div className="absolute inset-0 bg-lafoi-dark/70" />
      </motion.div>
      {/* single blob — compact rule */}
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-lafoi-green/20 blur-[80px] animate-float pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <Sparkle size={26} className="text-lafoi-green-light mx-auto mb-5" weight="fill" />
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-4xl text-white mb-5 tracking-[-0.01em]">
            Ready to <span className="font-cabinet italic font-light">redefine your space?</span>
          </h2>
          <p className="text-white/70 font-general text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and our team will visit your site, assess the brief, and prepare a tailored proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 h-12 px-6 bg-lafoi-green text-white rounded-full font-sora text-sm font-medium hover:bg-lafoi-green-dark transition-colors"
            >
              Browse Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 h-12 px-6 bg-white/10 backdrop-blur-md text-white rounded-full font-sora text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              See Recent Work
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
