
#include <vector>
using namespace std;

class Solution {
    
    size_t boardSize;

public:
    int totalNQueens(int boardSize) {
        this->boardSize = boardSize;
        vector<bool> column(boardSize);
        vector<bool> diagonalOne(2 * boardSize);
        vector<bool> diagonalTwo(2 * boardSize);
        return findNumberOfUniqueConfigurations(0, column, diagonalOne, diagonalTwo);
    }

private:
    int findNumberOfUniqueConfigurations(int row, vector<bool>& column, vector<bool>& diagonalOne, vector<bool>& diagonalTwo) {
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
};
