const MolFormerProject = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">🧬 MolFormer: 분자 구조 변환기</h1>
      <div className="flex gap-2 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded text-sm">Python</span>
        <span className="bg-gray-100 px-2 py-1 rounded text-sm">딥러닝</span>
      </div>
      <img src="/images/MolFormer.png" alt="MolFormer" className="rounded-lg mb-8" />

      <h2 className="text-xl font-semibold mb-2">📌 요약</h2>
      <ul className="list-disc list-inside mb-4">
        <li>분자 구조를 입력받아 새로운 분자 구조 생성</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">👤 역할</h2>
      <ul className="list-disc list-inside mb-4">
        <li>데이터 전처리 및 모델 학습</li>
        <li>결과 분석 및 시각화</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">🕰️ 기간</h2>
      <p className="mb-4">2023.6 ~</p>

    </div>
  );
};

export default MolFormerProject;