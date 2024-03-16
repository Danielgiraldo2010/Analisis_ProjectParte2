import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { ElementEstado } from "./ContextState/Estado";
// Routes //
import { Login } from "../views/external/Login";
import { HomePage } from "../views/principal/HomePage";
import { Board } from "../views/Board";

import { Tablero } from "../components/Tablero/Tablero";
import { Aplicacion } from "../components/Aplicacion/Aplicacion";
import { Analizar } from "../components/Analizar/Analizar";

import { ListaGrafos } from "../views/principal/ListaGrafos/ListaGrafos";
import { Ayuda } from "../views/principal/Ayuda";
import { AcercaDe } from "../views/principal/AcercaDe";

function App() {
  return (
      <ElementEstado>
        <Router>
          <Routes>
            <Route path="" element={<Login />} />

            <Route path="home" element={<HomePage />}>
              <Route path="" element={<ListaGrafos />} />
              <Route path="ayuda" element={<Ayuda />} />
              <Route path="acerca_de" element={<AcercaDe />} />
            </Route>

            <Route path="board" element={<Board />}>
              <Route path="" element={<Tablero />} />
              <Route path="aplicacion" element={<Aplicacion />} />
              <Route path="analizar" element={<Analizar />} />
            </Route>
          </Routes>
        </Router>
      </ElementEstado>
  );
}
export default App;
