import React, { Component } from 'react';

class Square extends Component {
    render() {
        var squareColor = "square"
        if(this.props.value === "X"){
            squareColor = squareColor + " black"
        } else if(this.props.value === "O"){
            squareColor = squareColor + " white"
        }
        return (
            <button className={squareColor} onClick={this.props.onClick}>
            </button>
        );
    }
}

export default Square;