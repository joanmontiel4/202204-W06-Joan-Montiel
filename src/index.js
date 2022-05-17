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

// document.body.style.backgroundColor = 'red';

const boardHTML = newBoard.generateBoardString();
// console.log(boardHTML);
document.main.innerHTML = boardHTML;
// document.body.style.backgroundColor = 'red';

// let mainDoc = querySelector('main');
// mainDoc.style.backgroundColor = 'black';
// document.body.style.backgroundColor = 'grey';

// let cellHTML = document.querySelector(".cell");
// cellHTML.style.

// Create our stylesheet

// var style = document.createElement('style');
// style.innerHTML = `.cell {
// 		color: grey;
// 		background-color: #e5e5e5;
// 		height: 100px;
// 	}`;

// // Get the first script tag
// var ref = document.querySelector('script');

// // Insert our new styles before the first script tag
// ref.parentNode.insertBefore(style, ref);
