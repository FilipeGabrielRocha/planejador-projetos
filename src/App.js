import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/pages/home/Home";
import Company from "./components/pages/company/Company";
import Contact from "./components/pages/contact/Contact";
import NewProject from "./components/pages/newproject/NewProject";
import Projects from "./components/pages/projects/Projects";

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
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
