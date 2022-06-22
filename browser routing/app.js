import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import About from "./Component/About";
import Contact from "./Component/Contact";

export default function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
// changed component keyword to element and used </> tag
//used Routes instead of Switch (no longer exist in router dom dependency)
