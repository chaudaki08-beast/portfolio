import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { ProjectVisual } from '@/components/ProjectVisual'
import { Badge } from '@/components/ui/badge'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col">
      <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <ProjectVisual project={project} laptop image={project.images?.[0]} />
      </Link>
      <div className="flex flex-1 flex-col px-1 pt-5">
        <p className="mb-1.5 text-[11px] font-bold tracking-[0.18em] text-brand-500 uppercase">
          Featured Project
        </p>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-white">
            <Link
              to={`/projects/${project.slug}`}
              className="transition-colors hover:text-brand-400"
            >
              {project.title}
            </Link>
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500" />
        </div>
        <p className="mt-2 flex-1 text-sm text-white/60">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 4 && <Badge variant="outline">+{project.stack.length - 4}</Badge>}
        </div>
      </div>
    </article>
  )
}
