import { Link } from "react-router-dom";

export default function NeutralTeam() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold mb-10">⚖️ 중립 직업</h1>

      <Link
        to="/roles/neutral/peace"
        className="bg-yellow-800 px-6 py-3 rounded-xl hover:bg-yellow-700 transition"
      >
        🕊️ 중립 평화직
      </Link>

      <Link
        to="/roles/neutral/killer"
        className="bg-purple-800 px-6 py-3 rounded-xl hover:bg-purple-700 transition"
      >
        💀 중립 살인직
      </Link>

      <div className="text-center mt-10">
        <Link to="/roles" className="text-green-300 underline">← 이전으로</Link>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="text-green-300 underline">← 처음으로</Link>
      </div>
    </div>
  );
}
