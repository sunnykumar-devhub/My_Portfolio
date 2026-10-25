export type NavItem = { label: string; id: string; href: string };

// Home page sections, shared by the header, mobile menu, command palette and footer
export const navItems: NavItem[] = [
  { label: 'Work', id: 'work', href: '/#work' },
  { label: 'Experience', id: 'experience', href: '/#experience' },
  { label: 'Skills', id: 'skills', href: '/#skills' },
  { label: 'About', id: 'about', href: '/#about' },
];

export const contactNav: NavItem = { label: 'Contact', id: 'contact', href: '/#contact' };

// Standalone routes, and the home section each one corresponds to (for the active nav state)
export const pageRoutes = [
  { label: 'All projects', path: '/projects', section: 'work' },
  { label: 'About, experience & skills', path: '/about', section: 'about' },
  { label: 'Skills', path: '/skills', section: 'skills' },
  { label: 'Contact', path: '/contact', section: 'contact' },
];
