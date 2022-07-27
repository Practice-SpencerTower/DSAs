# Number of Ways to Traverse Graph

- AlgoExpert

- Create graph
- Loop through graph
- Calculate number of ways to get to each position
- Number of ways to get to the position - top = 1 way, top left = 1 way
  - Everywhere else is num ways to reach position above it and position to the left
- Update each position in graph with num ways to reach it
- Use that number to calculate ways to get to next position
