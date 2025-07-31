import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import ProjectsSections from "./components/ProjectsSections";
import Projects from "./pages/Projects";
import WorkStyle from "./components/WorkStyle";
import Contact from "./components/Contact";
import ProjectDetailRouter from "./pages/ProjectDetailRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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

        <Route path="/projects/:id" element={<ProjectDetailRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;