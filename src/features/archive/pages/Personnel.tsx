import { personnel } from "../data/personnel";

import Panel from "@/shared/ui/Panel";
import SectionTitle from "@/shared/ui/SectionTitle";
import StatusBadge from "@/shared/ui/StatusBadge";

export default function Personnel() {
  return (
    <div className="space-y-8 p-10">
      <SectionTitle
        title="PERSONNEL RECORD"
        subtitle="Genesis Organization Secure Database"
      />

      <Panel className="p-8">
        <div className="grid grid-cols-[180px_1fr] gap-10">
          {/* Profile Placeholder */}
          <div className="flex aspect-square items-center justify-center rounded-lg border border-cyan-800 bg-cyan-950/20 font-mono text-cyan-600">
            PROFILE
          </div>

          {/* Details */}
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
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] border-b border-cyan-900 pb-2">
      <span className="text-cyan-600">{label}</span>

      <span>{value}</span>
    </div>
  );
}
