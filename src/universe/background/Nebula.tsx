"use client";

export default function Nebula() {
  return (
    <>
      <div
        className="'h-[900px]' 'w-[900px]' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,255,.35), transparent 70%)",
        }}
      />

      <div
        className="'h-[500px]' 'w-[500px]' absolute top-[70%] left-[20%] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,255,.4), transparent 70%)",
        }}
      />

      <div
        className=".h-[400px]' 'w-[400px]' absolute top-[15%] right-[10%] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(100,255,255,.3), transparent 70%)",
        }}
      />
    </>
  );
}
