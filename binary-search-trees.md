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

- BST Methods Big O:
  - Insertion - O(log n)
  - Searching - O(log n)
    - Each search/insertion operation potentially cuts the tree in half
    - As size of tree doubles the number of operations only increases by 1

## General Tree Traversal Methods

- Independent of BSTs
- Applicable to trees in general
- DFS and BFS

### Depth First Search

- Independent of BSTs
- Applicable to trees in general
- 3 types of DFS:
  - In-Order
  - Pre-Order
  - Post-Order

### Breadth First Search

- Visits nodes level by level
- Can be done iteratively or recursively

- Iterative BFS:
  - Queue - holds nodes to be visited
  - Visited array - tracks nodes that have been visited
  - While loop
    - Remove node from the queue
    - Add node to the visited array
    - Check to see if the current node has children
      - If so add them to the queue
