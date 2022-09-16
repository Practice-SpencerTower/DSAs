# Cycle in Graph - AlgoExpert

## Notes

-   visited set for tracking nodes
-   "inStack" array for tracking nodes in the current recursion stack
    -   if a node in recursion stack is visited, a loop has been detected
    -   add / remove nodes from inStack array
-   loop through nodes
    -   if node visited, continue
    -   call dfs function to check if cycle exists
-   returns true/false
    -   return true if contains cycle
        -   else, return false
-   dfs function:
    -   takes in edges, node, visited, inStack
    -   adds node to visited
    -   adds node to inStack
    -   loop through neighbors
        -   if neighbor not visited - run dfs on neighbor
            -   if contains cycle - return true
        -   elif neighbor is inStack - return true
    -   removes node from inStack after dfs on its neighbors
