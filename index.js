import { gameBoard } from './src/gameOfLife/classes/board.js';

const newBoard = new gameBoard(10, 10);

function repeatCode() {
    newBoard.generateAliveBoard(); //HELPER METHOD
    newBoard.updateAdjacentAlive();
    // newBoard.numAdjacentAliveBoard(); //HELPER METHOD
    newBoard.updateCellStatus();
}

const intervalID = setInterval(repeatCode, 2000);
// setInterval(repeatCode, 1000);
setTimeout(clearInterval, 80000, intervalID);
