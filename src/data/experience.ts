// TODO: refine dates, company names, and achievements with your real history.
export interface ExperienceItem {
  period: string
  role: string
  company: string
  achievements: string[]
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Independent Software Engineer & Product Builder',
    company: 'Cyberweb Software',
    achievements: [
      'Shipped HotelEye AI — an AI vision platform monitoring hotel CCTV with Gemini Vision, cutting manual monitoring effort while keeping footage private.',
      'Built a .NET 9 WPF desktop tool that decrypts and migrates WhatsApp backups between iPhone and Android.',
      'Launched InnDesignAI and AITaxMD, two AI SaaS products with guest trials, conversion funnels, and admin analytics.',
    ],
    tech: ['Python', 'FastAPI', 'React', '.NET 9', 'PostgreSQL', 'Gemini', 'OpenAI'],
  },
  {
    period: '2022 — 2024',
    role: 'Full-Stack Developer',
    company: 'Freelance & Agency Projects',
    achievements: [
      'Delivered an enterprise ISP & Cable Operator Management System handling CRM, billing, complaints, and technician dispatch for providers.',
      'Built Universal CMS — a cPanel-ready website builder with drag-and-drop editing, themes, blogging, and e-commerce.',
      'Shipped 20+ WordPress sites and 15+ hand-coded HTML sites for clients across hospitality, retail, and services.',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'WordPress'],
  },
  {
    period: '2020 — 2022',
    role: 'Web Developer',
    company: 'Early Client Work',
    achievements: [
      'Mastered the LAMP stack building custom CMS projects and business websites end to end.',
      'Learned deployment and server management across cPanel, Plesk, and Hostinger environments.',
      'Built a foundation in responsive design, SEO, and performance optimization that carries through every project since.',
    ],
    tech: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
  },
]

export const education = [
  {
    period: '2016 — 2020',
    degree: 'Bachelor of Engineering', // TODO: update with your real degree and institution
    institution: 'Your University Name',
    detail: 'Focused on computer science fundamentals, algorithms, and software engineering.',
  },
]
