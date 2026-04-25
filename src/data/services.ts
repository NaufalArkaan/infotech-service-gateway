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
    url: "https://i-lab.umm.ac.id",
    displayUrl: "I-LAB.UMM.AC.ID",
    isNewDomain: false,
  },
  {
    id: "simutu",
    title: "Simutu",
    description: "Quality Assurance System for monitoring and evaluating laboratory academic standards.",
    icon: "verified",
    url: "https://i-lab.umm.ac.id/simutu",
    displayUrl: "I-LAB.UMM.AC.ID/SIMUTU",
    isNewDomain: false,
  },
  {
    id: "sirenta",
    title: "Sirenta",
    description: "The main services include registration and selection of assistant candidate files.",
    icon: "inventory_2",
    url: "https://i-lab.umm.ac.id/v2/sirenta",
    displayUrl: "I-LAB.UMM.AC.ID/V2/SIRENTA",
    isNewDomain: true,
  },
  {
    id: "sevenman",
    title: "Sevenman",
    description: "Event Management System for organizing, registering, and tracking laboratory events.",
    icon: "event",
    url: "https://i-lab.umm.ac.id/sevenman",
    displayUrl: "I-LAB.UMM.AC.ID/SEVENMAN",
    isNewDomain: true,
  },
  {
    id: "simponia",
    title: "Simponia",
    description: "Integrated Information System for laboratory orchestration and administration.",
    icon: "hub",
    url: "https://i-lab.umm.ac.id/simponia",
    displayUrl: "I-LAB.UMM.AC.ID/SIMPONIA",
    isNewDomain: true,
  },
];
