// Cycle in Graph - AlgoExpert

function cycleInGraph(edges) {
    const visited = new Set();
    const inStack = new Set();

    for (let node = 0; node < edges.length; node++) {
        if (visited.has(node)) continue;
        const containsCycle = dfs(edges, node, visited, inStack);
        if (containsCycle) return true;
    }
    return false;
}

function dfs(edges, node, visited, inStack) {
    visited.add(node);
    inStack.add(node);
    for (const neighbor of edges[node]) {
        if (!visited.has(neighbor)) {
            const containsCycle = dfs(edges, neighbor, visited, inStack);
            if (containsCycle) return true;
        } else if (inStack.has(neighbor)) {
            return true;
        }
    }
    inStack.delete(node);
    return false;
}
