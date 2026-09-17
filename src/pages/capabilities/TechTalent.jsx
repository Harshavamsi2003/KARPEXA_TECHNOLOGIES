import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   TECH TALENT
   Voice: hiring and capacity. Shortlists, notice periods, retention.
   Vocabulary reserved here: shortlist, bench, ramp, attrition, backfill,
   deployment.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'tech-talent',
  title: 'Tech Talent',
  navTitle: 'Tech Talent',
  short: 'Vetted engineers on contract, contract-to-hire or managed pods — deployed in weeks.',
  label: 'Engineers & capacity',
  tagline: 'Capacity when the roadmap will not wait for a hiring cycle.',
  image: '/images/capabilities/tech-talent.jpg',
  imageAlt: 'Engineers collaborating on a technical delivery',

  intro: {
    eyebrow: 'The brief',
    heading: 'The cost of a vacancy is rarely on the hiring spreadsheet',
    body:
      'A funded project waiting ninety days for a cloud engineer costs far more than the salary being saved. But hiring permanently for a nine-month workload is its own mistake — and one you have to unwind later. We supply engineers who are already vetted and already working in the technologies you need, on the commercial shape that fits the work: a single specialist, a contract-to-hire trial, or a managed pod with delivery accountability sitting on our side.',
  },

  signals: [
    'A project has budget and approval but no one to build it.',
    'Roles have been open for months and the shortlists never quite land.',
    'You need a skill for two quarters and cannot justify a permanent seat.',
  ],

  offerings: [
    { name: 'Contract engineering', desc: 'Individual specialists embedded in your team on a defined term, reporting into your delivery structure.' },
    { name: 'Contract to hire', desc: 'A working trial period before conversion, so both sides decide on evidence rather than an interview impression.' },
    { name: 'Managed delivery pods', desc: 'A complete squad with a lead, where the outcome and the day-to-day management stay our responsibility.' },
    { name: 'Permanent search', desc: 'Focused recruitment for senior and hard-to-fill technical roles, with a replacement guarantee period.' },
    { name: 'Volume ramp-up', desc: 'Multiple aligned profiles onboarded together for a programme, a GCC build-out or a new delivery centre.' },
    { name: 'Payroll & compliance', desc: 'Employment, statutory compliance, insurance and equipment handled for deployed staff — one invoice, no exposure.' },
    { name: 'Skills assessment', desc: 'Independent technical evaluation of candidates or an existing team, with a written capability picture.' },
    { name: 'Learning & certification', desc: 'Structured upskilling and certification pathways for your permanent engineers, funded and tracked.' },
  ],

  outcomes: [
    { stat: '10', unit: 'days', title: 'To first shortlist', text: 'Screened, technically assessed profiles from a bench that is already vetted.' },
    { stat: '3', unit: ':1', title: 'A shortlist worth reading', text: 'We put forward three genuine candidates, not thirty CVs to filter yourself.' },
    { stat: '5', unit: 'days', title: 'Time to productive', text: 'Environment access, context handover and pairing arranged before day one.' },
    { stat: '90', unit: '% retained', title: 'Deployments that stick', text: 'Placements still in seat at twelve months — the number that actually matters.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Brief, screen, prove, keep',
    sub: 'The quality of a placement is set in the briefing conversation. We spend real time there before searching.',
    steps: [
      { k: 'Brief', title: 'Understand the seat', text: 'Not just the tech stack — the team’s working style, what good looks like in six months, and what would make this a bad fit.' },
      { k: 'Screen', title: 'Assess properly', text: 'Technical evaluation by an engineer in that discipline, plus reference and background verification, before you see anyone.' },
      { k: 'Prove', title: 'Land and ramp', text: 'A structured first fortnight with access sorted, context transferred and a clear early deliverable to confirm the fit.' },
      { k: 'Keep', title: 'Stay accountable', text: 'Regular check-ins with both sides, a replacement commitment, and a career conversation that keeps good people from drifting.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'Written role brief agreed before search begins',
      'Assessed shortlist with technical evaluation notes',
      'Verified background and reference checks',
      'Structured onboarding and thirty-day ramp plan',
      'Monthly deployment review and replacement cover',
    ],
  },

  useCases: [
    { title: 'A programme starting next month', text: 'Engineers in seat before the kickoff date instead of a quarter after it.' },
    { title: 'A niche skill, briefly', text: 'A specialist for one migration or integration, without carrying the role permanently afterwards.' },
    { title: 'Standing up a GCC', text: 'Building an offshore capability team from a standing start, with compliance and payroll carried by us.' },
  ],

  edge: {
    heading: 'Where we differ from a staffing agency',
    sub: 'We are an engineering firm that also places engineers — the difference shows in screening.',
    points: [
      { title: 'Engineers screen engineers', text: 'Technical assessment is done by someone who works in that stack daily, which is why our shortlists are short.' },
      { title: 'We say no to bad fits', text: 'If we do not have the right person, we will tell you rather than send an approximation and hope. It costs us placements and keeps the relationship.' },
      { title: 'Deployed people are supported', text: 'Our placements have a manager, a learning budget and a career path with us. Supported engineers stay, and stability is what you are actually buying.' },
    ],
  },

  stack: ['Cloud & DevOps', 'Network & Security', 'Data Engineering', 'Full-stack Development', 'ERP Functional', 'Service Desk', 'QA & Automation', 'Project Management'],

  faqs: [
    { q: 'How fast can someone start?', a: 'Shortlists typically within ten working days. Start dates depend on notice periods — bench-available candidates can begin within two weeks, others run to thirty or sixty days.' },
    { q: 'What if the person is not working out?', a: 'Tell us early. We replace at our cost inside the agreed guarantee period, and we would far rather have that conversation in week three than in month four.' },
    { q: 'Can contract staff convert to permanent?', a: 'Yes, and we structure for it. Conversion terms are agreed upfront so there is no renegotiation at the moment you have decided you want to keep someone.' },
    { q: 'Who employs the deployed engineer?', a: 'We do. Payroll, statutory compliance, insurance and equipment sit with us, and you receive a single invoice with no employment liability.' },
  ],

  cta: {
    title: 'Send us the role you cannot fill',
    text: 'A job description and a start date are enough. We will tell you honestly whether the market supports it and what it will realistically cost.',
  },

  serviceArea: {
    text: 'We recruit from the Bengaluru market and know it well — which teams pay what, who is genuinely available, which claimed skills survive a technical screen. Placements run across the city, including HSR Layout, Koramangala, Whitefield and Electronic City, with remote and hybrid placements arranged for clients elsewhere in India.',
    note: 'Bengaluru-focused sourcing; remote and hybrid placement across India.',
  },

  seo: {
    title: 'IT Staffing & Tech Talent in Bengaluru | Karpexa',
    description:
      'Technology staffing from Bengaluru — contract engineers, contract-to-hire, managed delivery pods and permanent search, with technical screening done by engineers rather than recruiters.',
    keywords: 'IT staffing company Bengaluru, tech recruitment Bangalore, contract staffing Bengaluru, IT manpower services India',
  },
};

export default function TechTalent() {
  return <CapabilityLayout data={data} />;
}
