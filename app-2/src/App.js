import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['pizza', 'burgers', 'soda', 'chocolate', 'candy', 'cereal', 'pie']
    }
  }
  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        {this.state.list.map((element, index) => {
          return <p key={index}>{element}</p>
        })}
      </div>
    );
  }
}

export default App;
