"use client";

import { useRef } from "react";
import { useFBX } from "@react-three/drei";
import { Group } from "three";

interface HumanModelProps {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

export default function HumanModel({
  position = [0, 0, 0.5],
  scale = 0.01,
  rotation = [0, Math.PI, 0], // 壁に向くように180度回転
}: HumanModelProps) {
  const groupRef = useRef<Group>(null);
  const fbx = useFBX("/models/ybot.fbx");

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <primitive
        object={fbx}
        scale={scale}
      />
    </group>
  );
}
