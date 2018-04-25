import React from 'react';
import Modal from 'react-modal';
import Rest from './Rest';
import Interval from './Interval';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onAfterOpen={props.startTabata}
    onRequestClose={props.exitModal}
    contentLabel="Selected Tabata Interval"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Tabata Interval</h3>
    {
      props.time > 240 ? 
      <p className="modal__body"> Get Ready to Start Your Tabata Workout.  You will alternate between {props.selectedOption} and {props.selectedOption2} <Rest /></p>
      :
      props.time > 220 ?
      <p className="modal__body">{props.selectedOption} <Interval /></p>
      :
      props.time > 210 ?
      <p> Rest <Rest /> </p>
      :
      props.time > 190 ?
      <p className="modal__body">{props.selectedOption2} <Interval /></p> 
      :
      props.time > 180 ?
      <p> Rest <Rest /> </p>
      :
      props.time > 160 ?
      <p className="modal__body">{props.selectedOption} <Interval /></p> 
      :
      props.time > 150 ?
      <p> Rest <Rest /> </p>
      :
      props.time > 130 ?
      <p className="modal__body">{props.selectedOption2} <Interval /></p> 
      :
      props.time > 120 ?
      <p> Rest <Rest /> </p>
      :
      props.time > 100 ?
      <p className="modal__body">{props.selectedOption} <Interval /></p> 
      :
      props.time > 90 ?
      <p> Rest <Rest /> </p>
      :
      props.time > 70 ?
      <p className="modal__body">{props.selectedOption2} <Interval /></p> 
      :
      props.time > 60 ?
      <p> Rest <Rest /> </p>
      :
      props.time > 40 ?
      <p className="modal__body">{props.selectedOption} <Interval /></p> 
      :
      props.time > 30 ?
      <p> Rest <Rest /> </p>
      :
      <p className="modal__body">{props.selectedOption2} <Interval /></p> 
    }
  </Modal>
);

export default OptionModal;