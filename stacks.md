# Stacks

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Both stacks and queues are abstract collections of data

- Stacks:
  - LIFO - Last in first out
  - Like a stack of plates
  - Use cases:
    - Managing function invocations (the call stack)
    - Undo / Redo commands
    - Routing (the history object of a browser) operates like a stack
  - More than one way to implement a stack
    - E.g. can be created with an array or linked list
  - Methods:
    - Push - behaves like unshift
    - Pop - behaves like shift

- Stacks Big O:
  - Insertion - O(1)
    - push uses unshift
  - Removal - O(1)
    - pop uses shift
  - Searching - O(n)
  - Access - O(n)
