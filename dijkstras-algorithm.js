// DIJKSTRA'S ALGORITHM

class WeightedGraph {
    constructor() {
        this.adjList = {};
    }
    addVertex(vertex) {
        if (!this.adjList[vertex]) this.adjList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjList[vertex1].push({node:vertex2, weight});
        this.adjList[vertex2].push({node:vertex1, weight});
    }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 9);
console.log(graph);
graph.addEdge("A", "C", 5);
console.log(graph);

