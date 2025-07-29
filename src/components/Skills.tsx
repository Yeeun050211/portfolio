import { IconBulb } from "@tabler/icons-react";

const Skills = () => {
  return (
    <section className="py-12 px-24 bg-white">
      {/* 제목 */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🛠️</span>
        <h2 className="text-3xl font-bold">Skills</h2>
      </div>

      {/* 구분선 */}
      <hr className="w-[1000px] border-t border-gray-600 mb-6" />

      {/* 설명 문장 */}
      <p className="px-6 mb-6 text-gray-700">
        역량의 전문성에 따라{" "}
        <span className="text-blue-600 font-semibold">상</span> ·{" "}
        <span className="text-yellow-600 font-semibold">중</span> ·{" "}
        <span className="text-red-600 font-semibold">하</span> 수준으로 분류하였습니다.
      </p>

      {/* 좌우 열 */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Hard Skills */}
        <div className="flex-1">
          <h3 className="px-6 text-2xl font-semibold mb-2">Hard Skills</h3>
          <ul className="px-6 space-y-2 text-gray-800">
            <li className="flex items-center text-blue-600">
              <IconBulb className="w-5 h-5 mr-2" />
              <span>C/C++</span>
            </li>
            <li className="flex items-center text-yellow-600">
              <IconBulb className="w-5 h-5 mr-2" />
              <span>Python</span>
            </li>
            <li className="flex items-center text-yellow-600">
              <IconBulb className="w-5 h-5 mr-2" />
              <span>Dart/Flutter</span>
            </li>
            <li className="flex items-center text-yellow-600">
              <IconBulb className="w-5 h-5 mr-2" />
              <span>Figma & Design</span>
            </li>
            <li className="flex items-center text-red-600">
              <IconBulb className="w-5 h-5 mr-2" />
              <span>React</span>
            </li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="flex-1">
          <h3 className="px-6 text-2xl font-semibold mb-2">Soft Skills</h3>
          <ul className="px-6 space-y-2 text-gray-800">
            <li className="flex items-center text-blue-600">
              <IconBulb className="w-5 h-5 mr-2" />
              <span>커뮤니케이션</span>
            </li>
            <li className="flex items-center text-blue-600">
              <IconBulb className="w-5 h-5 mr-2" />
              <span>꼼꼼함</span>
            </li>
            <li className="flex items-center text-yellow-600">
              <IconBulb className="w-5 h-5 mr-2" />
              <span>리더십</span>
            </li>
            <li className="flex items-center text-yellow-600">
              <IconBulb className="w-5 h-5 mr-2" />
              <span>스케줄링</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;