import StatusBadge from "@/shared/ui/StatusBadge";
import Window from "@/shared/ui/Window";

import { Mission } from "../data/missionData";

type MissionCardProps = {
  mission: Mission;
};

export default function MissionCard({ mission }: MissionCardProps) {
  return (
    <Window title={mission.name}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-cyan-400">
            {mission.year}
          </span>

          <StatusBadge status={mission.status} />
        </div>

        <p className="text-sm leading-relaxed text-cyan-100/80">
          {mission.description}
        </p>
      </div>
    </Window>
  );
}
