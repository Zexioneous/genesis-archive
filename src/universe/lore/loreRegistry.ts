import type { LoreCategory, LoreEntry } from "./loreTypes";

/**
 * ==================================================
 * LORE REGISTRY
 * ==================================================
 *
 * Central registry for the Genesis universe.
 *
 * Other systems should eventually read lore through
 * this registry instead of importing individual lore
 * files directly.
 *
 * This keeps:
 *
 * Archive
 * Search
 * Terminal
 * ASTRA
 * Easter Eggs
 *
 * connected to the same source of truth.
 */

const registry = new Map<string, LoreEntry>();

/**
 * Create a stable registry key.
 */
function createKey(category: LoreCategory, id: string) {
  return `${category}:${id}`;
}

/**
 * Register one lore entry.
 */
export function registerLore(entry: LoreEntry) {
  const key = createKey(entry.category, entry.id);

  registry.set(key, entry);

  return entry;
}

/**
 * Register multiple lore entries.
 */
export function registerLoreBatch(entries: LoreEntry[]) {
  entries.forEach(registerLore);

  return entries;
}

/**
 * Retrieve one lore entry.
 */
export function getLore(
  category: LoreCategory,
  id: string,
): LoreEntry | undefined {
  return registry.get(createKey(category, id));
}

/**
 * Retrieve all lore entries in a category.
 */
export function getLoreByCategory(category: LoreCategory): LoreEntry[] {
  const entries: LoreEntry[] = [];

  registry.forEach((entry) => {
    if (entry.category === category) {
      entries.push(entry);
    }
  });

  return entries;
}

/**
 * Retrieve every registered lore entry.
 */
export function getAllLore(): LoreEntry[] {
  return Array.from(registry.values());
}

/**
 * Search lore by title, summary, description,
 * tags, or ID.
 */
export function searchLore(query: string): LoreEntry[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return getAllLore().filter((entry) => {
    const searchableText = [
      entry.id,
      entry.title,
      entry.summary,
      entry.description ?? "",
      ...(entry.tags ?? []),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

/**
 * Check whether a lore entry exists.
 */
export function hasLore(category: LoreCategory, id: string): boolean {
  return registry.has(createKey(category, id));
}

/**
 * Remove a lore entry.
 */
export function unregisterLore(category: LoreCategory, id: string) {
  return registry.delete(createKey(category, id));
}

/**
 * Clear the entire registry.
 *
 * Primarily useful for development/testing.
 */
export function clearLoreRegistry() {
  registry.clear();
}
