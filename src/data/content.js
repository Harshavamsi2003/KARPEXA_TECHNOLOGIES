/* =====================================================================
   SITE CONTENT
   Capability copy lives in src/pages/capabilities/ (one file each) and is
   re-exported here so nav, home, footer and sitemap read one list.

   Editing rule: every string on the site appears exactly once. If you
   need similar wording in two places, write two different sentences —
   duplicated copy is what makes a site read as templated.
   ===================================================================== */

export { capabilities, getCapability } from '../pages/capabilities';

export const SITE_URL = 'https://www.karpexa.com';

export const brand = {
  name: 'Karpexa',
  full: 'Karpexa Technologies',
  legal: 'Karpexa Technologies Pvt. Ltd.',
  tagline: 'Engineering the systems your business runs on.',
  email: 'info@karpexa.com',
  phone: '+91 96067 51633',
  address: {
    line1: 'No. 1190/1, FD 191, 4th Floor',
    line2: 'HSR Layout, Sector 3, 22nd Cross Road',
    city: 'Bengaluru',
    region: 'Karnataka',
    postal: '560102',
    country: 'IN',
    countryName: 'India',
  },
  founded: '2025',
};

export const nav = [
  { label: 'What we do', to: '/capabilities', mega: 'capabilities' },
  { label: 'Who we serve', to: '/sectors', mega: 'sectors' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'About us', to: '/company' },
];

/* ---------------------------------------------------------------------
   HERO — three rotating statements. Desktop and mobile use different
   crops so the subject never sits under the copy.
   --------------------------------------------------------------------- */
export const heroSlides = [
  {
    img: '/home/desktop/dhome1.jpg',
    imgMobile: '/home/mobile/mhome1.jpg',
    kicker: 'Your data. Your infrastructure. Our responsibility.',
    lead: 'Enterprise IT,',
    em: 'engineered for the AI era.',
    sub: 'Servers, storage, networking and security — delivered as one system you can trust.',
  },
  {
    img: '/home/desktop/dhome2.jpg',
    imgMobile: '/home/mobile/mhome2.jpg',
    kicker: 'Engineered for scale',
    lead: 'Infrastructure built',
    em: 'to outgrow nothing.',
    sub: 'Enterprise servers and storage racked, wired and validated to a standard that scales with you, not against you.',
  },
  {
    img: '/home/desktop/dhome3.jpg',
    imgMobile: '/home/mobile/mhome3.jpg',
    kicker: 'Owned after go-live',
    lead: 'We stay long after',
    em: 'the handover.',
    sub: 'Documentation you own, engineers you can name, and a clear report every month.',
  },
];

/* ---------------------------------------------------------------------
   HOME — the operating model. Deliberately different language from the
   per-capability "approach" sections so nothing echoes.
   --------------------------------------------------------------------- */
export const operatingModel = {
  eyebrow: 'Operating model',
  heading: 'Four disciplines, one accountable team',
  sub: 'Most technology problems are really coordination problems. We remove the seams between design, delivery and support by keeping all three under one roof.',
  pillars: [
    {
      k: 'Constraint',
      title: 'Understand the constraint',
      text: 'Compliance regimes, uptime obligations, peak cycles, the budget that is actually available. We establish what limits you before proposing anything.',
    },
    {
      k: 'Design',
      title: 'Design to a number',
      text: 'Capacity, cost and recovery targets are agreed in writing before build starts, so the solution can be measured against something real.',
    },
    {
      k: 'Delivery',
      title: 'Deliver in slices',
      text: 'Work ships in stages that each stand on their own. You see value early, and no phase can quietly become a twelve-month programme.',
    },
    {
      k: 'Operations',
      title: 'Own the running',
      text: 'Monitoring, patching, reporting and improvement continue after handover, with named engineers who already know your estate.',
    },
  ],
};

export const about = {
  eyebrow: 'About Karpexa',
  title: 'Powering the next generation of AI-driven enterprises',
  // Short version shown on the home page.
  body:
    'Karpexa delivers enterprise-grade IT infrastructure that lets businesses innovate, scale and lead in the age of artificial intelligence — GPU AI servers, enterprise compute, storage, data centre infrastructure, end-user computing, cybersecurity, asset management and AMC, all under a single point of accountability.',
  quote: 'One partner. One complete IT infrastructure solution.',
  cta: 'Learn more about us',
  // Full version shown on the About (Company) page.
  fullBody: [
    'At Karpexa, we deliver enterprise-grade IT infrastructure solutions that enable businesses to innovate, scale and lead in the age of Artificial Intelligence. Our expertise spans GPU AI Servers, Enterprise Servers, Storage, Data Centre Infrastructure, End-User Computing, Cybersecurity, IT Asset Management and Annual Maintenance Services (AMC).',
    'From AI and high-performance computing to mission-critical enterprise workloads, we design, deploy, secure and manage complete IT ecosystems with a single point of accountability. Our team ensures your infrastructure is intelligent, secure, scalable and always ready for the future.',
    'Whether you are building an AI-ready data centre, modernising your IT environment or managing enterprise assets, Karpexa provides complete ownership of your IT infrastructure — delivering performance, reliability and long-term value through one trusted partner.',
  ],
  stats: [
    { v: 24, suffix: '×7', l: 'Monitoring and escalation coverage' },
    { v: 8, suffix: '', l: 'Infrastructure disciplines under one agreement' },
    { v: 23, suffix: '', l: 'Global OEM partnerships' },
    { v: 1, suffix: '', l: 'Point of accountability for the whole estate' },
  ],
};

/* ---------------------------------------------------------------------
   FIRST NINETY DAYS — what actually happens once you engage us.
   Kept concrete and forward-looking; no comparisons with anyone else.
   --------------------------------------------------------------------- */
/* ---------------------------------------------------------------------
   SECTORS
   --------------------------------------------------------------------- */
export const sectors = [
  {
    slug: 'gcc',
    name: 'Global Capability Centres',
    note: 'GCC build & scale',
    short: 'Standing up an India centre to a parent estate’s standards, on the date already announced.',
    text: 'Standing up an India centre means standardising to a parent estate while meeting local statutory reality. We handle the build-out — site, network, devices, identity and the staffing ramp — against the go-live date the board has already announced.',
    focus: ['Site and network build-out', 'Parent-estate standardisation', 'Volume onboarding', 'Follow-the-sun support'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    note: 'Regulated environments',
    short: 'Validated environments, patient data and clinical devices handled to regulation.',
    text: 'Clinical and manufacturing systems carry validation obligations that ordinary change management does not satisfy. We work inside qualified environments, keep an audit trail on every change, and treat patient data with the handling it legally requires.',
    focus: ['Validated system support', 'Patient data protection', 'Audit-ready change control', 'Clinical device networks'],
  },
  {
    slug: 'bfsi',
    name: 'Banking & Financial Services',
    note: 'BFSI / NBFC',
    short: 'Residency, privileged access and tested recovery built in from the first design.',
    text: 'Regulatory expectations here are explicit about data residency, access control and recovery testing. We build to those requirements first and design branch, contact-centre and core-adjacent systems around continuous availability.',
    focus: ['Data residency and localisation', 'Privileged access governance', 'Tested recovery objectives', 'Branch infrastructure'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Operations',
    note: 'Plant & shop floor',
    short: 'Plant networks segmented from corporate IT and maintained around production.',
    text: 'Plant networks cannot be patched on an IT calendar and cannot be flat either. We segment operational technology from corporate systems, monitor passively where agents are not an option, and schedule everything around production windows.',
    focus: ['OT / IT segmentation', 'Shop-floor connectivity', 'Ruggedised devices', 'Downtime-aware maintenance'],
  },
  {
    slug: 'automotive',
    name: 'Automotive & Mobility',
    note: 'OEM & supplier network',
    short: 'Dealer, supplier and plant systems connected to OEM security expectations.',
    text: 'Supplier portals, dealer systems and plant operations all have to talk to each other while meeting the OEM’s security expectations. We connect the tiers and keep the integrations from becoming the weakest link.',
    focus: ['Dealer network systems', 'Supplier integration', 'OEM security compliance', 'Multi-site standardisation'],
  },
  {
    slug: 'retail',
    name: 'Retail & E-commerce',
    note: 'Store, warehouse & online',
    short: 'Store, warehouse and online infrastructure that absorbs the seasonal peak.',
    text: 'Peak season is a hardware, bandwidth and support problem arriving simultaneously across every location. We design store and warehouse infrastructure that absorbs the spike, and staff the desk accordingly through the season.',
    focus: ['Store and POS infrastructure', 'Peak capacity planning', 'Warehouse mobility', 'Multi-site rollout'],
  },
  {
    slug: 'technology',
    name: 'Technology & ITeS',
    note: 'Scale-ready IT',
    short: 'Fast provisioning, sane security defaults and cloud costs that stay attributable.',
    text: 'Engineering-led organisations need internal IT that gets out of the way — fast provisioning, sensible security defaults, and cloud costs that stay attributable as headcount and environments multiply.',
    focus: ['Developer environments', 'Cloud cost governance', 'Rapid onboarding', 'Security without friction'],
  },
  {
    slug: 'media',
    name: 'Media & Entertainment',
    note: 'Creative workflows',
    short: 'Sustained-throughput storage and workstations built for editorial and post.',
    text: 'Editorial and post-production workloads move files that break ordinary networks and storage assumptions. We build for sustained throughput, protect masters properly, and keep colour-critical workstations serviced.',
    focus: ['High-throughput storage', 'Creative workstations', 'Media asset protection', 'Remote review workflows'],
  },
  {
    slug: 'startups',
    name: 'High-growth Startups',
    note: 'Zero to scale',
    short: 'Enterprise fundamentals at an early-stage budget, ready for the next diligence round.',
    text: 'Early-stage teams need enterprise-grade fundamentals without an enterprise-grade bill — and they need them to survive the diligence questions that arrive with the next funding round.',
    focus: ['Right-sized foundations', 'Diligence-ready controls', 'Fast headcount ramp', 'Cost discipline from day one'],
  },
];

/* ---------------------------------------------------------------------
   COMPANY PAGE
   --------------------------------------------------------------------- */
export const company = {
  heroTitle: 'About Karpexa Technologies',
  heroSub: 'Your Data. Your Infrastructure. Our Responsibility.',
  intro: 'Delivered, secured and supported by one accountable team — start to finish.',
  vision: {
    label: 'Vision',
    title: 'Technology that earns its place',
    text: 'To become the partner growing organisations call first — because the work is sound, the advice is honest, and nothing we build ever needs an interpreter.',
  },
  mission: {
    label: 'Mission',
    title: 'Engineering judgement, made available',
    text: 'To give mid-sized organisations the same standard of architecture, security and support that only the largest enterprises have historically been able to buy.',
  },
  motto: 'Do the work. Document it. Stand behind it.',
};

export const companyFacts = [
  { k: 'Founded', v: '2025' },
  { k: 'Head office', v: 'Bengaluru, India' },
  { k: 'Practice', v: 'End-to-end IT' },
  { k: 'Engagement', v: 'Partner, not vendor' },
];

/* ---------------------------------------------------------------------
   ABOUT PAGE — full statement, end-to-end approach and closing line.
   Deliberately its own object (not the shared `about` used by the Home
   page teaser) so the two can be edited independently.
   --------------------------------------------------------------------- */
export const companyIntro = {
  eyebrow: 'About Karpexa',
  heading: 'One partner, every layer of the estate',
  paragraphs: [
    'At Karpexa Technologies, we go beyond supplying IT products — we deliver complete technology infrastructure solutions from requirement to long-term support.',
    'From AI & GPU Computing, HPC, Enterprise Servers, Storage and Data Centre Solutions to Cybersecurity, Networking, Semiconductors, Laptops, Workstations and IT Accessories, we bring the right technology together under one roof.',
    'Our services extend beyond deployment with AMC, maintenance, technical support and lifecycle management, ensuring your IT infrastructure continues to perform reliably.',
  ],
  breadth: [
    'AI & GPU Computing', 'HPC', 'Enterprise Servers', 'Storage & Data Centre',
    'Cybersecurity', 'Networking', 'Semiconductors', 'Laptops & Workstations', 'IT Accessories',
  ],
  approachLabel: 'Our End-to-End Approach',
  approach: ['Consult', 'Design', 'Supply', 'Deploy', 'Integrate', 'Secure', 'Maintain', 'Support'],
  closingLead:
    'Whether you are building an AI lab, enterprise infrastructure, data centre, research environment or upgrading your organization\u2019s IT ecosystem, Karpexa Technologies is your single technology partner from start to finish.',
  closingStatement: [
    'We don\u2019t just sell technology.',
    'We build, protect and support the infrastructure that powers your future.',
  ],
};

export const journey = [
  {
    phase: 'Phase 01',
    year: 'The premise',
    title: 'A gap that kept repeating',
    text: 'The same conversation, over and over: capable companies stuck between managing IT on goodwill and hiring an integrator whose minimum engagement exceeded their entire annual budget.',
  },
  {
    phase: 'Phase 02',
    year: 'Now',
    title: 'Building alongside our first clients',
    text: 'A focused portfolio across infrastructure, cloud, security and managed operations. Small enough that every engagement gets senior attention, and documented obsessively as we go.',
  },
  {
    phase: 'Phase 03',
    year: 'Next',
    title: 'Depth ahead of breadth',
    text: 'Deepening certifications and turning what we have learned into repeatable playbooks, so the quality of an engagement never depends on which engineer answered the phone.',
  },
  {
    phase: 'Phase 04',
    year: 'The intent',
    title: 'The partner clients keep',
    text: 'The ambition is not scale for its own sake. It is a client list that renews without being chased and refers without being asked.',
  },
];

export const values = [
  { title: 'Judgement', text: 'We are paid for the recommendation, not the invoice. That includes the recommendation to spend less, or to do nothing yet.' },
  { title: 'Candour', text: 'Bad news travels fast and early. A problem raised in week one is a schedule adjustment; the same problem in month four is a crisis.' },
  { title: 'Craft', text: 'Labelled cables, named variables, written runbooks. The parts nobody sees are exactly where quality is decided.' },
  { title: 'Continuity', text: 'We optimise for the second year of a relationship, not the first invoice. That single bias explains most of how we operate.' },
];

export const commitments = [
  { title: 'To our clients', text: 'Honest scoping, itemised pricing, and the willingness to tell you when something you have asked for is not worth buying.' },
  { title: 'To our engineers', text: 'Funded certification, protected learning time, and work that stretches people without quietly burning them out.' },
  { title: 'To the environment', text: 'Right-sized hardware, energy-aware architecture, certified e-waste channels and residual value returned to the client.' },
];

/* ---------------------------------------------------------------------
   CUSTOMERS SHOWCASE — dedicated section on Home (replaces the old
   "What you keep" ownership band). The 17 logos previously duplicated
   inside the partner marquee's "Our Customers" row now live only here.
   --------------------------------------------------------------------- */
export const customersShowcase = {
  eyebrow: 'Our customers',
  heading: 'Names that don\u2019t take chances on technology',
  sub: 'From global semiconductor and technology leaders to India\u2019s defence, aerospace and research institutions — organisations that vet their technology partners as carefully as their technology.',
  logos: [
    { name: 'Aegis', logo: '/customers/aegis.png' },
    { name: 'Aon', logo: '/customers/aon.png' },
    { name: 'C-DOT', logo: '/customers/c-dot.png' },
    { name: 'Fortrea', logo: '/customers/fortrea.png' },
    { name: 'HAL', logo: '/customers/hal.png' },
    { name: 'Infineon', logo: '/customers/infineon.png' },
    { name: 'ISRO ISTRAC', logo: '/customers/isro-istrac.png' },
    { name: 'Jana Bank', logo: '/customers/jana-bank.png' },
    { name: 'LG Soft India', logo: '/customers/lg-soft.png' },
    { name: 'Marvell', logo: '/customers/marvell.png' },
    { name: 'Qualcomm', logo: '/customers/qualcomm.png' },
    { name: 'Radisys', logo: '/customers/radisys.png' },
    { name: 'Rambus', logo: '/customers/rambus.png' },
    { name: 'Tech Mahindra', logo: '/customers/tech-mahindra.png' },
    { name: 'Toyota', logo: '/customers/toyota.png' },
    { name: 'Toyota Boshoku', logo: '/customers/toyota-boshoku.png' },
    { name: 'TVS Motor', logo: '/customers/tvs-motor.png' },
  ],
};

/* How we operate — a signature band unique to the About page. */
export const principles = [
  { n: '01', title: 'One team, end to end', text: 'The engineer who designs your estate is the engineer who deploys it and the engineer you reach when something needs attention. No relay, no lost context.' },
  { n: '02', title: 'Written before built', text: 'Capacity, cost and recovery targets are agreed on paper before a single rack is specified — so success is measured against something real, not a feeling.' },
  { n: '03', title: 'Documented as we go', text: 'Registers, diagrams and runbooks are produced while the work happens, not reconstructed afterwards. You could replace us with a stranger and lose no knowledge.' },
  { n: '04', title: 'Answerable for the whole', text: 'When a problem crosses vendor boundaries, it is still ours. A single point of accountability means nothing falls into the gap between suppliers.' },
];

/* Plain-language proof points, unique to the About page. */
export const proof = [
  { v: '100%', l: 'of engagements led by senior engineers' },
  { v: '24×7', l: 'monitoring and escalation coverage' },
  { v: '23', l: 'global OEM partnerships' },
  { v: '1', l: 'point of accountability, always' },
];

/* ---------------------------------------------------------------------
   OUR WORK — dedicated page (/our-work) proving depth in GPU/AI server
   infrastructure and large-scale government / academic storage work.
   Organisation names describe the domain and nature of infrastructure
   supported; engagement specifics stay under NDA (see `note` below).
   --------------------------------------------------------------------- */
export const ourWork = {
  eyebrow: 'Our Work',
  title: 'Our Expertise & Industry Experience',
  tagline:
    'GPU/AI servers, HPC platforms and high-capacity storage — engineered for organisations where downtime and data loss are not options.',
  aside:
    'The scope below reflects the domains we operate in. Specific engagement details are shared under NDA, on request.',

  focus: {
    tag: 'Focus area',
    title: 'Advanced GPU & AI Server Solutions',
    body:
      'We specialise in GPU-accelerated AI servers, high-performance computing (HPC), and enterprise infrastructure, supporting demanding AI, deep-learning, simulation, and research workloads.',
    pillars: [
      'GPU-Accelerated Servers',
      'High-Performance Computing',
      'Deep Learning & Simulation',
      'Enterprise AI Infrastructure',
    ],
  },

  tech: {
    tag: 'Domain / 01',
    accent: 'azure',
    title: 'Proven Experience with Global Technology Leaders',
    intro:
      'We have experience supporting AI/GPU server infrastructure, R&D, laboratory, and research requirements for leading technology organisations, including:',
    rows: [
      { code: 'ENG / 01', name: 'AMD', text: 'AI/GPU computing and high-performance infrastructure requirements.' },
      { code: 'ENG / 02', name: 'Broadcom', text: 'Advanced computing, laboratory, and R&D infrastructure.' },
      { code: 'ENG / 03', name: 'Research & Development Labs', text: 'High-performance GPU servers and compute platforms for demanding workloads.' },
    ],
  },

  gov: {
    tag: 'Domain / 02',
    accent: 'violet',
    title: 'Large-Scale Storage & Government Infrastructure',
    intro:
      'We also provide high-capacity enterprise storage, servers, and data-centre infrastructure for leading Government, Defence, Aerospace, and Academic organisations, including:',
    rows: [
      { code: 'GOV / 01', name: 'DRDO', full: 'Defence Research & Development Organisation', text: 'Defence Research & Development infrastructure.' },
      { code: 'GOV / 02', name: 'HAL', full: 'Hindustan Aeronautics Limited', text: 'Aerospace and engineering infrastructure.' },
      { code: 'GOV / 03', name: 'IISc', full: 'Indian Institute of Science', text: 'Research and high-performance computing.' },
      { code: 'GOV / 04', name: 'IITs', full: 'Indian Institutes of Technology', text: 'Advanced research, AI/ML, HPC, and storage infrastructure.' },
    ],
  },

  process: [
    { k: '01', title: 'Assess', text: 'Understand the workload profile, growth curve and compliance constraints before proposing a single component.' },
    { k: '02', title: 'Design', text: 'Architect GPU, compute, storage and data-centre infrastructure sized for the workload, not a catalogue.' },
    { k: '03', title: 'Deliver & support', text: 'Install, validate and stand behind the estate with the same engineers who designed it.' },
  ],

  pullquote:
    'Our strength lies in delivering end-to-end infrastructure solutions — from GPU/AI servers and HPC platforms to high-capacity storage — tailored for mission-critical enterprise, R&D, Government, Defence, and academic environments.',

  note:
    'Names above describe the domain and nature of infrastructure work undertaken. Engagement-specific details are available under NDA — ask us directly.',
};

/* Compact teaser shown on the Home page, just below the About band. */
export const ourWorkTeaser = {
  eyebrow: 'Our Work',
  heading: 'Built for the workloads that can\u2019t fail',
  sub: 'From GPU clusters to government-grade storage — see the domains and organisations we build for.',
  cards: [
    { k: '01', title: 'GPU & AI Infrastructure', text: 'High-performance GPU servers and compute platforms for AI, deep learning and simulation.' },
    { k: '02', title: 'Government & Defence Scale', text: 'High-capacity storage and data-centre infrastructure for defence, aerospace and research bodies.' },
    { k: '03', title: 'Global Technology Leaders', text: 'Trusted for R&D and laboratory infrastructure by demanding technology organisations.' },
  ],
  cta: 'See our works',
};

/* Written exactly as each brand writes its own name. Swap in licensed
   logo files later without changing the layout. */
export const partnersIntro = {
  eyebrow: 'Partner ecosystem',
  heading: 'Powered by global OEM leaders. Driven by Karpexa excellence.',
  sub: 'Delivering enterprise-class servers, AI infrastructure, storage, cybersecurity, networking and end-user computing solutions through trusted partnerships with the world\u2019s leading technology brands.',
};

/* Real OEM logos live in /public/partners as trimmed PNGs. */
const P = (file) => `/partners/${file}.png`;
/* Customer/client logos live in /public/customers as trimmed PNGs —
   drop your customers/ folder into public/ with these exact filenames. */
const C = (file) => `/customers/${file}.png`;
export const partnerGroups = [
  {
    label: 'Servers & AI Infrastructure',
    items: [
      { name: 'Supermicro', logo: P('supermicro') },
      { name: 'Dell Technologies', logo: P('dell-technologies') },
      { name: 'Hewlett Packard Enterprise', logo: P('hewlett-packard-enterprise') },
      { name: 'Lenovo', logo: P('lenovo') },
      { name: 'Inspur', logo: P('inspur') },
      { name: 'Cisco', logo: P('cisco') },
      { name: 'Huawei', logo: P('huawei') },
    ],
  },
  {
    label: 'Firewall & Endpoint Security',
    items: [
      { name: 'Palo Alto Networks', logo: P('palo-alto-networks') },
      { name: 'Fortinet', logo: P('fortinet') },
      { name: 'Check Point', logo: P('check-point') },
      { name: 'Sophos', logo: P('sophos') },
      { name: 'CrowdStrike', logo: P('crowdstrike') },
      { name: 'SentinelOne', logo: P('sentinelone') },
      { name: 'Microsoft', logo: P('microsoft') },
    ],
  },
  {
    label: 'Backup & Disaster Recovery',
    items: [
      { name: 'Veeam Software', logo: P('veeam-software') },
      { name: 'Commvault', logo: P('commvault') },
      { name: 'Veritas Technologies', logo: P('veritas-technologies') },
      { name: 'Rubrik', logo: P('rubrik') },
    ],
  },
  {
    label: 'Storage Media',
    items: [
      { name: 'Seagate Technology', logo: P('seagate-technology') },
      { name: 'Western Digital', logo: P('western-digital') },
      { name: 'Samsung Electronics', logo: P('samsung-electronics') },
      { name: 'Micron Technology', logo: P('micron-technology') },
      { name: 'Toshiba', logo: P('toshiba') },
    ],
  },
];

export const footerLinks = {
  Capabilities: [
    { label: 'IT Infrastructure', to: '/capabilities#it-infrastructure' },
    { label: 'Cloud', to: '/capabilities#cloud' },
    { label: 'Managed IT', to: '/capabilities#managed-it' },
    { label: 'Cyber Security', to: '/capabilities#security' },
    { label: 'Data & Analytics', to: '/capabilities#data-analytics' },
    { label: 'View all', to: '/capabilities' },
  ],
  About: [
    { label: 'About Karpexa', to: '/company' },
    { label: 'Sectors we serve', to: '/sectors' },
    { label: 'Contact', to: '/contact' },
  ],
};
