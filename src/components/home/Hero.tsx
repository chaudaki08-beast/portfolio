import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile, stats } from '@/data/profile'
import { heroTech } from '@/data/skills'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { Button } from '@/components/ui/button'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
}

export function Hero() {
  return (
    <section className="relative section-pad">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-tight grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr]"
      >
        {/* Left: intro */}
        <div className="pt-6 lg:pt-14">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building <span className="text-brand-500">Production-Grade</span> Software, AI Products
            & <span className="text-brand-500">Enterprise SaaS</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact">
              <Button size="lg">
                Let's Work Together <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </Link>
            <a href={profile.resumeUrl} download>
              <Button variant="ghost" size="lg">
                <Download className="h-4 w-4" /> Resume
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-14 grid max-w-lg grid-cols-2 gap-x-10 gap-y-8 sm:mt-20"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs font-bold tracking-widest text-white/60 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Tech row */}
          <motion.ul variants={item} className="mt-12 flex flex-wrap items-center gap-3">
            {heroTech.map((tech) => (
              <li
                key={tech.name}
                title={tech.name}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all hover:scale-110 hover:border-brand-500/50 hover:text-brand-400"
              >
                <tech.icon aria-label={tech.name} className="h-5 w-5" />
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: profile card */}
        <motion.aside variants={item} className="mx-auto w-full max-w-[420px] lg:sticky lg:top-24">
          <div className="relative overflow-hidden rounded-[30px] border border-white/25 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-7 shadow-2xl shadow-black/50">
            {/* Top row */}
            <div className="flex items-start justify-between">
              <span className="font-display text-sm font-bold text-brand-500">GC</span>
              <span className="max-w-[130px] text-right font-display text-sm leading-tight font-bold text-white">
                Software Engineer · Full-Stack & AI
              </span>
            </div>

            {/* Avatar with spinning ring */}
            <div className="relative mx-auto mt-6 aspect-square w-full max-w-[240px]">
              <div
                aria-hidden="true"
                className="absolute -inset-2.5 animate-spin-slow rounded-full border-[1.5px] border-dashed border-brand-500/40"
              />
              <div
                role="img"
                aria-label="Professional headshot placeholder for Ganesh Chaudaki"
                className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-white/15 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-800"
              >
                {/* Replace with <img src="/headshot.jpg" alt="Ganesh Chaudaki" className="h-full w-full object-cover" /> */}
                <span className="font-display text-6xl font-extrabold text-white/95">GC</span>
              </div>
            </div>

            {/* Info */}
            <div className="mt-6 text-center">
              <p className="font-display text-xl font-bold text-white">{profile.name}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/50">
                {profile.tagline}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/50">
                <MapPin className="h-3.5 w-3.5 text-brand-500" /> {profile.location} · Working
                worldwide
              </p>
            </div>

            {/* Email pill */}
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 flex items-center justify-center gap-2 rounded-full border border-brand-500/50 bg-brand-500/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-500 hover:text-white"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>

            {/* Socials */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-brand-500/60 hover:text-brand-400"
              >
                <FaGithub className="h-4.5 w-4.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-brand-500/60 hover:text-brand-400"
              >
                <FaLinkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  )
}
