"use client";

import { HoldData } from "@/types";
import Hold from "./Hold";

// サンプルのホールドデータ
const sampleHolds: HoldData[] = [
  { id: "1", position: [-1, 1, 0.15], color: "#ff4444", shape: "sphere" },
  { id: "2", position: [0.5, 1.5, 0.15], color: "#44ff44", shape: "sphere" },
  { id: "3", position: [-0.5, 2.2, 0.15], color: "#4444ff", shape: "box" },
  { id: "4", position: [1, 2.8, 0.15], color: "#ffff44", shape: "sphere" },
  { id: "5", position: [-0.8, 3.5, 0.15], color: "#ff44ff", shape: "box" },
  { id: "6", position: [0.3, 4, 0.15], color: "#44ffff", shape: "sphere" },
];

export default function HoldList() {
  return (
    <>
      {sampleHolds.map((hold) => (
        <Hold key={hold.id} data={hold} />
      ))}
    </>
  );
}
