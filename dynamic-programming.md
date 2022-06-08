# Dynamic Programming

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- A method for solving a complex problem
  - Breaks the proplem down into subproplems
  - Solves each subproblem once and stores their solutions
  - Reduces duplication of the smaller peices

Features that need to be present for Dynamic Programming to optimize the solution:

  1. Overlapping subproblems
  1. Optimal substructure

- Overlapping subproblems:
  - There have to be "overlapping subproblems" for dynamic programming to be useful
    - eg the Fibonacci Sequence
    - MergeSort is NOT a good example - it does not have *overlapping* subproblems

- Optimal substructure:
  - If an optimal solution can be constructed from optimal solutions of its subproblems
  - eg a path between nodes where the shortest path from A to D is made up of the shortest paths between A-B B-C and C-D
  - The overall shortest path is made up of the shortest sub-paths
