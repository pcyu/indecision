import React from 'react';

const Action = (props) => (
  <div>
    <button id="begin-button" className="big-button" 
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    > 
      Begin!
    </button>
  </div>
);

export default Action;