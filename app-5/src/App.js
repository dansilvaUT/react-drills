import React, { Component } from 'react';
import Image from './Components/Image';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: 'https://www.doi.gov/sites/doi.gov/files/blog-post/thumbnail-images/ZionNPTomMorrisSmall.jpg'
    }
  }
  render() {
    return (
      <div className="App">
        <Image src={this.state.imageURL} />
      </div>
    )
  }

}

export default App;
