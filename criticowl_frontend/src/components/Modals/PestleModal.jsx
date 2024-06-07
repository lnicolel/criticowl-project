import Modal from "./Modal";
import PropTypes from 'prop-types';

function PestleModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <h1 className="text-2xl py-2 -mx-5 mb-6 text-center text-white  bg-cblue">
        Pestle
      </h1>
      <p>
        PESTLE analysis examines key external factors such as political,
        economic, sociological, technological, legal and environmental. Usually
        used to analyze an organization, but you can also use it, for example,
        to highlight these factors in an article.
      </p>
    </Modal>
  );
}

PestleModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PestleModal;
