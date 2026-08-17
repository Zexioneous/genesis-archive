import type { LoreEntry } from "../loreTypes";

const technologies: LoreEntry[] = [
  {
    id: "genesis-immersive-environment-program",
    category: "technology",
    entityType: "program",

    title: "Genesis Immersive Environment Program",
    subtitle: "Neural environmental simulation",

    summary:
      "A Genesis training program capable of simulating the environment of Elysia-3 through a neural interface.",

    description:
      "The Genesis Immersive Environment Program is a Genesis training system designed to prepare personnel for operations on Elysia-3. It can simulate the planet's environment through a neural interface, allowing Genesis personnel to experience conditions associated with their future operational sectors before deployment.",

    status: "active",

    tags: [
      "genesis",
      "technology",
      "training",
      "elysia-3",
      "neural-interface",
      "simulation",
    ],

    relations: [
      {
        id: "genesis-organization",
        label: "Developed and operated by",
        type: "part-of",
      },
      {
        id: "elysia-3",
        label: "Simulates environment of",
        type: "related",
      },
    ],
  },
];

export default technologies;
