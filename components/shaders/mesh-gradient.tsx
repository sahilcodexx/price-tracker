"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface MeshGradientProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function MeshGradient({
  children,
  className,
  speed = 0.17,
  intensity = 0.16,
}: MeshGradientProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
      <GrainGradient
        colors={["#eff6ff", "#bfdbfe", "#60a5fa"]}
        colorBack="#00000000"
        speed={speed}
        scale={0.57}
        rotation={-143}
        offsetX={0.2}
        offsetY={-0.30}
        softness={0.70}
        intensity={intensity}
        noise={0.20}
        shape="wave"
        style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "50%",
        zIndex: 0,
        }}
      />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}