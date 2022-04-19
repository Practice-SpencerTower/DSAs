# Graphs

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

### Graph Traversal

- It is important to understand how to visit every node via traversal before learning how to find a closest node in the graph

#### Graph vs Tree Traversal

- Trees are a special sub-set of a graph
- With trees, there is only one path to a given node
- For graphs, there can be many paths to a given node
- Tree traversal begins at the root node
- For graphs you must specify the starting point which can be any node in the graph

#### Depth First Graph Traversal

- No clear "depth" for a graph (unlike a tree structure)
- Pass a starting node into the traversal function
- Neighbor traversal
  - Visit the node's nieghbors
  - Continue visiting each neighbors' neighbors
- Can be done recursively or iteratively
- The order of results will differ iterative and recursive approaches
  - Each version may start with a different neighbor, so the order of traversal is different
  - One uses a stack, the other uses a queue
  - Both are still depth first

#### Recursive Approach

- Uses helper function to traverse graph

```JS
dfsRecursive(startingVertex) {
  let results = [];
  let visited = {};
  dfsRecursiveHelper(startingVertex);

  dfsRecursiveHelper (vertex) {
    if (!vertex) return;
    results.push(vertex);
    visited[vertex] = true;
    vertex.adjacencyList.forEach(neighbor => {
      if (!visited[vertex]) {
      dfsRecursive(neighbor);
      }
    }
  }
return results;
}
```

#### Iterative Approach

```JS
dfsIterative(start) {
  let results = [];
  let visited = {};
  let stack = [start];
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
}
```
