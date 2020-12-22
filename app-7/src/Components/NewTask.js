import React, { Component } from 'react';

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }

        this.addTodo = this.addTodo.bind(this);
    }

    handleInputChange(value) {
        this.setState({ todo: value });
    }

    addTodo() {
        this.props.add(this.state.todo);
        this.setState({ todo: '' });
    }

    render() {
        return (
            <section>
                <input value={this.state.todo} onChange={e => this.handleInputChange(e.target.value)} />
                <button onClick={() => this.addTodo()}>Add</button>
            </section>
        )
    }
}

export default NewTask;