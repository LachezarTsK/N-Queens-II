
public class Solution {

    int boardSize;

    public int totalNQueens(int boardSize) {
        this.boardSize = boardSize;
        boolean[] column = new boolean[boardSize];
        boolean[] diagonalOne = new boolean[2 * boardSize];
        boolean[] diagonalTwo = new boolean[2 * boardSize];
        return findNumberOfUniqueConfigurations(0, column, diagonalOne, diagonalTwo);
    }

    public int findNumberOfUniqueConfigurations(int row, boolean[] column, boolean[] diagonalOne, boolean[] diagonalTwo) {
        if (row == boardSize) {
            return 1;
        }

        int uniqueConfigurations = 0;
        for (int c = 0; c < boardSize; ++c) {

            int positionDiagonalOne = row + c;
            int positionDiagonalTwo = boardSize + row - c;
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
}
