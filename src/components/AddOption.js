import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.substr(1)).join().trim();
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
          <input className="add-option__input" type="text" name="option" autocomplete="off"/>
          <button className="button">Add Exercise</button>
        </form>
      </div>
    );
  }
}