# Binary Trees

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

## Binary Tree Traversal

### Breadth First Iterative

- Uses a queue to track nodes to be visited
- Uses while loop to remove nodes from the queue
- After a node is removed from the queue it is added to the results array
- Then check to see if the current node has children
  - If so then add them to the queue

```JS
function bfs(root) {
  const queue = [root];
  const results = [];

  while (queue.length) {
    let node = queue.shift();
    results.push(node);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return results;
}
```
