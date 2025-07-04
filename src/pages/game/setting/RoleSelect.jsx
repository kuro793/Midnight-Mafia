import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const location = useLocation();
  const { playerCount } = location.state || {};

  function handleConfirm() {
    const roleSum = Object.entries(roles)
      .filter(([, count]) => count > 0)
      .map(([key, count]) => {
        const roleLabel = rolesConfig.find(r => r.key === key)?.label || key;
        return `${roleLabel} ${count}명`;
      })
      .join('\n');
    const confirmed = window.confirm(`다음 직업 구성으로 진행하시겠습니까?\n\n${roleSum}\n\n이 화면을 지나면 다시 돌아올 수 없습니다.`);
    if (confirmed) navigate('/day-timer');
  }

  const rolesConfig = [
    { key: 'mafia', label: '마피아', color: 'text-red-400', team: '마피아팀' },
    { key: 'spy', label: '스파이', color: 'text-red-400', team: '마피아팀' },
    { key: 'police', label: '경찰', color: 'text-blue-300', team: '시민팀' },
    { key: 'doctor', label: '의사', color: 'text-blue-300', team: '시민팀' },
    { key: 'soldier', label: '군인', color: 'text-blue-300', team: '시민팀' },
    { key: 'politician', label: '정치인', color: 'text-blue-300', team: '시민팀' },
    { key: 'citizen', label: '시민', color: 'text-blue-300', team: '시민팀', auto: true },
    { key: 'survivor', label: '생존자', color: 'text-yellow-200', team: '중립 평화직' },
    { key: 'fool', label: '광대', color: 'text-yellow-200', team: '중립 평화직' },
    { key: 'serialKiller', label: '연쇄 살인마', color: 'text-purple-300', team: '중립 살인직' },
    { key: 'hitman', label: '청부업자', color: 'text-purple-300', team: '중립 살인직' },
  ];

  const [roles, setRoles] = useState(() => {
    const saved = localStorage.getItem('savedRoles');
    if (saved) {
      const parsed = JSON.parse(saved);

      const totalWithoutCitizen = Object.entries(parsed)
        .filter(([k]) => k !== 'citizen')
        .reduce((sum, [, count]) => sum + count, 0);

      if (totalWithoutCitizen <= playerCount) {
        parsed.citizen = playerCount - totalWithoutCitizen;
        return parsed;
      }
    }

    // 초기값
    return {
      // 마피아팀
      mafia: 0,
      spy: 0,
      // 시민팀
      police: 0,
      doctor: 0,
      soldier: 0,
      politician: 0,
      // 시민
      citizen: playerCount ?? 0,
      //중립 평화직
      survivor: 0,
      fool: 0,
      //중립 살인직
      serialKiller: 0,
      hitman: 0,
    };
  });

  function updateRole(key, delta, max) {
    setRoles(prev => {
      const newRoles = {
        ...prev,
        [key]: Math.max(0, prev[key] + delta),
      };

      const totalWithoutCitizen = Object.entries(newRoles)
        .filter(([k]) => k !== 'citizen')
        .reduce((sum, [, count]) => sum + count, 0);

      if (totalWithoutCitizen > max || newRoles[key] < 0) return prev;

      newRoles.citizen = max - totalWithoutCitizen;

      return newRoles;
    });
  }

  useEffect(() => {
    localStorage.setItem('savedRoles', JSON.stringify(roles));
  }, [roles]);

  useEffect(() => {
    setRoles(prev => {
      const totalWithoutCitizen = Object.entries(prev)
        .filter(([k]) => k !== 'citizen')
        .reduce((sum, [, count]) => sum + count, 0);

      const fixedCitizen = Math.max(0, playerCount - totalWithoutCitizen);

      return {
        ...prev,
        citizen: fixedCitizen,
      };
    });
  }, [playerCount]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-3xl font-bold text-green-400 my-6">직업 구성 설정</h1>

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
      
      <button onClick={handleConfirm} className="mt-4 p-2 bg-green-800 text-green-400 rounded hover:bg-green-700 transition">
        낮 시간 결정하기
      </button>

      <button onClick={() => navigate('/players')} className="mt-6 text-green-300 underline">
        ← 이전으로
      </button>

      <button onClick={() => navigate('/')} className="mt-6 text-green-300 underline">
        ← 홈으로
      </button>

    </div>
  );
}

