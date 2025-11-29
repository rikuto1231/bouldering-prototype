"use client";

import { useState } from "react";
import Link from "next/link";
import CreateScene from "@/components/CreateScene";

export default function CreatePage() {
  const [wallAngle, setWallAngle] = useState(0);

  return (
    <div className="h-screen flex flex-col bg-zinc-900">
      {/* ヘッダー */}
      <header className="flex items-center justify-between px-4 py-3 bg-zinc-800">
        <Link href="/" className="text-white text-sm">
          ← 戻る
        </Link>
        <h1 className="text-white font-semibold">課題作成</h1>
        <div className="w-12" />
      </header>

      {/* 3Dシーン */}
      <div className="flex-1">
        <CreateScene wallAngle={wallAngle} />
      </div>

      {/* コントロールパネル */}
      <div className="bg-zinc-800 px-4 py-4">
        {/* 壁の傾斜スライダー */}
        <div className="mb-4">
          <label className="text-white text-sm block mb-2">
            壁の傾斜: {wallAngle}°
          </label>
          <input
            type="range"
            min="-30"
            max="45"
            value={wallAngle}
            onChange={(e) => setWallAngle(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-zinc-400 mt-1">
            <span>スラブ(-30°)</span>
            <span>垂直(0°)</span>
            <span>前傾(45°)</span>
          </div>
        </div>

        {/* ホールド追加ボタン（後で実装） */}
        <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg">
          ホールドを追加
        </button>
      </div>
    </div>
  );
}
