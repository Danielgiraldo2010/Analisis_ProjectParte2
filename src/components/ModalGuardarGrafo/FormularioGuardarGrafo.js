import React from "react";
import { elementContex } from '../../app/ContextState/Estado';
import { useForm } from 'react-hook-form'
import { guardarNuevoGrafo } from '../../api/GrafoCRUD'

const FormularioGuardarGrafo = ({ setIsOpen }) => {

    const { estadoGrafo, setEstadoGrafo } = React.useContext(elementContex);

    const { register, handleSubmit, reset } = useForm();

    const guardarGrafo = (grafoEdit) => {
        let grafoActual = { ...estadoGrafo };
        grafoActual.name = grafoEdit.name;
        grafoActual.descripcion = grafoEdit.descripcion;
        setEstadoGrafo(grafoActual);
        guardarNuevoGrafo(grafoActual);
        setIsOpen(false);
        reset();
    }

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Guardar Grafo</h5>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setIsOpen(false)}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form onSubmit={handleSubmit(guardarGrafo)}>
                <div className="modal-body">

                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            defaultValue={estadoGrafo.name}
                            {...register(`name`, {
                                required: true
                            })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">Descripcion</label>
                        <textarea
                            className="form-control"
                            id="message-text"
                            defaultValue={estadoGrafo.descripcion}
                            {...register(`descripcion`)}
                        />
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary"
                        data-dismiss="modal"
                        onClick={() => setIsOpen(false)}
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}

export { FormularioGuardarGrafo };

