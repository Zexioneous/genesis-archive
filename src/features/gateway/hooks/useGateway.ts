"use client";

import { useCallback, useState } from "react";

import type { GatewayFieldId } from "../data/gatewayFields";

export function useGateway() {
  const [selectedField, setSelectedField] = useState<GatewayFieldId | null>(
    null,
  );

  const selectField = useCallback((field: GatewayFieldId) => {
    setSelectedField(field);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedField(null);
  }, []);

  return {
    selectedField,
    selectField,
    clearSelection,
  };
}
