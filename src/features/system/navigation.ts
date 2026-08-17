export type NavigationItem = {
  id: "astra" | "orbital";
  label: string;
};

const navigation: NavigationItem[] = [
  {
    id: "astra",
    label: "ASTRA",
  },
  {
    id: "orbital",
    label: "Orbital View",
  },
];

export default navigation;
