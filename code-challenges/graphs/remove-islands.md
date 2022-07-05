# Remove Islands - AlgoExpert

- Start at borders
- Find all 1s that are connected to the border
  - Store positions
- Replace all 1s not connected to border with 0s
  - Loop through interior structure and replace non-connected 1s

- Use identical matrix to track 1s connected to border
  - Start by initializing to false values
  - If a 1 is connected to border, change to true in auxiliary matrix

- Depth first search on any 1 at border to find other 1s connected to border
  - Skip if value is true in auxiliary matrix

- Time Complexity: O(w * h)
  - Guaranteed that function calls will never be more than w*h
  - Time complexity is then 2w*h = w*h
    - Never going to look at the same position multiple times
- Space Complexity: O(w * h)

- Alternative Solution:
  - Replace 1s connected to border with 2s
  - Does not require auxiliary matrix
  - When performing DFS, if value is 2, skip
  - Loop through matrix, change 2s back to 1
    - Change 1s (not connected to border) to 0s
    - Have to look at entire matrix rather than just inner matrix

- Time Complexity: O(w * h)
- Space Complexity: O(w * h) - still need space to perform DFS - have to use a stack to keep track of neighbors

- Graph Notes:
  - DFS = use stack
  - BFs = use queue
