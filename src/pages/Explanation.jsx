// src/pages/Explanation.jsx
import { Link } from "react-router-dom";
import React from "react";

export default function Explanation() {
  return (
    <div className="min-h-screen bg-black text-green-400 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🕰️ 게임의 흐름</h1>

      <div className="max-w-2xl mx-auto space-y-4 text-lg">
        <p><strong>1. 밤</strong>: 대부분의 직업 능력을 사용하는 시간.</p>
        <p><strong>2. 새벽</strong>: 밤에 일어난 일이 모두에게 공지된다. 직업 활동은 없다.</p>
        <p><strong>3. 오전</strong>: 자유롭게 토론하며 정보를 교환한다.</p>
        <p><strong>4. 오후</strong>: 처형할 사람을 정하고, 찬반 투표를 진행한다.</p>
        <p><strong>5. 황혼</strong>: 투표 결과가 공개되고, 처형 여부가 발표된다. 직업 활동은 없다.</p>
        <p>이 과정을 반복하며 게임이 진행된다.</p>
      </div>

      <div className="text-center mt-10">
        <Link to="/" className="text-green-300 underline">← 처음으로</Link>
      </div>
    </div>
  );
}
