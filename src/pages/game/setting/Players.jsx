import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Players() {
  const [playerCount, setPlayerCount] = useState(6); // 기본값 6
  const [names, setNames] = useState(Array(4).fill(""));
  
  const handleNameChange = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };
  // 플레이어 수 바뀔 때 이름 배열도 재설정
  const updatePlayerCount = (count) => {
    setPlayerCount(count);
    setNames((prev) => {
      const newNames = [...prev];
      newNames.length = count;
      return newNames.map((name, i) => name || "");
    });
  };
  
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

      <div className="space-y-2 flex flex-col items-center">
        {Array.from({ length: playerCount }, (_, i) => (
          <input
            key={i}
            type="text"
            value={names[i] || ""}
            onChange={(e) => handleNameChange(i, e.target.value)}
            placeholder={`플레이어 ${i + 1} 이름`}
            className="border p-2 rounded w-full max-w-sm"
          />
        ))}
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
