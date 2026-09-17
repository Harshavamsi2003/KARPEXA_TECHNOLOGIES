import CapabilityLayout from '../../components/CapabilityLayout';

/* ---------------------------------------------------------------------
   DATA & ANALYTICS
   Voice: decisions and definitions. Semantic layer, single figure,
   lineage. Vocabulary reserved here: model, lineage, definition,
   dashboard, pipeline, adoption.
   --------------------------------------------------------------------- */
export const data = {
  slug: 'data-analytics',
  title: 'Data & Analytics',
  navTitle: 'Data & Analytics',
  short: 'Pipelines, a governed model and dashboards people actually open on Monday.',
  label: 'Pipelines & reporting',
  tagline: 'One number, one definition, one source.',
  image: '/images/capabilities/data-analytics.jpg',
  imageAlt: 'Analyst working across multiple data visualisations',

  intro: {
    eyebrow: 'The brief',
    heading: 'Most reporting problems are definition problems',
    body:
      'When finance and sales bring different revenue figures to the same meeting, the tool is rarely at fault. Two teams are calculating the same word differently, from two extracts, on two days. We fix the layer underneath first — reliable pipelines and a governed model where every metric has one written definition and traceable lineage — and only then build the dashboards. That is why the dashboards survive past the launch demo.',
  },

  signals: [
    'Two departments arrive at a meeting with two different numbers for the same thing.',
    'The monthly pack is assembled by hand and takes someone the better part of a week.',
    'Dashboards were built, presented once, and nobody has opened them since.',
  ],

  offerings: [
    { name: 'Data strategy & metric design', desc: 'Working backwards from the decisions you need to make to the small set of measures that actually inform them.' },
    { name: 'Warehouse & lakehouse builds', desc: 'A modelled central store on BigQuery, Snowflake, Databricks or Fabric, structured for querying rather than storage alone.' },
    { name: 'Pipelines & integration', desc: 'Scheduled, monitored ingestion from ERP, CRM, spreadsheets and operational systems, with failures that alert instead of going quiet.' },
    { name: 'Semantic & governance layer', desc: 'Every metric defined once, with an owner, a formula and lineage back to source — the end of duelling spreadsheets.' },
    { name: 'Dashboards & self-service BI', desc: 'Power BI, Tableau or Looker builds designed around a role’s daily question, not around every field available.' },
    { name: 'Operational & embedded reporting', desc: 'Reporting placed inside the workflow — in the app, the inbox or the chat channel where the decision is taken.' },
    { name: 'Forecasting & advanced analytics', desc: 'Demand, churn and capacity models, deployed only where a decision genuinely changes as a result.' },
    { name: 'AI-assisted analysis', desc: 'Natural-language querying and summarisation grounded in your governed model, so answers stay traceable.' },
  ],

  outcomes: [
    { stat: '1', unit: 'definition', title: 'Metrics agreed', text: 'A published dictionary that ends the argument about whose number is right.' },
    { stat: '4', unit: 'days back', title: 'Reporting time returned', text: 'Manual monthly assembly replaced by pipelines that run overnight.' },
    { stat: '3', unit: '× adoption', title: 'Dashboards that get used', text: 'Built around real decisions, so people return to them without being reminded.' },
    { stat: '0', unit: 'silent fails', title: 'Trustworthy data', text: 'Freshness and quality checks that raise an alert before a user notices.' },
  ],

  approach: {
    eyebrow: 'How the work runs',
    heading: 'Start at the decision, not the data',
    sub: 'We begin with the meeting you are trying to improve and work backwards. It keeps scope honest and delivery short.',
    steps: [
      { k: 'Frame', title: 'Name the decisions', text: 'Interviews with the people who act on numbers, producing a shortlist of questions worth answering well.' },
      { k: 'Model', title: 'Define and structure', text: 'Source audit, metric definitions written and signed off, and a warehouse model built to serve them.' },
      { k: 'Build', title: 'Pipelines and views', text: 'Ingestion, transformation and testing automated, with the first dashboard shipped inside weeks rather than quarters.' },
      { k: 'Embed', title: 'Drive adoption', text: 'Training in your own data, feedback loops and iteration. A dashboard nobody opens is a failed project regardless of build quality.' },
    ],
  },

  deliverables: {
    heading: 'What lands on your side',
    items: [
      'Metric dictionary with owners and written formulas',
      'Warehouse schema and documented data lineage',
      'Version-controlled transformation code in your repository',
      'Role-based dashboard set with usage tracking',
      'Data quality monitoring and alerting rules',
    ],
  },

  useCases: [
    { title: 'Board reporting that consumes a week', text: 'Automating the pack so the finance team spends its time on the commentary instead of the copy-paste.' },
    { title: 'ERP data nobody can reach', text: 'Unlocking the numbers trapped inside a system that only three people know how to query.' },
    { title: 'Preparing for a raise or diligence', text: 'Clean, defensible metrics with lineage an investor’s analyst can follow without hand-holding.' },
  ],

  edge: {
    heading: 'How we keep analytics honest',
    sub: 'Three habits that decide whether this becomes an asset or a graveyard.',
    points: [
      { title: 'Definitions before dashboards', text: 'We will not build a chart for a metric nobody has agreed. It feels slow for two weeks and saves two years of argument.' },
      { title: 'Adoption is the success measure', text: 'We track who opens what. If usage is low we treat it as our problem to solve, not evidence that users are resistant.' },
      { title: 'Fewer, better views', text: 'A tight set of dashboards someone reads daily beats a portal of two hundred nobody trusts.' },
    ],
  },

  stack: ['Power BI', 'Tableau', 'Qlik', 'Looker', 'BigQuery', 'Snowflake', 'Databricks', 'dbt', 'Alteryx'],

  faqs: [
    { q: 'Do we need a warehouse to start?', a: 'Not always. If your data lives in one or two systems and volumes are modest, direct connections can carry you a long way. We recommend a warehouse when the joins across systems become the bottleneck.' },
    { q: 'Which BI tool do you recommend?', a: 'Usually the one your team is closest to and already licensed for. Tool choice matters far less than the model beneath it — a good model works in any of them.' },
    { q: 'How quickly do we see something real?', a: 'The first working dashboard on real data typically lands in four to six weeks. We deliberately scope a narrow first slice so value arrives before enthusiasm fades.' },
    { q: 'Can you work with our messy spreadsheets?', a: 'Yes, and most engagements start there. Spreadsheets are usually where the real business logic is hiding — we extract it, formalise it and retire the file.' },
  ],

  cta: {
    title: 'Tell us which number is disputed',
    text: 'Every reporting problem starts with two people quoting different figures. Name the metric and we will show you how the definition gets settled.',
  },

  serviceArea: {
    text: 'Data work lives or dies on access to the people who understand the numbers. We run requirement sessions on site with Bengaluru clients — HSR Layout, Koramangala, Whitefield, Electronic City — and deliver builds remotely for organisations across India.',
    note: 'Requirements and review sessions on site in Bengaluru; build and run remote.',
  },

  seo: {
    title: 'Data & Analytics Consulting in Bengaluru | Karpexa',
    description:
      'Data engineering and analytics from Bengaluru — warehouses, pipelines, BI dashboards and reporting that decision-makers actually use, built and maintained by the same team.',
    keywords: 'data analytics company Bengaluru, BI consulting Bangalore, data engineering services Bengaluru, Power BI consultant India',
  },
};

export default function DataAnalytics() {
  return <CapabilityLayout data={data} />;
}
