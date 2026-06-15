import { useState } from "react";
import { Link } from "react-router";

function Square({value, onClick}) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function checkWin(matrix){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      console.log(matrix[a], matrix[b], matrix[c])
      if (matrix[a] && matrix[a] === matrix[b] && matrix[b] === matrix[c]) {
        return matrix[a];
      }
    }
    return null;
  }

function checkFull(matrix){
  for (let i = 0; i < matrix.length; i++) {
    if (!matrix[i]){
      return false
    }
  }
  return true
}
export default function Main() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState(Array());
  const [turn, setTurn] = useState('X');

  function resetHistory() {
    setHistory(Array());
    setSquares(Array(9).fill(null));
    setTurn('X')
}

  

  function changeTurn(){
    setTurn(turn == 'X' ? 'O' : 'X')
  }

  

  function squareClick(pos){
    if (squares[pos] == null) {
      const nextSquares = squares.slice();
      nextSquares[pos] = turn;
      setSquares(nextSquares);

      let winner = checkWin(nextSquares);
      if (winner){
        setTurn(winner + ' won');
        return;
      }
      else if (checkFull(nextSquares)) {
        setTurn('draw');
        return;
      }

  

      history.push(turn + ' ' + pos);
      setHistory(history);

      changeTurn();
    }
  }

  return (
    <div className="page">
<div className="section">
        <Link to="/game">
            <button className="btn">
                Return game
            </button>
        </Link>
    </div>
    <div className="section">
      <div className="section-header">
        <h3>Turn: {turn}</h3>
      </div>
      
      <div className="section-body">
        <div>
          <div className="row">
            <Square value={squares[0]} onClick={() => squareClick(0)}/>
            <Square value={squares[1]} onClick={() => squareClick(1)}/>
            <Square value={squares[2]} onClick={() => squareClick(2)}/>
          </div>
          <div className="row">
            <Square value={squares[3]} onClick={() => squareClick(3)}/>
            <Square value={squares[4]} onClick={() => squareClick(4)}/>
            <Square value={squares[5]} onClick={() => squareClick(5)}/>
          </div>
          <div className="row">
            <Square value={squares[6]} onClick={() => squareClick(6)}/>
            <Square value={squares[7]} onClick={() => squareClick(7)}/>
            <Square value={squares[8]} onClick={() => squareClick(8)}/>
          </div>
          
        </div>
        <div>
          <div className="card card-white">
            <h3>History:</h3>
            <button className="btn" onClick={resetHistory}>
              Reset
            </button>
             
             {history.map(his => 
                <div className="btn">
                  Position: {his}
                </div>
              )}
            
          </div>
        </div>

      </div>

    </div>
    </div>
  )
}