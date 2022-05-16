import { generateBoard } from './src/gameOfLife/generateBoard.js';
import { generateAliveBoard } from './src/gameOfLife/generateAliveBoard.js';
import { updateAdjacentAlive } from './src/gameOfLife/updateAdjacentAlive.js';
import { numAdjacentAliveBoard } from './src/gameOfLife/numAdjacentAliveBoard.js';
import { updateCellStatus } from './src/gameOfLife/updateCellStatus.js';

const board = generateBoard(5, 5);
const aliveBoard = generateAliveBoard(board);
console.table(aliveBoard);

updateAdjacentAlive(board);

numAdjacentAliveBoard(board);

updateCellStatus(board);

const aliveBoard2 = generateAliveBoard(board);
console.table(aliveBoard2);
