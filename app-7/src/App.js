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

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo) {
        this.setState({ list: [...this.state.list, todo] })
    }

    render() {
        console.log(this.state.list)
        return (
            <div className="App">
                <h1>My to-do list:</h1>
                <NewTask add={this.addTodo} />
                <List list={this.state.list}/>
            </div>
        )
    }
}

export default App;
