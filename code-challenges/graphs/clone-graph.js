// Clone Graph

function cloneGraph(node) {
    const visited = {};  // maps old node to new node
    
    function dfs(node) {
        if (!node) return node;
        
        if (visited[node.val]) {
            return visited[node.val];
        }
        const copy = new Node(node.val);
        visited[node.val] = copy;
            
        node.neighbors.forEach(neighbor => {
            copy.neighbors.push(dfs(neighbor));
        });
        return copy;
    }
    return dfs(node);
}