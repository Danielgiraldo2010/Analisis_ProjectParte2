import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrafoGUI } from "../../../components/GrafoGUI/GrafoGUI";
import { Link } from "react-router-dom";
import { BiChalkboard } from "react-icons/bi";
import { elementContex } from "../../../app/ContextState/Estado";
import { eliminarGrafo } from '../../../api/GrafoCRUD'


const ItemGrafo = ({ grafo, grafos, setGrafos }) => {
    const { setEstadoGrafo } = React.useContext(elementContex); 

    const eliminarG = () => {
        console.log(grafo.id);
        eliminarGrafo(grafo.id);
        setGrafos(grafos.filter(g => g.id !== grafo.id));
    }

    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">
                        Nombre: <br/> {grafo.name}
                    </h5>

                    <GrafoGUI grafoJSON={grafo} />
                    <h6 className="card-title text-center">
                        Numero de Nodos: {grafo.nodes.length}
                    </h6>

                    <div className='d-flex justify-content-between'>
                        <Link
                            to="/board"
                            className="btn btn-dark"
                            onClick={() => {
                                setEstadoGrafo(grafo);
                            }}
                        >
                            Go to board <BiChalkboard />
                        </Link>
                        <button className='btn btn-dark mx-1'
                            onClick = { eliminarG }
                        >
                            <AiFillDelete />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ItemGrafo };