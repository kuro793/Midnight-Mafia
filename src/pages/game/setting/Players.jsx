import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Players() {
  const [playerCount, setPlayerCount] = useState(6); // 기본값 6
};
  
  const navigate = useNavigate();

  const increment = () => setPlayerCount(prev => Math.min(prev + 1, 20)); // 최대 20명
  const decrement = () => setPlayerCount(prev => Math.max(prev - 1, 4));  // 최소 4명

  const goToRoleSelect = () => {
    navigate('/role-select', {state: {playerCount}});
  };

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center gap-4 p-6">
      <div className="flex items-center gap-2">
        <label>플레이어 수:</label>
        <button onClick={decrement}>－</button>
        <input
          type="number"
          value={playerCount}
          onChange={(e) => setPlayerCount(Math.max(4, Math.min(20, Number(e.target.value))))}
          className="w-16 text-black text-center border rounded"
        />
        <button onClick={increment}>＋</button>
      </div>

      <button onClick={() => {goToRoleSelect();} className="mt-4 p-2 bg-green-800 rounded hover:bg-green-700 transition">
        직업 구성 설정하기
      </button>

      <button onClick={() => navigate('/')} className="mt-2 text-green-300 underline">
        ← 홈으로
      </button>
    </div>
  );
}
