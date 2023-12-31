import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/pages/home/Home";
import Contact from "./components/pages/contact/Contact";
import NewProject from "./components/pages/newproject/NewProject";
import Projects from "./components/pages/projects/Projects";
import Project from './components/pages/project/Project'

import Container from "./components/layouts/container/Container"
import Navbar from "./components/layouts/navbar/NavBar";
import Footer from "./components/layouts/footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
