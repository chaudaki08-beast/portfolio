import type { LucideIcon } from 'lucide-react'
import { Code, Globe, LayoutTemplate } from 'lucide-react'

// ---- Client work counters ----
export interface ClientWork {
  count: number
  suffix: string
  title: string
  description: string
  icon: LucideIcon
}

export const clientWork: ClientWork[] = [
  {
    count: 15,
    suffix: '+',
    title: 'HTML Websites',
    description:
      'Hand-coded, pixel-perfect business websites with fast load times and clean, semantic markup.',
    icon: Code,
  },
  {
    count: 20,
    suffix: '+',
    title: 'WordPress Websites',
    description:
      'Custom themes and full builds for hospitality, retail, and service businesses — SEO-ready from day one.',
    icon: Globe,
  },
  {
    count: 10,
    suffix: '+',
    title: 'Custom CMS Projects',
    description:
      'Tailor-made content management systems matching each client’s exact editorial workflow.',
    icon: LayoutTemplate,
  },
]

// ---- Certifications ----
export interface Certification {
  title: string
  issuer: string
  year: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte AU (Forage)', year: 'Jan 2026' },
  { title: 'Salesforce Trailblazer', issuer: 'Salesforce', year: 'Jun 2020' },
  { title: 'Master of Computer Applications (MCA)', issuer: 'Mumbai University', year: 'Degree' },
]

// ---- Tech learning timeline ----
export interface TimelineEntry {
  year: string
  title: string
  description: string
}

export const techTimeline: TimelineEntry[] = [
  {
    year: '2020',
    title: 'Web Foundations',
    description: 'HTML5, CSS3, JavaScript, and PHP — building my first client websites.',
  },
  {
    year: '2021',
    title: 'Databases & CMS',
    description: 'MySQL schema design, WordPress development, and my first custom CMS builds.',
  },
  {
    year: '2022',
    title: 'Enterprise PHP',
    description: 'Large-scale PHP systems — the ISP management platform and Universal CMS.',
  },
  {
    year: '2023',
    title: 'React & Node.js',
    description: 'Modern JavaScript: React, TypeScript, Node.js APIs, and Firebase.',
  },
  {
    year: '2024',
    title: 'AI Engineering',
    description: 'OpenAI and Gemini integrations — shipping AI SaaS products like AITaxMD and InnDesignAI.',
  },
  {
    year: '2025',
    title: 'Python, Vision & Desktop',
    description: 'FastAPI, OpenCV, and Gemini Vision for HotelEye AI; .NET 9 WPF for desktop tooling.',
  },
  {
    year: '2026',
    title: 'Quantum & Beyond',
    description: 'Qiskit quantum computing experiments and pushing AI products to production scale.',
  },
]

// ---- Testimonials ----
// TODO: swap for real client testimonials as they come in.
export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Ganesh delivered our entire operations platform ahead of schedule. Billing, complaints, technician dispatch — everything just works.',
    name: 'Rajesh Sharma',
    role: 'Director, Internet Service Provider',
  },
  {
    quote:
      'The AI monitoring system paid for itself in the first month. Alerts are accurate and the dashboard is beautifully simple.',
    name: 'Priya Nair',
    role: 'Hotel Operations Manager',
  },
  {
    quote:
      'Professional, communicative, and technically excellent. Our website is faster and converts better than ever.',
    name: 'Amit Deshmukh',
    role: 'Restaurant Owner',
  },
]

// ---- Blog placeholders ----
export interface BlogPost {
  title: string
  excerpt: string
  tag: string
  readTime: string
}

export const upcomingPosts: BlogPost[] = [
  {
    title: 'Cutting AI Vision Costs 10x with a Motion Detection Cascade',
    excerpt:
      'How pre-filtering CCTV frames with OpenCV before calling Gemini Vision made continuous AI monitoring economically viable.',
    tag: 'AI Engineering',
    readTime: '8 min read',
  },
  {
    title: 'Translating WhatsApp Databases Between iOS and Android',
    excerpt:
      'A deep dive into the schema differences and the translation engine that maps chats losslessly between platforms.',
    tag: 'Desktop',
    readTime: '12 min read',
  },
  {
    title: 'Quantum Sentiment Analysis: A Practical Qiskit Walkthrough',
    excerpt:
      'Encoding text features into quantum states and classifying sentiment with variational circuits — no PhD required.',
    tag: 'Quantum',
    readTime: '10 min read',
  },
]
