// Spiral Traverse - AlgoExpert

function spiralTraverse(array) {
    // define rows/cols
    // while loop
    // for loops to traverse each row/col
    // decrement / increment rows/cols at end of while loop
    let startRow = 0;
    let startCol = 0;
    let endRow = array.length - 1;
    let endCol = array[0].length - 1;
    let result = [];

    while (startRow <= endRow && startCol <= endCol) {
        // top row
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }

        // right col
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }

        // bottom row
        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break;
            result.push(array[endRow][col]);
        }

        // left col
        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break;
            result.push(array[row][startCol]);
        }
        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
    return result;
}
