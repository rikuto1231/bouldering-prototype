"use client";

import Link from "next/link";
import SimulationScene from "@/components/SimulationScene";

export default function SimulationPage() {
  return (
    <div className="h-screen flex flex-col bg-zinc-900">
      {/* ヘッダー */}
      <header className="flex items-center justify-between px-4 py-3 bg-zinc-800">
        <Link href="/" className="text-white text-sm">
          ← 戻る
        </Link>
        <h1 className="text-white font-semibold">ムーブシミュレーション</h1>
        <div className="w-12" />
      </header>

      {/* 3Dシーン */}
      <div className="flex-1">
        <SimulationScene />
      </div>

      {/* コントロールパネル */}
      <div className="bg-zinc-800 px-4 py-4">
        <p className="text-zinc-400 text-sm text-center mb-3">
          人型模型を操作してムーブを設計
        </p>
        <div className="flex gap-2">
          <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm">
            左手
          </button>
          <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm">
            右手
          </button>
          <button className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-sm">
            左足
          </button>
          <button className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-sm">
            右足
          </button>
        </div>
      </div>
    </div>
  );
}
