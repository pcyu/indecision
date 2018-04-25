import React from 'react';
import Modal from 'react-modal';
import Rest from './Rest';
import Interval from './Interval';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onAfterOpen={props.startTabata}
    contentLabel="Selected Tabata Interval"
    closeTimeoutMS={200}
    // onRequestClose={props.exitModal}
    className="modal"
  >
    <h3 className="modal__title">Selected Tabata Interval</h3>
    {
      props.time > 248 ? 
      <p className="modal__body"> Get Ready to Start!</p>
      :
      props.time > 243 ? 
      <p className="modal__body"> {props.selectedOption} and {props.selectedOption2}</p>
      :
      props.time > 240 ? 
      <p className="modal__body"> 3 seconds</p>
      :
      props.time > 220 ?
      <p className="modal__body">{props.selectedOption} <Interval /></p>
      :
      props.time > 210 ?
      <p className="modal__body"> Rest <Rest /> </p>
      :
      props.time > 190 ?
      <p className="modal__body">{props.selectedOption2} <Interval /></p> 
      :
      props.time > 180 ?
      <p className="modal__body"> Rest <Rest /> </p>
      :
      props.time > 160 ?
      <p className="modal__body">{props.selectedOption} <Interval /></p> 
      :
      props.time > 150 ?
      <p className="modal__body"> Rest <Rest /> </p>
      :
      props.time > 130 ?
      <p className="modal__body">{props.selectedOption2} <Interval /></p> 
      :
      props.time > 120 ?
      <p className="modal__body"> Rest <Rest /> </p>
      :
      props.time > 100 ?
      <p className="modal__body">{props.selectedOption} <Interval /></p> 
      :
      props.time > 90 ?
      <p className="modal__body"> Rest <Rest /> </p>
      :
      props.time > 70 ?
      <p className="modal__body">{props.selectedOption2} <Interval /></p> 
      :
      props.time > 60 ?
      <p className="modal__body"> Rest <Rest /> </p>
      :
      props.time > 40 ?
      <p className="modal__body">{props.selectedOption} <Interval /></p> 
      :
      props.time > 30 ?
      <p className="modal__body"> Rest <Rest /> </p>
      :
      props.time > 10 ?
      <p className="modal__body">{props.selectedOption2} <Interval /></p> 
      :
      <p className="modal__body"> You have finished!</p>
    }
    <button className="button" onClick={props.exitModal}>Exit</button>
  </Modal>
);

export default OptionModal;