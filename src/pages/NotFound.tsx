import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[70vh] items-center justify-center section-pad">
        <div className="text-center">
          <p className="font-display text-8xl font-bold text-gradient">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-zinc-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link to="/" className="mt-8 inline-block">
            <Button size="lg">
              <Home className="h-4 w-4" /> Back Home
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
