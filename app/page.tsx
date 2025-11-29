import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-2xl font-bold text-white mb-12">
        ボルダリングムーブ設計
      </h1>

      <div className="w-full max-w-xs flex flex-col gap-4">
        <Link
          href="/simulation"
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl text-center transition-colors"
        >
          ボルダリングシミュレーション
        </Link>

        <Link
          href="/create"
          className="w-full py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl text-center transition-colors"
        >
          課題作成
        </Link>

        <Link
          href="/view"
          className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-xl text-center transition-colors"
        >
          ボルダリング確認
        </Link>
      </div>
    </main>
  );
}
