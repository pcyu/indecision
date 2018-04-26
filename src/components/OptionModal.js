import React from 'react';
import Sound from 'react-sound';
import Modal from 'react-modal';
import Rest from './Rest';
import Start from './Start';
import Interval from './Interval';

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
        <Sound 
          url="audio/ready.mp3"
          playStatus={Sound.status.PLAYING}
        /> 
        <p className="modal__body">Get Ready to Start!</p>
        <Start />
      </div>
      :
      props.time > 220 ?
      <div>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className = 'modal__count'>1/4</p> 
        <p className="modal__body">{props.selectedOption}</p>
        <Interval />
      </div>
      :
      props.time > 210 ?
      <div>
      <p className = 'modal__count'>1/7</p>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 190 ?
      <div>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className = 'modal__count'>1/4</p> 
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      props.time > 180 ?
      <div>
      <p className = 'modal__count'>2/7</p>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 160 ?
      <div>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className = 'modal__count'>2/4</p> 
        <p className="modal__body">{props.selectedOption}</p>
        <Interval /> 
      </div>
      :
      props.time > 150 ?
      <div>
        <p className = 'modal__count'>3/7</p>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 130 ?
      <div>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className = 'modal__count'>2/4</p> 
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      props.time > 120 ?
      <div>
        <p className = 'modal__count'>4/7</p>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 100 ?
      <div>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className = 'modal__count'>3/4</p> 
        <p className="modal__body">{props.selectedOption}</p>
        <Interval /> 
      </div>
      :
      props.time > 90 ?
      <div>
        <p className = 'modal__count'>5/7</p>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 70 ?
      <div>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className = 'modal__count'>3/4</p> 
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      props.time > 60 ?
      <div>
        <p className = 'modal__count'>6/7</p>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 40 ?
      <div>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className = 'modal__count'>4/4</p> 
        <p className="modal__body">{props.selectedOption}</p>
        <Interval /> 
      </div>
      :
      props.time > 30 ?
      <div>
        <p className = 'modal__count'>7/7</p>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 10 ?
      <div>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className = 'modal__count'>4/4</p> 
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