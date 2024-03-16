import React from "react";
import { useNavigate } from "react-router-dom";

const Opciones = () => {
  const navigate = useNavigate();
  return (
    <div className="container-sm p-5 card d-grid gap-3 position-absolute top-50 start-50 translate-middle">
      <button className="btn btn-primary" onClick={()=>navigate('/app')}>
        Grafo vacíoc
      </button>
      <button className="btn btn-primary" onClick={()=>navigate()}>
        Importar
      </button>
      <div className="container-sm p-5 card d-grid gap-3">
        <button className="btn btn-primary">
          Aleatorio
        </button>
        <div className="row">
          <div className="col">
            <select>
              <option>a</option>
              <option>a</option>
            </select>
          </div>
          <div className="col">
            <select>
              <option>a</option>
              <option>a</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Opciones };
