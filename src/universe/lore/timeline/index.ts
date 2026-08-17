import type { LoreEntry } from "../loreTypes";

const timeline: LoreEntry[] = [
  {
    id: "horizon-signal",
    category: "timeline",
    entityType: "event",

    title: "Horizon Signal",
    subtitle: "Pre-Exodus event",

    summary:
      "A pre-Exodus event on Earth that became the catalyst for the formation and departure of Genesis.",

    description:
      "The Horizon Signal occurred during the pre-Exodus era, while humanity still inhabited Earth. What the scientists witnessed in the event revealed what they interpreted as nothing but annihilation. The experience led them to conclude that humanity would inevitably face destruction if it continued to possess emotions. This conclusion became the foundation for the formation of Genesis and its eventual departure from Earth.",

    status: "historical",

    tags: [
      "horizon-signal",
      "pre-exodus",
      "earth",
      "genesis",
      "humanity",
      "exodus",
    ],

    relations: [
      {
        id: "genesis-organization",
        label: "Catalyst for formation",
        type: "related",
      },
    ],
  },
];

export default timeline;