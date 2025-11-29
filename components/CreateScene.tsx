"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Wall from "./Wall";
import Ground from "./Ground";

interface CreateSceneProps {
  wallAngle: number;
}

export default function CreateScene({ wallAngle }: CreateSceneProps) {
  // wallAngle: 0 = 垂直, 正の値 = 前傾（オーバーハング）
  const angleInRadians = (wallAngle * Math.PI) / 180;

  return (
    <Canvas
      camera={{ position: [0, 3, 8], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* ライト */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* カメラ操作 */}
      <OrbitControls />

      {/* 地面 */}
      <Ground />

      {/* ボルダリング壁（傾斜対応） */}
      <group rotation={[angleInRadians, 0, 0]} position={[0, 0, 0]}>
        <Wall />
      </group>
    </Canvas>
  );
}
