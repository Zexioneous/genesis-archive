import bootData from "./bootData";

export default function BootSequence() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-cyan-400">
      <div className="space-y-2 font-mono text-lg">
        {bootData.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </main>
  );
}