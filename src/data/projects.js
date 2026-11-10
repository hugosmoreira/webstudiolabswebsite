// Portfolio records. Screenshots were captured from the public sites on the date below.
// Keep descriptions limited to features that are live on the public site.

export const SUG = {
  name: 'SUG World Tour',
  url: 'https://www.sugworldtour.com',
  host: 'sugworldtour.com',
  relationship: 'Client project',
  category: 'Sports & Events',
  role: 'Website & platform',
  status: 'Live',
  captured: '2026-11-10',
  summary:
    'A digital home for an international grappling tournament series, bringing its events, rules, and news into one bilingual experience for athletes and teams in Brazil and the United States.',
  delivered: [
    'Bilingual site in English and Portuguese',
    'Event pages with registration links and published rules',
    'Interactive guide to techniques, divisions, and weight classes',
    'News, sponsor, and vendor listings',
    'Light and dark themes',
  ],
  shots: {
    home: {
      src: '/work/sug-home.webp',
      width: 1440,
      height: 900,
      alt: 'SUG World Tour homepage featuring the next event in Portland, with registration, event details, and rules links.',
    },
    rules: {
      src: '/work/sug-rules.webp',
      width: 1440,
      height: 900,
      alt: 'SUG World Tour rules guide showing allowed and prohibited techniques by division, with tabs for weight classes and scoring.',
    },
    mobile: {
      src: '/work/sug-mobile.webp',
      width: 780,
      height: 1688,
      alt: 'SUG World Tour homepage on a phone-sized screen.',
    },
  },
};

export const PRODUCTS = [
  {
    name: 'Voxian',
    url: 'https://voxian.ai',
    host: 'voxian.ai',
    relationship: 'Studio product',
    status: 'Public beta',
    captured: '2026-11-10',
    summary: 'An AI reading assistant that narrates your PDFs with word-by-word highlighting, so you can listen and follow along.',
    features: [
      'PDF narration with word-level highlighting',
      'Reading progress saved across devices',
      'Study tools rolling out during the beta',
    ],
    cta: 'Explore Voxian',
    shot: {
      src: '/work/voxian-reader.webp',
      width: 1440,
      height: 900,
      alt: 'Voxian reading demo narrating a passage from Pride and Prejudice, with the current word highlighted and playback controls below.',
    },
  },
  {
    name: 'Housing Navigator',
    url: 'https://housingnavigator.us',
    host: 'housingnavigator.us',
    relationship: 'Studio product',
    status: 'Live',
    captured: '2026-11-10',
    summary:
      'A housing resource directory and waitlist tracker for Oregon and Washington, built so people can search for help without navigating forms.',
    features: [
      'Search rent assistance, shelter, and legal aid',
      'Follow waitlists and get email alerts for recorded openings',
      'Every listing shows its source and last review date',
    ],
    cta: 'Explore Housing Navigator',
    shot: {
      src: '/work/housing-navigator-home.webp',
      width: 1440,
      height: 900,
      alt: 'Housing Navigator homepage with search and waitlist tracking buttons beside sample resource and waitlist status cards.',
    },
  },
];
