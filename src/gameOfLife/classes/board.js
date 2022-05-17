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
    generateAliveBoard() {
        //HELPER FUNCTION TO BE ELIMINATED
        const aliveBoard = [];
        for (let row = 0; row < this.numOfRows; row++) {
            aliveBoard[row] = [];
            for (let cell of this.board[row]) {
                aliveBoard[row].push(cell.alive);
            }
        }
        console.table(aliveBoard);
    }
    updateAdjacentAlive() {
        //CALLS THE CELL METHOD checkAdjacentAlive
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                this.board[i][j].checkAdjacentAlive(this.board);
            }
        }
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

    updateCellStatus() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                this.board[i][j].changeStatus();
            }
        }
    }
}
