import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostreSQL', 'React', 'Ruby', 'Java'],
      stringToSearch: ''
    }
  }

  filterlist(value) {
    this.setState({ stringToSearch: value });
  }

  render() {

    let languages = this.state.items
      .filter(element => {
        return element.includes(this.state.stringToSearch)
      })
      .map((element, index) => {
        return <p key={index}>{element}</p>
      })
    return (
      <div className="App">
        <input onChange={e => { this.filterlist(e.target.value) }} />
        {languages}
      </div>
    );
  }

}

export default App;
