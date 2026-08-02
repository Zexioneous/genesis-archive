"use client";

import Personnel from "../archive/pages/Personnel";

import { useSystem } from "./SystemContext";

export default function Workspace() {
  const { activePage } = useSystem();

  switch (activePage) {
    case "personnel":
      return <Personnel />;

    default:
      return <Personnel />;
  }
}
