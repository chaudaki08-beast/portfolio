import type { IconType } from 'react-icons'
import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiSharp,
  SiReact,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSqlite,
  SiGooglegemini,
  SiQiskit,
  SiDotnet,
  SiGit,
  SiGithub,
  SiVercel,
  SiHostinger,
  SiCpanel,
  SiPlesk,
} from 'react-icons/si'
import { FaDatabase, FaBrain, FaComments, FaWindowMaximize } from 'react-icons/fa6'
import { RiOpenaiFill } from 'react-icons/ri'

export interface Skill {
  name: string
  icon: IconType
}

export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'The core languages I think and build in.',
    skills: [
      { name: 'PHP', icon: SiPhp },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
      { name: 'C#', icon: SiSharp },
      { name: 'SQL', icon: FaDatabase },
    ],
  },
  {
    title: 'Frontend',
    description: 'Interfaces that are fast, accessible, and pleasant to use.',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    description: 'APIs and services built for reliability at scale.',
    skills: [
      { name: 'PHP', icon: SiPhp },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    title: 'Database',
    description: 'Schema design, optimization, and data integrity.',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'SQLite', icon: SiSqlite },
    ],
  },
  {
    title: 'AI',
    description: 'Production AI features, not just demos.',
    skills: [
      { name: 'OpenAI', icon: RiOpenaiFill },
      { name: 'Google Gemini', icon: SiGooglegemini },
      { name: 'Prompt Engineering', icon: FaComments },
      { name: 'NLP', icon: FaBrain },
    ],
  },
  {
    title: 'Quantum',
    description: 'Exploring quantum computing with real circuits.',
    skills: [{ name: 'Qiskit', icon: SiQiskit }],
  },
  {
    title: 'Desktop',
    description: 'Native Windows applications with modern .NET.',
    skills: [
      { name: '.NET 9', icon: SiDotnet },
      { name: 'WPF', icon: FaWindowMaximize },
    ],
  },
  {
    title: 'DevOps',
    description: 'From commit to production, smoothly.',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Hostinger', icon: SiHostinger },
      { name: 'cPanel', icon: SiCpanel },
      { name: 'Plesk', icon: SiPlesk },
    ],
  },
]

export interface Advantage extends Skill {
  percent: number
}

/** Proficiency highlights for the "My Advantages" strip on Home. */
export const advantages: Advantage[] = [
  { name: 'JavaScript', icon: SiJavascript, percent: 92 },
  { name: 'PHP', icon: SiPhp, percent: 90 },
  { name: 'React JS', icon: SiReact, percent: 88 },
  { name: 'MySQL', icon: SiMysql, percent: 90 },
  { name: 'Python', icon: SiPython, percent: 85 },
  { name: 'AI / LLM APIs', icon: RiOpenaiFill, percent: 87 },
]

export const heroTech: Skill[] = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'PHP', icon: SiPhp },
  { name: 'Python', icon: SiPython },
  { name: 'FastAPI', icon: SiFastapi },
  { name: '.NET', icon: SiDotnet },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'OpenAI', icon: RiOpenaiFill },
]
