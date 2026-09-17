import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   CYBER SECURITY
   Voice: risk and assurance. Blast radius, dwell time, control coverage.
   Vocabulary reserved here: posture, exposure, dwell time, least
   privilege, containment, audit evidence.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'security',
  title: 'Cyber Security',
  navTitle: 'Cyber Security',
  short: 'Identity, endpoint, network and data controls that hold up under audit and attack.',
  label: 'Risk, defence & assurance',
  tagline: 'Reduce what an attacker can reach, and how long they can stay.',
  image: '/images/capabilities/security.jpg',
  imageAlt: 'Security operations analyst reviewing threat telemetry',

  intro: {
    eyebrow: 'The brief',
    heading: 'Security is a coverage problem, not a product problem',
    body:
      'Most breached organisations owned a firewall and an antivirus licence. What they lacked was coverage — an identity nobody could bypass, a laptop that could be isolated in seconds, logs that reached somewhere an intruder could not delete. We assess your posture against a recognised control framework, close the gaps in order of exposure, and leave you with evidence a regulator or a customer’s security questionnaire will accept.',
  },

  signals: [
    'Multi-factor authentication is enabled for some systems and some people.',
    'You could not say today which laptops are missing this month’s patches.',
    'A customer security questionnaire arrived and nobody knows who owns the answers.',
  ],

  offerings: [
    { name: 'Identity & access management', desc: 'Single sign-on, conditional access, privileged access controls and joiner-mover-leaver automation so accounts die when people leave.' },
    { name: 'Endpoint detection & response', desc: 'Behavioural detection on every device with the ability to isolate a compromised machine from the network in one action.' },
    { name: 'Network & perimeter security', desc: 'Next-generation firewalls, segmentation, zero-trust access and secure web gateways replacing flat internal networks.' },
    { name: 'Email & collaboration defence', desc: 'Phishing, impersonation and payload controls across mail, chat and file sharing — the routes people actually get caught by.' },
    { name: 'Data protection & DLP', desc: 'Classification, encryption at rest and in transit, and rules that stop sensitive files leaving through the obvious doors.' },
    { name: 'Cloud security posture', desc: 'Continuous configuration assessment across your cloud accounts, catching the public bucket before someone else does.' },
    { name: 'OT & industrial security', desc: 'Segmentation and passive monitoring for plant networks where patching windows are measured in years.' },
    { name: 'Vulnerability & patch management', desc: 'Scheduled scanning, risk-ranked remediation and a patch compliance figure you can quote with confidence.' },
    { name: 'Assessment & compliance readiness', desc: 'Gap analysis, penetration test coordination and the evidence pack for ISO 27001, SOC 2 or customer audits.' },
  ],

  outcomes: [
    { stat: '100', unit: '% MFA', title: 'No unguarded doors', text: 'Every account, every application — including the service accounts everyone forgets.' },
    { stat: '<5', unit: 'min', title: 'Containment speed', text: 'A suspicious endpoint isolated from the network before the impact spreads laterally.' },
    { stat: '30', unit: 'days', title: 'Patch currency', text: 'Critical vulnerabilities remediated inside a defined, measured and reported window.' },
    { stat: '1', unit: 'evidence pack', title: 'Audit-ready', text: 'Control documentation maintained continuously, not assembled in panic the week before.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Baseline, prioritise, harden, verify',
    sub: 'We fix in the order an attacker would exploit, not the order a product catalogue is printed in.',
    steps: [
      { k: 'Baseline', title: 'Establish real posture', text: 'Control assessment across identity, endpoint, network, cloud and data — scored, with evidence rather than self-declaration.' },
      { k: 'Prioritise', title: 'Rank by exposure', text: 'Findings ordered by what is genuinely reachable and what it would cost you, so limited budget goes to the top of the list.' },
      { k: 'Harden', title: 'Close the gaps', text: 'Controls deployed and tuned in sequence, each one validated before we move to the next.' },
      { k: 'Verify', title: 'Prove it, repeatedly', text: 'Simulated phishing, recovery drills, re-scanning and a posture score tracked quarter over quarter.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'Scored posture assessment mapped to a recognised framework',
      'Risk-ranked remediation roadmap with owners and dates',
      'Incident response plan with a tested escalation tree',
      'Access review and privileged account register',
      'Quarterly assurance report suitable for board or client review',
    ],
  },

  useCases: [
    { title: 'A customer demands proof', text: 'An enterprise client sends a security questionnaire and the contract depends on the answers being real.' },
    { title: 'After a near miss', text: 'A phishing attempt that almost worked. We map how far it could have travelled and shut that path down.' },
    { title: 'Preparing for certification', text: 'ISO 27001 or SOC 2 readiness — controls implemented, evidence collected and gaps closed before the auditor arrives.' },
  ],

  edge: {
    heading: 'Our position on security',
    sub: 'Held consistently, including when it costs us a sale.',
    points: [
      { title: 'Assessment before procurement', text: 'We will not quote a product until we have seen the gap it is supposed to close. Tooling bought ahead of understanding is how shelfware happens.' },
      { title: 'Controls people can live with', text: 'A control users route around is worse than none, because it creates false confidence. We design for the way your teams actually work.' },
      { title: 'Plain-language reporting', text: 'Findings written so a board can act on them, with the technical detail in an annexe for the engineers who need it.' },
    ],
  },

  stack: ['Microsoft Defender', 'SentinelOne', 'Fortinet', 'Check Point', 'Zscaler', 'CrowdStrike', 'Okta', 'Entra ID', 'Tenable'],

  faqs: [
    { q: 'Where should a company with a small budget start?', a: 'Identity, almost always. Enforced multi-factor authentication and clean privileged access remove the largest share of realistic attack paths for the least money. Endpoint detection comes next.' },
    { q: 'Do you run a security operations centre?', a: 'We provide managed detection and response with a 24×7 escalation path, working with the platform that fits your estate rather than insisting on our own stack.' },
    { q: 'How do you handle an active incident?', a: 'Containment first, evidence preservation second, eradication third, then a written post-incident review. If you are under attack right now, call us before reading further.' },
    { q: 'Will these controls slow our teams down?', a: 'Done properly, most people notice single sign-on making life easier and little else. Where a control genuinely adds friction, we say so upfront and let you weigh it.' },
  ],

  cta: {
    title: 'Share the finding that worries you',
    text: 'An audit observation, a failed questionnaire, a near miss. We will give you an honest read on the exposure and the shortest credible path to closing it.',
  },

  serviceArea: {
    text: 'Assessments and remediation run remotely; interviews, physical controls review and audit walkthroughs are done on site. We cover Bengaluru directly — HSR Layout, Koramangala, Whitefield, Electronic City — and travel for multi-site assessments across India.',
    note: 'On-site assessment in Bengaluru; remote monitoring and remediation nationwide.',
  },

  seo: {
    title: 'Cyber Security Services in Bengaluru | Karpexa',
    description:
      'Cyber security services in Bengaluru — security assessments, endpoint and network hardening, identity controls, monitoring and audit remediation for mid-sized Indian organisations.',
    keywords: 'cyber security company Bengaluru, security audit Bangalore, VAPT services Bengaluru, ISO 27001 support Bangalore',
  },
};

export default function Security() {
  return <CapabilityLayout data={data} />;
}
