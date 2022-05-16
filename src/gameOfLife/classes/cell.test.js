// import { Cell } from './cell.js';
import { generateBoard } from '../generateBoard.js';

describe('Given the class Cell', () => {
    describe('When execute checkAdjacentAlive(testBoard))', () => {
        test('Then should be 2', () => {
            // Arrange
            const testBoard = generateBoard(3, 3);
            const initial = 2;
            // Act
            testBoard[0][0].checkAdjacentAlive(testBoard);
            const result = testBoard[0][0].adjacentAlive;
            // Assert
            expect(result).toEqual(initial);
        });
    });
    // describe('When receive not a valid function and [1, 2, 3, 4]', () => {
    //     test('Then should throw an error', () => {
    //         // Arrange
    //         const callbackFn = null;
    //         const testArray = [1, 2, 3, 4];
    //         // Act & Assert
    //         expect(() => falseFilter(callbackFn, testArray)).toThrow(
    //             TypeError('Not a valid function')
    //         );
    //     });
    // });
});
