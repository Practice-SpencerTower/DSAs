# Cycle in Graph - AlgoExpert

## Notes

-   visited set for tracking nodes
-   "inStack" array for tracking nodes in the current recursion stack
    -   if a node in recursion stack is visited, a loop has been detected
    - add / remove nodes from inStack array
- loop through nodes
	- if node visited, continue
	- call dfs function to check if cycle exists 
- returns true/false
	- return true if contains cycle
		- else, return false
