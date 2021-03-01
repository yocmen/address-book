import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Button from './Button';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(50, 50, 50, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('body');

const Modal = ({ modalIsOpen, closeModal, children }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Contact Details"
      style={customStyles}
      shouldCloseOnOverlayClick
    >
      {children}
      <div className="text-center border-t border-gray-100 mt-2 pt-2">
        <Button
          type="button"
          onClick={closeModal}
          className="inline-flex h-10 px-3"
        >
          Close
        </Button>
      </div>
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
