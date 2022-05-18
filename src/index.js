import { gameBoard } from './gameOfLife/classes/board.js';

const newBoard = new gameBoard(10, 10);

/////////////////   CONSOLE TEST     ////////////////////////
function repeatCode() {
    // const main  = document.querySelector('main');

    // main.style.gridTemplateColumns = `repeat(${numCols}, ifr)`;
    // main.style.gridTemplateRows = `repeat(${numRows}, ifr)`;
    
    // #1 Genero un conjunto de celulas (Sólo en la primera generación)

    newBoard.generateAliveBoard(); //HELPER METHOD

    // #2 Busco los vecinos vivos de cada célula

    newBoard.updateAdjacentAlive();

    // #3 Aplico reglas GoL

    newBoard.updateCellStatus();

    // #4 Actualizo renderizado 

    newBoard.renderHTML();
}

const intervalID = setInterval(repeatCode, 2000);
setTimeout(clearInterval, 10000, intervalID);
////////////////////////////////////////////////////////////



newBoard.generateHtml()



// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>
// <div class="cell" id="cell${i}${j}"></div>


// document.body.style.backgroundColor = 'red';

// const boardHTML = newBoard.generateBoardString();
// console.log(typeof boardHTML);
// document.main.innerHTML = boardHTML;
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
