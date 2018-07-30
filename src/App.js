import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Counter nama="Barcelona" />
        <Counter nama="Liverpool" />
        <Counter nama="Real Madrid" />
      </div>
    );
  }
}

export default App;

class Counter extends Component {
  state = {
    number: 0
  };

  naik = () => {
    console.log('naik,naik');
    this.setState({
      number: this.state.number + 1
    });
  };

  turun = () => {
    console.log('naik,naik');
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.nama}</h1>
        <h2>{this.state.number}</h2>
        <button onClick={this.naik}>naik</button>
        <button onClick={this.turun}>turun</button>
      </div>
    );
  }
}
