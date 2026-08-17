import type { LoreEntry } from "../loreTypes";

const factions: LoreEntry[] = [
  {
    id: "genesis-organization",
    category: "faction",
    entityType: "organization",

    title: "Genesis Organization",
    subtitle: "Human civilization and governing system",

    summary:
      "The human organization and civilization that became the central system governing human life after humanity left Earth.",

    description:
      "Genesis began as a collective of scientists who concluded that humanity's future must be dictated by Genesis itself. The organization emerged in the wake of the Horizon Signal during the pre-Exodus era, when humanity still inhabited Earth. The event led its scientists to conclude that humanity would inevitably face destruction if it continued to possess emotions. After witnessing what they interpreted as nothing but annihilation in the Horizon Signal, Genesis departed from Earth and eventually became the central system governing human civilization.",

    status: "active",

    tags: [
      "genesis",
      "humanity",
      "organization",
      "civilization",
      "pre-exodus",
      "earth",
      "horizon-signal",
      "colonization",
    ],

    aliases: ["Genesis", "Genesis Organization"],

    relations: [
      {
        id: "horizon-signal",
        label: "Formed in the wake of",
        type: "related",
      },
      {
        id: "elysia-3",
        label: "Primary colonization target",
        type: "operates-in",
      },
      {
        id: "genesis-station",
        label: "Associated mothership",
        type: "related",
      },
      {
        id: "astraeus",
        label: "Human habitat and vessel",
        type: "related",
      },
      {
        id: "astra",
        label: "Associated AI system",
        type: "related",
      },
    ],
  },
];

export default factions;
