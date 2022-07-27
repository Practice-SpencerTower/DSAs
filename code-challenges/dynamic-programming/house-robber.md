# House Robber

- Dynamic programming problem
- Create secondary array to store max profit that can be gained up to and including current house
- Loop through input array
  - Determine maximum sum that can be robbed up to that house
- Compare n - 1 to n - 2 + n
  - Update secondary array with max value
- Return max of secondary array
