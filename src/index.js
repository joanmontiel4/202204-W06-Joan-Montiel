import { gameBoard } from './gameOfLife/classes/board.js';

const newBoard = new gameBoard(10, 10);
/////////////////   CONSOLE TEST     ////////////////////////
// function repeatCode() {
//     newBoard.generateAliveBoard(); //HELPER METHOD
//     newBoard.updateAdjacentAlive();
//     // newBoard.numAdjacentAliveBoard(); //HELPER METHOD
//     newBoard.updateCellStatus();
// }

// const intervalID = setInterval(repeatCode, 2000);
// setTimeout(clearInterval, 10000, intervalID);
////////////////////////////////////////////////////////////

const boardHTML = newBoard.generateBoardString();
// console.log(boardHTML);
document.main.innerHTML = boardHTML;
