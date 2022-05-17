export class Cell {
    adjacentAlive;
    constructor(row, column, alive) {
        this.row = row;
        this.column = column;
        this.alive = alive;
    }
    checkAdjacentAlive(board) {
        let row = this.row;
        let column = this.column;
        let numberOfAdjacentCellsAlive = 0;
        const initRow = row === 0 ? 0 : row - 1;
        const endRow = row === board.length - 1 ? row : row + 1;
        const initColumn = column === 0 ? 0 : column - 1;
        const endColumn = column === board[0].length - 1 ? column : column + 1;
        for (let i = initRow; i <= endRow; i++) {
            for (let j = initColumn; j <= endColumn; j++) {
                if (!(i === row && j === column)) {
                    if (board[i][j].alive === true) {
                        numberOfAdjacentCellsAlive++;
                    }
                }
            }
            this.adjacentAlive = numberOfAdjacentCellsAlive;
        }
    }
    changeStatus() {
        if (this.alive === true) {
            if (this.adjacentAlive < 2 || this.adjacentAlive > 3) {
                this.alive = false;
            }
        } else {
            if (this.adjacentAlive === 3) {
                this.alive = true;
            }
        }
    }
}
