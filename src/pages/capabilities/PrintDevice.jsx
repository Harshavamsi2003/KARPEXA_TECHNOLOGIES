import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   MANAGED PRINT & DEVICE LIFECYCLE
   Voice: assets and unit cost. Cost per page, cradle to grave, disposal.
   Vocabulary reserved here: fleet, cost per page, consumables, chain of
   custody, residual value, disposal certificate.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'managed-print',
  title: 'Managed Print & Device Lifecycle',
  navTitle: 'Print & Devices',
  short: 'Print fleets and end-user devices managed from purchase order to disposal certificate.',
  label: 'Asset lifecycle & output',
  tagline: 'Every asset accounted for, cradle to certificate.',
  image: '/images/capabilities/print-device.jpg',
  imageAlt: 'Managed device fleet being prepared for deployment',

  intro: {
    eyebrow: 'The brief',
    heading: 'Nobody owns the fleet, so nobody sees the cost',
    body:
      'Print and end-user devices are the last unmanaged spend in most organisations. Cartridges are bought locally, laptops are ordered ad hoc, and retired machines sit in a cupboard with their data still on them. We take the whole lifecycle — purchase, staging, deployment, support, recovery and certified disposal — onto one register with one cost per unit, so a category that has always been fuzzy finally has a number attached.',
  },

  signals: [
    'Consumables are bought by individual offices with no consolidated view of spend.',
    'Retired laptops are stored in a cupboard, still holding company data.',
    'Nobody can say how many printers are actually deployed, or where.',
  ],

  offerings: [
    { name: 'Managed print services', desc: 'The whole fleet on one contract — hardware, consumables, servicing and support billed at an agreed cost per page.' },
    { name: 'Print fleet optimisation', desc: 'Usage-based right-sizing that removes underused devices and places the rest where the volume actually is.' },
    { name: 'Secure & follow-me printing', desc: 'Badge or PIN release at the device, ending the pile of unclaimed sensitive documents on the output tray.' },
    { name: 'Device procurement & staging', desc: 'Sourcing, imaging, asset tagging and kitting, with machines shipped ready to use to office or home address.' },
    { name: 'Deployment & refresh programmes', desc: 'Rolling replacement waves that keep the estate current without a disruptive fleet-wide swap.' },
    { name: 'Device as a service', desc: 'Hardware, support and refresh as a single monthly per-seat figure, moving spend from capital to operating cost.' },
    { name: 'Asset tracking & recovery', desc: 'A live register from purchase order to return, including collection from leavers and remote workers.' },
    { name: 'Secure disposal & buy-back', desc: 'Certified data erasure, responsible e-waste recycling and residual value returned to you rather than absorbed.' },
  ],

  outcomes: [
    { stat: '30', unit: '% less', title: 'Print spend removed', text: 'Typical reduction once volume is consolidated and the fleet is right-sized.' },
    { stat: '1', unit: 'unit rate', title: 'Predictable cost', text: 'A single cost per page or per seat replacing scattered, untracked purchases.' },
    { stat: '100', unit: '% wiped', title: 'Certified erasure', text: 'Every retired device data-wiped to standard, with a certificate for your compliance file.' },
    { stat: '0', unit: 'lost assets', title: 'Complete chain of custody', text: 'Serial-level tracking from delivery through redeployment to recycling.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Count it, consolidate it, close the loop',
    sub: 'This is a category where the first honest inventory usually pays for the whole engagement.',
    steps: [
      { k: 'Count', title: 'Find every device', text: 'A physical and network discovery across sites, with volumes and consumable spend pulled from twelve months of invoices.' },
      { k: 'Consolidate', title: 'Right-size the fleet', text: 'Devices matched to real usage patterns, redundant units removed and standards agreed for what gets bought next.' },
      { k: 'Manage', title: 'Run it as a service', text: 'Automatic consumable replenishment, proactive servicing and a single monthly bill against agreed unit rates.' },
      { k: 'Close', title: 'Recover and retire', text: 'Collection, secure erasure, resale or recycling — with certificates and any residual value returned to you.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'Complete device and print fleet inventory by site',
      'Baseline cost analysis with agreed unit rates',
      'Standard device catalogue for future purchasing',
      'Asset register with deployment and return history',
      'Data erasure and e-waste disposal certificates',
    ],
  },

  useCases: [
    { title: 'Print spend nobody has audited', text: 'Consolidating cartridge and service purchasing that has been running unexamined across a dozen locations.' },
    { title: 'Kitting out remote workers', text: 'Devices staged centrally and shipped to home addresses, then recovered cleanly when someone leaves.' },
    { title: 'Clearing a decade of old hardware', text: 'A storeroom of retired machines wiped, certified, recycled and — where there is value left — sold back into your budget.' },
  ],

  edge: {
    heading: 'What we bring to asset management',
    sub: 'A category most providers treat as an afterthought.',
    points: [
      { title: 'Unit economics you can audit', text: 'We show the cost per page and per seat with the maths behind it, so you can compare us to anyone at renewal.' },
      { title: 'Disposal is part of the deal', text: 'Certified erasure and recycling are included rather than an extra line. Data on a forgotten laptop is a breach waiting for a date.' },
      { title: 'Residual value goes back to you', text: 'Where retired hardware has resale value, that money returns to your budget. It is your asset, not our margin.' },
    ],
  },

  stack: ['HP', 'Canon', 'Ricoh', 'Epson', 'PaperCut', 'Dell', 'Lenovo', 'Apple'],

  faqs: [
    { q: 'How is cost per page calculated?', a: 'From twelve months of actual volume and consumable spend, split by mono and colour. You see the baseline and the proposed rate side by side before signing anything.' },
    { q: 'Do we have to replace our existing printers?', a: 'No. Most engagements start by taking over the fleet you already own and retiring only the devices the usage data shows are redundant.' },
    { q: 'What proof do we get that data was destroyed?', a: 'A per-serial erasure certificate to a recognised standard, plus the recycling documentation — the pack auditors and ISO assessors ask for.' },
    { q: 'Can you handle devices for people working from home?', a: 'Yes. We ship directly to home addresses, track the asset against the individual, and arrange courier collection when they leave or the device is refreshed.' },
  ],

  cta: {
    title: 'Ask us what your printing costs',
    text: 'Almost no one knows. A short audit produces the real figure per page, and usually a straightforward way to cut it.',
  },

  serviceArea: {
    text: 'Print fleets need someone who can attend the device. We supply, service and meter-read across Bengaluru — HSR Layout, Koramangala, Whitefield, Electronic City, Outer Ring Road — and manage multi-city fleets across India through scheduled visits.',
    note: 'On-site device service across Bengaluru; multi-city fleet management in India.',
  },

  seo: {
    title: 'Managed Print Services in Bengaluru | Karpexa',
    description:
      'Managed print services in Bengaluru — printer fleet supply, consumables, per-page billing, usage reporting and device lifecycle management for offices across India.',
    keywords: 'managed print services Bengaluru, printer rental Bangalore, photocopier AMC Bengaluru, print management India',
  },
};

export default function PrintDevice() {
  return <CapabilityLayout data={data} />;
}
