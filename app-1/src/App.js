import React from 'react';
import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange(value) {
    this.setState({ input: value });
  }
  render() {
    console.log(this.state.input)
    return (
      <div className="App">
        <input onChange={e => { this.handleChange(e.target.value) }} />
        <p>{this.state.input}</p>
      </div>
    )
  }
}

export default App;