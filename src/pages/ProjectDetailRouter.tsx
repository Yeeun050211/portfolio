import { useParams } from "react-router-dom";
import PingPongProject from "./projects/PingpongProject.tsx";
import PortfolioProject from "./projects/PortfolioProject.tsx";
import SmilesProject from "./projects/SmilesProject.tsx";
import MolFormerProject from "./projects/MolFormerProject.tsx";
import FliggleProject from "./projects/FliggleProject.tsx";

const ProjectDetailRouter = () => {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <PingPongProject />;
    case "2":
      return <SmilesProject />;
    case "3":
        return <MolFormerProject />;
    case "4":
      return <PortfolioProject />;
    case "5":
      return <FliggleProject />;

    default:
      return <div>존재하지 않는 프로젝트입니다.</div>;
  }
};

export default ProjectDetailRouter;