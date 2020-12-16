import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Git', 'Node.js', 'React']
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Languages</h1>
        {this.state.items.map((element, index) => {
          return <h4 key={index}>{element}</h4>
        })}
      </div>
    );
  }
}

export default App;
