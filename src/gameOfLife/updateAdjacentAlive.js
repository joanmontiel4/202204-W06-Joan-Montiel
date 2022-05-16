// UPDATES CELL PROPERTY adjacentAlive WITH NUMBER OF ALIVE ADJACENT CELLS
export function updateAdjacentAlive(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j].checkAdjacentAlive(board);
        }
    }
}
