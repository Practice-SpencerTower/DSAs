# Graph Valid Tree

Prompt:
- given n nodes, labeled 0 to n - 1
- list of undirected edges = can revisit parent nodes and get false positives on loops
- return if edges make up valid tree
- check if edges contain cycle
- track visited nodes in set
- loop through input with for loop
- track ancestors for each dfs traversal

Time O(edges + vertices) | Space O(edges + vertices)
- dfs through edges
- if number of nodes visited === number of input nodes, return true
- detect cycles, if cycle return false
- undirected so nodes will point back to parent nodes and lead to false positives on cycles
- have to pass in current node as previous node for next traversal
- AlgoExpert uses "currentlyInStack" array to track previous nodes
