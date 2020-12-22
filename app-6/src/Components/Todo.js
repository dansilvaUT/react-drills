import React from 'react';

const Todo = props => {
    return (
        <section>
            {props.list.map((todo, index) => (
                <h3 key={index}>{todo}</h3>
            ))}
        </section>
    )
}

export default Todo;