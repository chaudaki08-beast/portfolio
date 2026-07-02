import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '@/data/profile'
import { heroTech } from '@/data/skills'
import { Button } from '@/components/ui/button'
import heroGraphic from '@/assets/hero.png'

const roles = ['Full-Stack Development', 'AI Applications', 'Enterprise Software', 'SaaS Products']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center section-pad">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-tight grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I'm <span className="text-gradient">Ganesh Chaudaki</span>
          </motion.h1>

          <motion.div variants={item} className="mt-4 h-9 sm:h-10">
            <p className="font-display text-xl font-semibold text-zinc-700 sm:text-2xl dark:text-zinc-300">
              Software Engineer ·{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block text-brand-600 dark:text-brand-400"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </p>
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact">
              <Button size="lg">
                Let's Talk <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href={profile.resumeUrl} download>
              <Button variant="secondary" size="lg">
                <Download className="h-4 w-4" /> Resume
              </Button>
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="glass flex h-11 w-11 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-300 dark:hover:text-brand-400"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="glass flex h-11 w-11 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-300 dark:hover:text-brand-400"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="glass flex h-11 w-11 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-300 dark:hover:text-brand-400"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500">
              Working with
            </p>
            <ul className="flex flex-wrap items-center gap-4">
              {heroTech.map((tech) => (
                <li
                  key={tech.name}
                  title={tech.name}
                  className="glass flex h-11 w-11 items-center justify-center rounded-xl text-zinc-500 transition-all hover:scale-110 hover:text-brand-500 dark:text-zinc-400"
                >
                  <tech.icon aria-label={tech.name} className="h-5 w-5" />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Headshot placeholder + floating graphic */}
        <motion.div variants={item} className="relative mx-auto hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-brand-500/30 to-accent-400/30 blur-2xl" />
            <div
              role="img"
              aria-label="Professional headshot placeholder for Ganesh Chaudaki"
              className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 shadow-2xl shadow-brand-500/30"
            >
              {/* Replace with <img src="/headshot.jpg" alt="Ganesh Chaudaki" /> */}
              <span className="font-display text-7xl font-bold text-white/95">GC</span>
            </div>
            <motion.img
              src={heroGraphic}
              alt=""
              aria-hidden="true"
              className="absolute -right-10 -bottom-8 w-36 animate-float drop-shadow-2xl"
              style={{ animationDelay: '-3s' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
