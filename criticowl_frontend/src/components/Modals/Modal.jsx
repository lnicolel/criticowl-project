import ReactModal from "react-modal";
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    border: "5px solid #064789",
    paddingTop: 0
  },
};

ReactModal.setAppElement("#root");

function Modal({ open, onClose, children }) {
  return (
    <ReactModal isOpen={open} onRequestClose={onClose} style={customStyles} shouldCloseOnEsc shouldCloseOnOverlayClick>
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
