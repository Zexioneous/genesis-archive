export type Mission = {
  id: string;
  name: string;
  year: string;
  status: "Completed" | "Active" | "Planned";
  description: string;
};

const missionData: Mission[] = [
  {
    id: "genesis-01",
    name: "Genesis Archive",
    year: "2026",
    status: "Active",
    description:
      "Interactive science-fiction portfolio built as the Genesis Organization archive.",
  },
];

export default missionData;
