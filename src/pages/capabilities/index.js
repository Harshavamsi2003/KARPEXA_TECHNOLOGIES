import ITInfrastructure, { data as itInfrastructure } from './ITInfrastructure';
import Cloud, { data as cloud } from './Cloud';
import ManagedIT, { data as managedIT } from './ManagedIT';
import Security, { data as security } from './Security';
import DataAnalytics, { data as dataAnalytics } from './DataAnalytics';
import Workspace, { data as workspace } from './Workspace';
import ERPApps, { data as erpApps } from './ERPApps';
import TechTalent, { data as techTalent } from './TechTalent';
import MaintenanceAMC, { data as maintenanceAMC } from './MaintenanceAMC';
import PrintDevice, { data as printDevice } from './PrintDevice';

export {
  ITInfrastructure,
  Cloud,
  ManagedIT,
  Security,
  DataAnalytics,
  Workspace,
  ERPApps,
  TechTalent,
  MaintenanceAMC,
  PrintDevice,
};

/**
 * The single source of truth for capabilities.
 * Nav mega-menu, home grid, sitemap, structured data and the related-links
 * block all read from this array — add a capability here and it appears
 * everywhere, including in the generated sitemap.
 */
export const capabilities = [
  itInfrastructure,
  cloud,
  managedIT,
  security,
  dataAnalytics,
  workspace,
  erpApps,
  techTalent,
  maintenanceAMC,
  printDevice,
];

export const getCapability = (slug) => capabilities.find((c) => c.slug === slug);

/** Pairs each capability slug with its page component, so routing can be
 *  generated rather than hand-maintained. */
export const capabilityRoutes = [
  { slug: itInfrastructure.slug, Component: ITInfrastructure },
  { slug: cloud.slug, Component: Cloud },
  { slug: managedIT.slug, Component: ManagedIT },
  { slug: security.slug, Component: Security },
  { slug: dataAnalytics.slug, Component: DataAnalytics },
  { slug: workspace.slug, Component: Workspace },
  { slug: erpApps.slug, Component: ERPApps },
  { slug: techTalent.slug, Component: TechTalent },
  { slug: maintenanceAMC.slug, Component: MaintenanceAMC },
  { slug: printDevice.slug, Component: PrintDevice },
];
