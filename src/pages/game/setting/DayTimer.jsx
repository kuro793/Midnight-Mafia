import { useState } from 'react';

export default function DayTimer() {
  const [dayTime, setDayTime] = useState(120); // 기본 120초 (2분)

  function handleConfirm() {
    if (dayTime < 30) {
      alert('30초 이상이어야 합니다.');
      return;
    }

    // 나중에 다음 화면으로 이동하거나 저장
    alert(`낮 시간: ${dayTime}초로 설정되었습니다.`);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl font-bold text-green-400 mb-6">낮 시간 설정</h1>

      <div className="flex flex-col items-center gap-4">
        <label className="text-lg">
          낮 시간 (초 단위): {dayTime}초
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
