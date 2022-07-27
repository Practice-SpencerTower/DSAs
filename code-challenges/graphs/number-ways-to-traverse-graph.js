// Number of Ways to Traverse Graph

function numWaysToTraverseGraph(width, height) {
    const rows = new Array(width).fill(0);
    const graph = [];
    for (let i = 0; i < height; i++) {
      graph.push(rows);
    }
  
    for (let row = 0; row < graph.length; row++) {
      for (let col = 0; col < graph[row].length; col++) {
        if (col === 0 || row === 0) {
          graph[row][col] = 1;
          continue;
        }
        populateWays(graph, row, col);
      }
    }
    return graph[graph.length - 1][graph[0].length - 1];
  }
  
  function populateWays(graph, row, col) {
    // check up and left locations
    const up = graph[row - 1][col];
    const left = graph[row][col - 1];
    const ways = up + left;
    graph[row][col] = ways;
  }
  