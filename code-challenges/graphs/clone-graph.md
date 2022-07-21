# Clone Graph

- use dfs
- use visited hashmap to map old nodes to their clones
- base case is if no node or node already exists in hashmap
- clone the node
- add original node / clone to hashmap
- get adjacency list for clone by looping over original nodes adj list and calling dfs on each neighbor
- return clone - will return root when recursive calls are done
