import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  render() {
    console.log(this.state.userInput);
    return (
      <div className="App">
        <input value={this.state.userInput} onChange={e => { this.handleChange(e.target.value) }} />
        <p>{this.state.userInput}</p>
      </div>
    );
  }

}

export default App;
