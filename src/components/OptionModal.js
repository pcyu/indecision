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
      props.time > 248 ?
      <div className = "grid">
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__title">Random Tabata has selected</p>
        <p className="modal__first-set">{props.selectedOption}</p>
      </div> 
      :
      props.time > 245 ?
      <div className = "grid">
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__title">Random Tabata has selected</p>
        <p className="modal__first-set">{props.selectedOption2}</p>
      </div> 
      :
      props.time > 240 ?
      <div className = "grid">
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <Sound 
          url="audio/ready.mp3"
          playStatus={Sound.status.PLAYING}
          onError
        /> 
        <p className="modal__body">Get Ready to Start!</p>
        <Start />
      </div>
      :
      props.time > 220 ?
      <div className = "grid">
      <span className = 'modal__set'>1/4</span> 
      <span className="modal__exit" onClick={props.exitModal}>X</span>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className="modal__body">{props.selectedOption}</p>
        <Interval />
      </div>
      :
      props.time > 210 ?
      <div className = "grid">
        <span className = 'modal__set'>1/7</span>
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 190 ?
      <div className = "grid">
      <span className = 'modal__set'>1/4</span>  
      <span className="modal__exit" onClick={props.exitModal}>X</span>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      props.time > 180 ?
      <div className = "grid">
        <span className = 'modal__set'>2/7</span>
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 160 ?
      <div className = "grid">
      <span className = 'modal__set'>2/4</span>  
      <span className="modal__exit" onClick={props.exitModal}>X</span>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className="modal__body">{props.selectedOption}</p>
        <Interval /> 
      </div>
      :
      props.time > 150 ?
      <div className = "grid">
        <span className = 'modal__set'>3/7</span>
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 130 ?
      <div className = "grid">
      <span className = 'modal__set'>2/4</span>  
      <span className="modal__exit" onClick={props.exitModal}>X</span>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      props.time > 120 ?
      <div className = "grid">
        <span className = 'modal__set'>4/7</span>
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 100 ?
      <div className = "grid">
      <span className = 'modal__set'>3/4</span>  
      <span className="modal__exit" onClick={props.exitModal}>X</span>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className="modal__body">{props.selectedOption}</p>
        <Interval /> 
      </div>
      :
      props.time > 90 ?
      <div className = "grid">
        <span className = 'modal__set'>5/7</span>
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 70 ?
      <div className = "grid">
      <span className = 'modal__set'>3/4</span>  
      <span className="modal__exit" onClick={props.exitModal}>X</span>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      props.time > 60 ?
      <div className = "grid">
        <span className = 'modal__set'>6/7</span>
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 40 ?
      <div className = "grid">
      <span className = 'modal__set'>4/4</span>  
      <span className="modal__exit" onClick={props.exitModal}>X</span>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className="modal__body">{props.selectedOption}</p>
        <Interval /> 
      </div>
      :
      props.time > 30 ?
      <div className = "grid">
        <span className = 'modal__set'>7/7</span>
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__body">Rest</p>
        <Rest />
      </div>
      :
      props.time > 10 ?
      <div className = "grid">
      <span className = 'modal__set'>4/4</span>  
      <span className="modal__exit" onClick={props.exitModal}>X</span>
        <Sound 
          url="audio/go.mp3"
          playStatus={Sound.status.PLAYING}
        />
        <p className="modal__body">{props.selectedOption2}</p>
        <Interval /> 
      </div>
      :
      <div className = "grid">
        <span className="modal__exit" onClick={props.exitModal}>X</span>
        <p className="modal__body">You have finished!</p>
      </div>}
  </Modal>
);

export default OptionModal;