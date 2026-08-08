"use client";

const stars = [
  { left: 8, top: 12, size: 2, delay: "0s", duration: "4s" },
  { left: 16, top: 25, size: 1, delay: "1.2s", duration: "5s" },
  { left: 24, top: 10, size: 2, delay: "2s", duration: "4.5s" },
  { left: 33, top: 18, size: 1, delay: "0.5s", duration: "6s" },
  { left: 42, top: 31, size: 2, delay: "2.5s", duration: "5s" },
  { left: 51, top: 14, size: 1, delay: "1.5s", duration: "4s" },
  { left: 61, top: 24, size: 2, delay: "3s", duration: "5.5s" },
  { left: 72, top: 11, size: 1, delay: "0.8s", duration: "4.5s" },
  { left: 81, top: 28, size: 2, delay: "2.2s", duration: "6s" },
  { left: 91, top: 17, size: 1, delay: "1s", duration: "5s" },

  { left: 12, top: 48, size: 1, delay: "2s", duration: "5s" },
  { left: 28, top: 55, size: 2, delay: "0.3s", duration: "4.5s" },
  { left: 45, top: 49, size: 1, delay: "1.8s", duration: "6s" },
  { left: 57, top: 62, size: 2, delay: "2.7s", duration: "5s" },
  { left: 69, top: 52, size: 1, delay: "0.9s", duration: "4s" },
  { left: 87, top: 46, size: 2, delay: "1.4s", duration: "5.5s" },

  { left: 7, top: 78, size: 2, delay: "2.4s", duration: "5s" },
  { left: 21, top: 86, size: 1, delay: "0.7s", duration: "4.5s" },
  { left: 38, top: 76, size: 1, delay: "1.9s", duration: "6s" },
  { left: 54, top: 88, size: 2, delay: "3.1s", duration: "5s" },
  { left: 67, top: 79, size: 1, delay: "1.1s", duration: "4s" },
  { left: 78, top: 91, size: 2, delay: "2.1s", duration: "5.5s" },
  { left: 94, top: 76, size: 1, delay: "0.4s", duration: "4.5s" },
];

export default function AnimatedStars() {
  return (
    <div className="absolute inset-0">
      {stars.map((star, index) => (
        <span
          key={index}
          className="genesis-star absolute rounded-full bg-cyan-100"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
