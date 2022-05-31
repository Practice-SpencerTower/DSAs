# Singly Linked Lists

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- What are singly linked lists?
  - Ordered data structure
  - Different from array in that it does not have incides
    - No random access
  - Each element points to the next one
  - Have to start at the beginning of the list and traverse to get to a specific value in the list
  - Good alternative to arrays when insertion and deletion at beginning of list are frequently required

  - Methods:
    - push - adds new node to end of list
    - pop - removes last node in list
    - shift - adds new node to beginning of list
    - unshift - removes first node in list
    - get - returns node at given index
    - set - adds node at given index
  
  - Big O:
    - Insertion - O(1)
    - Removal - O(1) or O(n)
      - Depends on where in the list you are removing from
      - Removing from beginning - O(1)
      - Removing from end - O(n)
    - Searching - O(n)
    - Access - O(n)
