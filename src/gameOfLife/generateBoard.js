// GENERATES THE GAME BOARD

class Cell {
    adjacentAlive;
    constructor(row, column, alive) {
        this.row = row;
        this.column = column;
        this.alive = alive;
    }
}

export function generateBoard(numOfRows = 0, numOfColumns = 0) {
    const board = [];
    for (let i = 0; i < numOfRows; i++) {
        board[i] = [];
        for (let j = 0; j < numOfColumns; j++) {
            if (i === 1) {
                board[i].push(new Cell(i, j, true));
            } else {
                board[i].push(new Cell(i, j, false));
            }
        }
    }
    return board;
}
