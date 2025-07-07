import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PreGaming() {
  const navigate = useNavigate();

  useEffect(() => {
    const message = '이제부터 음성 안내가 시작됩니다. 미디어 볼륨을 적당히 조절해 주세요.';
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'ko-KR';
    speechSynthesis.speak(utterance);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-green-400 p-4">
      <h1 className="text-xl mb-6 text-yellow-300">
        🎧 음성 안내를 들을 수 있도록 미디어 볼륨을 적당히 조절해 주세요.
      </h1>
      <button
        onClick={() => navigate('/assign-role')}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-lg"
      >
        다음으로 →
      </button>
    </div>
  );
}