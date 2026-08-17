export type LoreCategory =
  | "archive"
  | "faction"
  | "location"
  | "mission"
  | "personnel"
  | "technology"
  | "timeline";

export type LoreEntityType =
  | "organization"
  | "planet"
  | "star"
  | "moon"
  | "ship"
  | "ai"
  | "continent"
  | "mission"
  | "program"
  | "event"
  | "team"
  | "system";

export type LoreStatus =
  | "active"
  | "inactive"
  | "historical"
  | "unknown"
  | "classified";

export type LoreFact = {
  label: string;
  value: string | number;
  unit?: string;
};

export type LoreRelation = {
  id: string;
  label: string;
  type: "related" | "located-in" | "part-of" | "orbits" | "operates-in";
};

export type LoreEntry = {
  id: string;
  category: LoreCategory;
  entityType: LoreEntityType;

  title: string;
  subtitle?: string;

  summary: string;
  description: string;

  status?: LoreStatus;

  tags: string[];

  facts?: LoreFact[];

  aliases?: string[];

  relations?: LoreRelation[];
};