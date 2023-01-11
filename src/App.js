import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import React from "react";
import Index from "./components/index";
import Registro from "./components/registro";
import Login from "./components/login";
import Lista from "./components/lista";
import Contacto from "./components/contacto";
import Usuario from "./components/usuario";

import "./assets/sass/App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element= {<Index />} />
        <Route exact path="/registro.html" element= {<Registro />} />
        <Route exact path="/login.html" element= {<Login />} />
        <Route exact path="/lista.html" element= {<Lista />} />
        <Route exact path="/contacto.html" element= {<Contacto />} />
        <Route exact path="/usuario.html" element= {<Usuario />} />
      </Routes>
    </Router>
  );
}

export default App;
