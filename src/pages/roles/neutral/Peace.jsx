import { Link } from "react-router-dom";

export default function NeutralPeace() {
  return (
    <div className="min-h-screen bg-black text-yellow-200 p-8">
      <h2 className="text-2xl font-bold mb-8">중립 평화직 역할</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold">공통 승리 조건:</h3>
          <p>
            특정 조건을 만족하면 단독 승리합니다.<br />
            시민팀, 마피아팀, 중립 살인직과도 동맹하지 않습니다.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">생존자</h3>
          <p>
            당신은 살아남는 것이 유일한 목표입니다.<br />
            매 밤마다 공격을 방어할지 선택할 수 있으며, 방어는 총 3번까지만 가능합니다.<br />
            게임이 끝날 때 생존해 있다면, 그 어떤 팀보다 먼저 단독 승리합니다.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">광대</h3>
          <p>
            당신은 혼돈을 일으키는 역할입니다.<br />
            경찰 조사 시 50% 확률로 살인직으로 오인받습니다.<br />
            "투표"로 처형당하면 단독 승리합니다. 시민을 현혹하고 분열시키세요.
          </p>
        </section>
      </div>

      <div className="text-center mt-10">
        <Link to="/roles/neutral" className="text-green-300 underline">← 이전으로</Link>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="text-green-300 underline">← 처음으로</Link>
      </div>
    </div>
  );
}
