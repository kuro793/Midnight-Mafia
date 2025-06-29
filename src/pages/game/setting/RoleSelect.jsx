import { useLocation } from 'react-router-dom';

export default function RoleSelect() {
  const location = useLocation();
  const { playerCount, names } = location.state || {};

  return (
    <div className="min-h-screen bg-black flex items-center text-green-400 p-6">
      <h1 className="text-2xl mb-4">직업 구성 설정</h1>
      <p>플레이어 수: {playerCount}</p>
      <ul>
        {names?.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
