import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const calculateWinner = (squares)=>{
  const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6]
  ]
  for(let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a]===squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

const Square = (props)=>{
    return (
      <button className="square" 
      		  onClick = {props.onClick}
      >
        {props.value}
      </button>
    );
}

class Board extends React.Component {

  renderSquare = (i)=>{
    return (<Square 
              value={this.props.squares[i]}
              onClick = {()=>{this.props.onClick(i)}}
            />);
  }

  render() { 
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history:[
        {
          squares: [null,null,null,
                    null,null,null,
                    null,null,null]
        }
      ],
      stepNumber:0,
      xisNext: true
    };
  }

  restartGame = ()=>{
      this.setState({
        stepNumber:0,
        xisNext: true
      });
  }

  jumpTo = (step)=>{
      this.setState({
        stepNumber: step,
        xisNext: (step%2)===0,
      })
  }

  handleClick = (i)=>{
    const history = this.state.history.slice(0, this.state.stepNumber+1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if(!calculateWinner(squares) && !squares[i]){
      squares[i] = this.state.xisNext?"X":"O";
      this.setState({history:history.concat({
                        squares: squares
                    }),
                    stepNumber:history.length,
                    xisNext: !this.state.xisNext,
                  });
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if(winner){
        status = <span>{winner} is winner!! &#129395; &#x1F389; &#x1F389; &#x1F389;</span>;
    } else{
        status = `Next Player: ${this.state.xisNext?"X":"O"}`;
    }

    const moves = history.map((step, move)=>{
                      const desc = move?
                                   move===this.state.stepNumber?`Move #${move}`:
                                   `Go to move #${move}`:
                                   `Go to game start`;
                      return (<li key={move}>
                                  <button 
                                      className = {move===this.state.stepNumber?
                                              "activeHistoryBtn":"historyBtn"}
                                      onClick = {()=>{this.jumpTo(move)}}
                                  >{desc}</button>
                              </li>);

                  });

    return (
      <>
        <h1>Tic-Tac-Toe</h1>
        <div className="game">
          <div className="game-board">
            <Board
                onClick = {(i)=>{this.handleClick(i)}}
                squares = {current.squares} 
            />
            <button 
              className="replayBtn"
              onClick = {this.restartGame}
            >
                Replay
            </button> 
          </div>
          <div className="game-info">
            <div className="game-status">{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
