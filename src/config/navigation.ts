export type NavItem = { label: string; path: string };

// Shared by the header, mobile drawer and footer
export const navItems: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];
