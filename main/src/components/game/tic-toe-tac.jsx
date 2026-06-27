import { useState, useReducer } from "react";
import { Link } from "react-router";

const STATUS_GAME = {
  CHOOSING: 'Choosing',
  PLAYING: 'playing',
  WIN: 'win',
  DRAW: 'draw'
};

let SIZE = 9;

const initialState = {
  squares: Array(SIZE).fill(null),
  history: [],
  turn: 'X',
  status: STATUS_GAME.PLAYING,
  message: 'Next player: X',
};

function gameReducer(state, action) {
  switch (action.type) {

    

    case 'CLICK_SQUARE': {
      const { posSquare } = action;
      if (state.squares[posSquare] !== null) return state;
      if (state.status !== STATUS_GAME.PLAYING) return state;

      const nextSquares = state.squares.slice();
      nextSquares[posSquare] = state.turn;
      const nextTurn = state.turn === 'X' ? 'O': 'X';

      const winner = checkWin(nextSquares);
      const isFull = checkFull(nextSquares);

      const nextHistory = state.history.slice();
      let countTravel = state.history.length - countMove(state.squares);

      if (countTravel > 0){
        for (let i = 0; i < countTravel; i++)
          console.log(nextHistory.pop());
      } else if (countTravel < 0){
        alert("Lỗi");
      }
      return {
        ...state,
        squares: nextSquares,
        history: [...nextHistory, posSquare],
        turn: nextTurn,
        status: winner
          ? STATUS_GAME.WIN
          : isFull 
          ? STATUS_GAME.DRAW : STATUS_GAME.PLAYING,
        message: winner
          ? 'Winner: ' + winner
          : isFull ? 'DRAW !!!' : 'Next player: ' + nextTurn,
      };
    }

    case 'TIME_TRAVEL': {
      const { indexHistory } = action;
      const nextSquares = Array(SIZE).fill(null);
      const nextHistory = state.history.slice(0, indexHistory + 1);
      
      nextHistory.forEach((pos, i) => {
        nextSquares[pos] = i % 2 === 0 ? 'X' : 'O'; 
      }); 

      const nextTurn = (indexHistory + 1) % 2 === 0 ? 'X' : 'O';

      return {
        ...state,
        squares: nextSquares,
        history: indexHistory === -1 ? nextHistory: state.history,
        turn: nextTurn,
        status: STATUS_GAME.PLAYING,
        message: 'Next player: ' + nextTurn
      };
    }

    default:
      return state;
  }
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

function countMove(board) {
  let count = 0;
  for (let i = 0; i < SIZE; i++){
    if (board[i] !== null) {
      count += 1;
    }
  }
  return count;
}

function checkFull(board){
  const count = countMove(board);
  return count === SIZE;
}

function Square({value, onClick}) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board({matrix, onClick}){
  return (
     <div>
      <div className="row">
        <Square value={matrix[0]} onClick={() => onClick(0)}/>
        <Square value={matrix[1]} onClick={() => onClick(1)}/>
        <Square value={matrix[2]} onClick={() => onClick(2)}/>
      </div>
      <div className="row">
        <Square value={matrix[3]} onClick={() => onClick(3)}/>
        <Square value={matrix[4]} onClick={() => onClick(4)}/>
        <Square value={matrix[5]} onClick={() => onClick(5)}/>
      </div>
      <div className="row">
        <Square value={matrix[6]} onClick={() => onClick(6)}/>
        <Square value={matrix[7]} onClick={() => onClick(7)}/>
        <Square value={matrix[8]} onClick={() => onClick(8)}/>
      </div>
    </div>
  )
}

export default function Main() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { squares, history, message } = state; 
  const [password, setPassword] = useState('');
const [verified, setVerified] = useState(false);

  return (
    <div className="section">
      <div className="container">
        <div className="badge mb-md">Tic toe tac</div>
        <h2 className="mb-md">Tic toe tac</h2>


      <div className="box-game">
          <div className="panel">
            <div>O</div>
            <div>X</div>
          </div>

          <div className="window">
            <Board 
              matrix={squares}
              onClick={(posSquare) => dispatch({ type: 'CLICK_SQUARE', posSquare})}/>
          </div>

        {state.status === STATUS_GAME.PLAYING && (
          <div className="badge">
            {message}
          </div>
        )}

        {state.status === STATUS_GAME.WIN && (

          <div className="badge badge-win">
            🎉 {message}
          </div>

        )}

        {state.status === STATUS_GAME.WIN && (
     <div className="verify-box">
  <h2>Are you Nene? Verify yourself :3333</h2>
  
  {!verified ? (
    <>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Nhập mật khẩu đi bà già..."
      />
      <button className="btn" onClick={() => {
        if (password === import.meta.env.NENE) {
          setVerified(true);
        } else {
          alert('❌ Wrong!');
        }
      }}>
        Verify →
      </button>
    </>
  ) : (
    <div className="verified-box">
      <div className="badge badge-win mb-md">Nene là youu reallll !</div>
      <p className="mb-md">Nhớ tải grab app nhaa bà:</p>
      <a 
        href={import.meta.env.GRAB} 
        target="_blank"
        rel="noreferrer"
        className="secret-link"
      >
        Click to get quà nè Nene 
      </a>
    </div>
  )}
</div>
    )}

        {state.status === STATUS_GAME.DRAW && (
          <div className="badge badge-draw">
            🤝 {message}
          </div>
        )}
        
        <div className="grid-2">
          <div className="card card-white">
            <h3>History:</h3>
            <button className="btn" 
              onClick={() => dispatch({ type: 'TIME_TRAVEL', indexHistory: -1})}>
              Reset
            </button>
             
             <div>
              {history.map((his, index) => 
                <button
                  key={index}
                 className="btn"
                 onClick={() => dispatch({ type: 'TIME_TRAVEL', indexHistory: index})}
                 >
                  Move {index + 1} ({index % 2 === 0 ? 'X' : 'O'}): ô {his}
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