export type NavigationItem = {
  id: "personnel" | "missions";
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
];

export default navigation;
