export default function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-5xl font-bold tracking-wider">Midnight Mafia</h1>
      <div className="space-y-4">
        <button className="px-6 py-3 border border-green-400 rounded hover:bg-green-400 hover:text-black transition">
          게임 설명
        </button>
        <button className="px-6 py-3 border border-green-400 rounded hover:bg-green-400 hover:text-black transition">
          직업 소개
        </button>
        <button className="px-6 py-3 border border-green-400 rounded hover:bg-green-400 hover:text-black transition">
          게임 시작
        </button>
      </div>
    </div>
  );
}