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
  const [posHistory, setPosHistory] = useState(false);
  const [turn, setTurn] = useState('X');  


  function changeTurn(){
    setTurn(turn == 'X' ? 'O' : 'X')
  }

  function resetHistory() {
    setHistory(Array());
    setSquares(Array(9).fill(null));
    setTurn('X')
  }

  function changeSquare(posHistory) {
    const nextSquare = Array(9).fill(null);

    for (let i = 0; i <= posHistory; i++) {
      nextSquare[history[i]] =  i % 2 == 0 ? 'X' : 'O';
    }
    setSquares(nextSquare);
    setPosHistory(true);
    setTurn((posHistory + 1 )% 2 == 0 ? 'X' : 'O');
  }
    
  function changeHistory(){
    const nextHistory = Array();

    for (let i = 0; i <= posHistory; i++) {
      nextHistory.push(history[i]);
    }
    alert(nextHistory);
    setHistory(nextHistory);
    setPosHistory(false);
  }
  
  function squareClick(pos){
    let currentHistory = history;
    if (posHistory == true){
      currentHistory = history.slice(0, posHistory);
      setHistory(currentHistory);
      setPosHistory(false);
    }

    if (squares[pos] == null && !checkWin(squares)) {
      const nextSquares = squares.slice();
      nextSquares[pos] = turn;
      setSquares(nextSquares);  

      setHistory([...currentHistory, pos]);
      changeTurn();
    }
  }

  const winner = checkFull(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + turn;
  } else {
    status = 'Next player: ' + turn;
  }

  return (

    <div className="section">
      <div className="container">
        <div className="badge mb-md">
          Tic toe tac
        </div>

      <h2 className="mb-md">Tic toe tac</h2>
      <div className="box-game">
        <div className="panel">
          <div>O</div>
          <div>X</div>
        </div>

        <div className="window">
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
          
        </div>
        <div className="badge">
          {status}
        </div>
        <div className="grid-2">
        

        <div className="card card-white">
            <h3>History:</h3>
            <button className="btn" onClick={resetHistory}>
              Reset
            </button>
             
             <div>
              {history.map((his, index) => 
                <button
                  key={index}
                 className="btn"
                 onClick={() => changeSquare(index)}
                 >
                  Move {index + 1}: ô {his}
                </button>
              )}
             </div>
            
          </div>
      </div>
      </div>
      </div>
         

      
    </div>
 
  )
}