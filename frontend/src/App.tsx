import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import { PrivateRoute } from "../src/components/ui/PrivateRoute";

// Import suas páginas
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Projects from "./pages/public/Projects";
import CV from "./pages/public/CV";
import News from "./pages/public/News";
import Services from "./pages/public/Services";
import Blog  from "./pages/public/Blog";
import ProjectOne from "./pages/public/ProjectOne";
import ProjectTwo from "./pages/public/ProjectTwo";
import ProjectThree from "./pages/public/ProjectThree";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ProjectManager from "./pages/admin/ProjectsManager";
import SkillManager from "./pages/admin/SkillsManager";
import Skills from "./pages/public/Skills";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Páginas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectone" element={<ProjectOne />} />
          <Route path="/projecttwo" element={<ProjectTwo />} />
          <Route path="/projectthree" element={<ProjectThree />} />
    

          {/* Rotas administrativas protegidas */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<ProjectManager />} />
            <Route path="skills" element={<SkillManager />} />
          </Route>

          {/* Rota 404 pode ser adicionada aqui */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
