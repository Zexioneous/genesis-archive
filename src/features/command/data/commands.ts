export type Command = {
  id: string;
  icon: string;
  title: string;
  description: string;
  action:
    | "open-personnel"
    | "open-missions"
    | "open-timeline"
    | "open-terminal"
    | "open-search"
    | "open-orbital";
};

const commands: Command[] = [
  {
    id: "personnel",
    icon: "👤",
    title: "Open Personnel Archive",
    description: "Browse registered Genesis personnel.",
    action: "open-personnel",
  },
  {
    id: "missions",
    icon: "🚀",
    title: "Open Missions",
    description: "View archived mission reports.",
    action: "open-missions",
  },
  {
    id: "timeline",
    icon: "🛰",
    title: "Open Timeline",
    description: "Explore Genesis historical events.",
    action: "open-timeline",
  },
  {
    id: "terminal",
    icon: "💻",
    title: "Terminal Mode",
    description: "Open the Genesis command terminal.",
    action: "open-terminal",
  },

  {
    id: "search-archive",
    title: "Search Archive",
    description: "Open the Genesis Archive Search",
    icon: "🔍",
    action: "open-search",
  },

  {
    id: "orbital",
    icon: "🌍",
    title: "Open Orbital View",
    description: "Switch to Genesis Orbital View.",
    action: "open-orbital",
  },
];

export default commands;
