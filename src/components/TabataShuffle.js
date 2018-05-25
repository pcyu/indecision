import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import OptionModal from './OptionModal';

class TabataShuffle extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    selectedOption2: undefined,
    time: 0
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
      options: this.state.options.filter((items) => option !== items && secondOption !== items),
      time: 250
    }));
  };
  exitModal = () => {
    clearInterval(this.timer);
    clearTimeout(this.timedExit);
    this.setState(() => ({ selectedOption: undefined, selectedOption2: undefined}));
  };
  startTabata = () => {
    const tabataCircuit = () => {
      this.setState((prevState) => ({
        time: prevState.time - 1
      }))
      // console.log(this.state.time);
    };
    this.timer = setInterval(tabataCircuit.bind(this), 1000)
    this.timedExit = setTimeout(() => { this.exitModal()}, 245000);
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Please enter an exercise option.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This exercise already exists.';
    } else if (option.split('').length > 20) {
      return 'Max 20 characters.'
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
    const subtitle = 'Randomized High-Intensity Interval Training'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <AddOption 
            handleAddOption={this.handleAddOption}
            hasOptions={this.state.options.length > 1}
            handlePick={this.handlePick} 
            />
          <div className="widget">
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          selectedOption2={this.state.selectedOption2}
          exitModal={this.exitModal}
          startTabata={this.startTabata}
          time={this.state.time}
        />
      </div>
    );
  }
}

export default TabataShuffle;