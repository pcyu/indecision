import React from 'react';

export default class Rest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 10
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      timeLeft: prevState.timeLeft - 1
    }));
  }

  render() {
    return (
      <div className= 'grid__timer'>
        <p className = 'modal__timer'>
        {
          this.state.timeLeft > 9 
          ? 
          '0:' + this.state.timeLeft
          :
          '0:0' + this.state.timeLeft
        }
        </p>
      </div>
    );
  }
}