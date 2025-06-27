export default function MafiaTeam() {
  return (
    <div className="min-h-screen bg-black text-red-400 p-8">
      <h2 className="text-2xl font-bold mb-8">마피아팀 역할</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold">승리 조건:</h3>
          <p>
            모든 중립 살인직을 살해하십시오.<br />
            마피아팀의 수가 생존한 플레이어의 과반수가 되어야 합니다.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">마피아</h3>
          <p>
            당신은 어둠 속에서 음모를 꾸미는 조직의 일원입니다.<br />
            밤마다 동료 마피아와 함께 한 명을 살해할 수 있습니다.<br />
            시민을 속이고 투표를 조작해 마피아팀의 승리를 이끄십시오.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">스파이</h3>
          <p>
            당신은 정보를 수집하는 음지의 전문가입니다.<br />
            매일 밤, 플레이어 한 명을 조사하여 그들의 직업을 알아낼 수 있습니다.<br />
            만약 조사 대상이 마피아일 경우, 그날 밤부터 접선에 성공하여 살해당하지 않습니다.<br />
            그 뒤로는 마피아팀과 암묵적으로 협력할 수 있습니다.
          </p>
        </section>

        {/* 다른 마피아팀 역할도 여기에 추가 */}
      </div>
      <div className="text-center mt-10">
        <a href="/roles/" className="text-green-300 underline">← 이전으로</a>
      </div>
      <div className="text-center mt-10">
        <a href="/" className="text-green-300 underline">← 처음으로</a>
      </div>
    </div>
  );
}
