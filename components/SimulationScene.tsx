"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Wall from "./Wall";
import Ground from "./Ground";
import HoldList from "./HoldList";
import HumanModel from "./HumanModel";

export default function SimulationScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* ライト */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* カメラ操作 */}
      <OrbitControls />

      {/* 地面 */}
      <Ground />

      {/* ボルダリング壁 */}
      <Wall />

      {/* ホールド */}
      <HoldList />

      {/* 人型模型 */}
      <HumanModel position={[0, 0, 0.8]} />
    </Canvas>
  );
}
