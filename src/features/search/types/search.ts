export type SearchCategory = "personnel" | "mission" | "timeline" | "document";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
}
