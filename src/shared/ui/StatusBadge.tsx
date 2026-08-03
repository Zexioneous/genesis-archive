type StatusBadgeProps = {
  label: string;
  status: string;
  color?: "green" | "cyan" | "yellow" | "red";
};

const colors = {
  green: {
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  cyan: {
    border: "border-cyan-500/40",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
    dot: "bg-cyan-300",
  },
  yellow: {
    border: "border-yellow-500/40",
    bg: "bg-yellow-500/10",
    text: "text-yellow-300",
    dot: "bg-yellow-300",
  },
  red: {
    border: "border-red-500/40",
    bg: "bg-red-500/10",
    text: "text-red-300",
    dot: "bg-red-300",
  },
};

export default function StatusBadge({
  label,
  status,
  color = "green",
}: StatusBadgeProps) {
  const theme = colors[color];

  return (
    <div
      className={`flex items-center gap-2 rounded-md border px-3 py-1 font-mono text-xs ${theme.border} ${theme.bg}`}
    >
      <span className="tracking-widest text-cyan-500 uppercase">{label}</span>

      <span className={`h-2 w-2 animate-pulse rounded-full ${theme.dot}`} />

      <span className={`font-semibold tracking-wide ${theme.text}`}>
        {status}
      </span>
    </div>
  );
}
