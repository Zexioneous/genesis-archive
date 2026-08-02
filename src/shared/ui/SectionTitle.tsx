type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <h1 className="font-mono text-3xl font-bold tracking-[0.2em] text-cyan-300">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 font-mono text-sm text-cyan-700">{subtitle}</p>
      )}
    </div>
  );
}
