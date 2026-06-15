const matrix = [
    ['x', 'x', 'o'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x'],
]

let matrix_flatten = matrix.flat()

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

let winner = checkWin(matrix_flatten);
if (winner)
    console.log(winner);