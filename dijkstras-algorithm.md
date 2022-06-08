# Dijkstra's Algorithm

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Edsger Dijkstra
- Came up with the algorithm trying to find the shortest path via the rail network in Amsterdam
- Algorithm is widely used
- Many companies base proprietary algorithms on Dijkstra's algorithm

- Use cases: Finding shortest path
  - GPS - fastest route
  - Network routing - find shortest path for data to travel
  - Biology - model spread of viruses
  - Airline travel - finding cheapest route

- Steps:
  - Requires a weighted graph
  - Visited array
    - Stores visited nodes
  - Previous object
    - Stores previously visited nodes and their closest nodes 
    - Keeps track of the previous node in the path for each node
  - Data structure to hold vertices and their shortest distances from the starting node
    - Continuously updated when a new, shortest distance from the starting node is found
    - Update is reflected in the "Previous" object
