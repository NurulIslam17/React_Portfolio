import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Component/Home";
import About from "./Component/About";
import Skill from "./Component/Skills";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Menubar from "./Component/Menubar";
import NoPage from "./Component/NoPage";
import './Component/Style.css';

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
