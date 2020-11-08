import React from 'react';
import Board from './Board';
import Button from './Button';

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
	      xisNext: true,
	      displayMove: false,
	      computerTurn: false,
	      computerMode: false
	    };
  }

  showMove = ()=>{
  		this.setState({
      		displayMove: this.state.displayMove?
                      false : true,
    })
  }
  

  restartGame = ()=>{
      this.setState({
        history:[
        {
          squares: [null,null,null,
                    null,null,null,
                    null,null,null]
        }
      ],
        stepNumber:0,
        xisNext: true,
        computerTurn: false,
       });
  }

  jumpTo = (step)=>{
      this.setState({
        stepNumber: step,
        xisNext: (step%2)===0
      })
  }

  componentDidUpdate(){
  	if(this.state.computerMode){
  		this.computerMove();
  	}
  }

  changeMode = ()=>{
  		this.setState({
  			history:[
		        {
		          squares: [null,null,null,
		                    null,null,null,
		                    null,null,null]
		        }
		      ],
		    stepNumber:0,
		    xisNext: true,
		    computerMode: !this.state.computerMode,
		    computerTurn: false,
		});
  }

  computerMove = ()=>{
  		const computerTurn = this.state.computerTurn;
  		if(computerTurn && this.state.computerMode){
		    const history = this.state.history.slice(0, this.state.stepNumber+1);
		    const current = history[history.length-1];
		    const squares = current.squares.slice();
		    const winner = calculateWinner(squares);
		    // const getRandNum = ()=>{
		    // 	if(!winner){
		    // 		const randomNumber = Math.floor(Math.random()*(8-0+1))+0;
		    // 		if(!squares[randomNumber]){
		    // 			console.log("Random Index:"+randomNumber);
		    // 			return randomNumber;
		    // 		}
		    // 		return getRandNum();
		    // 	}
		    // }
		 //    const getRandNum = () => {
			//     let results = 0;
			//     if (!winner) {
			//         const a = Math.floor(Math.random() * squares.length);
			//         if (squares[a]) {
			//             results = getRandNum();
			//         } else {
			//             results = a
			//         }
			//         return results;
			//     }
			// }
			const getRandNum = () => {
			    let results = 0;
			    let b = () => results = Math.floor(Math.random() * squares.length+1);
			    if (!winner) {
			        while (squares[results]) {b()}
			        return results;
			    }
			}
		    const randomNum = getRandNum();
		    console.log("before",squares);
		    if(!winner){
		      squares[randomNum] = this.state.xisNext?"X":"O";
		      this.setState({history:history.concat({
		                        squares: squares
		                    }),
		                    stepNumber:history.length,
		                    xisNext: !this.state.xisNext,
		                    computerTurn: !computerTurn
		                  });
		    }
		    console.log("After",squares);
  		}
  }

  handleClick = (i)=>{
	  	const computerTurn = this.state.computerMode? this.state.computerTurn:false;
	  	if(!computerTurn){
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
		                    computerTurn: !computerTurn,
		                  });
		    }
		}
  }

  render() {
	    const history = this.state.history;
	    const current = history[this.state.stepNumber];
	    const winner = calculateWinner(current.squares);
	    let status;
	    if(winner){
	        status = <span>{winner} is winner!! &#129395; &#x1F389; &#x1F389; &#x1F389;</span>;
	    } else if(current.squares.length===this.state.stepNumber){
	        status = `Draw`;
	    }
	    else{
	        status = `Next Player: ${this.state.xisNext?"X":"O"}`;
	    }

	    const moves = history.map((step, move)=>{
	                      const desc = move?
	                                   move===this.state.stepNumber?`Move #${move}`:
	                                   `Go to move #${move}`:
	                                   `Go to game start`;
	                      return (<li key={move}>
	                                  <Button 
	                                      className = {move===this.state.stepNumber?
	                                              "activeHistoryBtn":"historyBtn"}
	                                      onClick = {()=>{this.jumpTo(move)}}
	                                      value = {desc}
	                                  />
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
	            <Button className = "replayBtn"
	                    onClick = {this.restartGame}
	                    value = "Replay"
	            />
	            <Button className = "changeModeBtn"
	          				onClick = {this.changeMode}
	          				value = {!this.state.computerMode?
	          						"Computer Mode":
	          						"Multiplayer"}
	          	/>
	          </div>
	          <div className="game-info">
	            <div className="game-status">{status}</div>
	            <Button className = "showHistoryBtn"
	                    onClick = {this.showMove}
	                    value={this.state.displayMove?
	                            "Hide Moves":
	                            "Show Moves"}
	            />
	            <ol className={this.state.displayMove?
	                            "showHistory":
	                            "hideHistory"}>
	                {moves}
	            </ol>
	          </div>
	          <div className="change-mode-container">
	          		
	          </div>
	        </div>
	      </>
	    );
	  }
}

export default Game;