export function changeCellStatus(cell) {
    if (cell.alive === true) {
        if (cell.adjacentAlive < 2 || cell.adjacentAlive > 3) {
            cell.alive = false;
        }
    } else {
        if (cell.adjacentAlive === 3) {
            cell.alive = true;
        }
    }
}
