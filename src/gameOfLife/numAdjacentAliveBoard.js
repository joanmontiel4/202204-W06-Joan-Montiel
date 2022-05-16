// HELPER FUNCTION
// GENERATES A BOARD OF NUM ADJACENT ALIVE

export function numAdjacentAliveBoard(board) {
    const adjacentAliveBoard = [];
    for (let row = 0; row < board.length; row++) {
        adjacentAliveBoard[row] = [];
        for (let cell of board[row]) {
            adjacentAliveBoard[row].push(cell.adjacentAlive);
        }
    }
    console.table(adjacentAliveBoard);
}
