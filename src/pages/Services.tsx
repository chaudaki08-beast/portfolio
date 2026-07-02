import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Services offered by Ganesh Chaudaki: full-stack development, AI integration, SaaS development, enterprise software, desktop applications, and more."
        path="/services"
      />
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Services"
            title="How I can help"
            description="Every engagement gets the same treatment: clear scope, clean architecture, and software that holds up in production."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <Card className="group h-full">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/25 transition-transform group-hover:scale-110">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              Not sure which service fits? Describe your problem — I'll suggest the right approach.
            </p>
            <Link to="/contact" className="mt-6 inline-block">
              <Button size="lg">
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
