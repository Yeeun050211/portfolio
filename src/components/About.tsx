import profileImage from "../assets/profile.png";

const About = () => {
  return (
    <div className="relative">
      {/* 상단 살구색 배경 */}
      <div className="bg-[#fff4ec] h-[140px]"></div>

      {/* 🌱 + 제목을 경계에 걸쳐 겹치게 absolute로 배치 */}
      <div className="absolute left-20 top-[150px] flex items-center gap-3 text-4xl font-bold text-gray-800 z-10">
        <span className="text-5xl">🌱</span>
        <h1>[Portfolio] Yeeun Park</h1>
      </div>

      {/* 본문 영역 */}
      <section className="bg-white pt-24 pb-16 relative z-0">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* 프로필 이미지 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-52 h-52 rounded-full object-cover"
            />
          </div>

          {/* 텍스트 블록 */}
          <div className="w-full md:w-1/2 text-gray-800 leading-relaxed text-[17px] text-left md:pl-8">
            <p className="font-semibold text-lg">
              <span className="bg-pink-100 px-1">
              안녕하세요, 저는 성장해나가는 개발자입니다.
              </span>
            </p>

            <p className="mt-4">
              저의 전공은 원래 분석화학 및 계산화학 분야였습니다. <br />
              하지만 그 쪽 분야 연구를 해보며 저는 화학보다 AI 쪽에 더 흥미를 느꼈고,
              현재는 CS를 전공하고 있습니다.
            </p>

            <p className="mt-4">
              스스로 많은 프로젝트를 해보며 연습했고, 공유했습니다.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;