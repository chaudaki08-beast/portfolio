import { Helmet } from 'react-helmet-async'
import { profile } from '@/data/profile'

interface SEOProps {
  title: string
  description: string
  path?: string
}

export function SEO({ title, description, path = '' }: SEOProps) {
  const url = `${profile.siteUrl}${path}`
  const fullTitle = `${title} | ${profile.shortName}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
