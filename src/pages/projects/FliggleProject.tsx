const FliggleProject = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">🐾 Fliggle: Flutter를 이용한 SNS 개발</h1>
      <div className="flex gap-2 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded text-sm">Flutter</span>
        <span className="bg-gray-100 px-2 py-1 rounded text-sm">Dart</span>
        <span className="bg-gray-100 px-2 py-1 rounded text-sm">Figma</span>
      </div>
      <img src="/images/fliggle.png" alt="Fliggle" className="rounded-lg mb-6" />

      <h2 className="text-xl font-semibold mb-2">📌 요약</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Figma로 디자인한 후 Flutter를 이용해 클론 코딩</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">⚒️ 사용한 툴</h2>
      <ul className="list-disc list-inside mb-4">
        <li>- 디자인 툴: Figma</li>
        <li>- 프로그래밍 언어 / 프레임워크: Flutter, Dart</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">🕰️ 기간</h2>
      <p className="mb-4">2025.6 ~</p>
      
    </div>
  );
};

export default FliggleProject;