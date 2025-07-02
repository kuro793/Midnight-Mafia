import { useState } from 'react';
import { useLocation } from 'react-router-dom';

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
      {/*<section>
        <h2 className="text-2xl font-bold text-red-500">마피아팀</h2>
        <div className="ml-4 text-red-400">
          <RoleCounter
            role="마피아"
            count={mafiaCount}
            onIncrement={() => setMafiaCount((c) => Math.min(playerCount, c + 1))}
            onDecrement={() => setMafiaCount((c) => Math.max(0, c - 1))}
          />
        </div>
      </section>*/}

      {roleConfig.map
      
    </div>
  );
}

