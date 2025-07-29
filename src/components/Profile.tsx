const Profile = () => {
  return (
    <section className="py-12 px-24 bg-white">
      {/* 제목 */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🔍</span>
        <h2 className="text-3xl font-bold">
            Profile
            </h2>
      </div>

      {/* 구분선 */}
      <hr className="w-[1000px] border-t border-gray-600 mb-6" />

      {/* 내용: 좌우 두 열로 나눔 */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        
        {/* 학력 */}
        <div className="flex-1">
          <h3 className="px-5 text-2xl font-semibold mb-2">학력</h3>
          <div className="px-5 space-y-2 text-gray-800">
            <p>
              광주과학기술원 전기전자컴퓨터공학부{" "}
              <span className="px-5 text-gray-500">2024.2 - 현재</span>
            </p>
            <p>
              대전동신과학고등학교 졸업{" "}
              <span className="px-5 text-gray-500">2021.3 - 2024.1</span>
            </p>
          </div>
        </div>

        {/* 기타 */}
        <div className="flex-1">
          <h3 className="px-6 text-2xl font-semibold mb-2">기타</h3>
          <div className="px-6 space-y-2 text-gray-800">
            <p>GIST 기숙사자치회 임원 (문서팀장)</p>
            <p>KAIST IPCEO - TA</p> 
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;