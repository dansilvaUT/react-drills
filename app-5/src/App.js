import React, { Component } from 'react';
import Image from './Components/Image';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://wallpapercave.com/wp/NCJgtUD.jpg'
    }
  }
  render() {
    return (
      <div className="App">
        <Image src={this.state.url} />
      </div>
    )
  }
}

export default App;
