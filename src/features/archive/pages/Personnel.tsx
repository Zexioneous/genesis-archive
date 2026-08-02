import { personnel } from "../data/personnel";

import InfoRow from "@/shared/ui/InfoRow";
import Panel from "@/shared/ui/Panel";
import StatusBadge from "@/shared/ui/StatusBadge";
import Window from "@/shared/ui/Window";

export default function Personnel() {
  return (
    <div className="p-10">
      <Window title="Personnel Dossier">
        <Panel className="p-8">
          <div className="grid grid-cols-[180px_1fr] gap-10">
            {/* Profile Placeholder */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-44 w-44 items-center justify-center rounded-lg border border-cyan-700 bg-cyan-950/20">
                <span className="font-mono text-cyan-600">NO IMAGE</span>
              </div>

              <div className="text-center font-mono">
                <p className="text-xs text-cyan-600">GENESIS ID</p>

                <p className="text-cyan-300">G-0001</p>
              </div>
            </div>

            {/* Information */}
            <div className="space-y-4 font-mono">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl text-cyan-200">{personnel.codename}</h2>

                <StatusBadge status={personnel.status} />
              </div>

              <InfoRow label="Name" value={personnel.name} />
              <InfoRow label="Role" value={personnel.role} />
              <InfoRow label="Division" value={personnel.division} />
              <InfoRow label="Assignment" value={personnel.assignment} />
              <InfoRow label="Location" value={personnel.location} />
              <InfoRow label="Clearance" value={personnel.clearance} />
            </div>
          </div>
        </Panel>

        <Panel className="p-8">
          <h3 className="mb-4 font-mono text-xl text-cyan-300">
            Psychological Evaluation
          </h3>

          <p className="font-mono leading-8 text-cyan-100">
            {personnel.evaluation}
          </p>
        </Panel>
      </Window>
    </div>
  );
}
