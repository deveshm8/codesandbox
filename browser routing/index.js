import React from 'react';
import Reactdom from 'react-dom';
import App from "./App";
import {BrowserRouter as Router}  from "react-router-dom";

Reactdom.render(
 <div>
  <Router>
    <App />
    </Router>
  </div>,
  document.getElementById("root")
);
