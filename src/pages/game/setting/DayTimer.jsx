import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DayTimer() {
  const [dayTime, setDayTime] = useState(120); // 기본 120초 (2분)

  const navigate = useNavigate();

  function handleConfirm() {
    if (dayTime < 30) {
      alert('30초 이상이어야 합니다.');
      return;
    }

    const isConfirmed = window.confirm(
      `낮 시간을 ${dayTime}초로 설정할까요?\n이후에는 설정을 변경할 수 없습니다.`
    );

    if (!isConfirmed) return;

    // 설정 저장 (원하면 localStorage나 Context로)
    localStorage.setItem('dayTime', String(dayTime));

    // 직업 배정 화면으로 이동
    navigate('/assign-role', { replace: true }); // replace로 뒤로 못 가게
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl font-bold text-green-400 mb-6">오전 시간 설정</h1>

      <div className="flex flex-col items-center gap-4">
        <label className="text-lg">
          오전 시간 (초 단위): {dayTime}초
        </label>
        <input
          type="range"
          min={30}
          max={600}
          step={10}
          value={dayTime}
          onChange={(e) => setDayTime(Number(e.target.value))}
          className="w-64"
        />

        <button
          onClick={handleConfirm}
          className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded"
        >
          게임 시작
        </button>
      </div>
    </div>
  );
}
