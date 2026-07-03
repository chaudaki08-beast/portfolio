export interface ExperienceItem {
  period: string
  role: string
  company: string
  achievements: string[]
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: 'Nov 2023 — Present',
    role: 'Software Developer',
    company: 'CGS Infotech Solutions · Mumbai (Hybrid)',
    achievements: [
      'Design and develop client-facing web applications using React.js and PHP for high-traffic environments.',
      'Lead the design and integration of RESTful APIs and third-party services to improve platform reliability.',
      'Developed 4+ NFC-powered products including review systems, booking tools, and automated chatbots.',
      'Collaborate in Agile sprints, performing code reviews and maintaining rigorous technical documentation.',
    ],
    tech: ['React', 'PHP', 'MySQL', 'REST APIs', 'NFC'],
  },
  {
    period: 'Apr 2023 — Oct 2023',
    role: 'Web Developer',
    company: 'My Country Mobile · Mumbai',
    achievements: [
      'Spearheaded front-end development for customer-facing telecom and VoIP portals used by thousands of users.',
      'Built and maintained complex API integrations supporting real-time communication and VoIP platform stability.',
      'Optimized front-end performance and page load times, contributing to measurable gains in user engagement.',
    ],
    tech: ['JavaScript', 'React', 'REST APIs', 'VoIP'],
  },
  {
    period: 'Jan 2023 — Mar 2023',
    role: 'Web Developer',
    company: 'Anush Enterprises · Mumbai',
    achievements: [
      'Developed responsive business websites and administrative modules using JavaScript and HTML5.',
      'Managed end-to-end project lifecycles from requirements gathering to final deployment.',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3'],
  },
]

export const education = [
  {
    period: 'Postgraduate Degree',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Mumbai University',
    detail:
      'Postgraduate degree focused on software engineering, databases, and application development.',
  },
]
