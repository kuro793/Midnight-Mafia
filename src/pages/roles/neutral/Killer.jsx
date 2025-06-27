import { Link } from "react-router-dom";

export default function NeutralKiller() {
  return (
    <div className="min-h-screen bg-black text-red-300 p-8">
      <h2 className="text-2xl font-bold mb-8">중립 살인직 역할</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold">공통 승리 조건:</h3>
          <p>
            특정 조건을 만족하면 단독 승리합니다.<br />
            시민팀, 마피아팀, 중립 평화직과도 협력하지 않습니다.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">연쇄 살인마</h3>
          <p>
            당신은 밤의 어둠 속에서 홀로 살인을 이어가는 광기 어린 존재입니다.<br />
            매일 밤 한 명을 살해할 수 있으며, 경찰 조사 시 50% 확률로 비살인직으로 위장됩니다.<br />
            당신의 칼날은 의사의 손길조차 막지 못합니다. 최후의 생존자가 된다면 단독 승리합니다.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">청부업자</h3>
          <p>
            당신은 계약에 따라 움직이는 냉혹한 살인자입니다.<br />
            매 판 시작 시 두 명의 목표가 주어지며, 이들을 직접 살해하면 단독 승리합니다.<br />
            단, 살인을 시도한 다음 밤에는 휴식이 필요해 살인을 할 수 없습니다.
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
