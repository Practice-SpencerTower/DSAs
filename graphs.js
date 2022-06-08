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
    dfsRecursive () {
        
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
graph.removeVertex('Dallas');
console.log('UPDATED GRAPH: ', graph);
console.log('ADJACENCY LIST: ', graph.adjList);

