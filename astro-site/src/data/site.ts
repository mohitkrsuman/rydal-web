export const site = {
  name: 'Rydal',
  title: 'Rydal — The Ultimate Rider Dashboard',
  description:
    'A high-tech riding platform that transforms your smartphone into a dedicated motorcycle dashboard. Real-time group sync, dual-layer safety alerts, and hands-free voice navigation for every rider.',
  url: 'https://rydal.app',
  tagline: 'Your pack. Synced. Your ride. Secured.',
};

export const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Safety', href: '#safety' },
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'Waitlist', href: '#waitlist' },
];

export const features = [
  {
    icon: 'users' as const,
    title: 'Group Synchronization',
    description:
      "Live location of every member in your pack. No more 'where is everyone?' stress.",
  },
  {
    icon: 'navigation' as const,
    title: 'Technical Navigation',
    description:
      'Optimized routes for bikers focusing on viewpoints, twists, and road quality.',
  },
  {
    icon: 'mic' as const,
    title: 'Voice-First Interface',
    description:
      'Hands-free Bluetooth control for petrol, food, and route adjustments.',
  },
  {
    icon: 'award' as const,
    title: 'Incentivized Intelligence',
    description:
      'Contribute road data and earn subscription discounts. Smarter with every km.',
  },
];

export const voiceFeatures = [
  'Bluetooth-integrated voice assistant',
  'Voice-activated petrol station search',
  'On-the-go route adjustments via voice',
  'Seamless food and rest-stop requests',
];
