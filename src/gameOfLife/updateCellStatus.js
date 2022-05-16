import { Cell } from './classes/cell.js';

export function updateCellStatus(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j].changeStatus();
        }
    }
}
