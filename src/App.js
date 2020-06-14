import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './Components/Board'

class Game extends Component {
  constructor(props) {
      super(props);
      let size = 64;
      let sqRt = Math.sqrt(64);
      let SqRtHalf = sqRt/2;
      let squareArray = Array(size).fill(" ")
      squareArray[(sqRt*(SqRtHalf-1))+SqRtHalf] = "O";
      squareArray[(sqRt*(SqRtHalf-1))+SqRtHalf-1] = "X";
      squareArray[(sqRt*SqRtHalf)+SqRtHalf] = "X";
      squareArray[(sqRt*SqRtHalf)+SqRtHalf-1] = "O";
      this.state = {
          blackCount: 2,
          whiteCount: 2,
          boardSize: size,
          xIsNext: true,
          stepNumber: 0,
          history: [
              { squares: squareArray }
          ]
      }
  }
  handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      let possMoves = checkMove(squares,i,this.state.xIsNext,this.state.boardSize);
      if(possMoves.length > 0){
          makeMove(squares,i,this.state.xIsNext,possMoves,this.state.boardSize);
          squares[i] = this.state.xIsNext ? 'X' : 'O';
          let counts = countTiles(squares, this.state.boardSize);
          this.setState({
              history: history.concat({
                  squares: squares
          }),
          xIsNext: !this.state.xIsNext,
          stepNumber: history.length,
          blackCount: counts[0],
          whiteCount: counts[1]
          
          });
      } else {
          this.setState({
              snackbaropen:true
          })
      }
  }

  resetGame(){
      this.setState(new Game().state);
  }


  render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const state = this.state.xIsNext ? 'Player 1' : 'Player 2';
      return (
          <div>
              <div className="game menu">
                  <div className="board">
                      <div className="board-row">
                          <button className="square reset" onClick={() =>this.resetGame()}>
                              Start Over
                          </button>
                          <button className="square black menu">{this.state.blackCount}</button>
                          <button className="square white menu">{this.state.whiteCount}</button>
                          <button style={ this.state.xIsNext ? { background:'black'} : {background : 'white' , color: 'black'} }   className="square turn">{state} Turn!</button>
                      </div>
                  </div>
              </div>
              
              <div className="game">
                  <Board onClick={(i) => this.handleClick(i)}
                      squares={current.squares} />
              </div>
              <div>
              </div>
          </div>
         
      );
  }
}

export default Game;



