// NUMBER OF ISLANDS

function numIslands(grid) {
    if (!grid.length) return 0;
    const visited = grid.map((row) => row.map((col) => false));
    let numberIslands = 0;

    // loop through each element, if 0 skip, if 1 dfs
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (visited[row][col]) continue;
            if (grid[row][col] === '0') continue;
            numberIslands++;
            exploreIslandDFS(grid, visited, row, col);
        }
    }
    return numberIslands;
}

function exploreIslandDFS(grid, visited, row, col) {
    // stack to track islands to be explored
    const stack = [[row, col]];

    while (stack.length) {
        const node = stack.pop();
        const row = node[0];
        const col = node[1];
        if (visited[row][col]) continue;
        visited[row][col] = true;
        if (grid[row][col] === '0') continue;
        const neighboringIslands = getNeighbors(grid, visited, row, col);
        neighboringIslands.forEach((neighbor) => stack.push(neighbor));
    }
}

function getNeighbors(grid, visited, row, col) {
    const neighbors = [];
    // UP
    if (row > 0 && !visited[row - 1][col]) neighbors.push([row - 1, col]);
    // DOWN
    if (row < grid.length - 1 && !visited[row + 1][col])
        neighbors.push([row + 1, col]);
    // RIGHT
    if (col < grid[row].length - 1 && !visited[row][col + 1])
        neighbors.push([row, col + 1]);
    // LEFT
    if (col > 0 && !visited[row][col - 1]) neighbors.push([row, col - 1]);
    return neighbors;
}

const input = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];
// expected - 3 islands
console.log(numIslands(input));
