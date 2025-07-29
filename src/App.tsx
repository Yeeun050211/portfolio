import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import ProjectsSections from "./components/ProjectsSections";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import WorkStyle from "./components/WorkStyle";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 경로: About, Profile, Skills, Projects 모두 렌더링 */}
        <Route
          path="/"
          element={
            <>
              <About />
              <Profile />
              <Skills />
              <ProjectsSections />
              <Projects />
              <WorkStyle />
              <Contact />
            </>
          }
        />

        {/* 상세 페이지: 개별 프로젝트 보기 */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;