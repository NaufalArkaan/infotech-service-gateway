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
    id: "core-systems",
    title: "Core Systems",
    description: "Main frame infrastructure and server health monitoring protocols.",
    icon: "terminal",
    url: "https://translate.google.com/",
    displayUrl: "SYSTEMS.INFOTECH.PRO",
    isNewDomain: true,
  },
  {
    id: "network-operations",
    title: "Network Operations",
    description: "Global distribution network and low-latency peering management.",
    icon: "lan",
    url: "https://network.infotech.pro",
    displayUrl: "NETWORK.INFOTECH.PRO",
    isNewDomain: true,
  },
  {
    id: "security-vault",
    title: "Security Vault",
    description: "Encrypted data storage and identity access management portal.",
    icon: "security",
    url: "https://secure.infotech.pro",
    displayUrl: "SECURE.INFOTECH.PRO",
    isNewDomain: true,
  },
  {
    id: "data-warehouse",
    title: "Data Warehouse",
    description: "High-performance database clusters and analytics processing engines.",
    icon: "database",
    url: "https://data.infotech.pro",
    displayUrl: "DATA.INFOTECH.PRO",
    isNewDomain: true,
  },
  {
    id: "support-desk",
    title: "Support Desk",
    description: "Priority technical assistance and escalation management suite.",
    icon: "support_agent",
    url: "https://support.infotech.pro",
    displayUrl: "SUPPORT.INFOTECH.PRO",
    isNewDomain: true,
  },
  {
    id: "api-gateway",
    title: "API Gateway",
    description: "Developer documentation and endpoint management for external integration.",
    icon: "api",
    url: "https://dev.infotech.pro",
    displayUrl: "DEV.INFOTECH.PRO",
    isNewDomain: true,
  },
  {
    id: "layanan-baru",
    title: "Layanan Baru",
    description: "Deskripsi singkat mengenai layanan baru yang ditambahkan.",
    icon: "rocket_launch", // Gunakan nama ikon dari Google Material Symbols
    url: "https://baru.infotech.pro",
    displayUrl: "BARU.INFOTECH.PRO",
    isNewDomain: true, // Ubah ke false jika Anda tidak ingin memunculkan badge "New Domain"
  },
];
