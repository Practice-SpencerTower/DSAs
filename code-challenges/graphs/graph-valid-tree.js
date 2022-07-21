// Graph Valid Tree

function validTree(n, edges) {
	if (!n) return true;
	const visitedSet = new Set();
	const adjList = {};
	for (let node = 0; node < n; node++) {
	adjList[node] = [];
}
for (let edge of edges) {
	adjList[edge[0]].push(edge[1]);
}
	
	function dfs(node, prevNode) {
		if (visitedSet.has(node)) return false;
		visitedSet.add(node);
		for (let neighbor in edges) {
			if (neighbor === prevNode) continue;
			if (!dfs(neighbor, node)) return false;
}
return true;
}
return dfs(0, -1) && n === visitSet.size;
}