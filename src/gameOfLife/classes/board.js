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
                this.board[i].push(new Cell(i, j, false));
            }
        }
    }

    renderHTMLBoard() {
        const main = document.querySelector('.main');
        main.style.display = 'grid';
        main.style.gridTemplateColumns = `repeat(${this.numOfColumns}, 1fr)`;
        main.style.gridTemplateRows = `repeat(${this.numOfRows}, 1fr)`;
        main.style.margin = '0 15px 0 15px';
    }

    renderCell() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.style.width = `calc(95vw / ${this.numOfColumns})`;
            cell.style.height = `calc(95vw / ${this.numOfColumns})`;
            cell.style.backgroundColor = 'rgb(222, 222, 222)';
            cell.style.borderRadius = '50%';
            cell.style.cursor = 'pointer';
        });
    }

    renderCellAlive() {
        const cellsAlive = document.querySelectorAll('.cell--alive');
        cellsAlive.forEach((cellAlive) => {
            cellAlive.style.backgroundColor = 'rgb(72, 72, 72)';
        });
    }

    renderHTMLCells() {
        const main = document.querySelector('.main');
        // Borrar estado actual de células renderizadas
        main.innerHTML = ``; //Borra el contingut html del main
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                const cellId = `cell${i}${j}`;
                // Afegir div generat al document
                const newCell = document.createElement('div');
                newCell.classList.add('cell');
                newCell.setAttribute('id', `${cellId}`);

                // Add class cell--alive if cell is alive
                if (this.board[i][j].alive) {
                    newCell.classList.add('cell--alive');
                }
                main.appendChild(newCell);
            }
        }
        this.renderCell();
        this.renderCellAlive();
    }

    listenCells() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                const cell = document.querySelector(`#cell${i}${j}`);
                cell.addEventListener('click', () => {
                    // Actualiza el estado de la célula
                    this.board[i][j].alive = !this.board[i][j].alive;
                    console.log(this.board[i][j].alive, `cell${i}${j}`);
                    // Actualiza la class para reflejar el cambio
                    cell.classList.toggle('cell--alive');
                    // Llama a la función que cambia el color de la celda
                    this.renderSingleCell(i, j);
                });
            }
        }
    }

    renderSingleCell(row, column) {
        const cell = document.querySelector(`#cell${row}${column}`);
        this.board[row][column].alive === true
            ? (cell.style.backgroundColor = 'rgb(72, 72, 72)')
            : (cell.style.backgroundColor = 'rgb(222, 222, 222)');
    }

    updateAdjacentAlive() {
        //CALLS THE CELL METHOD checkAdjacentAlive
        this.board.forEach((cellArray) => {
            cellArray.forEach((cell) => {
                cell.checkAdjacentAlive(this.board);
            });
        });
    }

    updateCellStatus() {
        this.board.forEach((cellArray) => {
            cellArray.forEach((cell) => {
                cell.changeStatus();
            });
        });
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
