import { gameBoard } from './gameOfLife/classes/board.js';

const newBoard = new gameBoard(30, 50);
newBoard.renderHTMLBoard();
newBoard.renderHTMLCells();
newBoard.listenCells();

function repeatCode() {
    newBoard.renderHTMLCells();
    newBoard.listenCells();
    newBoard.updateAdjacentAlive();
    newBoard.updateCellStatus();
}

const startButton = document.querySelector('#start-button');
let intervalId;
startButton.addEventListener('click', () => {
    intervalId = setInterval(repeatCode, 500);
});

const stopButton = document.querySelector('#stop-button');
stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
});

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
