import React, { Component } from 'react';

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            todoItem: ''
        }
        this.addItem = this.addItem.bind(this);
    }


    receiveTodo(value) {
        this.setState({ todoItem: value });
    }

    addItem() {
        this.props.addTodo(this.state.todoItem);
        this.setState({ todoItem: '' });
    }

    render() {
        return (
            <section>
                <input value={this.state.todoItem} onChange={e => { this.receiveTodo(e.target.value) }} />
                <button onClick={this.addItem}>Add</button>
            </section>

        )
    }
}

export default NewTask;