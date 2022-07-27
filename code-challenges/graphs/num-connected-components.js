// Number of Connected Components in an Undirected Graph

function connectedComponents(n, edges) {
	let componentCount = 0;
	let visited = new Set();

	for (let node = 0; node < n; node++) {
		if (visited.has(node)) continue;
visited.add(node);
		dfs(node, edges, visited);
		componentCount++;
}

function dfs(node, edges, visited) {
		if (!node) return;
		if (visited.has(node)) return;
		visited.add(node);
		edges[node].forEach(neighbor => {
			dfs(neighbor, edges, visited);
});
return;
}

return componentCount;
}
