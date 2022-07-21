// Pacific Atlantic Water Flow

function pacificAtlantic(heights) {
    const result = [];
    const pacificSet = new Set();
    const atlanticSet = new Set();

    function dfs(row, col, visitedSet, prevHeight) {
        if (visitedSet.has([row, col])) return;
        if (row < 0 || col < 0) return;
        if (row === heights.length || col === heights[0].length) return;
        if (heights[row][col] < prevHeight) return;

        visitedSet.add([row, col]);
        dfs(row + 1, col, visitedSet, heights[row][col]);
        dfs(row - 1, col, visitedSet, heights[row][col]);
        dfs(row, col + 1, visitedSet, heights[row][col]);
        dfs(row, col - 1, visitedSet, heights[row][col]);
    }

    for (let col = 0; col < heights[0].length; col++) {
        // traverse north pacific edge
        dfs(0, col, pacificSet, heights[0][col]); 
        // traverse south atlantic edge
        dfs(heights.length - 1, col, atlanticSet, heights[heights.length - 1][col]);
    }

    for (let row = 0; row < heights.length; row++) {
        // traverse west pacific edge
        dfs(row, 0, pacificSet, heights[row][0]);
        // traverse east atlantic edge
        dfs(row, heights[0].length - 1, atlanticSet, heights[row][col]);
    }

    // loop through grid, check if node is in both pacific and atlantic sets
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[0].length; col++) {
            if (pacificSet.has([row, col]) && atlanticSet.has([row, col])) {
                result.push([r, c]);
            }
        }
    }
}
