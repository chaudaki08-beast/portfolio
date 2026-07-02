import type { LucideIcon } from 'lucide-react'
import {
  Layers,
  Code2,
  Atom,
  Globe,
  Sparkles,
  Rocket,
  Building2,
  Plug,
  Monitor,
  Gauge,
  FileCode2,
} from 'lucide-react'

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Full Stack Development',
    description:
      'Complete web applications from database schema to polished UI — designed, built, and deployed.',
    icon: Layers,
  },
  {
    title: 'PHP Development',
    description:
      'Modern PHP 8 applications, legacy modernization, and high-performance LAMP-stack systems.',
    icon: Code2,
  },
  {
    title: 'React Development',
    description:
      'Fast, accessible React applications with TypeScript, clean architecture, and smooth UX.',
    icon: Atom,
  },
  {
    title: 'WordPress Development',
    description:
      'Custom themes, plugins, and full site builds — 20+ WordPress projects delivered.',
    icon: Globe,
  },
  {
    title: 'AI Integration',
    description:
      'OpenAI and Gemini-powered features: chat assistants, vision analysis, and intelligent automation.',
    icon: Sparkles,
  },
  {
    title: 'SaaS Development',
    description:
      'Multi-tenant SaaS products with auth, billing, admin dashboards, and analytics — end to end.',
    icon: Rocket,
  },
  {
    title: 'Enterprise Software',
    description:
      'CRM, billing, and operations platforms built for reliability, auditability, and scale.',
    icon: Building2,
  },
  {
    title: 'API Development',
    description:
      'REST APIs with clean contracts, proper auth, and documentation your team will actually use.',
    icon: Plug,
  },
  {
    title: 'Desktop Applications',
    description:
      'Native Windows applications with .NET 9 and WPF — device I/O, data processing, and rich UI.',
    icon: Monitor,
  },
  {
    title: 'Website Optimization',
    description:
      'Performance audits, Core Web Vitals fixes, and SEO improvements that move real metrics.',
    icon: Gauge,
  },
  {
    title: 'CMS Development',
    description:
      'Custom content management systems tailored to your workflow — 10+ custom CMS projects shipped.',
    icon: FileCode2,
  },
]
