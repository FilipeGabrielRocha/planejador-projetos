import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/company" element={<Company />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/newproject" element={<NewProject />}></Route>
      </Routes>
      <p>Footer</p>
    </BrowserRouter>
  );
}

export default App;
