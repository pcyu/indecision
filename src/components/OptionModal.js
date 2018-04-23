import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.exitModal}
    contentLabel="Selected Tabata Interval"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Tabata Interval</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    {props.selectedOption2 && <p className="modal__body">{props.selectedOption2}</p>}
    <button className="button" onClick={props.exitModal}>Okay</button>
  </Modal>
);

export default OptionModal;