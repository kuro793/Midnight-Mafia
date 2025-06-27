import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold mb-10">🌙 Midnight Mafia</h1>

      <Link to="/explanation" className="bg-green-800 px-6 py-3 rounded-xl hover:bg-green-700 transition">
        게임 설명
      </Link>
      <Link to="/roles" className="bg-green-800 px-6 py-3 rounded-xl hover:bg-green-700 transition">
        직업 소개
      </Link>
      <Link to="/players" className="bg-green-800 px-6 py-3 rounded-xl hover:bg-green-700 transition">
        게임 시작
      </Link>
    </div>
  );
}
