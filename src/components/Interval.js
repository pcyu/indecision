import React from 'react';

export default class Interval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 20
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
        <p>{this.state.timeLeft > 0 ? this.state.timeLeft : 0}</p>
      </div>
    );
  }
}