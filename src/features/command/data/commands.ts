export type Command = {
  id: string;
  icon: string;
  title: string;
  description: string;
  action: () => void;
};

const commands: Command[] = [
  {
    id: "personnel",
    icon: "👤",
    title: "Open Personnel Archive",
    description: "Browse registered Genesis personnel.",
    action: () => {
      console.log("Open Personnel");
    },
  },
  {
    id: "missions",
    icon: "🚀",
    title: "Open Missions",
    description: "View archived mission reports.",
    action: () => {
      console.log("Open Missions");
    },
  },
  {
    id: "timeline",
    icon: "🛰",
    title: "Open Timeline",
    description: "Explore Genesis historical events.",
    action: () => {
      console.log("Open Timeline");
    },
  },
  {
    id: "terminal",
    icon: "💻",
    title: "Terminal Mode",
    description: "Open the Genesis command terminal.",
    action: () => {
      console.log("Open Terminal");
    },
  },
];

export default commands;
