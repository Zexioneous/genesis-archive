export type GatewayFieldId = "portfolio" | "genesis" | "lore";

export type GatewayField = {
  id: GatewayFieldId;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  accent: "cyan" | "emerald" | "violet";
};

const gatewayFields: GatewayField[] = [
  {
    id: "portfolio",
    index: "01",
    title: "PERSONAL PORTFOLIO",
    subtitle: "CREATOR PROFILE",
    description:
      "Access identity, skills, projects, experience, and selected work.",
    status: "PUBLIC",
    accent: "cyan",
  },
  {
    id: "genesis",
    index: "02",
    title: "GENESIS SYSTEM",
    subtitle: "INTERACTIVE ARCHIVE",
    description:
      "Enter the Artificial Intellegent System and explore the Orbital View.",
    status: "ONLINE",
    accent: "emerald",
  },
  {
    id: "lore",
    index: "03",
    title: "DEEP LORE",
    subtitle: "HORIZON OF GENESIS",
    description:
      "Explore the deeper history, locations, factions, technologies, personnel, and timeline of the Genesis universe.",
    status: "RESTRICTED",
    accent: "violet",
  },
];

export default gatewayFields;
