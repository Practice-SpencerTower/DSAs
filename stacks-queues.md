# Stacks and Queues

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

- Queues:
  - FIFO - First in first out
  - Like waiting in line
  - Use cases:
    - Online wait rooms
    - Background tasks
    - Uploading resources
    - Printing queue / task processing
  - Can be implemented with an array or a linked list
  - Methods:
    - Enqueue - adds node to beginning, behaves like push
    - Dequeue - removes node from end, behaves like shift

- Queues Big O:
  - Insertion - O(1)
    - enqueue uses push
  - Removal - O(1)
    - dequeue uses shift
  - Searching - O(n)
  - Access - O(n)