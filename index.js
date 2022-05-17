import { gameBoard } from './src/gameOfLife/classes/board.js';

const newBoard = new gameBoard(5, 5);

// function repeatCode() {
//     newBoard.generateAliveBoard(); //HELPER METHOD
//     newBoard.updateAdjacentAlive();
// newBoard.numAdjacentAliveBoard(); //HELPER METHOD
//     newBoard.updateCellStatus();
// }

// const intervalID = setInterval(repeatCode, 1000);
// setInterval(repeatCode, 1000);
// setTimeout(clearInterval(intervalID), 10000);
