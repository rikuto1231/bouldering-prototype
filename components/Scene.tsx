"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Wall from "./Wall";
import Ground from "./Ground";
import HoldList from "./HoldList";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 3, 8], fov: 50 }}
      style={{ width: "100%", height: "100vh" }}
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
    </Canvas>
  );
}
