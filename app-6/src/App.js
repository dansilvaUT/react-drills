import React from 'react';
import { Component } from 'react';
import Todo from './Components/Todo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      item: ''
    }

    this.addItem = this.addItem.bind(this);
  }

  handleItemInput(value) {
    this.setState({ item: value });
  }

  addItem() {
    // const list = this.state.list.splice();
    // list.push(this.state.item);
    // this.setState({ list: list, item: '' });
    this.setState({ list: [...this.state.list, this.state.item], item: '' })
  }

  render() {
    console.log('list', this.state.list)
    const displayTodos = this.state.list.map((element, index) => (
      <Todo key={index} item={element} />
    ))
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.item} onChange={e => this.handleItemInput(e.target.value)} />
        <button onClick={this.addItem}>Add</button>
        {displayTodos}
      </div>
    );
  }

}

export default App;
