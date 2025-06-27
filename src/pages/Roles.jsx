import { Link } from "react-router-dom";

export default function Roles() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold mb-10">🧩 역할 소개</h1>
      
      <Link
        to="/roles/mafia"
        className="bg-red-900 px-6 py-3 rounded-xl hover:bg-red-800 transition"
      >
        🔫 마피아팀
      </Link>

      <Link
        to="/roles/citizen"
        className="bg-blue-900 px-6 py-3 rounded-xl hover:bg-blue-800 transition"
      >
        🛡️ 시민팀
      </Link>

      <Link
        to="/roles/neutral"
        className="bg-gray-700 px-6 py-3 rounded-xl hover:bg-gray-600 transition"
      >
        ⚖️ 중립
      </Link>
      <div className="text-center mt-10">
        <Link to="/" className="text-green-300 underline">← 처음으로</Link>
      </div>
    </div>
  );
}
