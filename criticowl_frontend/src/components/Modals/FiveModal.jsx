import Modal from "./Modal";
import PropTypes from 'prop-types';

function FiveModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <h1 className="text-2xl py-2 -mx-5 mb-6 text-center text-white  bg-cblue">
        5 w’s method
      </h1>
      <p>
        The 5 W's are questions whose answers are considered basic in
        information gathering. They include Who, What, When Where, and Why. They
        constitute a formula for getting the complete story on a subject.
        <br /> <br />
        According to the principle of the Five Ws, a report can only be
        considered complete if it answers these questions starting with an
        interrogative word:
      </p>
      <br />
      <ul className="list-disc list-inside">
        <li>Who is it about?</li>
        <li>What happened?</li>
        <li>When did it take place?</li>
        <li>Where did it take place?</li>
        <li>Why did it happen?</li>
      </ul>
      <br />
      <p>
        They help establish the framework of any text. Once you have established
        the answers to the ‘who, what, when, where and why’, you’ll then have a
        clear picture of the tasks in front of you. With all the basic
        information you need, you can tackle the text successfully.
      </p>
    </Modal>
  );
}

FiveModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FiveModal;
