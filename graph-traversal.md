# Graph Traversal

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Many real-world uses for graphs and graph traversal
- Use cases:
  - Peer to peer networking
  - Web crawlers
  - Finding the closest matches/recommendations
  - Shortest path problems:
    - GPS Nav
    - Solving mazes
    - AI
  - Finding most vertices in common

- Two main options for traversing graphs: depth-first and breadth-first

- Depth First Search
  - Start from a node
  - Visit that nodes neighbors, and their neighbors etc.
  - **Have to keep track of visited nodes**
  - It can be challenging to determine what "depth" means in a graph
