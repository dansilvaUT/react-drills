import React from 'react';
import { Component } from 'react';
import Todo from './Components/Todo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      todo: ''
    }

    this.addTodo = this.addTodo.bind(this);

  }

  handleInputChange(value) {
    this.setState({ todo: value });
  }

  addTodo() {
    this.setState({ list: [...this.state.list, this.state.todo], todo: '' });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.todo} onChange={e => this.handleInputChange(e.target.value)} />
        <button onClick={() => this.addTodo()}>Add</button>
        <Todo list={this.state.list} />
      </div>
    )
  }
}

export default App;