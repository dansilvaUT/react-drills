import React from 'react';
import Todo from './Todo';
const List = props => {
    return (
        <section>
            {props.list.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </section>
    )
}

export default List;