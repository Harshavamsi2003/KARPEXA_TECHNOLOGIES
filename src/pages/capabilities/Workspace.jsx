import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   DIGITAL WORKSPACE
   Voice: people and daily experience. Joining, collaborating, leaving.
   Vocabulary reserved here: onboarding, enrolment, licence, day one,
   hybrid, employee experience.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'digital-workspace',
  title: 'Digital Workspace',
  navTitle: 'Digital Workspace',
  short: 'Google Workspace, Microsoft 365 and device management joined into one experience.',
  label: 'Collaboration & endpoints',
  tagline: 'Day one should take ten minutes, not ten emails.',
  image: '/images/capabilities/workspace.jpg',
  imageAlt: 'Distributed team collaborating across devices and locations',

  intro: {
    eyebrow: 'The brief',
    heading: 'The workspace is the product your employees use most',
    body:
      'Every person you hire spends their entire working life inside mail, chat, documents and whatever device you handed them. When that stack is stitched together from three consoles and a checklist in someone’s notes, the cost shows up as slow onboarding, orphaned accounts and licences billed for people who left a year ago. We join identity, collaboration and device management into one enrolment path — so joining, moving and leaving are three buttons rather than three days.',
  },

  signals: [
    'A new joiner waits days for access, and nobody owns the checklist.',
    'You are paying for licences belonging to people who have already left.',
    'Personal drives and shared drives hold the same files at different versions.',
  ],

  offerings: [
    { name: 'Google Workspace', desc: 'Deployment, domain and organisational-unit design, sharing policy and admin hardening as a licensed partner.' },
    { name: 'Microsoft 365', desc: 'Tenant configuration, Teams and SharePoint structure, and licence-tier mapping to how each role actually works.' },
    { name: 'Migration between platforms', desc: 'Mail, drive, calendar and permissions moved with history intact and a co-existence window so nothing is stranded.' },
    { name: 'Identity & directory', desc: 'A single directory behind every application, with single sign-on and automated joiner-mover-leaver provisioning.' },
    { name: 'Unified endpoint management', desc: 'Windows, macOS, iOS and Android under one enrolment — policy, compliance and remote wipe from one console.' },
    { name: 'Zero-touch onboarding', desc: 'Device ships direct to the employee, enrols itself on first boot and arrives configured with their apps and access.' },
    { name: 'Collaboration architecture', desc: 'A shared-drive and channel structure with retention rules, designed before the sprawl rather than after it.' },
    { name: 'Licence optimisation', desc: 'Quarterly review of assignment and tier against real usage, reclaiming what is dormant and downgrading what is over-specified.' },
  ],

  outcomes: [
    { stat: '10', unit: 'min', title: 'Provisioning time', text: 'From HR record created to a fully licensed, enrolled and access-ready employee.' },
    { stat: '100', unit: '% enrolled', title: 'Every device known', text: 'No unmanaged laptop holding company data outside your visibility.' },
    { stat: '18', unit: '% saved', title: 'Licence waste removed', text: 'Typical first-year reduction from reclaiming dormant seats and right-tiering the rest.' },
    { stat: '1', unit: 'sign-in', title: 'One identity everywhere', text: 'Single sign-on across the applications your teams open every day.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Design the lifecycle, then automate it',
    sub: 'We map how a person joins, changes role and leaves, and make each of those a defined, automated path.',
    steps: [
      { k: 'Map', title: 'Chart the employee journey', text: 'Roles, access needs, device profiles and the exit path — written down as a matrix rather than tribal knowledge.' },
      { k: 'Unify', title: 'One directory to rule them', text: 'Identity consolidated, single sign-on connected, and enrolment policies built per device platform.' },
      { k: 'Automate', title: 'Wire it to HR', text: 'Provisioning triggered by the HR system, so access appears and disappears without a ticket being raised.' },
      { k: 'Enable', title: 'Bring people with you', text: 'Role-specific training, floor-walking during cutover and a champions group to carry adoption afterwards.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'Role-to-access matrix and licence tier map',
      'Documented joiner, mover and leaver runbooks',
      'Device enrolment and compliance policy set',
      'Shared drive, channel and retention structure',
      'Adoption toolkit with role-based quick guides',
    ],
  },

  useCases: [
    { title: 'Hiring in fast bursts', text: 'Twenty joiners in a month handled without twenty manual setups or a single missed access request.' },
    { title: 'Consolidating two platforms', text: 'Post-acquisition mail and file estates merged into one tenancy without losing history or calendars.' },
    { title: 'Going hybrid properly', text: 'Devices and access that work identically from an office desk, a home study or a client site.' },
  ],

  edge: {
    heading: 'How we approach workspace work',
    sub: 'The technical migration is the easy half.',
    points: [
      { title: 'We plan the leaver first', text: 'Offboarding is where data walks out and licences pile up, and it is the step everyone designs last. We start there.' },
      { title: 'Structure before sprawl', text: 'Drive and channel architecture agreed upfront. Retrofitting order onto three years of accumulated folders is far more expensive.' },
      { title: 'Adoption is scoped and staffed', text: 'Training, comms and floor support are line items in the plan, because a migration nobody was prepared for reads as a failure however clean the cutover was.' },
    ],
  },

  stack: ['Google Workspace', 'Microsoft 365', 'Entra ID', 'Intune', 'Jamf', 'JumpCloud', 'Okta', 'Slack'],

  faqs: [
    { q: 'Google Workspace or Microsoft 365?', a: 'Google tends to suit collaboration-heavy and cloud-native teams; Microsoft suits organisations with deep Office file dependencies, Windows estates or specific compliance tooling. We assess against how your teams work rather than defaulting.' },
    { q: 'Will we lose mail history when migrating?', a: 'No. Mail, calendar, contacts and drive content move with folder structure and permissions preserved, and we run a co-existence period so both platforms work during the transition.' },
    { q: 'Can staff use their own devices?', a: 'Yes, through a managed profile that separates work data from personal. Company data can be wiped independently without touching anything of theirs.' },
    { q: 'How long does a migration take?', a: 'For under two hundred users, typically three to five weeks including preparation and a co-existence window. Complex shared-mailbox and permission estates extend that.' },
  ],

  cta: {
    title: 'Describe a new starter’s first day',
    text: 'How long until they have a laptop, an account and everything they need to work? That answer usually tells us where to begin.',
  },

  serviceArea: {
    text: 'Device work needs hands. We handle imaging, deployment, onboarding and refresh cycles on site across Bengaluru — HSR Layout, Koramangala, Whitefield, Electronic City, Outer Ring Road — and coordinate courier-based device logistics for distributed teams elsewhere in India.',
    note: 'On-site device handling in Bengaluru; logistics-based support nationwide.',
  },

  seo: {
    title: 'Digital Workspace & Endpoint Management | Bengaluru',
    description:
      'Managed digital workspace services in Bengaluru — laptop and device lifecycle, Google Workspace and Microsoft 365, endpoint management, onboarding and offboarding for distributed Indian teams.',
    keywords: 'endpoint management Bengaluru, Microsoft 365 support Bangalore, device management services India, laptop AMC Bengaluru',
  },
};

export default function Workspace() {
  return <CapabilityLayout data={data} />;
}
