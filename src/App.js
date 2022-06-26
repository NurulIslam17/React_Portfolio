import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Skill from "./Component/Skills";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Menubar from "./Component/Menubar";
import NoPage from "./Component/NoPage";

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
