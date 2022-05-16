// CORE FUNCTION
// UPDATES THE adjacentAlive NUMBER BASED ON CURRENT STATUS

export function checkCellAdjacentAlive(board, cell) {
    let row = cell.row;
    let column = cell.column;
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
        cell.adjacentAlive = numberOfAdjacentCellsAlive;
    }
}
