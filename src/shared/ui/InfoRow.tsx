type InfoRowProps = {
  label: string;
  value: string;
};

export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="bordr-cyan0900 grid grid-cols-[150px_1fr] border-b py-2">
      <span className="font-mono text-cyan-600 uppercase">{label}</span>

      <span className="font-mono text-cyan-100">{value}</span>
    </div>
  );
}
