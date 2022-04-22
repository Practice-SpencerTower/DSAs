# Graphs

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

## Graph Traversal

- It is important to understand how to visit every node via traversal before learning how to find a closest node in a graph

### Graph vs Tree Traversal

- Trees are a special sub-set of a graph
- With trees, there is only one path to a given node
- For graphs, there can be many paths to a given node
- Tree traversal begins at the root node
- For graphs you must specify the starting point which can be any node in the graph

### Depth First Graph Traversal

- No clear "depth" for a graph (unlike a tree structure)
- Pass a starting node into the traversal function
- Neighbor traversal
  - Visit the node's nieghbors
  - Continue visiting each neighbors' neighbors
- Can be done recursively or iteratively
- The order of results will differ between iterative and recursive approaches
  - Each version may start with a different neighbor, so the order of traversal is different
  - One uses a stack, the other uses a queue
  - Both are still depth first

### Recursive Approach

- Uses helper function to traverse graph

```JS
dfsRecursive(startingVertex) {
  const results = [];
  const visited = {};
  const adjacencyList = this.adjacencyList;

  dfsRecursiveHelper(startingVertex);

  dfsRecursiveHelper (vertex) {
    if (!vertex) return null;
    visited[vertex] = true;
    results.push(vertex);
    adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        return dfsRecursiveHelper(neighbor);
      }
    }
  }
return results;
}
```

### Iterative Approach

```JS
dfsIterative(start) {
  const stack = [start];
  const results = [];
  const visited = {};
  let vertex;

  visited[start] = true;
  while (stack.length) {
    vertex = stack.pop();
    results.push(vertex);
    this.adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    })
  }
  return results;
}
```

### Breadth First

- Can think of graphs in terms of “height” rather than “depth”
- Visit all neighbors of a given node/vertex before visiting the next level of neighbors in the graph

```JS
bfs(start) {
  const queue = [start];
  const results = [];
  const visited = {};
  let vertex;

  visited[start] = true;
  while (queue.length) {
    vertex = queue.shift();
    results.push(vertex);
    this.adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    })
  }
  return results;
}
```
