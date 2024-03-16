import React from "react";
import { useNavigate } from "react-router-dom";
import { elementContex } from "../../app/ContextState/Estado";
import { FaRegFileCode, FaFile, FaRandom } from "react-icons/fa";

const FormularioGrafo = ({ closeModal }) => {
  // Estado del contexto del grafo
  const { setEstadoGrafo } = React.useContext(elementContex);

  // Estado del formulario
  const [estadoInput, setInput] = React.useState(null);

  // Estado de la navegación y manejo de rutas
  const navigate = useNavigate();

  // Lee la entrada de archivo y convierte a JSON
  const leerArchivo = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        const text = reader.result;
        const obj = JSON.parse(text);
        setInput(obj);
      };
    }
  };

  // Establece el nuevo estado del Grafo con el objeto cargado
  const setGrafo = () => {
    if (estadoInput) {
      setEstadoGrafo(estadoInput);
      navigate("/board");
    } else {
      alert("No seleccionó ningún archivo");
    }
  };

  // Inicializa el grafo para el botón Grafo vacío
  const grafoVacio = () => {
    setEstadoGrafo({
      name: "",
      descripcion: "",
      nodes: [],
    });
    navigate("/board");
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Opciones de Creación de grafos</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={closeModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body d-grid gap-3">
        <button className="btn btn-primary" onClick={grafoVacio}>
          <FaFile /> Grafo vacío
        </button>

        <button className="btn btn-primary" onClick={setGrafo}>
          <FaRegFileCode /> Importar
        </button>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            accept=".json"
            onChange={leerArchivo}
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>

        <div className="container-sm p-5 card d-grid gap-3">
          {/* TODO: Validaciones de los campos a seleccionar */}
          <button className="btn btn-primary" onClick={() => navigate("/board")}>
            <FaRandom /> Aleatorio
          </button>
          <div className="row">
            <div className="col">
              <label htmlFor="option-tipo">Tipo</label>
              <select id="option-tipo" className="form-select" defaultValue={`1`}>
                <option value={`1`} disabled>
                  elegir uno
                </option>
                <option value={`2`}>completo</option>
                <option value={`3`}>acíclico</option>
                <option value={`4`}>cíclico</option>
                <option value={`5`}>nulo</option>
                <option value={`6`}>conexo</option>
                <option value={`7`}>denso</option>
                <option value={`8`}>ponderado</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="cantidad_nodo">Cantidad de nodos</label>
              <input id="cantidad_nodo" type="number" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col align-self-center">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  ¿Será dirigido?
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FormularioGrafo };
