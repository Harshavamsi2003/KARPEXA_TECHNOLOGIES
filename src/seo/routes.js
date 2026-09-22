// src/seo/routes.js
/* =====================================================================
   SEO ROUTE TABLE
   One entry per URL. Used three ways:
     1. <Seo /> applies it on client-side navigation
     2. scripts/prerender.mjs bakes it into static HTML at build time
     3. the same script generates sitemap.xml from it
   Add a route here and all three stay in sync.
   ===================================================================== */

import { brand, SITE_URL, sectors } from '../data/content';
import { capabilities } from '../pages/capabilities';

const abs = (p) => `${SITE_URL}${p === '/' ? '' : p}`;
const OG_IMAGE = `${SITE_URL}/images/og/karpexa-og.jpg`;

/* ---------------------------------------------------------------------
   OFFICIAL PROFILES  (sameAs)

   These are the external pages that prove Karpexa is a real company.
   Google uses them to connect the website to the business entity, which
   is what eventually produces a knowledge panel for the brand name.

   LEAVE THIS ARRAY EMPTY until the profiles genuinely exist and are
   public. A sameAs pointing at a 404 is worse than no sameAs at all.

   When the client sends you the live URLs, uncomment and paste them in.
   Nothing else in this file needs to change.
   --------------------------------------------------------------------- */
export const SOCIAL_PROFILES = [
  // 'https://www.linkedin.com/company/karpexa-technologies',
  // 'https://maps.app.goo.gl/XXXXXXXXXXXX',
  // 'https://www.crunchbase.com/organization/karpexa-technologies',
];

/* ---------------------------------------------------------------------
   OFFICE COORDINATES

   Used by the ProfessionalService node below so Google can place the
   business on the map for "IT company near me" style searches.

   How to get the real numbers: open Google Maps, search the office
   address, right-click the exact pin, and the first item in the menu is
   the latitude and longitude. Copy those two numbers in here.

   The values below are the centre of HSR Layout, Bengaluru. They are
   close but not exact. Replace them once you can confirm the pin.
   --------------------------------------------------------------------- */
const OFFICE_GEO = {
  latitude: 12.9116,
  longitude: 77.6389,
};

/* ---------- Reusable graph nodes ---------- */

export const organizationLd = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: brand.full,
  alternateName: brand.name,
  legalName: brand.legal,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/brand/karpexa-logo.png`,
    width: 512,
    height: 512,
  },
  image: OG_IMAGE,
  description:
    'Karpexa Technologies is an end-to-end IT services and consulting firm delivering infrastructure, cloud, managed services, cyber security, data analytics, ERP and technology staffing.',
  foundingDate: brand.founded,
  email: brand.email,
  telephone: brand.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${brand.address.line1}, ${brand.address.line2}`,
    addressLocality: brand.address.city,
    addressRegion: brand.address.region,
    postalCode: brand.address.postal,
    addressCountry: brand.address.country,
  },
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: brand.email,
      telephone: brand.phone,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  ],
  knowsAbout: capabilities.map((c) => c.title),
  /* Only emitted once SOCIAL_PROFILES actually has entries. */
  ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
};

/* A physical, visitable business at a specific address in Bengaluru.
   Organization says "this company exists". ProfessionalService says
   "and it is here, and you can call it". Local queries need the second. */
export const localBusinessLd = {
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#localbusiness`,
  name: brand.full,
  parentOrganization: { '@id': `${SITE_URL}/#organization` },
  url: SITE_URL,
  image: OG_IMAGE,
  logo: `${SITE_URL}/images/brand/karpexa-logo.png`,
  email: brand.email,
  telephone: brand.phone,
  priceRange: '$$',
  currenciesAccepted: 'INR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${brand.address.line1}, ${brand.address.line2}`,
    addressLocality: brand.address.city,
    addressRegion: brand.address.region,
    postalCode: brand.address.postal,
    addressCountry: brand.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: OFFICE_GEO.latitude,
    longitude: OFFICE_GEO.longitude,
  },
  areaServed: { '@type': 'Country', name: 'India' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:30',
      closes: '18:30',
    },
  ],
};

export const websiteLd = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: brand.full,
  alternateName: brand.name,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
};

/* Sitelink hinting: an explicit navigation graph of the pages we want
   Google to consider as sitelinks under the brand result. */
export const siteNavigationLd = {
  '@type': 'ItemList',
  '@id': `${SITE_URL}/#sitenav`,
  name: 'Karpexa primary navigation',
  itemListElement: [
    { name: 'Capabilities', url: abs('/capabilities'), description: 'Every service Karpexa delivers, from infrastructure to analytics.' },
    { name: 'Sectors', url: abs('/sectors'), description: 'Industries we build and support technology for.' },
    { name: 'Our Work', url: abs('/our-work'), description: 'GPU/AI server infrastructure and large-scale government & academic storage work.' },
    { name: 'About us', url: abs('/company'), description: 'Who Karpexa is, how we work and what we commit to.' },
    { name: 'Contact', url: abs('/contact'), description: 'Start a conversation with the Karpexa team.' },
    { name: 'Cloud Services', url: `${abs('/capabilities')}#cloud`, description: 'Cloud architecture, migration and managed operations.' },
    { name: 'Cyber Security', url: `${abs('/capabilities')}#security`, description: 'Identity, endpoint, network and cloud security services.' },
    { name: 'Managed IT Services', url: `${abs('/capabilities')}#managed-it`, description: '24×7 service desk, monitoring and IT operations.' },
    { name: 'IT Infrastructure', url: `${abs('/capabilities')}#it-infrastructure`, description: 'Data centre, network, devices and meeting rooms.' },
  ].map((item, i) => ({
    '@type': 'SiteNavigationElement',
    position: i + 1,
    name: item.name,
    description: item.description,
    url: item.url,
  })),
};

const breadcrumb = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: abs(t.path),
  })),
});

const faqLd = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

const serviceLd = (c) => ({
  '@type': 'Service',
  '@id': `${abs('/capabilities')}#${c.slug}-service`,
  name: c.title,
  serviceType: c.title,
  description: c.seo.description,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'India' },
  url: `${abs('/capabilities')}#${c.slug}`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${c.title} services`,
    itemListElement: c.offerings.map((o) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: o.name, description: o.desc },
    })),
  },
});

/* ---------- The route table ---------- */

export const routes = [
  {
    path: '/',
    title: 'IT Services Company in Bengaluru | Karpexa Technologies',
    description:
      'Karpexa Technologies is an IT services company in Bengaluru — infrastructure, cloud, managed IT, cyber security, data analytics, ERP and technology staffing, delivered by one accountable engineering team across India.',
    keywords: 'IT services company Bengaluru, IT company Bangalore, managed IT services Bengaluru, IT infrastructure Bangalore, IT solutions provider India',
    priority: '1.0',
    changefreq: 'weekly',
    graph: [organizationLd, localBusinessLd, websiteLd, siteNavigationLd, {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Karpexa Technologies',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    }],
  },
  {
    /* ---------------------------------------------------------------
       Consolidated capabilities page.

       All ten capabilities used to be separate routes; they now live as
       anchored sections on this one URL (/capabilities#slug). Every
       capability's Service node and every capability's FAQs are folded
       into this single page's graph instead of being spread across ten
       thin, low-authority pages — all the link equity concentrates
       here, which is the point.
       --------------------------------------------------------------- */
    path: '/capabilities',
    title: 'IT Services & Capabilities in Bengaluru | Karpexa',
    description:
      'Ten IT capabilities delivered from Bengaluru — infrastructure, cloud, managed services, cyber security, data and analytics, digital workspace, ERP, staffing, AMC and managed print, bought one at a time.',
    keywords: 'IT services Bengaluru, IT capabilities Bangalore, enterprise IT solutions Bengaluru, managed services and cloud India',
    priority: '0.9',
    changefreq: 'monthly',
    graph: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Capabilities', path: '/capabilities' }]),
      {
        '@type': 'CollectionPage',
        name: 'Karpexa capabilities',
        url: abs('/capabilities'),
        hasPart: capabilities.map((c) => ({
          '@type': 'Service',
          name: c.title,
          description: c.short,
          url: `${abs('/capabilities')}#${c.slug}`,
        })),
      },
      ...capabilities.map((c) => serviceLd(c)),
      faqLd(capabilities.flatMap((c) => c.faqs)),
    ],
  },
  {
    path: '/sectors',
    title: 'Industry IT Solutions in Bengaluru | BFSI, Healthcare, GCC',
    description:
      'Sector-specific IT delivery from Bengaluru for global capability centres, healthcare and life sciences, banking and financial services, manufacturing, automotive, retail, technology and startups.',
    keywords: 'IT services for BFSI Bengaluru, healthcare IT services Bangalore, manufacturing IT solutions India, GCC IT partner Bengaluru, retail IT infrastructure Bangalore',
    priority: '0.8',
    changefreq: 'monthly',
    graph: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }]),
      {
        '@type': 'CollectionPage',
        name: 'Industries served by Karpexa',
        url: abs('/sectors'),
        hasPart: sectors.map((s) => ({ '@type': 'Thing', name: s.name, description: s.text })),
      },
    ],
  },
  {
    path: '/our-work',
    title: 'GPU & AI Server Infrastructure Projects | Bengaluru',
    description:
      'GPU-accelerated AI servers, HPC platforms and high-capacity storage built from Bengaluru for technology, government, defence, aerospace and academic organisations across India.',
    keywords: 'GPU server infrastructure Bengaluru, AI server supplier Bangalore, HPC infrastructure India, enterprise storage Bengaluru, data centre projects Bangalore',
    priority: '0.75',
    changefreq: 'monthly',
    graph: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Our Work', path: '/our-work' }]),
      {
        '@type': 'CollectionPage',
        name: 'Karpexa infrastructure work',
        url: abs('/our-work'),
        about: { '@id': `${SITE_URL}/#organization` },
        hasPart: [
          { '@type': 'Thing', name: 'GPU & AI Server Infrastructure', description: 'GPU-accelerated AI servers, HPC and enterprise infrastructure for AI, deep-learning, simulation and research workloads.' },
          { '@type': 'Thing', name: 'Government & Academic Storage Infrastructure', description: 'High-capacity enterprise storage, servers and data-centre infrastructure for government, defence, aerospace and academic organisations.' },
        ],
      },
    ],
  },
  {
    path: '/company',
    title: 'About Karpexa | IT Services Company in Bengaluru',
    description:
      'Karpexa Technologies is an engineering-led IT services company in Bengaluru, built for mid-sized organisations — senior engineers on every engagement, vendor-neutral advice and documentation you own.',
    keywords: 'about Karpexa, IT consulting company Bengaluru, IT services company Bangalore, technology partner Bengaluru, IT company HSR Layout',
    priority: '0.7',
    changefreq: 'yearly',
    graph: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'About us', path: '/company' }]),
      { '@type': 'AboutPage', name: 'About Karpexa Technologies', url: abs('/company'), mainEntity: { '@id': `${SITE_URL}/#organization` } },
    ],
  },
  {
    path: '/contact',
    title: 'Contact Karpexa | IT Services Company in Bengaluru',
    description:
      'Contact Karpexa Technologies in HSR Layout, Bengaluru. Tell us where your technology is today and we will come back with a clear, practical next step — usually within one business day.',
    keywords: 'contact IT company Bengaluru, IT services enquiry Bangalore, IT support HSR Layout, Karpexa contact',
    priority: '0.7',
    changefreq: 'yearly',
    graph: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
      { '@type': 'ContactPage', name: 'Contact Karpexa', url: abs('/contact'), mainEntity: { '@id': `${SITE_URL}/#organization` } },
      localBusinessLd,
    ],
  },
];

export const routeMap = Object.fromEntries(routes.map((r) => [r.path, r]));

export const getRouteMeta = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return (
    routeMap[clean] || {
      path: clean,
      title: 'Page not found | Karpexa Technologies',
      description: 'The page you are looking for does not exist. Explore Karpexa’s IT capabilities instead.',
      keywords: '',
      noindex: true,
      graph: [],
    }
  );
};

export const buildJsonLd = (route) => ({
  '@context': 'https://schema.org',
  '@graph': route.graph || [],
});

export { SITE_URL, OG_IMAGE };
