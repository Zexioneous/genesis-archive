type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="rounded border border-emerald-500 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
      {status}
    </span>
  );
}
