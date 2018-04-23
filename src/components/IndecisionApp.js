import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    selectedOption2: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState)=> ({
      options: prevState.options.filter((option) =>  optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    const newState = this.state.options.filter((items) => option !== items);
    const secondrandomNum = Math.floor(Math.random() * newState.length);
    const secondOption = newState[secondrandomNum];
    this.setState(() => ({ 
      selectedOption: option, 
      selectedOption2: secondOption,
      options: this.state.options.filter((items) => option !== items && secondOption !== items)
    }));
  };
  exitModal = () => {
    this.setState(() => ({ selectedOption: undefined, selectedOption2: undefined}));
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('component will unmount');
  };
  render() {
    const subtitle = 'Put your life in the hands of a computer.'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Action 
          hasOptions={this.state.options.length > 1}
          handlePick={this.handlePick} 
          />
          <div className="widget">
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
            handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          selectedOption2={this.state.selectedOption2}
          exitModal={this.exitModal}
        />
      </div>
    );
  }
}

export default IndecisionApp;