import Image from "next/image";

type GenesisLogoProps = {
  size?: number;
};

export default function GenesisLogo({ size = 96 }: GenesisLogoProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="flex items-center justify-center"
    >
      <Image
        src="/images/genesis-logo.png"
        alt="Genesis Organization"
        width={size}
        height={size}
        className="h-full w-full object-contain drop-shadow-[0_0_16px_rgba(34,211,238,0.8)] transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_24px_rgba(34,211,238,1)]"
        priority
      />
    </div>
  );
}
