import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RoleCounter({ role, count, onIncrement, onDecrement, auto = false }) {
  return (
    <div className="flex items-center mb-6">
      <span className="w-24">{role}</span>
      {auto ? (
        <>
          <button disabled className="px-2 opacity-0 rounded">−</button>
          <span className="w-6 text-center">{count}</span>
          <button disabled className="px-2 opacity-0 rounded">＋</button>
        </>
      ) : (
        <>
          <button onClick={onDecrement} className="px-2 bg-gray-700 rounded">−</button>
          <span className="w-6 text-center">{count}</span>
          <button onClick={onIncrement} className="px-2 bg-gray-700 rounded">＋</button>
        </>
      )}
    </div>
  );
}

export default function RoleSelect() {
  const location = useLocation();
  const { playerCount } = location.state || {};

  const rolesConfig = [
    { key: 'mafia', label: '마피아', color: 'text-red-400', team: '마피아팀' },
    { key: 'spy', label: '스파이', color: 'text-red-400', team: '마피아팀' },
    { key: 'citizen', label: '시민', color: 'text-blue-300', team: '시민팀', auto: true },
    { key: 'police', label: '경찰', color: 'text-blue-300', team: '시민팀' },
    { key: 'doctor', label: '의사', color: 'text-blue-300', team: '시민팀' },
    { key: 'soldier', label: '군인', color: 'text-blue-300', team: '시민팀' },
    { key: 'politician', label: '정치인', color: 'text-blue-300', team: '시민팀' },
    { key: 'survivor', label: '생존자', color: 'text-yellow-200', team: '중립 평화직' },
    { key: 'fool', label: '광대', color: 'text-yellow-200', team: '중립 평화직' },
    { key: 'serialKiller', label: '연쇄 살인마', color: 'text-purple-300', team: '중립 살인직' },
    { key: 'hitman', label: '청부업자', color: 'text-purple-300', team: '중립 살인직' },
  ];

  const [roles, setRoles] = useState(() => {
    const saved = localStorage.getItem('savedRoles');
    return saved ? JSON.parse(saved) : {
      // 마피아팀
      mafia: 0,
      spy: 0,
      // 시민팀
      police: 0,
      doctor: 0,
      soldier: 0,
      politician: 0,
      // 시민 (자동)
      citizen: 0,
      // 중립 평화직
      survivor: 0,
      fool: 0,
      // 중립 살인직
      serialKiller: 0,
      hitman: 0,
    };
  });

  function updateRole(key, delta, max) {
    setRoles(prev => {
      const current = prev[key];
      const next = current + delta;

      // 증가할 때는 총합을 체크, 감소는 자유
      if (delta > 0 && (Object.values(prev).reduce((a, b) => a + b, 0) >= max || next > max)) return prev;

      const updated = {
        ...prev,
        [key]: Math.max(0, next),
      };

      const totalWithoutCitizen = Object.entries(updated)
        .filter(([k]) => k !== 'citizen')
        .reduce((sum, [, count]) => sum + count, 0);

      updated.citizen = Math.max(0, max - totalWithoutCitizen);

      return updated;
    });
  }

  useEffect(() => {
    localStorage.setItem('savedRoles', JSON.stringify(roles));
  }, [roles]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-3xl font-bold text-green-400 gap-2">직업 구성 설정</h1>

      <div className="flex flex-col gap-2">
        {[...new Set(rolesConfig.map(r => r.team))].map(team => (
          <div key={team} className="mb-4">
            <h2 className={`text-2xl font-bold ${rolesConfig.find(r => r.team === team)?.color} mb-2`}>{team}</h2>
            <div className="flex flex-col gap-2">
              {rolesConfig
                .filter(r => r.team === team)
                .map(({ key, label, color, auto }) => (
                  <div key={key} className={color}>
                    <RoleCounter
                      role={label}
                      count={roles[key]}
                      onIncrement={() => !auto && updateRole(key, 1, playerCount)}
                      onDecrement={() => !auto && updateRole(key, -1, playerCount)}
                      auto={auto}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}

      </div>
      
    </div>
  );
}

