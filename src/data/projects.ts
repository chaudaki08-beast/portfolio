import type { LucideIcon } from 'lucide-react'
import {
  Network,
  LayoutTemplate,
  Cctv,
  Landmark,
  Sofa,
  Atom,
  Bot,
  Wallet,
  UtensilsCrossed,
} from 'lucide-react'

export type ProjectCategory = 'Enterprise' | 'SaaS' | 'AI' | 'Desktop' | 'Quantum' | 'Web'

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  category: ProjectCategory[]
  features: string[]
  challenges: string[]
  architecture: string
  stack: string[]
  icon: LucideIcon
  gradient: string
  // TODO: replace with real URLs where available
  github?: string
  liveDemo?: string
  note?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'isp-cable-management-system',
    title: 'ISP & Cable Operator Management System',
    tagline: 'Enterprise SaaS platform for internet and cable providers.',
    description:
      'A complete operations platform that internet and cable providers run their business on — from customer onboarding and recurring billing to complaint resolution and field-technician dispatch. Built as a multi-tenant SaaS with role-based access for admins, operators, accountants, and technicians.',
    category: ['Enterprise', 'SaaS'],
    features: [
      'CRM with full customer lifecycle management',
      'Automated recurring billing and payment tracking',
      'Complaint management with SLA tracking',
      'Technician module with job assignment and status updates',
      'Network monitoring and outage tracking',
      'Inventory management for hardware and consumables',
      'Real-time dashboard with revenue and operations KPIs',
      'Reports and exports for accounting and audits',
      'Multi-user with granular role-based access control',
    ],
    challenges: [
      'Designed a billing engine that handles prorated plans, plan changes mid-cycle, and bulk invoice generation without double-charging.',
      'Kept complaint SLAs accurate across operator time zones and technician handoffs.',
      'Scaled report queries over millions of billing rows with careful indexing and query restructuring.',
    ],
    architecture:
      'Classic three-tier PHP architecture with a normalized MySQL schema, REST APIs for the technician mobile workflows, and a Bootstrap-based admin UI. Role-based access is enforced at both the routing and query layers, and billing jobs run as idempotent scheduled tasks.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'REST APIs'],
    icon: Network,
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    featured: true,
  },
  {
    slug: 'universal-cms',
    title: 'Universal CMS — Website Builder Platform',
    tagline:
      'A cPanel-ready website builder with drag-and-drop editing, live theming, and built-in blog, e-commerce & SEO.',
    description:
      'A cPanel-ready website builder (PHP 8 & MySQL) with drag-and-drop editing, live theming, and built-in blog, e-commerce & SEO — build sites for any niche, no code required. Designed to deploy on ordinary shared hosting: upload, install, and start building.',
    category: ['Web', 'SaaS'],
    features: [
      'Drag-and-drop page editing with live preview',
      'Switchable live themes without content loss',
      'Blog engine with categories, tags, and scheduling',
      'E-commerce modules: products, cart, and orders',
      'Built-in SEO tools: meta management, sitemaps, clean URLs',
      'One-click installer for cPanel shared hosting',
    ],
    challenges: [
      'Built a block-based content model that survives theme switches — content is stored as structured data, never as theme-specific HTML.',
      'Made drag-and-drop editing work reliably on low-powered shared hosting with no build step or Node runtime.',
      'Implemented safe self-updating within the constraints of typical cPanel file permissions.',
    ],
    architecture:
      'PHP 8 MVC core with a plugin-style module system. Pages are stored as JSON block trees rendered through theme templates, so themes and content stay fully decoupled. Zero external services required — everything runs on a standard LAMP stack.',
    stack: ['PHP 8', 'MySQL', 'JavaScript', 'Bootstrap'],
    icon: LayoutTemplate,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    github: 'https://github.com/chaudaki08-beast/universal-cms',
    liveDemo: 'https://wp.hexabiz.com/ganesh/cms/',
    featured: true,
  },
  {
    slug: 'hoteleye-ai',
    title: 'HotelEye AI',
    tagline: 'AI vision monitoring for hotel CCTV operations.',
    description:
      'A Python/FastAPI platform that watches hotel CCTV feeds with Google Gemini Vision and sends real-time WhatsApp and email alerts when it detects operational issues — unattended front desks, housekeeping delays, safety hazards. Built privacy-first: frames are analyzed and discarded, never stored.',
    category: ['AI', 'SaaS'],
    features: [
      'AI vision analysis of live CCTV feeds',
      'Motion detection cascade to minimize AI API costs',
      'Object detection for operational context',
      'Gemini Vision for scene understanding',
      'Real-time WhatsApp alerts via Twilio',
      'Email alerts with annotated snapshots',
      'Multi-hotel dashboard with per-camera configuration',
      'Privacy-first architecture — no footage retention',
    ],
    challenges: [
      'Designed a motion-detection cascade (OpenCV pre-filtering before Gemini calls) that cut AI API costs by an order of magnitude versus naive frame sampling.',
      'Kept alert latency low while batching and deduplicating events so staff are notified once, not spammed.',
      'Handled unreliable RTSP camera streams with automatic reconnection and health monitoring.',
    ],
    architecture:
      'FastAPI service with per-camera async workers: OpenCV handles motion gating, qualifying frames go to Gemini Vision for scene analysis, and a rules engine turns findings into deduplicated alerts dispatched via Twilio (WhatsApp) and SMTP. PostgreSQL stores configuration and alert history — never video.',
    stack: ['Python', 'FastAPI', 'Google Gemini Vision', 'OpenCV', 'PostgreSQL'],
    icon: Cctv,
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    featured: true,
  },
  {
    slug: 'aitaxmd',
    title: 'AITaxMD',
    tagline: 'Full-stack AI tax planning assistant for US professionals.',
    description:
      'An AI assistant that gives US professionals personalized tax planning guidance powered by GPT-4o. Includes OAuth login, a guest mode for trying before signing up, and a secure dashboard — with a conversion funnel that turns trial users into accounts.',
    category: ['AI', 'SaaS'],
    features: [
      'GPT-4o-powered tax planning conversations',
      'OAuth login with secure session handling',
      'Guest mode with limited free usage',
      'Personalized tax planning based on profession and income profile',
      'Secure dashboard with conversation history',
      'Conversion funnel from guest trial to registered user',
    ],
    challenges: [
      'Engineered prompts that keep tax guidance accurate, appropriately caveated, and jurisdiction-aware.',
      'Built abuse-resistant guest mode with atomic usage counters that survive concurrent requests.',
      'Kept sensitive financial context encrypted at rest and out of logs.',
    ],
    architecture:
      'React SPA over a Node.js API with PostgreSQL. Guest sessions are tracked via httpOnly cookies with atomic SQL counters; OpenAI calls stream through the backend so keys and prompts never reach the client.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    icon: Landmark,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    featured: true,
  },
  {
    slug: 'inndesignai',
    title: 'InnDesignAI',
    tagline: 'AI-powered interior design SaaS.',
    description:
      'Upload a photo of your room and get photorealistic AI redesigns in different styles — complete with cost and ROI estimates. Built for homeowners and hospitality businesses planning renovations.',
    category: ['AI', 'SaaS'],
    features: [
      'Room photo upload with instant preview',
      'AI redesign across multiple interior styles',
      'Photorealistic output rendering',
      'Cost estimates per redesign',
      'ROI estimates for hospitality upgrades',
    ],
    challenges: [
      'Tuned generation prompts so redesigns respect the room’s actual geometry instead of hallucinating new layouts.',
      'Built a streaming generation pipeline so users see progress instead of a long spinner.',
      'Designed a guest trial with atomic usage limits that converts visitors without frustrating them.',
    ],
    architecture:
      'React frontend with a Python AI service orchestrating image generation models. Generations, favorites, and refinement iterations are persisted per user, with an admin dashboard for analytics and audit logs.',
    stack: ['React', 'Python', 'AI APIs', 'PostgreSQL'],
    icon: Sofa,
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    featured: true,
  },
  {
    slug: 'quantum-sentiment-analysis',
    title: 'Quantum Sentiment Analysis',
    tagline: 'Hotel review sentiment analysis with NLP and quantum simulation.',
    description:
      'A Flask application that performs hotel review sentiment analysis using classical NLP combined with Qiskit quantum circuit simulation. Pulls real reviews via the Google Places API and visualizes the quantum circuits used in classification.',
    category: ['Quantum', 'AI'],
    features: [
      'NLP preprocessing and feature extraction',
      'Qiskit quantum circuit classification',
      'Live hotel reviews via Google Places API',
      'Quantum circuit visualization',
      'Sentiment scoring with confidence levels',
    ],
    challenges: [
      'Encoded text features into quantum states within the qubit budget of a simulator.',
      'Made quantum circuit behavior visual and explainable for non-physicists.',
      'Balanced classical preprocessing with quantum classification so the hybrid pipeline stays fast enough for a web app.',
    ],
    architecture:
      'Flask web app with a hybrid pipeline: classical NLP (tokenization, embedding, dimensionality reduction) feeds a Qiskit variational circuit run on the Aer simulator. Circuit diagrams and measurement distributions are rendered server-side per analysis.',
    stack: ['Python', 'Flask', 'Qiskit', 'Google Places API'],
    icon: Atom,
    gradient: 'from-cyan-500 via-sky-500 to-blue-600',
    featured: true,
  },
  {
    slug: 'suregain-gpt',
    title: 'SureGain GPT',
    tagline: 'AI-powered assistant for business workflows.',
    description:
      'An AI assistant that plugs into business workflows — drafting, summarizing, and answering from company context. Built with React and the OpenAI API with a focus on fast, reliable responses.',
    category: ['AI', 'Web'],
    features: [
      'Conversational AI tuned for business tasks',
      'Streaming responses for instant feedback',
      'Context-aware prompting per workflow',
      'Clean, distraction-free chat interface',
    ],
    challenges: [
      'Designed prompt templates that keep outputs consistent across very different business workflows.',
      'Handled OpenAI rate limits and failures gracefully with retries and clear user feedback.',
    ],
    architecture:
      'React SPA with a thin API layer proxying OpenAI calls, streaming tokens to the client via server-sent events. Workflow templates are configuration-driven so new use cases ship without code changes.',
    stack: ['React', 'OpenAI API'],
    icon: Bot,
    gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
    featured: true,
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    tagline: 'Firebase-powered expense tracking with charts and cloud sync.',
    description:
      'A clean expense tracking application with authentication, full CRUD, interactive charts, and monthly reports — synced to the cloud with Firestore so your data follows you across devices.',
    category: ['Web'],
    features: [
      'Firebase Authentication (email + Google)',
      'Full CRUD for expenses and categories',
      'Interactive charts for spending breakdowns',
      'Monthly reports with trends',
      'Real-time cloud sync via Firestore',
    ],
    challenges: [
      'Modeled Firestore data for fast per-month queries without expensive collection scans.',
      'Kept the UI responsive with optimistic updates that reconcile against Firestore writes.',
    ],
    architecture:
      'React frontend talking directly to Firebase services: Auth for identity, Firestore for data with security rules enforcing per-user isolation, and client-side aggregation for charts and reports.',
    stack: ['React', 'Firebase', 'Firestore'],
    icon: Wallet,
    gradient: 'from-lime-500 via-green-500 to-emerald-600',
    featured: true,
  },
  {
    slug: 'saffron-and-spice',
    title: 'Saffron & Spice',
    tagline: 'Premium 15-page restaurant website.',
    description:
      'A premium 15-page restaurant website with dark mode, live menu filtering, an image gallery, validated forms, and full SEO optimization — hand-built with Bootstrap 5 for pixel-perfect responsiveness.',
    category: ['Web'],
    features: [
      'Bootstrap 5 responsive layout across 15 pages',
      'Dark mode with persistent preference',
      'Live menu filtering by cuisine and diet',
      'Image gallery with lightbox',
      'Client-side form validation',
      'Full SEO optimization with structured data',
    ],
    challenges: [
      'Kept 15 pages visually consistent with a disciplined component and utility system — no page drift.',
      'Achieved fast load times with optimized images and zero framework JavaScript.',
    ],
    architecture:
      'Static multi-page site built on Bootstrap 5 with a shared partial system for header/footer, vanilla JavaScript for filtering and gallery interactions, and JSON-LD structured data for local SEO.',
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    icon: UtensilsCrossed,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    featured: true,
  },
]

// 'Desktop' stays in the type but is omitted here — no desktop projects are
// currently listed, so the filter button would show an empty grid.
export const projectCategories: ProjectCategory[] = ['Enterprise', 'SaaS', 'AI', 'Quantum', 'Web']

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
