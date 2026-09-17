import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   MAINTENANCE & AMC
   Voice: uptime and logistics. Spares, response clocks, coverage maps.
   Vocabulary reserved here: spares, standby unit, response clock,
   preventive visit, coverage, downtime cost.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'maintenance-amc',
  title: 'Maintenance & AMC',
  navTitle: 'Maintenance & AMC',
  short: 'Annual maintenance contracts with real response clocks, spares depth and preventive visits.',
  label: 'Uptime & spares',
  tagline: 'The unglamorous work that keeps the lights on.',
  image: '/images/capabilities/maintenance-amc.jpg',
  imageAlt: 'Field engineer servicing hardware on site',

  intro: {
    eyebrow: 'The brief',
    heading: 'An AMC is only worth what it costs you when it fails',
    body:
      'Maintenance contracts get bought on price and judged on the worst day of the year. What decides that day is unglamorous: whether a spare part is on a shelf within reach, whether an engineer is genuinely rostered for your city, and whether anyone visited before the failure. We build cover around your downtime cost — critical assets get standby units and tight response clocks, everything else gets sensible economics.',
  },

  signals: [
    'A failed machine waits days for a part that has to be ordered.',
    'Warranty status is checked after something breaks, not before.',
    'Support is called only in emergencies — there is no preventive rhythm.',
  ],

  offerings: [
    { name: 'Comprehensive AMC', desc: 'Labour and parts covered under one annual fee, so a bad month never turns into an unplanned capital request.' },
    { name: 'Labour-only contracts', desc: 'Engineering cover where you hold your own spares inventory or maintain direct vendor parts arrangements.' },
    { name: 'On-site resident engineers', desc: 'A dedicated technician stationed at your facility, full-time or on a fixed weekly schedule.' },
    { name: 'Preventive maintenance visits', desc: 'Scheduled health checks — thermal, firmware, battery, filter and diagnostic — catching failures while they are still cheap.' },
    { name: 'Spares & standby pool', desc: 'Critical parts and swap units held against your specific configurations, not a generic regional catalogue.' },
    { name: 'Multi-site coverage', desc: 'One contract spanning branches, plants and warehouses, with response times set per location rather than averaged.' },
    { name: 'Warranty & lifecycle tracking', desc: 'A live register of expiry dates and end-of-support milestones, reviewed with you before they arrive.' },
    { name: 'Data centre facility care', desc: 'UPS, PDU, cooling and battery servicing on schedule, with load testing and capacity readings recorded.' },
  ],

  outcomes: [
    { stat: '4', unit: 'hr', title: 'On-site response', text: 'Committed arrival window for critical assets in covered cities, measured and reported.' },
    { stat: '99.5', unit: '%', title: 'Availability target', text: 'Uptime commitment on contracted equipment, tracked against actual incident logs.' },
    { stat: '60', unit: '% fewer', title: 'Fault reduction', text: 'Typical drop in unplanned failures once a preventive schedule has run a full year.' },
    { stat: '1', unit: 'fixed cost', title: 'Budget certainty', text: 'A known annual figure instead of unpredictable repair invoices arriving at the worst moment.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Rate the asset, then set the cover',
    sub: 'Not everything deserves a four-hour response. We price cover against what an hour of downtime actually costs you.',
    steps: [
      { k: 'Audit', title: 'Count and classify', text: 'A physical inventory with serials, ages, warranty positions and a criticality rating agreed with the people who use each asset.' },
      { k: 'Tier', title: 'Match cover to consequence', text: 'Critical assets get standby units and the tightest clocks; low-impact equipment gets best-effort cover at a sensible price.' },
      { k: 'Stock', title: 'Position the spares', text: 'Parts held for your exact models, positioned close enough to the site to make the promised response time achievable.' },
      { k: 'Prevent', title: 'Visit on a calendar', text: 'A published schedule of preventive visits with findings logged, so degradation is caught before it becomes an outage.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'Asset register with criticality tiers and warranty dates',
      'Coverage schedule stating response times per site',
      'Spares holding list matched to your configurations',
      'Preventive maintenance calendar with visit reports',
      'Quarterly reliability report and refresh recommendations',
    ],
  },

  useCases: [
    { title: 'Equipment past warranty', text: 'Kit that still does its job but no longer has vendor cover, kept serviceable at a fraction of replacement cost.' },
    { title: 'A plant that cannot stop', text: 'Manufacturing and warehouse environments where an hour of downtime carries a number everyone in the room knows.' },
    { title: 'Branches nobody visits', text: 'Remote sites that only get attention when something breaks, brought onto a scheduled preventive rhythm.' },
  ],

  edge: {
    heading: 'How we write maintenance contracts',
    sub: 'Three commitments that separate a real AMC from a piece of paper.',
    points: [
      { title: 'We publish our misses', text: 'Response performance is reported monthly including the times we were late. A contract measured only when convenient is not a commitment.' },
      { title: 'Spares matched to your kit', text: 'We stock against your actual model list. A generic regional inventory is how a four-hour promise turns into a four-day wait.' },
      { title: 'Honest end-of-life advice', text: 'When a machine is costing more to maintain than to replace, we say so — even though the renewal is our revenue.' },
    ],
  },

  stack: ['Dell', 'HP', 'Lenovo', 'Cisco', 'APC', 'Eaton', 'Seagate', 'Zebra'],

  faqs: [
    { q: 'Can you maintain equipment you did not supply?', a: 'Yes. We cover mixed-vendor estates, and much of our AMC work is on hardware bought years ago from someone else. We audit condition first and price on what we find.' },
    { q: 'What is not covered?', a: 'Consumables, physical or liquid damage, and anything the manufacturer has declared end-of-support with no parts channel. We list exclusions plainly in the contract rather than in a footnote.' },
    { q: 'How is the annual price set?', a: 'By asset count, age, criticality tier and site locations. You see the per-asset build-up, so trimming cover on low-impact equipment is a decision you can make with numbers.' },
    { q: 'Do preventive visits interrupt operations?', a: 'They are scheduled with you, usually outside production hours or during planned windows, and each visit ends with a written condition report.' },
  ],

  cta: {
    title: 'Tell us what you cannot afford to lose',
    text: 'Name the equipment that stops the business when it fails. We will build the response times and spares holding around exactly that.',
  },

  serviceArea: {
    text: 'Response time is the entire product, so coverage is geographic. We hold committed on-site response across Bengaluru — HSR Layout, Koramangala, Whitefield, Electronic City, Outer Ring Road, Peenya — with spares held locally. Multi-site AMC across India is delivered through scheduled resident and visiting engineers.',
    note: 'Local spares holding and committed response times across Bengaluru.',
  },

  seo: {
    title: 'IT AMC Services in Bengaluru | Hardware Maintenance',
    description:
      'Annual maintenance contracts for IT hardware in Bengaluru and across India — comprehensive and labour-only AMC, resident engineers, preventive visits, spares pooling and committed response times.',
    keywords: 'IT AMC services Bengaluru, annual maintenance contract Bangalore, computer AMC Bengaluru, server AMC Bangalore',
  },
};

export default function MaintenanceAMC() {
  return <CapabilityLayout data={data} />;
}
