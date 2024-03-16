import React from 'react';
import Modal from 'react-modal';
import { FormularioGrafo } from './FormularioGrafo';
import { SiGraphql } from 'react-icons/si';

const customStyles = {
    content: {
        width: '500px',
        height: '550px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',  
    }
  };

  Modal.setAppElement('#modal');

  const ModalNuevoGrafo = () =>  {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className='btn btn-primary my-3' onClick={openModal}>
                <SiGraphql/> Nuevo Grafo
            </button>
            <Modal
                isOpen={modalIsOpen}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                //contentLabel="Example Modal"
            >
                <FormularioGrafo closeModal={closeModal} />
            </Modal>
        </div>
    )
}

export {ModalNuevoGrafo};