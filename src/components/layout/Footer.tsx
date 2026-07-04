import { Link } from 'react-router-dom'
import { ArrowUp, Download, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="container-tight grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-bold text-zinc-900 dark:text-white">
            GaneshChaudaki<span className="text-gradient">.dev</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
            {profile.tagline}
          </p>
          <a
            href={profile.resumeUrl}
            download
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-white">
            Quick Links
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-white">
            Connect
          </h3>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="glass flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-300 dark:hover:text-brand-400"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="glass flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-300 dark:hover:text-brand-400"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="glass flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-300 dark:hover:text-brand-400"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{profile.email}</p>
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="container-tight flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <Button variant="ghost" size="sm" onClick={scrollTop} aria-label="Back to top">
            <ArrowUp className="h-4 w-4" /> Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
