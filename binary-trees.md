# Binary Trees

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

## Binary Tree Traversal

### Breadth First Iterative

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
