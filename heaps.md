# Heaps

- A category of trees
- What applies to trees applies to heaps
- Many types of heaps

## Binary Heaps

- Both child nodes must be less than that of the parent
- Every child node is smaller than the root node
- Binary - each parent has at least two child nodes
- Left children are always filled out first
- No implied ordering/relationship between siblings (as you would see in a binary tree)
- Useful for priority queues
  - Assigns an importance level to each item in the queue
- Often used to assist with graph traversal

### Sorting Heaps

- Multiply index of parent by 2 + 1 and 2 + 2 to find first and second child nodes
- Formula: (n = parent index) 2n + 1 and 2n + 1
- Find parent of child node:
  - n = child node index
  - Math.floor((n -1) / 2) and Math.floor((n - 2) / 2)

### Insert Method

- Inserting a node into a Max Binary Heap
- A class of the binary heap
  - Property: []
  - Push new value to the array of values
  - Then need to “bubble up” until the value finds its correct spot
  - Compare to parent, if child is larger, then swap
  - Continue until the correct place is found
    - Why its important to be able to find a parent based off of a child
