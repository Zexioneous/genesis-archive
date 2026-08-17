import type { LoreEntry } from "../loreTypes";

const locations: LoreEntry[] = [
  {
    id: "elysia-3",
    category: "location",
    entityType: "planet",

    title: "Elysia-3",
    subtitle: "Primary human colonization target",

    summary:
      "The third planet of the Helios Prime System and one of humanity's strongest candidates for a new world.",

    description:
      "Elysia-3 is the third planet in the Helios Prime System. Genesis identified the planet as the primary target for human colonization. Its environmental characteristics are remarkably similar to Earth, including a comparable seasonal system and a surface dominated by water. Genesis prepared its personnel for deployment to the planet through specialized education, training, and immersive environmental simulations. The initial exploration operation divided Elysia-3 into sectors, with Team E-7 assigned to Vespera, one of the least-mapped continents.",

    status: "active",

    tags: [
      "elysia-3",
      "planet",
      "colonization",
      "helio-prime-system",
      "genesis",
      "team-e-7",
      "vespera",
    ],

    facts: [
      {
        label: "Average global temperature",
        value: 18.7,
        unit: "°C",
      },
      {
        label: "Maximum temperature",
        value: 46,
        unit: "°C",
      },
      {
        label: "Minimum temperature",
        value: -61,
        unit: "°C",
      },
      {
        label: "Surface water",
        value: 71.3,
        unit: "%",
      },
      {
        label: "Land surface",
        value: 28.7,
        unit: "%",
      },
      {
        label: "Major oceans",
        value: 7,
      },
      {
        label: "Inland seas",
        value: 13,
      },
      {
        label: "Identified major rivers",
        value: 842,
      },
      {
        label: "Major lakes",
        value: 6300,
      },
      {
        label: "Major tectonic plates",
        value: 9,
      },
      {
        label: "Active volcanoes",
        value: 127,
      },
      {
        label: "Dormant volcanoes",
        value: 2183,
      },
      {
        label: "Identified flora species",
        value: 14372,
      },
      {
        label: "Identified fauna species",
        value: 3684,
      },
      {
        label: "Estimated undocumented species",
        value: 40000,
        unit: "+",
      },
    ],

    relations: [
      {
        id: "helios-prime",
        label: "Orbits",
        type: "orbits",
      },
      {
        id: "selene",
        label: "Primary natural satellite",
        type: "related",
      },
      {
        id: "nyx",
        label: "Secondary natural satellite",
        type: "related",
      },
      {
        id: "vespera",
        label: "Team E-7 operational region",
        type: "located-in",
      },
    ],
  },

  {
    id: "helios-prime-system",
    category: "location",
    entityType: "system",

    title: "Helios Prime System",
    subtitle: "Planetary system containing Elysia-3",

    summary:
      "The stellar system centered around Helios Prime and containing Elysia-3.",

    description:
      "The Helios Prime System is the planetary system containing Elysia-3. The system contains seven planets, with Elysia-3 occupying the third planetary orbit.",

    status: "active",

    tags: ["helios-prime", "stellar-system", "elysia-3", "seven-planets"],

    facts: [
      {
        label: "Known planets",
        value: 7,
      },
    ],

    relations: [
      {
        id: "helios-prime",
        label: "Central star",
        type: "related",
      },
      {
        id: "elysia-3",
        label: "Third planet",
        type: "related",
      },
    ],
  },

  {
    id: "helios-prime",
    category: "location",
    entityType: "star",

    title: "Helios Prime",
    subtitle: "G-class main-sequence star",

    summary:
      "The G-class main-sequence star at the center of the Elysia system.",

    description:
      "Helios Prime is the central star of the Elysia system and the star orbited by Elysia-3. It resembles Earth's Sun in appearance but is scientifically distinct. Its mass, radius, luminosity, and composition differ from those of the Sun. Its similarities to the Sun made it a familiar stellar reference for humanity's new world.",

    status: "active",

    tags: ["helios-prime", "star", "g-class", "main-sequence", "elysia-system"],

    facts: [
      {
        label: "Spectral class",
        value: "G",
      },
      {
        label: "Estimated age",
        value: 5.2,
        unit: "billion years",
      },
      {
        label: "Mass",
        value: 1.03,
        unit: "solar masses",
      },
      {
        label: "Radius",
        value: 1.01,
        unit: "solar radii",
      },
      {
        label: "Solar similarity",
        value: 97.8,
        unit: "%",
      },
    ],

    relations: [
      {
        id: "helios-prime-system",
        label: "Central star of",
        type: "part-of",
      },
      {
        id: "elysia-3",
        label: "Elysia-3 orbits this star",
        type: "related",
      },
    ],
  },

  {
    id: "vespera",
    category: "location",
    entityType: "continent",

    title: "Vespera",
    subtitle: "Least-mapped operational region",

    summary:
      "A western continent of Elysia-3 characterized by old mountain ranges, mist-filled valleys, and extensive forests.",

    description:
      "Vespera is one of the six major continents of Elysia-3. It lies in the western region of the planet and contains old mountain ranges, mist-filled valleys, and extensive forests. Its mapping coverage is among the lowest of the major continental regions. Team E-7 was assigned to Vespera during the initial exploration and mapping phase.",

    status: "active",

    tags: [
      "vespera",
      "continent",
      "elysia-3",
      "team-e-7",
      "exploration",
      "mapping",
    ],

    relations: [
      {
        id: "elysia-3",
        label: "Located on",
        type: "located-in",
      },
      {
        id: "team-e7",
        label: "Assigned exploration team",
        type: "related",
      },
    ],
  },

  {
    id: "aurelia",
    category: "location",
    entityType: "continent",

    title: "Aurelia",

    summary: "The largest continent of Elysia-3's northern hemisphere.",

    description:
      "Aurelia is the largest of Elysia-3's major continents in the northern hemisphere. It contains the planet's largest river systems and extensive fertile plains.",

    status: "active",

    tags: ["aurelia", "continent", "elysia-3"],

    relations: [
      {
        id: "elysia-3",
        label: "Located on",
        type: "located-in",
      },
    ],
  },

  {
    id: "nexus",
    category: "location",
    entityType: "continent",

    title: "Nexus",

    summary: "A continent with the highest recorded biodiversity on Elysia-3.",

    description:
      "Nexus is a major continent of Elysia-3 and contains the planet's highest recorded biodiversity. Much of the continent remains covered by forests and wilderness.",

    status: "active",

    tags: ["nexus", "continent", "elysia-3", "biodiversity"],

    relations: [
      {
        id: "elysia-3",
        label: "Located on",
        type: "located-in",
      },
    ],
  },

  {
    id: "helios-continent",
    category: "location",
    entityType: "continent",

    title: "Helios",
    subtitle: "Elysia-3 continent",

    summary:
      "A continent dominated by highlands, broad plains, and geological activity.",

    description:
      "Helios is one of Elysia-3's six major continents. Its terrain is dominated by highlands, broad plains, and significant geological activity.",

    status: "active",

    tags: ["helios", "continent", "elysia-3", "geology"],

    relations: [
      {
        id: "elysia-3",
        label: "Located on",
        type: "located-in",
      },
    ],
  },

  {
    id: "thalassa",
    category: "location",
    entityType: "continent",

    title: "Thalassa",

    subtitle: "Southern oceanic continent",

    summary:
      "A southern region composed of extensive landmasses and island groups.",

    description:
      "Thalassa is one of the six major continental regions of Elysia-3. It consists of extensive landmasses and island groups across the southern ocean.",

    status: "active",

    tags: ["thalassa", "continent", "elysia-3", "islands"],

    relations: [
      {
        id: "elysia-3",
        label: "Located on",
        type: "located-in",
      },
    ],
  },

  {
    id: "erebus",
    category: "location",
    entityType: "continent",

    title: "Erebus",

    subtitle: "Southern polar continent",

    summary:
      "The southern polar landmass of Elysia-3, largely covered by permanent ice.",

    description:
      "Erebus is the southern polar continent of Elysia-3. Almost the entire landmass is covered by permanent ice.",

    status: "active",

    tags: ["erebus", "continent", "elysia-3", "polar", "ice"],

    relations: [
      {
        id: "elysia-3",
        label: "Located on",
        type: "located-in",
      },
    ],
  },

  {
    id: "selene",
    category: "location",
    entityType: "moon",

    title: "Selene",
    subtitle: "Primary natural satellite of Elysia-3",

    summary:
      "The largest natural satellite of Elysia-3 and the dominant contributor to the planet's global tidal activity.",

    description:
      "Selene is the primary natural satellite of Elysia-3. It is the largest moon of the planet and contributes most of the planet's global tidal activity. Its surface appears significantly brighter than Nyx because of its stronger reflected light from Helios Prime.",

    status: "active",

    tags: ["selene", "moon", "elysia-3", "satellite", "tides"],

    facts: [
      {
        label: "Diameter",
        value: 2760,
        unit: "km",
      },
      {
        label: "Planetary relationship",
        value: "Primary natural satellite",
      },
    ],

    relations: [
      {
        id: "elysia-3",
        label: "Orbits",
        type: "orbits",
      },
    ],
  },

  {
    id: "nyx",
    category: "location",
    entityType: "moon",

    title: "Nyx",
    subtitle: "Secondary natural satellite of Elysia-3",

    summary:
      "The smaller and visually darker second natural satellite of Elysia-3.",

    description:
      "Nyx is the second natural satellite of Elysia-3. It is considerably smaller than Selene and reflects significantly less light. Current canon establishes Nyx only as the second moon of Elysia-3. No confirmed relationship between Nyx and The Watcher is established.",

    status: "active",

    tags: ["nyx", "moon", "elysia-3", "satellite", "secondary"],

    facts: [
      {
        label: "Diameter",
        value: 940,
        unit: "km",
      },
      {
        label: "Planetary relationship",
        value: "Secondary natural satellite",
      },
    ],

    relations: [
      {
        id: "elysia-3",
        label: "Orbits",
        type: "orbits",
      },
    ],
  },

  {
    id: "astraeus",
    category: "location",
    entityType: "ship",

    title: "Astraeus",
    subtitle: "Human habitat vessel",

    summary:
      "A colossal human vessel that functions as a home and artificial world for the civilization living aboard it.",

    description:
      "Astraeus is a colossal spacecraft and human habitat. To the people living within it, Astraeus functions as an entire world, containing habitat sectors, education facilities, research facilities, training areas, hangars, Genesis divisions, and other sectors necessary for human life. From outside, however, Astraeus appears as a vast machine drifting through interstellar space. Millions of habitat lights make it resemble an artificial constellation. Astraeus represents a home constructed by humanity after the loss of Earth as its original home.",

    status: "active",

    tags: ["astraeus", "ship", "habitat", "humanity", "genesis", "exodus"],

    relations: [
      {
        id: "genesis-organization",
        label: "Operated within Genesis civilization",
        type: "part-of",
      },
      {
        id: "astra",
        label: "Associated AI system",
        type: "related",
      },
      {
        id: "genesis-station",
        label: "Genesis mothership",
        type: "related",
      },
    ],
  },

  {
    id: "genesis-station",
    category: "location",
    entityType: "ship",

    title: "Genesis Station",
    subtitle: "Mothership of Astraeus",

    summary:
      "The spacecraft serving as the mothership associated with Astraeus and Genesis.",

    description:
      "Genesis Station is a spacecraft that serves as the mothership of Astraeus and is associated with the Genesis civilization.",

    status: "active",

    tags: ["genesis-station", "ship", "mothership", "genesis", "astraeus"],

    relations: [
      {
        id: "astraeus",
        label: "Mothership of",
        type: "related",
      },
      {
        id: "genesis-organization",
        label: "Associated with",
        type: "part-of",
      },
    ],
  },
];

export default locations;
