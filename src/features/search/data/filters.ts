export const filters = [
  "all",
  "personnel",
  "mission",
  "timeline",
  "document",
] as const;

export type SearchFilter = (typeof filters)[number];
