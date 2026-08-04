import { useMemo, useState } from "react";

import { archive } from "../data/archive";

export function useSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return archive;

    return archive.filter((item) => {
      return (
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search)
      );
    });
  }, [query]);

  return {
    query,
    setQuery,
    results,
  };
}
