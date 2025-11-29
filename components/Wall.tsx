"use client";

interface WallProps {
  width?: number;
  height?: number;
  depth?: number;
  color?: string;
}

export default function Wall({
  width = 4,
  height = 5,
  depth = 0.2,
  color = "#8B7355",
}: WallProps) {
  return (
    <mesh position={[0, height / 2, 0]}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
