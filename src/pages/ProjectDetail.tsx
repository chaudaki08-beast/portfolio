import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Info, Layers } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { SEO } from '@/components/SEO'
import { Reveal } from '@/components/Reveal'
import { ProjectVisual } from '@/components/ProjectVisual'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getProject, projects } from '@/data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/projects" replace />

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SEO title={project.title} description={project.tagline} path={`/projects/${project.slug}`} />
      <article className="section-pad">
        <div className="container-tight max-w-4xl">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
            >
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.category.map((cat) => (
                <Badge key={cat}>{cat}</Badge>
              ))}
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-white">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{project.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* TODO: point these at real repository / demo URLs in src/data/projects.ts */}
              <a
                href={project.github ?? 'https://github.com/chaudaki08-beast'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <FaGithub className="h-4 w-4" /> GitHub
                </Button>
              </a>
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Button>
                </a>
              )}
              <Link to="/contact">
                <Button variant="secondary">Discuss a similar project</Button>
              </Link>
            </div>
          </Reveal>

          {/* Preview + gallery */}
          <Reveal delay={0.1} className="group mt-10">
            <ProjectVisual project={project} laptop />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <ProjectVisual project={project} variant={1} className="aspect-video" />
              <ProjectVisual project={project} variant={2} className="aspect-video" />
              <ProjectVisual project={project} variant={1} className="aspect-video" />
            </div>
          </Reveal>

          {project.note && (
            <Reveal delay={0.12} className="mt-6">
              <div className="flex items-start gap-3 rounded-xl border border-amber-300/50 bg-amber-50/70 p-4 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                {project.note}
              </div>
            </Reveal>
          )}

          {/* Overview */}
          <Reveal delay={0.15} className="mt-12">
            <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
              Overview
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>

          {/* Features */}
          <Reveal delay={0.1} className="mt-12">
            <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
              Key features
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-zinc-200/70 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Challenges */}
          <Reveal delay={0.1} className="mt-12">
            <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
              Challenges solved
            </h2>
            <div className="mt-6 space-y-4">
              {project.challenges.map((challenge, i) => (
                <Card key={challenge}>
                  <CardContent className="flex items-start gap-4 p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 font-display text-sm font-bold text-brand-600 dark:text-brand-400">
                      {i + 1}
                    </span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{challenge}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>

          {/* Architecture */}
          <Reveal delay={0.1} className="mt-12">
            <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
              Architecture
            </h2>
            <Card className="mt-6">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Layers className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.architecture}
                </p>
              </CardContent>
            </Card>
          </Reveal>

          {/* Next project */}
          <Reveal delay={0.1} className="mt-16">
            <Link to={`/projects/${next.slug}`} className="group block">
              <Card>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Next project
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-zinc-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
                      {next.title}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        </div>
      </article>
    </>
  )
}
