const PingPongProject = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">🏓 4축 선형 탁구 로봇 contest</h1>
      <div className="flex gap-2 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded text-sm">C/C++</span>
        <span className="bg-gray-100 px-2 py-1 rounded text-sm">하드웨어</span>
      </div>
      <img src="/images/pingpong.png" alt="탁구 로봇" className="rounded-lg mb-6" />

      <h2 className="text-xl font-semibold mb-2">📌 요약</h2>
      <ul className="list-disc list-inside mb-4">
        <li>4축 선형 탁구 로봇 제작</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">👤 역할</h2>
      <ul className="list-disc list-inside mb-4">
        <li>탁구공 찾기 및 궤적 예측 알고리즘 구현</li>
        <li>리니어 모터 제어 및 로봇 움직임 코드 작성</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">🕰️ 기간</h2>
      <p className="mb-4">2025.5 ~</p>

      <h2 className="text-xl font-semibold mb-2">🔧 하드웨어</h2>
      <img src="/images/hardware.png" alt="하드웨어 설명" className="rounded-lg" />
    </div>
  );
};

export default PingPongProject;