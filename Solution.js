
/**
 * @param {number} boardSize
 * @return {number}
 */
var totalNQueens = function (boardSize) {
    this.boardSize = boardSize;
    const column = new Array(boardSize).fill(false);
    const diagonalOne = new Array(2 * boardSize).fill(false);
    const diagonalTwo = new Array(2 * boardSize).fill(false);
    return findNumberOfUniqueConfigurations(0, column, diagonalOne, diagonalTwo);
};

/**
 * @param {number} row
 * @param {boolean[]} column
 * @param {boolean[]} diagonalOne
 * @param {boolean[]} diagonalTwo
 * @return {number}
 */
function findNumberOfUniqueConfigurations(row, column, diagonalOne, diagonalTwo) {
    if (row === this.boardSize) {
        return 1;
    }

    let uniqueConfigurations = 0;
    for (let c = 0; c < this.boardSize; ++c) {

        let positionDiagonalOne = row + c;
        let positionDiagonalTwo = this.boardSize + row - c;
        if (column[c] || diagonalOne[positionDiagonalOne] || diagonalTwo[positionDiagonalTwo]) {
            continue;
        }

        column[c] = true;
        diagonalOne[positionDiagonalOne] = true;
        diagonalTwo[positionDiagonalTwo] = true;

        uniqueConfigurations += findNumberOfUniqueConfigurations(row + 1, column, diagonalOne, diagonalTwo);

        column[c] = false;
        diagonalOne[positionDiagonalOne] = false;
        diagonalTwo[positionDiagonalTwo] = false;
    }
    return uniqueConfigurations;
}
