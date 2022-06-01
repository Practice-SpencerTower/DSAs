# Doubly Linked Lists

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Each node has a pointer to the previous node
- Some operations need to be different from singly linked lists
  - E.g. removing the last node of the list - can go directly to the tail, remove it, and set the previous node as the new tail
- More flexibility than singly linked lists but takes up more memory

- Big O:
  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(n)
    - O(n / 2) which is still O(n)
  - Access - O(n)
