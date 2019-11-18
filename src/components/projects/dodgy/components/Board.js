import React from 'react';

const style = (dimension) => {
    const dim = dimension + 'px';
    return {
        width: dim,
        height: dim,
        border: '1px solid black',
        position: 'relative',
        margin: '25px auto',
        overflow: 'hidden',
        background: '#eeff41',
        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
    };
};

const Board = ({ dimension, children }) => (
    <div style={style(dimension)}>
        {children}
    </div>
)

export default Board