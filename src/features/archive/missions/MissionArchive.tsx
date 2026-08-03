import missionData from "../data/missionData";
import MissionCard from "./MissionCard";

export default function MissionArchive() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="font-mono text-3xl text-cyan-300">Mission Archive</h1>

        <p className="mt-2 text-cyan-500">
          Official records of Genesis Organization missions.
        </p>
      </div>

      <div className="space-y-6">
        {missionData.map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>
    </section>
  );
}
