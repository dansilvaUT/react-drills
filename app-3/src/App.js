import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['HTML', 'CSS', 'JavaScript', 'SQL', 'PostgreSQL', 'React', 'Node.js', 'Java', 'C#'],
      input: ''
    }
  }

  handleInputSearch(value) {
    this.setState({ input: value });
  }

  render() {

    return (
      <div className="App">
        <input onChange={e => this.handleInputSearch(e.target.value)} />
        {this.state.list.filter(item => {
          return item.toLowerCase().includes(this.state.input.toLowerCase())
        }).map((element, index) => {
          return <h2 key={index}>{element}</h2>
        })}
      </div>
    )
  }
}

export default App;
