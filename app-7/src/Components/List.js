import React, { Component } from 'react';
import Todo from './Todo';

class List extends Component {
    render(){
        return(
            <section>
                {this.props.tasks.map((element, index)=>{
                    return <Todo key={index} task={element}/>
                })}
            </section>
        )
    }
}

export default List;