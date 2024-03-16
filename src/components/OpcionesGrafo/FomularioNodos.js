import React from "react";
import { elementContex } from "../../app/ContextState/Estado";

const FormularioNodos = ({
    register,
    handleSubmit,
    reset,
    nodo,
    setNodo,
    cerrar,
    operacion
}) => {
    const { id, label, color } = nodo;

    // Estado del color del nodo
    const [nodoColor, setNodoColor] = React.useState(color || "#000000"); // Valor predeterminado del color del nodo

    // Estado del grafo
    const { estadoGrafo, setEstadoGrafo, buscarNodo } = React.useContext(elementContex);
    let grafoActual = {...estadoGrafo};

    // Manejar cambios en el color del nodo
    const handleNodoColorChange = (event) => {
        setNodoColor(event.target.value);
    };

    // Función para agregar un nuevo nodo
    const agregarNodo = (data) => {
        const nuevoNodo = {
            id: data.id,
            label: data.label,
            data: {},
            type: "",
            linkedTo: [],
            color: nodoColor // Establecer el color seleccionado para el nodo
        };
        grafoActual.nodes.push(nuevoNodo);
        setEstadoGrafo(grafoActual);
        reset();
        cerrar(false);
    };

    // Función para editar un nodo existente
    const editarNodo = (data) => {
        const indiceNodo = buscarNodo(nodo.id);
        const nodoActualizado = {
            ...grafoActual.nodes[indiceNodo],
            id: data.id,
            label: data.label,
            color: nodoColor // Actualizar el color del nodo
        };
        grafoActual.nodes[indiceNodo] = nodoActualizado;
        setEstadoGrafo(grafoActual);
        reset();
        cerrar(false);
        setNodo({ id: null, label: null });
    };

    const newLocal = "col btn btn-dark align-self-center";
    return (
        <form onSubmit={handleSubmit(operacion ? agregarNodo : editarNodo)}>
            <div className="row p-2">
                <div className="col form-group">
                    <label htmlFor="id_nodo">ID</label>
                    <input
                        type="number"
                        id="id_nodo"
                        className="form-control"
                        defaultValue={id}
                        aria-describedby="basic-addon1"
                        {...register(`id`, {
                            valueAsNumber: true,
                            required: true
                        })}
                    />
                </div>
                <div className="col form-group">
                    <label htmlFor="label_nodo">Label</label>
                    <input
                        type="text"
                        id="label_nodo"
                        className="form-control"
                        defaultValue={label}
                        aria-describedby="basic-addon1"
                        {...register(`label`, {
                            required: true
                        })}
                    />
                </div>
                <div className="col form-group">
                    <label htmlFor="color_nodo">Color</label>
                    <input
                        type="color"
                        id="color_nodo"
                        className="form-control"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        value={nodoColor} // Establecer el valor del color del nodo
                        onChange={handleNodoColorChange} // Manejar cambios en el color del nodo
                    />
                </div>
            </div>
            <div className="row p-2">
                <button
                    className={newLocal}
                    type="submit"
                >
                    {operacion ? "Guardar" : "Actualizar"}
                </button>
            </div>
        </form>
    );
};

export { FormularioNodos };
