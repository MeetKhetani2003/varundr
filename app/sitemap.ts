import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.careplusraipur.com';
  
  const routes = [
    '',
    '/about',
    '/appointment',
    '/contact',
    '/doctors',
    '/facilities',
    '/gallery',
    '/orthopedic',
    '/pathology',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
