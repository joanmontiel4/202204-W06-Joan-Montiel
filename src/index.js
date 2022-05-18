import { gameBoard } from './gameOfLife/classes/board.js';

const newBoard = new gameBoard(20, 20);
newBoard.renderHTMLBoard();
newBoard.renderHTMLCells();

function repeatCode() {
    newBoard.renderHTMLCells();
    newBoard.updateAdjacentAlive();
    newBoard.updateCellStatus();
}

const intervalID = setInterval(repeatCode, 2000);
setTimeout(clearInterval, 30000, intervalID);

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
