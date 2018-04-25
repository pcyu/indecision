import React from 'react';
import Modal from 'react-modal';
import Rest from './Rest';
import Interval from './Interval';
import Start from './Start';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onAfterOpen={props.startTabata}
    contentLabel="Selected Tabata Interval"
    closeTimeoutMS={200}
    className="modal"
  >
    {
      props.time > 245 ?
      <div>
        <p className="modal__body">Random Tabata has selected</p>
        <p className="modal__body">4 sets of {props.selectedOption}</p>
        <p>and</p>
        <p className="modal__body">4 sets of {props.selectedOption2}</p>
      </div> 
      :
      props.time > 240 ?
      <div> 
        <p className="modal__body">Get Ready to Start!</p>
        <Start />
      </div>
      :
      props.time > 220 ?
      <div>
        <p className="modal__body">{props.selectedOption}</p>
        <Interval />
      </div>
      :
      props.time > 210 ?
      <div>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 190 ?
      <div>
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      props.time > 180 ?
      <div>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 160 ?
      <div>
        <p className="modal__body">{props.selectedOption}</p>
        <Interval /> 
      </div>
      :
      props.time > 150 ?
      <div>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 130 ?
      <div>
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      props.time > 120 ?
      <div>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 100 ?
      <div>
        <p className="modal__body">{props.selectedOption}</p>
        <Interval /> 
      </div>
      :
      props.time > 90 ?
      <div>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 70 ?
      <div>
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      props.time > 60 ?
      <div>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 40 ?
      <div>
        <p className="modal__body">{props.selectedOption}</p>
        <Interval /> 
      </div>
      :
      props.time > 30 ?
      <div>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 10 ?
      <div>
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      <div>
        <p className="modal__body">You have finished!</p>
    </div>}

    <button className="button" onClick={props.exitModal}>Exit</button>
  </Modal>
);

export default OptionModal;