import React, { Component } from 'react';
import NewTask from './Components/NewTask';
import List from './Components/List';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }

    this.handleItem = this.handleItem.bind(this);
  }

  handleItem(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    console.log(this.state.list)
    return (
      <div className="App" >
        <h1>My to-do list:</h1>
        <NewTask addTodo={this.handleItem} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
