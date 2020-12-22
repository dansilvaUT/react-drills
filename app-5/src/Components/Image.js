import React from 'react';

const Image = props => {
    return (
        <section>
            <img src={props.src} alt="pokemon-pic" />
        </section>
    )
}

export default Image;