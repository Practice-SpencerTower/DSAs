# Binary Search Trees

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Commonly used data structure
- Multiple types of trees:
  - Linked lists (linear trees), Heaps, Binary trees, Binary search trees, Ternary trees
- Must have a single root / entry point
- Root - top node in a tree
- Child - node directly below/connected to another node
- Parent - node directly above/connected to another node
- Siblings - child nodes connected to same parent
- Leaves - end nodes in a tree

- Binary Search Trees:
  - Maximum two child nodes per parent
  - Every node to the left of the parent must be less than the parent
  - Every node to the right of the parent must be greater than the parent

- Use cases:
  - HTML DOM
  - JSON
  - Network routing
  - AI
  - Folders in an OS
  - Computer file systems

## BST Traversal - 

- Uses a queue to track nodes to be visited
- Uses while loop to remove nodes from the queue
- After a node is removed from the queue it is added to the results array
- Then check to see if the current node has children
  - If so add them to the queue

