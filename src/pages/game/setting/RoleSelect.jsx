import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function RoleCounter({ role, count, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24">{role}</span>
      <button onClick={onDecrement} className="px-2 bg-gray-700 rounded">−</button>
      <span className="w-6 text-center">{count}</span>
      <button onClick={onIncrement} className="px-2 bg-gray-700 rounded">＋</button>
    </div>
  );
}

export default RoleCounter;

export default function RoleSelect() {
  const location = useLocation();
  const { playerCount } = location.state || {};

  const rolesConfig = [
    { key: 'mafia', label: '마피아', color: 'text-red-400' },
    { key: 'spy', label: '스파이', color: 'text-red-400' },
    { key: 'police', label: '경찰', color: 'text-blue-300' },
    { key: 'doctor', label: '의사', color: 'text-blue-300' },
    { key: 'soldier', label: '군인', color: 'text-blue-300' },
    { key: 'politician', label: '정치인', color: 'text-blue-300' },
    { key: 'survivor', label: '생존자', color: 'text-yellow-200' },
    { key: 'fool', label: '광대', color: 'text-yellow-200' },
    { key: 'serialKiller', label: '연쇄 살인마', color: 'text-purple-300' },
    { key: 'hitman', label: '청부업자', color: 'text-purple-300' },
    // 추가 예정
  ];

  const [roles, setRoles] = useState({
    mafia: 0,
    spy: 0,
    police: 0,
    doctor: 0,
    soldier: 0,
    politician: 0,
    survivor: 0,
    fool: 0,
    serialKiller: 0,
    hitman: 0,
    // 추후 추가 가능
  });

  return (
    <div className="min-h-screen bg-black">
      <h1 className="text-3xl font-bold text-green-400">직업 구성 설정</h1>
      {/* 맢팀red400 시팀blue300 중평yellow200 중살purple300 */}

      <div className="flex flex-col gap-2">
        {rolesConfig.map(({ key, label, color }) => (
          <div className="{color}">
            <RoleCounter
              key={key}
              role={label}
              count={roles[key]}
              onIncrement={() => updateRole(key, 1)}
              onDecrement={() => updateRole(key, -1)}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
}

