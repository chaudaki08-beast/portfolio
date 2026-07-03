import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Hero } from '@/components/home/Hero'
import { Advantages } from '@/components/home/Advantages'
import { Process } from '@/components/home/Process'
import { Testimonials } from '@/components/home/Testimonials'
import { GithubActivity } from '@/components/home/GithubActivity'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { services } from '@/data/services'
import { clientWork, upcomingPosts } from '@/data/misc'

export default function Home() {
  return (
    <>
      <SEO
        title="Software Engineer — Full-Stack, AI & SaaS"
        description={profile.summary}
        path="/"
      />
      <Hero />
      <Advantages />

      {/* Featured projects */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Featured Work"
            title="Production-grade projects"
            description="Enterprise platforms, AI systems, and desktop tools — built end to end."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 0.1}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Client work */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Client Work"
            title="Trusted by businesses"
            description="Beyond featured products — a steady track record of client delivery."
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

      {/* Services preview */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Services"
            title="What I can build for you"
            description="From a single API to a complete SaaS product."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <Card className="h-full">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-zinc-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/services">
              <Button variant="outline" size="lg">
                All Services <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      <Process />
      <Testimonials />
      <GithubActivity />

      {/* Blog preview */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Blog"
            title="Writing — coming soon"
            description="Deep dives into the engineering behind my projects."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {upcomingPosts.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.1}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-center gap-2">
                      <Badge>{post.tag}</Badge>
                      <span className="text-xs text-zinc-500">{post.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 dark:text-zinc-500">
                      <BookOpen className="h-4 w-4" /> Coming soon
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <Reveal className="container-tight">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 p-10 text-center shadow-2xl shadow-brand-500/25 sm:p-16">
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '44px 44px',
              }}
            />
            <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/85">
              Let's build something production-grade together — from first architecture sketch to
              deployed product.
            </p>
            <Link to="/contact" className="relative mt-8 inline-block">
              <Button
                size="lg"
                className="bg-white text-brand-700 shadow-xl hover:bg-white hover:brightness-95"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
