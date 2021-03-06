import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').trim();
    const error = this.props.handleAddOption(option);
    this.setState(() =>({error}));
    
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input 
            className="add-option__input" 
            type="text" 
            name="option" 
            autoComplete="off"
            autoFocus
          />
          <div className="button-container">
            <button className="button button--input">Add Exercise</button>
            <button id="begin-button" className="button button--input" 
              onClick={this.props.handlePick}
              disabled={!this.props.hasOptions}
              > 
              Start Timer
            </button>
          </div>  
        </form>
      </div>
    );
  }
}