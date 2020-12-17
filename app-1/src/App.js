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

  handleInputChange(value) {
    this.setState({ userInput: value });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => { this.handleInputChange(e.target.value) }} />
        <p>{this.state.userInput}</p>
      </div>
    );
  }

}

export default App;
