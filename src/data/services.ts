export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
  displayUrl: string;
  isNewDomain: boolean;
}

export const services: Service[] = [
  {
    id: "ilab",
    title: "iLab",
    description: "Integrated Laboratory System for managing practicum activities, schedules, and modules.",
    icon: "science",
    url: "https://ilab.umm.ac.id",
    displayUrl: "ILAB.UMM.AC.ID",
    isNewDomain: false,
  },
  {
    id: "simutu",
    title: "Simutu",
    description: "Quality Assurance System for monitoring and evaluating laboratory academic standards.",
    icon: "verified",
    url: "https://simutu.umm.ac.id",
    displayUrl: "SIMUTU.UMM.AC.ID",
    isNewDomain: false,
  },
  {
    id: "sirenta",
    title: "Sirenta",
    description: "The main services include registration and selection of assistant candidate files.",
    icon: "inventory_2",
    url: "https://sirenta.umm.ac.id",
    displayUrl: "SIRENTA.UMM.AC.ID",
    isNewDomain: true,
  },
  {
    id: "sevenman",
    title: "Sevenman",
    description: "Event Management System for organizing, registering, and tracking laboratory events.",
    icon: "event",
    url: "https://seveman.umm.ac.id",
    displayUrl: "SEVENMAN.UMM.AC.ID",
    isNewDomain: true,
  },
  {
    id: "simponia",
    title: "Simponia",
    description: "Integrated Information System for laboratory orchestration and administration.",
    icon: "hub",
    url: "https://simponia.umm.ac.id",
    displayUrl: "SIMPONIA.UMM.AC.ID",
    isNewDomain: true,
  },
];
