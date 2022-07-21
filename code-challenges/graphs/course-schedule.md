# Course Schedule

- create hashmap with course and prereqs
- track visited courses / nodes in set
- use dfs
  - if in visited, return false = cycle
    - if prereqs are empty, return true
    - add to visited set
    - run dfs on courses prereqs
      - return false if returns false
- still have more to do if returns true
- remove from visit set - done visiting it
- set prereqs to empty array - will hit base case if revisited
- return true
- run a separate loop in case graph is not fully connected
  - return false if dfs returns false
- return true
