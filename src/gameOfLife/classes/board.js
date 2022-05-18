import { Cell } from './cell.js';

export class gameBoard {
    board;
    constructor(numOfRows = 0, numOfColumns = 0) {
        this.numOfRows = numOfRows;
        this.numOfColumns = numOfColumns;
        this.board = [];
        for (let i = 0; i < numOfRows; i++) {
            this.board[i] = [];
            for (let j = 0; j < numOfColumns; j++) {
                if (i === 1) {
                    this.board[i].push(new Cell(i, j, true));
                } else {
                    this.board[i].push(new Cell(i, j, false));
                }
            }
        }
    }

    renderHTMLBoard() {
        const main = document.querySelector('.main');
        main.style.display = 'grid';
        main.style.height = '100vw';
        main.style.gridTemplateColumns = `repeat(${this.numOfColumns}, 1fr)`;
        main.style.gridTemplateRows = `repeat(${this.numOfRows}, 1fr)`;
        main.style.border = 'solid 1px';
    }

    renderHTMLCell() {
        const cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.width = `calc(100vw / ${this.numOfColumns})`;
            cells[i].style.height = `calc(100vw / ${this.numOfColumns})`;
            cells[i].style.backgroundColor = 'grey';
            cells[i].style.borderRadius = '50%';
        }
        const cellsAlive = document.querySelectorAll('.cell--alive');
        for (let i = 0; i < cellsAlive.length; i++) {
            cellsAlive[i].style.backgroundColor = 'blue';
        }
    }

    renderHTMLCells() {
        const main = document.querySelector('.main');
        // Borrar estado actual de células renderizadas
        main.innerHTML = ``; //Borra el contingut html del main
        const boardHTMLElements = [];
        for (let i = 0; i < this.board.length; i++) {
            boardHTMLElements[i] = [];
            for (let j = 0; j < this.board[0].length; j++) {
                const cellId = `cell${i}${j}`;
                // Añadir div generado al documento
                const newCell = document.createElement('div');
                newCell.classList.add('cell');
                newCell.setAttribute('id', `${cellId}`);

                // Add class cell--alive if cell is alive
                if (this.board[i][j].alive) {
                    newCell.classList.add('cell--alive');
                }
                main.appendChild(newCell);

                // Seleccionar div añadido al documento
                const selectedCell = document.querySelector(`#cell${i}${j}`);
                selectedCell.addEventListener('click', () => {
                    // Actualiza el estado de la célula
                    this.board[i][j].alive = !this.board[i][j].alive;
                    this.renderHTMLCell();
                    // Actualiza la class para reflejar el cambio
                    selectedCell.classList.toggle('cell--alive');
                });
            }
        }
        this.renderHTMLCell();
    }

    updateAdjacentAlive() {
        //CALLS THE CELL METHOD checkAdjacentAlive
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                this.board[i][j].checkAdjacentAlive(this.board);
            }
        }
    }

    updateCellStatus() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                this.board[i][j].changeStatus();
            }
        }
    }

    generateAliveBoard() {
        //HELPER FUNCTION TO BE ELIMINATED
        const aliveBoard = [];
        for (let row = 0; row < this.numOfRows; row++) {
            aliveBoard[row] = [];
            for (let cell of this.board[row]) {
                cell.alive === true
                    ? aliveBoard[row].push(1)
                    : aliveBoard[row].push(0);
            }
        }
        console.table(aliveBoard);
    }

    numAdjacentAliveBoard() {
        //HELPER FUNCTION TO BE ELIMINATED
        const adjacentAliveBoard = [];
        for (let row = 0; row < this.board.length; row++) {
            adjacentAliveBoard[row] = [];
            for (let cell of this.board[row]) {
                adjacentAliveBoard[row].push(cell.adjacentAlive);
            }
        }
        console.table(adjacentAliveBoard);
    }
}
