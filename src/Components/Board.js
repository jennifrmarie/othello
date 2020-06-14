import React, { Component } from 'react'
import Square from './Square';

export default class Board extends Component {

    renderSquare(i){
        return <Square key={i} value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}/>
    }
  
  
  
    render() {
        let size = 64;
        let sqRt = Math.sqrt(size)
        const board = []
        for(let i = 0;i < sqRt; i++){
            const row = [];
            for(let x =0;x < sqRt;x++){
                row.push(this.renderSquare((i*sqRt)+x));
            }
            board.push(<div className="board-row" key={i}>{row}</div>);
        }
  
        return (
            <div className="board">
            {board}
            </div>
  )
    }
  }
  
