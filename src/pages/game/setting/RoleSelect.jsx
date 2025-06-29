import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function RoleCounter({ role, count, onIncrement, onDecrement, editable = true }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24">{role}</span>
      {editable ? (
        <>
          <button onClick={onDecrement} className="px-2 bg-gray-700 rounded">−</button>
          <span className="w-6 text-center">{count}</span>
          <button onClick={onIncrement} className="px-2 bg-gray-700 rounded">＋</button>
        </>
      ) : (
        <span className="text-sm text-gray-400">자동 결정</span>
      )}
    </div>
  );
}


export default function RoleSelect() {
  const location = useLocation();
  const { playerCount } = location.state || {};

  const [mafiaCount, setMafiaCount] = useState(0);
  const [spyCount, setSpyCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-green-400">직업 구성 설정</h1>
      {/* 맢팀red400 시팀blue300 중평yellow200 중살purple300 */}
      <section>
        <h2 className="text-2xl font-bold text-red-500">마피아팀</h2>
        <div className="ml-4 text-red-400">
          <RoleCounter
            role="마피아"
            count={mafiaCount}
            onIncrement={() => setMafiaCount((c) => Math.min(playerCount, c + 1))}
            onDecrement={() => setMafiaCount((c) => Math.max(0, c - 1))}
          />
          <RoleCounter
            role="스파이"
            count={spyCount}
            onIncrement={() => setSpyCount((c) => Math.min(playerCount, c + 1))}
            onDecrement={() => setSpyCount((c) => Math.max(0, c - 1))}
          />
        </div>
      </section>
    </>
  );
}

