import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Index from "./components/index";
import Registro from "./components/registro";
import Login from "./components/login";
import Lista from "./components/lista";
import Contacto from "./components/contacto";
import Usuario from "./components/usuario";
import Error404 from "./components/error404";

import "./assets/sass/App.scss";

function App() {
  const [tema, setTema ] = useState (localStorage.getItem('tema') || 'claro' );
  const cambioTema = () => 
  {
    if (tema === 'claro'){
      setTema('oscuro')
    }
    else{
      setTema('claro')
    }
  };

  useEffect(() => {
    localStorage.setItem('tema', tema)
    document.body.className = tema;
  },[tema]);

  return (
    <div className={`App ${tema}`}>
      <Router>
        <Routes>
          <Route exact path="/" element= {<Index />} />
          <Route exact path="/registro.html" element= {<Registro />} />
          <Route exact path="/inicioSesion.html" element= {<Login />} />
          <Route exact path="/lista.html" element= {<Lista />} />
          <Route exact path="/contacto.html" element= {<Contacto />} />
          <Route exact path="/usuario.html" element= {<Usuario />} />
          <Route exact path="/error-404.html" element= {<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
