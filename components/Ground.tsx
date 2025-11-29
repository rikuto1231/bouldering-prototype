"use client";

interface GroundProps {
  size?: number;
  color?: string;
}

export default function Ground({
  size = 10,
  color = "#4a4a4a",
}: GroundProps) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
