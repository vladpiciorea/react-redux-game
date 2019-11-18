import React, { Component } from 'react';
import  Square from './Square';

class Enemy extends Component {
    componentDidUpdate() {
        const { size, playerPosition, info: { top, left }} = this.props;
        
        if ( playerPosition.left < (left + size) && 
             playerPosition.top  < (top + size)  &&
            (playerPosition.left + size) > left &&
            (playerPosition.top  + size) > top) {
            
            this.props.onCollide()
        }
    }

    render() {
        const { size, info: { top, left }} = this.props;
        
        return (
            <Square 
                size={size}
                position={{ top, left }}
                color='firebrick' />
        );
    }
}

export default Enemy;