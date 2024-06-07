import Modal from "./Modal";
import PropTypes from 'prop-types';

function WheelModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <h1 className="text-2xl py-2 -mx-5 mb-6 text-center text-white  bg-cblue">
        Wheel of reasoning
      </h1>
      <p>
        The Reasoning Wheel can be used to understand possible root causes of
        problems or threats and to explore opportunities for change. This helps
        build an argument that supports your vision for change and creates a
        space for resolution. For convenience, this template is translated into
        a table.
        <br />
        This method helps to build an argument, identify the root cause that
        leads to the need for change, and create space for a solution.
      </p>
    </Modal>
  );
}

WheelModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WheelModal;
