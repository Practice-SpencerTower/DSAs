# Heaps

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- A category of trees
- What applies to trees applies to heaps
- Many types of heaps

## Binary Heaps

- Binary - each parent has at most two child nodes
- **Left children are always filled out first**
- Max binary heap - parent is always larger than the children
- Min binary heap - parent is always smaller than the children
- No implied ordering/relationship between siblings (as you would see in a binary tree)

- Use Cases:
  - Used to implement priority queues which are widely used
    - Assigns an importance level to each item in the queue
    - Moves to correct spot in the queue based on importance level
  - Often used to assist with graph traversal

### Sorting Heaps

- The order of a binary heaps nodes can be represented in an array
- Find the index of parents children:
  - Multiply index of parent by 2 + 1 and 2 + 2 to find first and second child nodes
  - Formula: (n = parent index) 2n + 1 and 2n + 1
- Find the index of the parent of child nodes:
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
