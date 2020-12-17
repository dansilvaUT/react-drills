import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['pizza', 'pie', 'chocoloate', 'candy', 'pie', 'soda'],
      userInput: ''
    }
  }

  handleItemSearch(value) {
    this.setState({ userInput: value });
  }

  render() {
    console.log(this.state.userInput)
    return (
      <div className="App">
        <input onChange={e => { this.handleItemSearch(e.target.value) }} />
        <h1>List Items</h1>
        {this.state.list.filter((element) => {
          return element.includes(this.state.userInput);
        })
          .map((element, index) => {
            return <p key={index}>{element}</p>
          })}
      </div>
    );
  }

}

export default App;
