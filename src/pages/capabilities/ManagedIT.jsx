import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   MANAGED IT SERVICES
   Voice: operations. Shifts, queues, escalation, SLA maths.
   Vocabulary reserved here: queue, first-contact, escalation ladder,
   shift handover, mean time to restore, service desk.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'managed-it',
  title: 'Managed IT Services',
  navTitle: 'Managed IT',
  short: 'A service desk, monitoring and an on-call rota that carry your IT operations.',
  label: 'Service desk & operations',
  tagline: 'Someone is awake, watching, and accountable.',
  image: '/images/capabilities/managed-it.jpg',
  imageAlt: 'Operations centre dashboards showing live service health',

  intro: {
    eyebrow: 'The brief',
    heading: 'Running IT is a rota problem before it is a technology problem',
    body:
      'Small internal teams do not fail because they lack skill. They fail because two people cannot cover a twenty-four hour clock, take leave, and still find time for the projects they were hired for. We take the running of it — the queue, the monitoring, the patch calendar, the 3am page — and give it structure: named owners, published response times, and a monthly report that shows what actually happened rather than what was promised.',
  },

  signals: [
    'The same three people are the escalation path, and one of them is on holiday.',
    'Problems are found by users complaining rather than by an alert firing.',
    'Nobody can say how many tickets were raised last month, or what caused them.',
  ],

  offerings: [
    { name: 'Service desk', desc: 'A staffed first line across phone, email, chat and portal, with published response targets and a real escalation ladder behind it.' },
    { name: '24×7 monitoring & alerting', desc: 'Thresholds tuned to your environment so alerts mean something — noise gets suppressed, genuine degradation gets a human.' },
    { name: 'Server & data centre operations', desc: 'Patching windows, capacity watch, backup verification and change control on your core systems.' },
    { name: 'Network operations', desc: 'Link health, failover testing, configuration backups and firmware currency across switching, firewalls and SD-WAN.' },
    { name: 'Application operations', desc: 'Day-to-day care of business applications — job monitoring, integration checks, release support and vendor liaison.' },
    { name: 'Remote & on-site engineering', desc: 'Remote hands for the routine, and a scheduled or resident engineer where physical presence is genuinely needed.' },
    { name: 'Change & problem management', desc: 'Structured change approval and root-cause work, so the same incident stops recurring on a monthly cycle.' },
    { name: 'Service reporting & reviews', desc: 'Monthly performance pack and a quarterly review that sets the improvement backlog for the next quarter.' },
  ],

  outcomes: [
    { stat: '24', unit: '×7', title: 'Cover that never sleeps', text: 'Shift-based coverage with documented handover between every shift.' },
    { stat: '15', unit: 'min', title: 'Response on P1', text: 'Critical incidents acknowledged by a named engineer within the committed window.' },
    { stat: '70', unit: '%+', title: 'Closed at first contact', text: 'Most tickets resolved without ever reaching a second queue.' },
    { stat: '12', unit: 'reports/yr', title: 'Visibility, monthly', text: 'Volume, causes, trends and the improvement actions taken — in writing, every month.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Transition, stabilise, improve',
    sub: 'The first ninety days of a managed service decide the next three years. We treat onboarding as a project with its own plan.',
    steps: [
      { k: 'Transition', title: 'Take on knowledge', text: 'Shadow your team, document what only lives in people’s heads, and agree the service catalogue and response targets in writing.' },
      { k: 'Instrument', title: 'See everything', text: 'Monitoring agents, log collection, alert thresholds and the ticketing workflow configured to your actual estate.' },
      { k: 'Stabilise', title: 'Clear the backlog', text: 'The first quarter is spent killing recurring incidents and closing the gaps the audit exposed.' },
      { k: 'Improve', title: 'Reduce the ticket count', text: 'We are measured on driving volume down — through automation, better builds and root-cause fixes, not on billing more hours.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'Signed service catalogue with response and restore targets',
      'Escalation matrix naming people, not job titles',
      'Monitoring coverage map and alert threshold register',
      'Monthly service report and quarterly improvement plan',
      'Living knowledge base you can read at any time',
    ],
  },

  useCases: [
    { title: 'A two-person IT team at its limit', text: 'We take the queue and the night shift; your team keeps the projects that need company context.' },
    { title: 'Growth past the point of informality', text: 'When headcount crosses a hundred, goodwill stops scaling and process has to take over.' },
    { title: 'Covering a departure', text: 'When the person who knew everything resigns, we absorb the role and document it properly this time.' },
  ],

  edge: {
    heading: 'Where managed services usually go wrong',
    sub: 'And the specific things we do differently.',
    points: [
      { title: 'We are paid to need less of you', text: 'Our commercial model rewards a falling ticket count. A provider billing per incident has no reason to fix the cause.' },
      { title: 'Named engineers, not a pool', text: 'You get a small assigned team who learn your quirks — not a rotating queue where every call starts from zero.' },
      { title: 'Your tooling stays yours', text: 'We work in your tenancy and your ticketing system where possible, so leaving us never means losing your history.' },
    ],
  },

  stack: ['Microsoft 365', 'Google Workspace', 'Zabbix', 'Grafana', 'Freshservice', 'Jira Service Management', 'Intune', 'Veeam'],

  faqs: [
    { q: 'Does this replace our internal IT team?', a: 'Rarely, and we do not pitch it that way. The usual shape is that we take the repetitive and out-of-hours load while your internal people move on to work that needs business context.' },
    { q: 'What does an SLA actually commit you to?', a: 'Acknowledgement and restoration targets by severity, with monthly reporting against them and agreed service credits if we miss. The targets are set with you during transition, not handed down.' },
    { q: 'How long does onboarding take?', a: 'Four to eight weeks for a typical mid-size estate. Longer if documentation is thin, because we would rather spend that time discovering than assuming.' },
    { q: 'Can we start with a subset?', a: 'Yes. Many clients start with out-of-hours cover or monitoring only, then extend once the working relationship is proven.' },
  ],

  cta: {
    title: 'Tell us what breaks most often',
    text: 'Describe the tickets your team is tired of and the hours nobody wants to cover. We will propose a desk model that takes both off their plate.',
  },

  serviceArea: {
    text: 'The service desk runs remotely, but someone has to be able to walk to the rack. We hold on-site response capability across Bengaluru — HSR Layout, Koramangala, Whitefield, Electronic City, Outer Ring Road — with committed arrival times written into the contract. Remote operations cover client sites elsewhere in India.',
    note: 'On-site response across Bengaluru; remote operations nationwide.',
  },

  seo: {
    title: 'Managed IT Services in Bengaluru | 24×7 Service Desk',
    description:
      'Outsourced IT operations for Bengaluru and pan-India businesses — staffed service desk, 24×7 monitoring, server and network operations, change management and monthly service reporting.',
    keywords: 'managed IT services Bengaluru, IT support company Bangalore, outsourced IT Bengaluru, 24x7 service desk India',
  },
};

export default function ManagedIT() {
  return <CapabilityLayout data={data} />;
}
