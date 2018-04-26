import React from 'react';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 5
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
      <div>
      <p className = 'modal__timer'>{'0:0' + this.state.timeLeft}</p>
      </div>
    );
  }
}