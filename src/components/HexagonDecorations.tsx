import React from "react";

export function HexagonDecorations() {
  return (
    <div className="hexagon-decorations absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Top right large hexagon */}
      <svg
        className="absolute top-10 right-10 w-72 h-72 opacity-25"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="100,10 180,55 180,145 100,190 20,145 20,55"
          stroke="#00e676"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <polygon
          points="100,30 160,65 160,135 100,170 40,135 40,65"
          stroke="#00e676"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>

      {/* Top left subtle hexagon */}
      <svg
        className="absolute top-32 left-8 w-44 h-44 opacity-20"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="100,10 180,55 180,145 100,190 20,145 20,55"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
      </svg>

      {/* Mid left geometric zigzag */}
      <svg
        className="absolute top-[480px] left-12 w-28 h-12 opacity-30"
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 5,20 L 20,5 L 35,35 L 50,5 L 65,35 L 80,5 L 95,20"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Hero center right dot grid */}
      <div className="absolute top-20 right-[420px] grid grid-cols-5 gap-3 opacity-25">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#00e676]" />
        ))}
      </div>

      {/* Right side background green glow */}
      <div
        className="absolute -top-40 right-0 w-[550px] h-[750px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 230, 118, 0.22) 0%, rgba(0, 230, 118, 0.05) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

export function DotMatrix({ className = "", dots = 24, color = "#00e676" }: { className?: string; dots?: number; color?: string }) {
  return (
    <div className={`grid grid-cols-6 gap-2.5 pointer-events-none opacity-30 ${className}`}>
      {Array.from({ length: dots }).map((_, i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
