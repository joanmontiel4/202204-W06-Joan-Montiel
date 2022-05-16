// GENERATES A HELPER MATRIX OF BOOLEANS SHOWING WHICH CELLS ARE ALIVE

export function generateAliveBoard(board) {
    const aliveBoard = [];
    for (let row = 0; row < board.length; row++) {
        aliveBoard[row] = [];
        for (let cell of board[row]) {
            aliveBoard[row].push(cell.alive);
        }
    }
    return aliveBoard;
}
