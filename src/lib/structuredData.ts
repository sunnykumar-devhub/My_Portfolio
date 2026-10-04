import { SITE_URL } from '../config/site';
import { profile, skillGroups, socialLinks } from '../data/profile';

// schema.org Person, so search engines can show a rich result for "Sunny Kumar frontend"
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}/sunny.png`,
  jobTitle: profile.role,
  worksFor: { '@type': 'Organization', name: 'Codebucket Solutions Private Limited' },
  address: { '@type': 'PostalAddress', addressLocality: 'Patna', addressRegion: 'Bihar', addressCountry: 'IN' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Presidency College, Bengaluru' },
  knowsAbout: skillGroups.flatMap((group) => group.skills).slice(0, 20),
  sameAs: socialLinks.filter((link) => link.href.startsWith('http')).map((link) => link.href),
};
