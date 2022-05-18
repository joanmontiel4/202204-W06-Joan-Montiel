import { gameBoard } from './gameOfLife/classes/board.js';

const newBoard = new gameBoard(10, 10);
// newBoard.renderHTMLBoard();
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

/////////////////  TEST gameBoard   ////////////////////////
// function repeatCode() {
//     newBoard.renderHTMLCells();
//     // newBoard.updateAdjacentAlive();
//     // newBoard.updateCellStatus();
// }

// const intervalID = setInterval(repeatCode, 2000);
// setTimeout(clearInterval, 10000, intervalID);
////////////////////////////////////////////////////////////
const numOfColumns = 10;
const numOfRows = 10;

newBoard.renderHTMLBoard();

//renderHTMLBoard()
// const main = document.querySelector('.main');
// main.style.display = 'grid';
// main.style.height = '100vw';
// main.style.gridTemplateColumns = `repeat(${numOfColumns}, 1fr)`;
// main.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`;
// main.style.border = 'solid 1px';

newBoard.renderHTMLCells();

//renderHTMLCells()
// const main = document.querySelector('.main');
// for (let i = 0; i < 10; i++) {
//     const newCell = document.createElement('div');
//     newCell.classList.add('cell', 'cell--alive');
//     newCell.setAttribute('id', `cell${i}`);
//     // newDiv.innerHTML = `<div class="cell cell--alive" id="cell${i}"></div>`;
//     main.appendChild(newCell);
//     const selectedCell = document.querySelector(`#cell${i}`);
//     selectedCell.style.width = `calc(100vw / ${numOfColumns})`;
//     selectedCell.style.height = `calc(100vw / ${numOfColumns})`;
//     selectedCell.style.backgroundColor = 'red';
// }

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
