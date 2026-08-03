"use client";

import MissionArchive from "../archive/missions/MissionArchive";
import Personnel from "../archive/pages/Personnel";

import { useSystem } from "./SystemContext";

export default function Workspace() {
  const { activePage } = useSystem();

  switch (activePage) {
    case "personnel":
      return <Personnel />;

    case "missions":
      return <MissionArchive />;

    default:
      return <Personnel />;
  }
}
