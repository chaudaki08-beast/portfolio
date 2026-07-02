import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { ProjectCard } from '@/components/ProjectCard'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { projects, projectCategories, type ProjectCategory } from '@/data/projects'
import { clientWork } from '@/data/misc'
import { cn } from '@/lib/utils'

export default function Projects() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<ProjectCategory | 'All'>('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category.includes(category)
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <>
      <SEO
        title="Projects"
        description="Featured projects by Ganesh Chaudaki: enterprise SaaS, AI vision platforms, desktop tools, quantum computing experiments, and client work."
        path="/projects"
      />
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured projects"
            description="Ten production builds across enterprise, AI, desktop, and quantum."
          />

          {/* Search + filter */}
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <div className="relative">
              <Search
                className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-zinc-400"
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Search projects by name or technology…"
                aria-label="Search projects"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-11"
              />
            </div>
            <div
              className="mt-4 flex flex-wrap justify-center gap-2"
              role="group"
              aria-label="Filter projects by category"
            >
              {(['All', ...projectCategories] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  aria-pressed={category === cat}
                  className={cn(
                    'cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                    category === cat
                      ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/25'
                      : 'glass text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 3) * 0.08}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-zinc-500 dark:text-zinc-400">
              No projects match “{query}”. Try a different search.
            </p>
          )}
        </div>
      </section>

      {/* Client work */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Client Work"
            title="Beyond featured projects"
            description="A steady record of client delivery across platforms."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {clientWork.map((work, i) => (
              <Reveal key={work.title} delay={i * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/25">
                      <work.icon className="h-7 w-7" />
                    </div>
                    <p className="font-display text-4xl font-bold text-gradient">
                      <AnimatedCounter value={work.count} suffix={work.suffix} />
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-zinc-900 dark:text-white">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {work.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
