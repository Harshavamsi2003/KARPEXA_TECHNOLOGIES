import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   IT INFRASTRUCTURE
   Voice: engineering. Physical, measurable, load-bearing.
   Vocabulary reserved for this page: rack, floor, capacity, throughput,
   power envelope, refresh cycle, topology.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'it-infrastructure',
  title: 'IT Infrastructure',
  navTitle: 'IT Infrastructure',
  short: 'Compute, network, data centre and end-user hardware designed as one topology.',
  label: 'Compute, network & devices',
  tagline: 'The floor everything else stands on.',
  image: '/images/capabilities/it-infrastructure.jpg',
  imageAlt: 'Structured cabling and switching inside a modern data hall',

  intro: {
    eyebrow: 'The brief',
    heading: 'Infrastructure is invisible until it is not',
    body:
      'Most infrastructure grows by accident — a switch added here, storage bolted on there, laptops bought in three different years from four different vendors. It works, until throughput, warranty or floor space runs out at exactly the wrong moment. We design your compute, storage, network and end-user estate as a single topology with a known capacity ceiling and a known refresh cycle, so growth is a planned decision rather than an emergency purchase order.',
  },

  signals: [
    'Nobody can produce a current diagram of what is actually racked and cabled.',
    'Storage or bandwidth is topped up reactively, always under deadline pressure.',
    'Hardware warranties expire silently and are discovered during an outage.',
  ],

  offerings: [
    { name: 'Data centre & server rooms', desc: 'Rack layout, power envelope, cooling headroom, structured cabling and clean labelling — built so the next engineer can read the room.' },
    { name: 'Compute & storage', desc: 'Server, hyper-converged and storage sizing matched to real IOPS and growth curves rather than a vendor configurator default.' },
    { name: 'Networking & Wi-Fi', desc: 'Switching, routing, SD-WAN and wireless coverage engineered for density — the meeting room that seats forty behaves like it.' },
    { name: 'End-user computing', desc: 'Laptops, desktops and workstations standardised into two or three build tiers, imaged and shipped ready to log in.' },
    { name: 'Audio-visual & meeting rooms', desc: 'Rooms that join a call in one tap — displays, codecs, mics and acoustics specified together, not bought separately.' },
    { name: 'Apple & mixed-fleet estates', desc: 'macOS, iOS, Windows and Android coexisting under one enrolment and one support path.' },
    { name: 'Enterprise mobility', desc: 'Rugged handhelds, tablets and scanners for field, warehouse and shop-floor teams, provisioned in bulk.' },
    { name: 'Hardware logistics', desc: 'Procurement, staging, asset tagging, warehousing and nationwide dispatch, with serial-level records from day one.' },
  ],

  outcomes: [
    { stat: '1', unit: 'topology', title: 'One coherent design', text: 'Every device, link and rack unit documented in a single diagram your team owns.' },
    { stat: '3', unit: 'yr horizon', title: 'Capacity you can plan', text: 'Headroom modelled against your growth, so budgets are set a year ahead rather than a week.' },
    { stat: '48', unit: 'hrs', title: 'Faster onboarding', text: 'Pre-imaged builds mean a new joiner is productive on day one, not on day five.' },
    { stat: '0', unit: 'orphans', title: 'No unmapped assets', text: 'Serial-level asset register from procurement through to disposal certificate.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Survey, size, stage, switch on',
    sub: 'Infrastructure is physical, so the sequence matters. We measure before we buy and stage before we install.',
    steps: [
      { k: 'Survey', title: 'Walk the estate', text: 'Site visit, port-level audit, power and cooling readings, and a warranty position for every serial we find.' },
      { k: 'Size', title: 'Model the ceiling', text: 'We compute the load your stack will carry in eighteen months and design to that number, not today’s.' },
      { k: 'Stage', title: 'Build before it ships', text: 'Racks, images and configs are assembled and burned in at our facility, so on-site time is measured in hours.' },
      { k: 'Switch on', title: 'Cutover and certify', text: 'Phased migration windows, link testing, labelled handover pack and an as-built diagram signed off with your team.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'As-built topology diagram and rack elevations',
      'Serial-level asset register with warranty expiry dates',
      'Cable schedule and port allocation map',
      'Standard build images per device tier',
      'Capacity model with a costed refresh calendar',
    ],
  },

  useCases: [
    { title: 'Opening a new office or plant', text: 'From empty shell to working floor — cabling, network, rooms and desks delivered against a fixed occupancy date.' },
    { title: 'Ageing hardware estate', text: 'A staged refresh that retires the riskiest kit first and spreads spend across quarters instead of one painful hit.' },
    { title: 'Consolidating after a merger', text: 'Two networks, two address plans and two hardware standards folded into one without a weekend of downtime.' },
  ],

  edge: {
    heading: 'What makes our infrastructure work different',
    sub: 'Anyone can quote a bill of materials. The difference is in what happens either side of it.',
    points: [
      { title: 'We measure before we specify', text: 'Every proposal starts from readings taken on your floor — port counts, power draw, throughput — not from an assumption about company size.' },
      { title: 'Two SKUs, not twenty', text: 'We deliberately narrow your hardware catalogue. Fewer models means cheaper spares, faster imaging and support that actually knows the device.' },
      { title: 'Documentation is a deliverable, not a favour', text: 'The diagram, the cable schedule and the asset register are contract items. If you replace us, you lose nothing.' },
    ],
  },

  stack: ['Dell', 'HP', 'Lenovo', 'Apple', 'Cisco', 'Aruba', 'Fortinet', 'NetApp', 'APC', 'Logitech'],

  faqs: [
    { q: 'Can you work with hardware we have already bought?', a: 'Yes. We audit what you own, keep whatever still has useful life and warranty cover, and design the new topology around it. Replacing working kit for the sake of a neater invoice is not something we do.' },
    { q: 'Do we have to buy hardware through you?', a: 'No. We are happy to design and implement while you procure directly. Where we do supply, we show you the line-item pricing rather than a bundled figure.' },
    { q: 'How disruptive is a network cutover?', a: 'Typically a scheduled window outside business hours, with the previous configuration retained and reversible. For multi-site estates we cut over one site at a time so any surprise is contained.' },
    { q: 'What happens to the equipment we retire?', a: 'We handle secure data wiping, certified e-waste disposal and, where there is residual value, buy-back — and you get the certificates for your compliance file.' },
  ],

  cta: {
    title: 'Walk us through your floor',
    text: 'Send us a rack photograph, a network diagram or simply the age of your oldest switch. We will tell you what is worth keeping and what is quietly becoming a risk.',
  },

  serviceArea: {
    text: 'Infrastructure work is physical, so proximity matters. Our engineers are based in Bengaluru and reach most of the city — HSR Layout, Koramangala, Whitefield, Electronic City, Outer Ring Road — within the working day for surveys, commissioning and cutover windows. Data centre and multi-site builds run across India from the same team.',
    note: 'Racking, cabling and commissioning are done on site, not subcontracted.',
  },

  seo: {
    title: 'IT Infrastructure Services in Bengaluru | Karpexa',
    description:
      'IT infrastructure design, supply and commissioning in Bengaluru and across India — servers, storage, networking, structured cabling and data centre build, delivered by the engineers who run it afterwards.',
    keywords: 'IT infrastructure company Bengaluru, server installation Bangalore, network setup Bengaluru, structured cabling Bangalore, data centre services India',
  },
};

export default function ITInfrastructure() {
  return <CapabilityLayout data={data} />;
}
