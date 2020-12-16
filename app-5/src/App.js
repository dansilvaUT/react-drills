import React, { Component } from 'react';
import Image from './Components/Image';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png'
    }
  }
  render() {
    return (
      <div className="App">
        <Image imgSrc={this.state.imageSrc} />
      </div>
    )
  }

}

export default App;
