import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   CLOUD
   Voice: architecture + economics. Landing zones, unit cost, blast radius
   of a bad migration. Vocabulary reserved here: landing zone, tenancy,
   commitment, egress, right-sizing, unit economics.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'cloud',
  title: 'Cloud',
  navTitle: 'Cloud',
  short: 'Landing zones, migrations and day-two operations across Google Cloud, AWS and Azure.',
  label: 'Public cloud & migration',
  tagline: 'Elastic where it pays. Disciplined where it counts.',
  image: '/images/capabilities/cloud.jpg',
  imageAlt: 'Abstract visualisation of distributed cloud regions',

  intro: {
    eyebrow: 'The brief',
    heading: 'Cloud rewards architecture and punishes drift',
    body:
      'A cloud account opened in a hurry becomes an expensive habit. Untagged resources, over-provisioned instances, three people with root and a bill nobody can explain line by line. We build the landing zone first — identity, network boundaries, tagging, guardrails and budget alerts — then move workloads into it in an order that keeps the risky ones last. The result is an environment where cost, access and blast radius are all deliberate choices.',
  },

  signals: [
    'The monthly invoice climbs faster than usage, and nobody can attribute it to a team.',
    'Production, staging and someone’s experiment share the same account and permissions.',
    'A migration was started, then paused, and now half the estate lives in both places.',
  ],

  offerings: [
    { name: 'Google Cloud', desc: 'Project hierarchy, org policies, VPC design and GKE workloads built to Google’s well-architected patterns.' },
    { name: 'Amazon Web Services', desc: 'Multi-account structures with Control Tower guardrails, so isolation between teams is enforced rather than agreed.' },
    { name: 'Microsoft Azure', desc: 'Subscription and management-group design aligned to your Entra tenancy and existing licence entitlements.' },
    { name: 'Landing zone design', desc: 'The foundation layer — identity, network segmentation, logging, key management and naming conventions, defined before workload one.' },
    { name: 'Migration & modernisation', desc: 'Wave-planned moves with a documented rollback for each application, from straight rehosting to container re-platforming.' },
    { name: 'FinOps & cost governance', desc: 'Showback by team, commitment and reservation strategy, anomaly alerting and quarterly right-sizing reviews.' },
    { name: 'Resilience & recovery', desc: 'Backup policy, replication tiers and tested recovery objectives — a DR plan that has actually been rehearsed.' },
    { name: 'Hybrid & multi-cloud', desc: 'Connectivity, identity federation and workload placement when part of the estate stays on your own floor.' },
  ],

  outcomes: [
    { stat: '25', unit: '% typical', title: 'Spend recovered', text: 'The usual first-quarter saving from right-sizing, scheduling and commitment cover.' },
    { stat: '100', unit: '% tagged', title: 'Every rupee attributable', text: 'Cost split by team, product and environment — arguments about the bill end.' },
    { stat: '4', unit: 'waves', title: 'Migrations that finish', text: 'Applications grouped by dependency and risk so momentum never stalls halfway.' },
    { stat: '<1', unit: 'hr RTO*', title: 'Recovery you have tested', text: 'Objectives written down, rehearsed on a schedule and evidenced. *Target, workload-dependent.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Foundation first, workloads second',
    sub: 'Moving applications into an unfinished landing zone is the single most common reason cloud programmes overrun. We invert the order.',
    steps: [
      { k: 'Discover', title: 'Inventory and dependency map', text: 'Every application, its data gravity, its integrations and the business tolerance for it being unavailable.' },
      { k: 'Found', title: 'Build the landing zone', text: 'Accounts, identity, network, policy guardrails, logging and cost tagging stood up and validated before anything moves.' },
      { k: 'Move', title: 'Migrate in waves', text: 'Low-risk workloads prove the pattern, complex ones follow. Each wave has a cutover plan and a way back.' },
      { k: 'Tune', title: 'Operate and optimise', text: 'Monthly cost and performance review, commitment adjustments, and guardrail updates as the estate matures.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'Landing-zone architecture document and policy set',
      'Application dependency map with migration wave plan',
      'Tagging standard and cost-allocation dashboard',
      'Backup, replication and tested recovery runbook',
      'Infrastructure-as-code repository you own outright',
    ],
  },

  useCases: [
    { title: 'First move off your own servers', text: 'A hardware refresh is due and the maths favours renting capacity. We plan the exit so the lease ends and nothing is stranded.' },
    { title: 'A bill that has quietly doubled', text: 'A cost forensics engagement that finds the drift, fixes it, and puts guardrails in so it does not return.' },
    { title: 'Scaling for a product launch', text: 'Autoscaling, load testing and a cost ceiling agreed before traffic arrives, not discovered after it does.' },
  ],

  edge: {
    heading: 'Why our cloud work holds up',
    sub: 'We are certified on all three hyperscalers, which means the recommendation follows the workload.',
    points: [
      { title: 'No platform loyalty', text: 'We carry no resale target that pushes you toward one provider. Sometimes the honest answer is that your workload should stay where it is.' },
      { title: 'Cost is a design input', text: 'Unit economics get modelled during architecture, not discovered on the first invoice. You approve a number before we build to it.' },
      { title: 'You keep the code', text: 'Everything is delivered as Terraform in your repository. Nothing about your environment lives only in our heads.' },
    ],
  },

  stack: ['Google Cloud', 'AWS', 'Microsoft Azure', 'Terraform', 'Kubernetes', 'Docker', 'Cloudflare', 'Veeam'],

  faqs: [
    { q: 'Which cloud should we be on?', a: 'It depends on where your data already sits, what your team can support, and your licensing position. We run a short workload-fit assessment and give you the comparison with the reasoning, rather than a conclusion.' },
    { q: 'Will migrating take the business offline?', a: 'Most workloads move with a short, scheduled cutover and several rehearsals beforehand. Anything that genuinely cannot pause gets a replication-and-switch approach so downtime is measured in minutes.' },
    { q: 'Can you reduce our current bill without re-architecting?', a: 'Usually a meaningful amount, yes. Scheduling non-production, right-sizing over-provisioned instances and buying appropriate commitments are the fastest wins and require no application changes.' },
    { q: 'Do we need to move everything?', a: 'No, and you often should not. Latency-sensitive, licence-locked or heavily regulated workloads frequently belong on your own infrastructure. We design for the split rather than pretending it does not exist.' },
  ],

  cta: {
    title: 'Send us last month’s invoice',
    text: 'A single billing export tells us more than a discovery workshop. We will come back with where the spend is going and what we would change first.',
  },

  serviceArea: {
    text: 'Cloud work is largely remote, but migrations go better when the cutover conversations happen in a room. We run discovery and go-live planning on site for clients in Bengaluru — HSR Layout, Koramangala, Whitefield, Electronic City — and remotely for the rest of India.',
    note: 'Assessment workshops on site in Bengaluru; migration and run-state delivered remotely.',
  },

  seo: {
    title: 'Cloud Migration & Managed Cloud Services | Bengaluru',
    description:
      'Cloud migration and managed cloud services from Bengaluru — AWS, Azure and Google Cloud assessment, migration, cost optimisation and ongoing operations for mid-sized organisations across India.',
    keywords: 'cloud migration services Bengaluru, AWS consulting Bangalore, Azure partner Bengaluru, managed cloud services India',
  },
};

export default function Cloud() {
  return <CapabilityLayout data={data} />;
}
