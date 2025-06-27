import { Link } from "react-router-dom";
export default function CitizenTeam() {
  return (
    <div className="min-h-screen bg-black text-blue-300 p-8">
      <h2 className="text-2xl font-bold mb-8">시민팀 역할</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold">승리 조건:</h3>
          <p>
            모든 마피아팀과 중립 살인직을 처형하십시오.<br />
            시민팀이 최후의 생존 세력이 되어야 합니다.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">시민</h3>
          <p>
            당신은 특별한 능력은 없지만, 투표로 마피아를 처단할 수 있습니다.<br />
            토론과 추리를 통해 진실에 다가가십시오.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">의사</h3>
          <p>
            당신은 밤마다 한 명을 지정해 치료할 수 있습니다.<br />
            치료 대상이 그날 밤 공격당했다면, 생존하게 됩니다.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">경찰</h3>
          <p>
            당신은 밤마다 한 명을 조사해 그들이 살인직인지 아닌지 확인할 수 있습니다.<br />
            마피아 또는 중립 살인직이라면 살인직으로 표시됩니다.<br />
            하지만 정확한 직업명은 알 수 없습니다.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">군인</h3>
          <p>
            당신은 특수한 방어력을 지닌 시민입니다.<br />
            밤의 공격을 최대 2번까지 버틸 수 있습니다.<br />
            세 번째 공격을 받을 경우 사망합니다.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">정치인</h3>
          <p>
            당신은 투표권을 2장 보유한 강력한 영향력의 소유자입니다.<br />
            시민투표로는 제거되지 않으며, 오직 밤의 살해로만 죽습니다.<br />
            당신의 선택은 시민사회의 향방을 좌우합니다.
          </p>
        </section>

        {/* 다른 시민팀 역할도 여기에 추가 */}
      </div>

      <div className="text-center mt-10">
        <Link to="/roles/" className="text-green-300 underline">← 이전으로</Link>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="text-green-300 underline">← 처음으로</Link>
      </div>
    </div>
  );
}
