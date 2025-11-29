"use client";

import { HoldData } from "@/types";

interface HoldProps {
  data: HoldData;
}

export default function Hold({ data }: HoldProps) {
  const { position, color, shape, size = 0.15 } = data;

  return (
    <mesh position={position}>
      {shape === "sphere" ? (
        <sphereGeometry args={[size, 16, 16]} />
      ) : (
        <boxGeometry args={[size * 2, size * 2, size]} />
      )}
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
