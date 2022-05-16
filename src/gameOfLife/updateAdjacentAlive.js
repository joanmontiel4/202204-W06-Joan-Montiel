// UPDATES CELL PROPERTY adjacentAlive WITH NUMBER OF ALIVE ADJACENT CELLS
import { checkCellAdjacentAlive } from '../gameOfLife/checkCellAdjacentAlive.js';
export function updateAdjacentAlive(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            checkCellAdjacentAlive(board, board[i][j]);
        }
    }
}
