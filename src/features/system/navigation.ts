export type NavigationItem = {
  id: "personnel" | "missions" | "orbital";
  label: string;
};

const navigation: NavigationItem[] = [
  {
    id: "personnel",
    label: "Personnel Record",
  },
  {
    id: "missions",
    label: "Mission Archive",
  },
  {
    id: "orbital",
    label: "Orbital View",
  },
];

export default navigation;
