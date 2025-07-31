// src/data/projectData.ts
export interface Project {
  id: string;
  emoji: string;
  title: string;
  stack: string[];
  image: string;
  type: "main" | "inProgress";
  detail?: string; // 상세 설명은 선택적
}

export const projectList: Project[] = [
  {
    id: "1",
    emoji: "🏓",
    title: "4축 선형 탁구 로봇 contest",
    stack: ["C/C++", "하드웨어"],
    image: "/images/pingpong.png",
    type: "main",
  },
  {
    id: "2",
    emoji: "🧪",
    title: "SMILES 기반 분자 유사도 시각화 도구 개발",
    stack: ["Python", "RDKit"],
    image: "/images/smiles.png",
    type: "main",
  },
  {
    id: "3",
    emoji: "🧬",
    title: "MolFormer: 분자 구조 변환기",
    stack: ["Python"],
    image: "/images/MolFormer.png",
    type: "main",
  },
  {
    id: "4",
    emoji: "📑",
    title: "Portfolio 제작: React를 이용한 웹사이트 개발",
    stack: ["React", "Typescript", "Tailwind CSS"],
    image: "/images/portfolio.png",
    type: "inProgress",
  },
  {
    id: "5",
    emoji: "🐾",
    title: "Fliggle: Flutter를 이용한 SNS 개발",
    stack: ["Flutter", "Dart", "Figma"],
    image: "/images/fliggle.png",
    type: "inProgress",
  }
];