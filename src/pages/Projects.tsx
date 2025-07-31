import { Link } from "react-router-dom";
import { projectList } from "../data/projectData";
import type { Project } from "../data/projectData";

const Projects = () => {
  // 프로젝트 분류
  const mainProjects = projectList.filter((project) => project.type === "main");
  const inProgressProjects = projectList.filter(
    (project) => project.type === "inProgress"
  );

  return (
    <section className="max-w-5xl ml-25 pt-6 pb-12 px-2">
      {/* 주요 프로젝트 */}
      <h2 className="text-2xl font-bold mb-3">주요 프로젝트 포트폴리오</h2>
      <hr className="mb-8 border-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
        {mainProjects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* 현재 진행 중인 프로젝트 */}
      <h2 className="text-2xl font-bold mt-16 mb-3">현재 진행 중인 프로젝트</h2>
      <hr className="mb-8 border-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
        {inProgressProjects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    to={`/projects/${project.id}`}
    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <span>{project.emoji}</span> {project.title}
      </h3>
      <div className="flex gap-2 flex-wrap">
        {project.stack.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-xs text-gray-700 px-2 py-1 rounded-full hover:scale-105 transition-transform"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

export default Projects;