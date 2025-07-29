// src/data/projectData.ts

export interface Project {
  id: string;
  emoji: string;
  title: string;
  stack: string[];
  image: string;
  detail: string;
  type: "main" | "inProgress";
}

export const projectList: Project[] = [
  {
    id: "1",
    emoji: "🏓",
    title: "4축 선형 탁구 로봇 contest",
    stack: ["C/C++", "하드웨어"],
    image: "/images/pingpong.png",
    detail: "탁구 로봇 설명입니다.",
    type: "main",
  },
  {
    id: "2",
    emoji: "🌱",
    title: "SMILES 기반 분자 유사도 시각화 도구 개발",
    stack: ["Python", "RDKit"],
    image: "/images/smiles.png",
    detail: "SMILES 기반 도구 설명입니다.",
    type: "main",
  },
  {
    id: "3",
    emoji: "📑",
    title: "MolFormer: Transformer 활용한 고분자-가스 상호작용 예측 모델 제작",
    stack: ["Python"],
    image: "/images/MolFormer.png",
    detail: "SMILES를 입력 받아 Transformer로 고분자-가스 상호작용 예측하는 모델입니다.",
    type: "main"
  },
  {
    id: "4",
    emoji: "🐾",
    title: "Fliggle: Flutter을 이용한 SNS 제작",
    stack: ["Flutter", "Dart", "Figma"],
    image: "/images/fliggle.png",
    detail: "Figma를 활용해 디자인한 후 이를 Flutter로 구현한 SNS 애플리케이션입니다.",
    type: "inProgress"
  },
  {
    id: "5",
    emoji: "✨",
    title: "Portfolio 제작: React를 이용한 웹사이트 개발",
    stack: ["React", "TypeScript", "React Router", "Vite"],
    image: "/images/portfolio.png",
    detail: "저의 개발 역량을 보여줄 수 있는 React 기반 포트폴리오 웹사이트입니다.",
    type: "inProgress"
  }
];