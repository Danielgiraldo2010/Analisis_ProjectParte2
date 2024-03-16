import React from 'react';
import Modal from 'react-modal';
import { FormularioGuardarGrafo } from '../ModalGuardarGrafo/FormularioGuardarGrafo';
import { SiGraphql } from 'react-icons/si';

const customStyles = {
    content: {
        width: '500px',
        height: '400px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};
Modal.setAppElement('#modal');

const ModalGuardarGrafo = ({ modalIsOpen, setIsOpen }) => {

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
                <FormularioGuardarGrafo setIsOpen = {setIsOpen} />
            </Modal>
        </div>
    )
}

export { ModalGuardarGrafo };