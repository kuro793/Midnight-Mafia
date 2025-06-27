import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Players() {
  const [playerCount, setPlayerCount] = useState(6); // 기본값 6
  const navigate = useNavigate();

  const increment = () => setPlayerCount(prev => Math.min(prev + 1, 20)); // 최대 20명
  const decrement = () => setPlayerCount(prev => Math.max(prev - 1, 4));  // 최소 4명

  const goToRoleSelect = () => {
    // playerCount를 전역 상태에 저장하는 로직 필요
    navigate('/role-select');
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="flex items-center gap-2">
        <label>플레이어 수:</label>
        <input
          type="number"
          value={playerCount}
          onChange={(e) => setPlayerCount(Math.max(3, Math.min(20, Number(e.target.value))))}
          className="w-16 text-center border rounded"
        />
        <button onClick={increment}>＋</button>
        <button onClick={decrement}>－</button>
      </div>

      <button onClick={goToRoleSelect} className="mt-4 p-2 bg-blue-500 text-white rounded">
        직업 구성 설정하기
      </button>

      <button onClick={() => navigate('/')} className="mt-2 text-gray-500 underline">
        홈으로
      </button>
    </div>
  );
}
