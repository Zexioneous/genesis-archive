export type SearchCategory = "personnel" | "mission" | "timeline" | "document";

export type SearchResult = {
  id: string;
  title: string;
  description: string;
  category: string;
  page:
    | "personnel"
    | "missions"
    | "timeline"
    | "technology"
    | "communications"
    | "galaxy";
};
