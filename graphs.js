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
    dfsIterative (start) {
        let results = [];
        let visited = {};
        let stack = [];
        stack.push(start);
        while (stack.length) {
            let vertex = stack.pop();
            if (!visited[vertex]) {
                results.push(vertex);
                visited[vertex] = true;
                this.adjList[vertex].forEach(neighbor => stack.push(neighbor));
            }
        }
        return results;
    }
    breadthFirst (start) {
        let results = [];
        let visited = {};
        let queue = [start];
        while (queue.length) {
            let vertex = queue.shift();
            if (!visited[vertex]) {
                results.push(vertex);
                visited[vertex] = true;
                this.adjList[vertex].forEach(neighbor => {
                    queue.push(neighbor);
                })
            }
        }
        return results;
    }
}

let graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")
console.log('UPDATED GRAPH: ', graph);
console.log('ADJACENCY LIST: ', graph.adjList);
console.log('RECURSIVE DFS RESULTS: ', graph.dfsRecursive('A'));
console.log('ITERATIVE DFS RESULTS: ', graph.dfsIterative('A'));
console.log('BFS RESULTS: ', graph.breadthFirst('A'));