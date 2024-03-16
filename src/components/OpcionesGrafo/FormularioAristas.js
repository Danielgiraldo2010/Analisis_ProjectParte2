import React from "react";
import { useForm } from "react-hook-form";
import { elementContex } from "../../app/ContextState/Estado";

const FormulariAristas = ({
    register,
    handleSubmit,
    reset,
    edge,
    setEdge,
    cerrar,
    operacion
}) => {

    const { estadoGrafo, setEstadoGrafo, buscarNodo } = React.useContext(elementContex);
    
    let grafoActual = {...estadoGrafo};
    const { nodes } = grafoActual;
    const { from, to, label, color } = edge;

    const agregarArista = (arista) => {
        const { from } = arista;
        const nodoFrom = buscarNodo(from);
        let edge = {
            nodeId: arista.to,
            distance: arista.label,
            color: arista.color // Agregar el color al objeto de la arista
        }
        grafoActual.nodes[nodoFrom].linkedTo.push(edge);
        setEstadoGrafo(grafoActual);
        reset();
        cerrar(false);
    }

    const editarArista = (arista) => {
        const aristaActual = {nodeId: to, distance: label};
        const newLinked = {nodeId : to, distance : parseInt(arista.label), color: arista.color}; // Agregar el color al objeto de la arista
        let nodoPadre = buscarNodo(from);
        const indexArista = grafoActual.nodes[nodoPadre].linkedTo
                .findIndex( arista => 
                    JSON.stringify(arista) === JSON.stringify(aristaActual)
                );
        grafoActual.nodes[nodoPadre].linkedTo[indexArista] = newLinked;
        setEstadoGrafo(grafoActual);
        reset();
        cerrar(false);
        setEdge({from: null, to: null, label: null, color: null}); // Reiniciar también el color
    }

    return (
        <form onSubmit={handleSubmit(operacion ? agregarArista : editarArista)}>
            <div className="row p-2">
                <div className="col form-group">
                    <label htmlFor="label_from">from</label>
                    {operacion ?
                        (
                            <select
                                type="text"
                                id="label_from"
                                className="form-control"
                                aria-label=""
                                aria-describedby="basic-addon1"
                                {...register(`from`, {
                                    valueAsNumber: true,
                                    required:true
                                })}
                            >
                                {nodes.map((nodo) => (
                                    <option
                                        key={`from-${nodo.id}`}
                                        value={nodo.id}
                                    >{`${nodo.label}`}</option>
                                ))}
                            </select>
                        ) :
                        (
                            <input
                                type="text"
                                id="label_from"
                                className="form-control"
                                aria-describedby="basic-addon1"
                                disabled = {true}
                                defaultValue = {from}
                            />
                        )
                    }
                </div>
                <div className="col form-group">
                    <label htmlFor="label_to">to</label>
                    {operacion ?
                        (
                            <select
                                type="text"
                                id="label_to"
                                className="form-control"
                                aria-label=""
                                aria-describedby="basic-addon1"
                                {...register(`to`, {
                                    valueAsNumber: true,
                                    required:true
                                })}
                            >
                                {nodes.map((nodo) => (
                                    <option
                                        key={`to-${nodo.id}`}
                                        value={nodo.id}
                                    >{`${nodo.label}`}</option>
                                ))}
                            </select>

                        ) :
                        (
                            <input
                                type="text"
                                id="label_to"
                                className="form-control"
                                aria-describedby="basic-addon1"
                                disabled={true}
                                defaultValue = {to}
                            />
                        )
                    }
                </div>
                <div className="col form-group">
                    <label htmlFor="label_weight">Weight</label>
                    <input
                        type="number"
                        id="label_weight"
                        className="form-control"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        defaultValue={label}
                        {...register(`label`,{required:true})}
                    />
                </div>
                <div className="col form-group">
                    <label htmlFor="label_color">Color</label>
                    <input
                        type="color"
                        id="label_color"
                        className="form-control"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        defaultValue={color} // Establecer el valor predeterminado del color
                        {...register(`color`)}
                    />
                </div>
            </div>
            <div className="row p-2">
                <button
                    className="col btn btn-dark align-self-center"
                    type="submit"
                >
                    {operacion ? "Guardar" : "Actualizar"}
                </button>
            </div>
        </form>
    )
}

export { FormulariAristas };
