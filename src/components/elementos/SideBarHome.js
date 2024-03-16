import React from "react";
import { Link } from "react-router-dom";

const SideBarMenu = () => {

  return (
      <div className="col-2 mt-3 mx-3">
        <div className="card">
          <div className="container d-grid gap-1 card-body">
            <h4>Nombre de Usuario</h4>
            <Link to="" className="btn btn-dark">
              Lista de Grafos
            </Link>
            <Link to="ayuda" className="btn btn-dark">
              Ayuda
            </Link>
            <Link to="acerca_de" className="btn btn-dark">
              Acerca de
            </Link>
          </div>
        </div>
      </div>
  );
};
export { SideBarMenu };
