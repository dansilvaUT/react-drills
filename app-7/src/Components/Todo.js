import React, { Component } from 'react';

class Todo extends Component {
    render(){
        return(
            <section>
                <p>{this.props.task}</p>
            </section>
        )
    }
}

export default Todo;