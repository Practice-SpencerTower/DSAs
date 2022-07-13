function removeIslands(matrix) {
  
    const convertedMatrix = matrix;
    
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === 0) continue;
        if (row === 0 || row === matrix.length - 1) traverseIslands(matrix, convertedMatrix, row, col);
        if (col === 0 || col === matrix[row].length - 1) traverseIslands(matrix, convertedMatrix, row, col);
      }
    }
    for (let row = 0; row < convertedMatrix.length; row++) {
      for (let col = 0; col < convertedMatrix[row].length; col++) {
        if (convertedMatrix[row][col] === 0) continue;
        if (convertedMatrix[row][col] === 2) {
          convertedMatrix[row][col] = 1;
        } else {
          convertedMatrix[row][col] = 0; 
        }
      }
    }
    return convertedMatrix;
  }
  
  // runs dfs
  function traverseIslands(matrix, convertedMatrix, row, col) {
    const stack = [[row, col]];
    
    while (stack.length) {
      const node = stack.pop();
      const row = node[0];
      const col = node[1];
      if (!convertedMatrix[row][col] === 1) continue;
      convertedMatrix[row][col] = 2;  // keep as island
      const neighbors = getNeighboringIslands(matrix, convertedMatrix, row, col);
      neighbors.forEach(neighbor => stack.push(neighbor));
    }
  }
  // gets neighbors
  function getNeighboringIslands(matrix, convertedMatrix, row, col) {
    const neighbors = [];
    // UP
    if (row > 0 && convertedMatrix[row - 1][col] === 1) neighbors.push([row - 1, col]);
    // DOWN
    if (row < matrix.length - 1 && convertedMatrix[row + 1][col] === 1) neighbors.push([row + 1, col]);
    // RIGHT
    if (col < matrix.length - 1 && convertedMatrix[row][col + 1] === 1) neighbors.push([row, col + 1]);
    // LEFT
    if (col > 0 && convertedMatrix[row][col - 1] === 1) neighbors.push([row, col - 1]);
    return neighbors;
  }