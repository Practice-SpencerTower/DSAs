// GRAPHS

class Graph {
    constructor () {
        this.adjList = {};
    }
    addVertex (vertex) {
        if (!this.adjList[vertex]) this.adjList[vertex] = [];
    }
    addEdge (v1, v2) {
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }
    removeEdge (v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(edge => edge !== v2);
        this.adjList[v2] = this.adjList[v2].filter(edge => edge !== v1);
    }
    removeVertex (vertex) {
        this.adjList[vertex].forEach(edge => {
            this.removeEdge(vertex, edge);
        });
        delete this.adjList[vertex];
    }
    // TRAVERSAL METHODS
    dfsRecursive (start) {
        let results = [];
        let visited = {};
        const adjList = this.adjList;
        function traverse (vertex) {
            if (!vertex) return; // base case
            visited[vertex] = true;
            results.push(vertex);
            adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) traverse(neighbor);
            });
        }
        traverse(start);
        return results;
    }
}

let graph = new Graph();
graph.addVertex('Dallas');
graph.addVertex('Tokyo');
graph.addVertex('LA');
graph.addEdge('Tokyo', 'Dallas');
graph.addEdge('Dallas', 'LA');
graph.addEdge('LA', 'Tokyo');
console.log('UPDATED GRAPH: ', graph);
console.log('ADJACENCY LIST: ', graph.adjList);
console.log('DALLAS DEPTH FIRST SEARCH: ', graph.dfsRecursive('Dallas'));


