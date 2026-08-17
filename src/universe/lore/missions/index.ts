import type { LoreEntry } from "../loreTypes";

const missions: LoreEntry[] = [
  {
    id: "elysia-3-initial-exploration",
    category: "mission",
    entityType: "mission",

    title: "Elysia-3 Initial Exploration",
    subtitle: "Planetary exploration and mapping operation",

    summary:
      "The large-scale Genesis operation to explore and map Elysia-3 before the initial colonization phase.",

    description:
      "Genesis prepared a large-scale initial exploration and mapping operation for Elysia-3. The planet was divided into operational sectors, with 312 Genesis teams designated for deployment to the surface during the initial phase. Team E-7 was assigned to Vespera, a western continent whose mapping coverage was among the lowest on the planet.",

    status: "active",

    tags: [
      "elysia-3",
      "exploration",
      "mapping",
      "colonization",
      "genesis",
      "team-e-7",
      "vespera",
    ],

    facts: [
      {
        label: "Initial deployment teams",
        value: 312,
      },
      {
        label: "Known Team E-7 region",
        value: "Vespera",
      },
    ],

    relations: [
      {
        id: "elysia-3",
        label: "Target world",
        type: "operates-in",
      },
      {
        id: "team-e7",
        label: "Participating team",
        type: "related",
      },
      {
        id: "vespera",
        label: "Team E-7 operational region",
        type: "operates-in",
      },
    ],
  },

  {
    id: "team-e7",
    category: "mission",
    entityType: "team",

    title: "Team E-7",
    subtitle: "Genesis Elysia-3 exploration team",

    summary:
      "A Genesis team assigned to Vespera during the initial exploration and mapping phase of Elysia-3.",

    description:
      "Team E-7 is one of the Genesis teams assigned to the initial Elysia-3 exploration operation. Its operational region is Vespera, one of the planet's least-mapped continental regions.",

    status: "active",

    tags: ["team-e-7", "genesis", "elysia-3", "vespera", "exploration"],

    relations: [
      {
        id: "elysia-3-initial-exploration",
        label: "Participates in",
        type: "part-of",
      },
      {
        id: "vespera",
        label: "Assigned to",
        type: "operates-in",
      },
      {
        id: "elysia-3",
        label: "Operating planet",
        type: "operates-in",
      },
    ],
  },
];

export default missions;
