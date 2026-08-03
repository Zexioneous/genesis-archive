"use client";

import NotificationContainer from "@/features/notifications/NotificationContainer";
import { NotificationProvider } from "@/features/notifications/NotificationContext";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Workspace from "./components/Workspace";
import { SystemProvider } from "./context/SystemContext";

export default function GenesisSystem() {
  return (
    <SystemProvider>
      <NotificationProvider>
        <NotificationContainer />

        <main className="flex h-screen bg-black text-cyan-400">
          <Sidebar />

          <section className="flex flex-1 flex-col">
            <TopBar />
            <Workspace />
          </section>
        </main>
      </NotificationProvider>
    </SystemProvider>
  );
}
