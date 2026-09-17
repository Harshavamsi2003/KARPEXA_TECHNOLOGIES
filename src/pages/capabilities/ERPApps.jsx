import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   ERP & BUSINESS APPLICATIONS
   Voice: process and integration. Order-to-cash, handoffs, master data.
   Vocabulary reserved here: process, workflow, master data, integration,
   reconciliation, adoption cliff.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'erp-applications',
  title: 'ERP & Business Applications',
  navTitle: 'ERP & Applications',
  short: 'ERP, CRM and workflow platforms selected, integrated and made to fit how you work.',
  label: 'Business systems & integration',
  tagline: 'Software should follow the process, not fight it.',
  image: '/images/capabilities/erp-apps.jpg',
  imageAlt: 'Operations team reviewing an integrated business process',

  intro: {
    eyebrow: 'The brief',
    heading: 'The gap between systems is where margin leaks',
    body:
      'An order arrives in one system, gets keyed into a second for production, and is invoiced from a third — with a spreadsheet quietly reconciling all three. Every handoff is a place where time is lost and a number goes wrong. We map the process end to end, choose or configure the platform that fits it, and connect the systems so data moves once. The measure of success is how much manual re-entry disappears.',
  },

  signals: [
    'The same order details are typed into more than one system by more than one person.',
    'Month-end close depends on a spreadsheet only one person knows how to run.',
    'You bought a capable platform and use perhaps a fifth of it.',
  ],

  offerings: [
    { name: 'Platform selection', desc: 'Structured evaluation against your actual process, with a scored comparison and a total cost view over five years — not a demo beauty contest.' },
    { name: 'ERP implementation', desc: 'Finance, inventory, procurement and manufacturing modules configured, with data migrated and reconciled before go-live.' },
    { name: 'CRM & sales operations', desc: 'Pipeline stages, quoting and after-sales service modelled the way your team sells rather than the way the template assumes.' },
    { name: 'Integration & middleware', desc: 'APIs and event flows connecting ERP, CRM, e-commerce, logistics and banking so data is entered once and travels.' },
    { name: 'Workflow automation', desc: 'Approvals, document routing and exception handling automated — the small daily frictions that quietly consume hours.' },
    { name: 'Custom modules & extensions', desc: 'Purpose-built where the standard product genuinely does not fit, kept deliberately thin so upgrades stay possible.' },
    { name: 'Master data management', desc: 'One customer record, one item master, clear ownership and validation rules that stop duplicates being created.' },
    { name: 'Application support & enhancement', desc: 'Ongoing care after go-live — user support, release testing, and a prioritised backlog of improvements.' },
  ],

  outcomes: [
    { stat: '0', unit: 're-keys', title: 'Data entered once', text: 'Integration removes the duplicate typing that causes most reconciliation errors.' },
    { stat: '40', unit: '% faster', title: 'Shorter cycle times', text: 'Approvals and handoffs that ran on email now run on rules and route themselves.' },
    { stat: '5', unit: 'days', title: 'A calmer close', text: 'Month-end shortened once reconciliation stops depending on manual assembly.' },
    { stat: '85', unit: '% active', title: 'Genuine adoption', text: 'Measured platform usage after ninety days, not a licence count.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Process first, product second, pilot always',
    sub: 'We refuse to configure a platform before the process is drawn on a wall. Automating a broken workflow only makes it faster to be wrong.',
    steps: [
      { k: 'Map', title: 'Draw the current state', text: 'Sessions with the people doing the work, capturing every handoff, workaround and spreadsheet in the chain.' },
      { k: 'Fit', title: 'Choose and configure', text: 'Requirements scored against candidate platforms, then configuration built against the agreed future-state process.' },
      { k: 'Pilot', title: 'Prove on one line', text: 'One department, one product line or one branch runs live first, so problems surface at small scale.' },
      { k: 'Roll out', title: 'Scale and hand over', text: 'Phased rollout with data migration, parallel running where the risk warrants it, and super-users trained to carry it forward.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'Current and future-state process maps',
      'Scored platform evaluation with total cost of ownership',
      'Integration architecture and interface specifications',
      'Migrated, reconciled and signed-off master data',
      'Super-user training pack and support handover',
    ],
  },

  useCases: [
    { title: 'Outgrowing accounting software', text: 'When inventory and production no longer fit in a bookkeeping package and the spreadsheets have taken over.' },
    { title: 'A stalled implementation', text: 'A rollout that went quiet halfway. We assess what is salvageable and restart with a scope people believe in.' },
    { title: 'Multi-entity consolidation', text: 'Several companies or branches on different systems, brought onto one chart of accounts and one reporting line.' },
  ],

  edge: {
    heading: 'Why our implementations land',
    sub: 'Most ERP failures are people failures wearing a technical costume.',
    points: [
      { title: 'We map before we license', text: 'The process workshop happens before any platform is bought. It is the cheapest possible stage to discover a bad fit.' },
      { title: 'Configuration over customisation', text: 'Every line of custom code is a future upgrade problem. We push hard toward standard functionality and justify each exception in writing.' },
      { title: 'Super-users, not dependency', text: 'We train your people to own the system. If you still need us for routine changes a year later, we did the job badly.' },
    ],
  },

  stack: ['SAP Business One', 'Microsoft Dynamics 365', 'Odoo', 'Zoho One', 'Salesforce', 'Tally', 'Power Platform', 'n8n'],

  faqs: [
    { q: 'How do we know which ERP is right?', a: 'By scoring platforms against your documented process, integration needs and five-year cost — including implementation, licences and the internal time nobody budgets for. We publish the scoring so the decision is yours, with reasoning attached.' },
    { q: 'Can you rescue an implementation that has stalled?', a: 'Frequently. We assess configuration quality, data integrity and where trust broke down, then propose either a reset of scope or a completion plan. Sometimes the honest advice is to stop.' },
    { q: 'Will our processes have to change?', a: 'Some will, and that is usually healthy. We distinguish between genuinely differentiating practices worth preserving and habits that exist because an old system demanded them.' },
    { q: 'What does a typical timeline look like?', a: 'A focused mid-size ERP rollout runs three to six months from process mapping to pilot go-live. Multi-entity or manufacturing-heavy scopes run longer, which we phase rather than compress.' },
  ],

  cta: {
    title: 'Show us where the re-keying happens',
    text: 'Point to the spreadsheet that sits between two systems. Removing it is almost always the highest-return piece of work available.',
  },

  serviceArea: {
    text: 'ERP programmes need people in the building during design and user acceptance. We work on site with Bengaluru clients — HSR Layout, Koramangala, Whitefield, Electronic City — and travel to plant and branch locations across India for rollout and training.',
    note: 'Design and UAT on site in Bengaluru; rollout travel across India.',
  },

  seo: {
    title: 'ERP Implementation & Support in Bengaluru | Karpexa',
    description:
      'ERP and business application services in Bengaluru — platform selection, implementation, integration, workflow automation and post go-live support for manufacturing and services firms across India.',
    keywords: 'ERP implementation Bengaluru, ERP consultant Bangalore, business application support India, ERP integration Bengaluru',
  },
};

export default function ERPApps() {
  return <CapabilityLayout data={data} />;
}
