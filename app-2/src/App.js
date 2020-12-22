import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['HTML', 'CSS', 'JavaScript', 'SQL', 'PostgreSQL', 'React', 'Node.js', 'Java', 'C#']
    }
  }
  render() {
    let renderedList = this.state.list.map((item, index) => (
      <h2 key={index}>{item}</h2>
    ))
    return (
      <div className="App">
        {renderedList}
      </div>
    )
  }
}

export default App;
