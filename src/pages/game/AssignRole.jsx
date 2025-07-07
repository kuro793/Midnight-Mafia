import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AssignRole() {
  const location = useLocation();
  const navigate = useNavigate();
  const playerCount = location.state?.playerCount || 0;

  const [roles, setRoles] = useState([]);
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedRoles') || '{}');

    const roleList = Object.entries(saved).flatMap(([role, count]) =>
      Array(count).fill(role)
    );

    const shuffled = roleList.sort(() => Math.random() - 0.5);
    setRoles(shuffled);
  }, []);

  const handleNext = () => {
    if (current < roles.length - 1) {
      setRevealed(false);
      setCurrent(prev => prev + 1);
    } else {
      navigate('/gaming'); // 다음 화면으로 이동
    }
  };

  if (!roles.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-green-400">
        <p>직업 정보를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-green-400 p-4">
      <p className="mb-6 text-yellow-300 text-sm">🔊 미디어 볼륨을 올려주세요</p>

      <h2 className="text-2xl font-bold mb-4">
        {current + 1}번 플레이어
      </h2>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-lg"
        >
          역할 보기
        </button>
      ) : (
        <>
          <p className="text-xl my-6">
            당신의 역할은 <span className="font-bold text-white">{roles[current]}</span>입니다.
          </p>
          <button
            onClick={handleNext}
            className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded text-lg"
          >
            {current === roles.length - 1 ? '확인 완료 → 다음 화면으로' : '다음 플레이어로'}
          </button>
        </>
      )}
    </div>
  );
}