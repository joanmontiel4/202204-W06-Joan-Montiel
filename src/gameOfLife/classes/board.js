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

    generateHTMLBoard() {
        const boardHTMLElements = [];
        for (let i = 0; i < this.board.length; i++) {
            boardHTMLElements[i] = [];
            for (let j = 0; j < this.board[0].length; j++) {
                boardHTMLElements[i][
                    j
                ] = `<div class="cell" id="cell${i}${j}"></div>`;
            }
        }
        return boardHTMLElements;
    }

    generateBoardString() {
        // GENERATES DIV CONTAINERS FOR EACH CELL WITH ID="cellXY"
        let text = '';
        const boardHTMLElements = this.generateHTMLBoard();
        for (let i = 0; i < this.board.length; i++) {
            text += boardHTMLElements[i].join('');
        }
        return text;
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
