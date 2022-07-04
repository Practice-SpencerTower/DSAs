# River Sizes

- 2D array, not necessarily even
- 0 represents land, 1 represents river
- rivers can connect horizonally and vertically, not diagonally
- return an array of the sizes of all rivers in the matrix

- Classic graph traversal problem
- Apply dfs or bfs when you encounter a 1
  - Continue with the rivers neighbors
- Check all four neighbors for each node

- Use a visited matrix to track visited nodes
  - Map over each row of input array, map over each value of each row and return values as false
- Loop through each row of input matrix
  - Loop through each value of each row
    - If value is marked as visited, continue to next iteration
    - Else, traverse node / check nodes neighbors

- Use helper function for traversal
- Function takes in row, column, matrix, visited, and sizes
- Track river size
- Use a stack to track nodes to explore - initalize with row and column
- While nodes to explore array is > 0
- Pop node off of stack
    - Check if visited
- Mark node as visited
- If node represents land, continue
- Else, increment river size
- Check nodes unvisited neighbors
  - Loop through unvisited neighbors and push to stack

- Use helper function to check unvisited neighbors
- Pass in i, j, matrix, and visited
- Track unvisited in an array
- Check if each of the 4 neighbors has been visited
  - Push to array if unvisited
- Return unvisited array
- If i > 0 then theres no neighbor above
- Check if i > 0 and have not visited neighbor above
  - push neighbor above to array
