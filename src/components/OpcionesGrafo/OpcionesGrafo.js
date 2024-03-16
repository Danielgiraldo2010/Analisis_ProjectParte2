import React from "react";
import { useState, useEffect } from "react";
import { MdEdit, MdDelete, MdAddCircle } from "react-icons/md";
import { FormularioNodos } from "./FomularioNodos";
import { FormulariAristas } from "./FormularioAristas";
import { elementContex } from "../../app/ContextState/Estado";
import { useForm } from "react-hook-form";

const OpcionesGrafo = ({ 
  selectedEdge,
  setEdge,
  selectedNode,
  setNode }) => {

  //Estado del formulario
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  //Estado de los Nodos del Grafo
  const { estadoGrafo,
          setEstadoGrafo,
          buscarNodo } = React.useContext(elementContex);

  let grafoActual = {...estadoGrafo};

  //Estado de las opciones de boton si estan activos o no
  const [estadoBoton, setEstadoBoton] = useState(false);
  const [estadoBotonArista, setEstadoBotonArista] = useState(false);

  //Estado de el formulario de nodos y aristas, si esta abierto o no
  const [camposActiveNodo, setCamposActiveNodo] = useState(false);
  const [camposActiveArista, setCamposActiveArista] = useState(false);

  /**
   * Controla los cambios en el formulario, refrescandolo si
   * es necesario o actualizando los valores de elementos.
   */
  useEffect(() => {
    if (!selectedNode.id) {
      reset();
      setCamposActiveNodo(false);
    }
    reset();
    setEstadoBoton(false);
  }, [selectedNode]);

  useEffect(() => {
    if (!selectedEdge.from) {
      reset();
      setCamposActiveArista(false);
    }
    reset();
    setEstadoBotonArista(false);
  }, [selectedEdge]);

  const eliminarNodo = (nodoEliminar) => {
    if (nodoEliminar.id) {
      let nodosFilter = grafoActual.nodes.filter(
        nodo => JSON.stringify(nodo) !== JSON.stringify(nodoEliminar)
      );
      grafoActual.nodes = nodosFilter;
      setEstadoGrafo(grafoActual);
      setNode({ id: null, label: null })
      setEdge({ from: null, to: null, label: null })
    }
  }

  const eliminarArista = (dataArista) => {
    const aristaEliminar = {nodeId: dataArista.to, distance: dataArista.label};
    if (dataArista.from) {
      let nodoPadre = buscarNodo(dataArista.from);
      let nodoFilterArista = grafoActual.nodes[nodoPadre].linkedTo
          .filter( arista => 
                   JSON.stringify(arista) !== JSON.stringify(aristaEliminar)
                );
      grafoActual.nodes[nodoPadre].linkedTo = nodoFilterArista;
      setEstadoGrafo(grafoActual);
      setEdge({ from: null, to: null, label: null })

    }
  }

  return (
    <div className="col mx-3">
      {/* Botnotes CRUD de nodo */}
      <div className="row d-flex justify-content-around mt-3">
        <h4>Opciones de Nodos</h4>

        {/** Crear Nodo */}
        <button
          className="col-2 btn btn-primary"
          type="button"
          disabled={selectedNode.id}
          onClick={() => {
            setEstadoBoton(true);
            setCamposActiveNodo(!camposActiveNodo);
            reset();
          }}
        >
          <MdAddCircle />
        </button>

        {/** Editar Nodo*/}
        <button
          className="col-2 btn btn-warning"
          type="button"
          disabled={!selectedNode.id}
          onClick={() => {
            setEstadoBoton(false);
            setCamposActiveNodo(!camposActiveNodo);
            reset();
          }}
        >
          <MdEdit />
        </button>

        {/** Eliminar Nodo */}
        <button
          className="col-2 btn btn-danger"
          disabled={!selectedNode.id}
          type="button"
          onClick={() => {
            eliminarNodo(selectedNode);
            setCamposActiveNodo(false);
            reset();
          }}
        >
          <MdDelete />
        </button>
      </div>

      {/** Formulario de Nodos */}
      {camposActiveNodo ? (
        <FormularioNodos
          nodo={selectedNode}
          setNodo = {setNode}
          cerrar={setCamposActiveNodo}
          operacion={estadoBoton}
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
        />
      ) : (
        <></>
      )}

      {/* Crud de Aristas */}
      <div className="row d-flex justify-content-around mt-4">
        <h4>Opciones de Aristas</h4>

        {/** Crear Arista */}
        <button
          className="col-2 btn btn-primary"
          type="button"
          disabled={selectedEdge.from}
          onClick={() => {
            setEstadoBotonArista(true);
            setCamposActiveArista(!camposActiveArista);
            reset();
          }}
        >
          <MdAddCircle />
        </button>

        {/** Editar Arista */}
        <button
          className="col-2 btn btn-warning"
          type="button"
          disabled={!selectedEdge.from}
          onClick={() => {
            setEstadoBotonArista(false);
            setCamposActiveArista(!camposActiveArista);
            reset();
          }}
        >
          <MdEdit />
        </button>

        {/** Eliminar Arista */}
        <button
          className="col-2 btn btn-danger"
          type="button"
          disabled={!selectedEdge.from}
          onClick={() => {
            eliminarArista(selectedEdge);
            setCamposActiveArista(false);
            reset();
          }}
        >
          <MdDelete />
        </button>
      </div>

      {/** Formulario de Aristas */}
      {camposActiveArista ? (
        <FormulariAristas
          edge = {selectedEdge}
          setEdge = {setEdge}
          cerrar = {setCamposActiveArista}
          operacion = {estadoBotonArista}
          register = {register}
          handleSubmit = {handleSubmit}
          reset = {reset}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export { OpcionesGrafo };
