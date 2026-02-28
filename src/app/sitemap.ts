import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fadimoussa.com'

  const projectUrls = [
    '/work/besa-dienstleistungen',
    '/work/voltea',
    '/work/bela-design-bau',
    '/work/jahnke-architektur',
    '/work/boehmer-manufaktur',
    '/work/firdevs-cosmetic',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    ...projectUrls,
  ]
}