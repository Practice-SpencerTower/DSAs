// DIJKSTRA'S ALGORITHM

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

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
    getEdgeWeight(vertex1, vertex2) {
        const v1AdjList = this.adjList[vertex1];
        let weight;
        v1AdjList.forEach(edge => {
            if (edge.node === vertex2) weight = edge.weight;
        });
        return weight;
    }
    dijkstras(start, end) {
        let priorityQueue = new PriorityQueue();
        let distances = {};
        let previous = {};
        // set each key to be every vertex in adj list
        Object.keys(this.adjList).forEach(vertex => {
            // add vertices to distances and priority queue
            if (vertex === start) {
                distances[vertex] = 0;
                priorityQueue[vertex] = 0;
            } else {
                distances[vertex] = Infinity;
                priorityQueue[vertex] = Infinity;
            };
            // add vertices with null value to previous
            previous[vertex] = null;
        });
        // dequeue vertex from priority queue
        let currVertex = priorityQueue.dequeue();
        if (currVertex === end) {
            return;
        } else {
            let distance = Infinity;
            Object.values(currVertex.adjList).forEach(edge => {
                if (edge.weight < distance) {
                    priorityQueue.enqueue(edge, edge.weight);
                }
            });
        }
        // console.log('PRIORITY QUEUE: ', priorityQueue);
        console.log('DISTANCES: ', distances);

    }
}


let graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);
console.log(graph);
// graph.dijkstras("A", "C");
graph.getEdgeWeight("A", "C");

