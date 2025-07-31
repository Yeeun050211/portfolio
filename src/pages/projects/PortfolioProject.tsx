const PortfolioProject = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">💼 Portfolio 제작: React를 이용한 웹사이트 개발</h1>
      <div className="flex gap-2 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded text-sm">React</span>
        <span className="bg-gray-100 px-2 py-1 rounded text-sm">Tailwind CSS</span>
      </div>
      <img src="/images/portfolio.png" alt="포트폴리오 웹사이트" className="rounded-lg mb-6" />

      <h2 className="text-xl font-semibold mb-2">📌 요약</h2>
      <ul className="list-disc list-inside mb-4">
        <li>React를 이용한 포트폴리오 웹사이트 개발</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">👤 역할</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Notion에 미리 웹사이트 디자인하기</li>
        <li>React를 이용한 웹사이트 개발</li>
        <li>사용자 경험 중심의 카드 그림자, 정렬 위치 튜닝</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">🕰️ 기간</h2>
      <p className="mb-4">2025.6 ~</p>
    </div>
  );
};

export default PortfolioProject;