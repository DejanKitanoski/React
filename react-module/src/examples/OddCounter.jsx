import React, { Component } from "react";

class OddCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  incrementOdd = () => {
    this.setState((prevState) => ({ count: prevState.count + 2 }));
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Odd Counter: {this.state.count}</h1>
        <button onClick={this.incrementOdd} className="counter-button">Next Odd Number</button>
      </div>
    );
  }
}

export default OddCounter;