import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { ProjectVisual } from '@/components/ProjectVisual'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="block p-3 pb-0"
      >
        <ProjectVisual
          project={project}
          className="aspect-video w-full transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </Link>
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
            <Link
              to={`/projects/${project.slug}`}
              className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
            >
              {project.title}
            </Link>
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500" />
        </div>
        <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 4 && (
            <Badge variant="outline">+{project.stack.length - 4}</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
