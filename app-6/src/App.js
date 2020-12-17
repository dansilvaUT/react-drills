import React from 'react';
import { Component } from 'react';
import Todo from './Components/Todo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: ['Learn React', 'Master JavaScript', 'Become a Web Developer'],
      todoItem: ''
    }
  }

  todoItem(value) {
    this.setState({ todoItem: value });
  }

  addTodo() {
    let item = this.state.todoItem;
    const todoList = this.state.todoList;
    todoList.push(item);
    this.setState({ todoList: todoList, todoItem: '' });
  }

  render() {
    console.log("Todo:", this.state.todoItem)
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.todoItem} type="text" onChange={e => { this.todoItem(e.target.value) }} />
        <button onClick={() => this.addTodo()}>Add</button>
        {this.state.todoList.map((element, index) => {
          return <Todo key={index} todo={element} />
        })}

      </div>
    );
  }

}

export default App;
