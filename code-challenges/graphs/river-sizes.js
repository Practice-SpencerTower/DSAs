function riverSizes(matrix) {
    // visited nodes
    const sizes = [];
    const visited = matrix.map(row => row.map(col => false));
    
    // loop through each index in input matrix
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        // if node visited, continue
        if (visited[row][col]) continue;
        if (matrix[row][col] === 0) continue;
        getRiverSizesDFS(matrix, visited, row, col, sizes);
      }
    }
    return sizes;
  }

  function getRiverSizesDFS(matrix, visited, row, col, sizes) {
    // stack to track nodes to traverse
    const stack = [[row, col]];
    let riverSize = 0;
    while (stack.length) {
      let currentNode = stack.pop();
      let row = currentNode[0];
      let col = currentNode[1];
      if (visited[row][col]) continue;
      visited[row][col] = true;
      if (matrix[row][col] === 0) continue;
      riverSize++;
      const neighbors = getNeighbors(matrix, visited, row, col);
      neighbors.forEach(neighbor => stack.push(neighbor));
    }
    sizes.push(riverSize);
  }
  
  // function gathers unvisited neighbors to be explored
  function getNeighbors(matrix, visited, row, col) {
    const neighbors = [];
    // UP
    if (row > 0 && !visited[row - 1][col]) neighbors.push([row - 1, col]);
    // DOWN
    if (row < matrix.length - 1 && !visited[row + 1][col]) neighbors.push([row + 1, col]);
    // RIGHT
    if (col < matrix[0].length - 1 && !visited[row][col + 1]) neighbors.push([row, col + 1]);
    // LEFT
    if (col > 0 && !visited[row][col - 1]) neighbors.push([row, col - 1]);
    return neighbors;
  }