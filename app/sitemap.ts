import type { MetadataRoute } from 'next';
import { SITE_URL } from '../src/config/site';

const routes = ['', '/about', '/projects', '/skills', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
