import { useParams, Link } from 'react-router-dom';
import { projectList } from '../data/projectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectList.find((p) => p.id.toString() === id);

  if (!project) return <div className="p-12">프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div className="p-12 max-w-4xl mx-auto">
      {/* 뒤로가기 링크 */}
      <Link to="/" className="text-blue-500 underline mb-6 inline-block">← Back to Projects</Link>

      {/* 이모지 + 제목 */}
      <h1 className="text-4xl font-extrabold flex items-center gap-2 mb-4">
        <span>{project.emoji}</span>
        {project.title}
      </h1>

      {/* 기술 스택 태그 */}
      <div className="flex gap-2 mb-6">
        {project.stack?.map((tag, idx) => (
          <span key={idx} className="bg-gray-100 text-sm text-gray-800 px-6 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* 이미지 */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-[500px] object-cover rounded mb-6"
      />

      {/* 상세 설명 */}
      <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
        {project.detail}
      </p>
    </div>
  );
};

export default ProjectDetail;