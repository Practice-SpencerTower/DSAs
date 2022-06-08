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
        let nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let shortest;
        let path = []; // to return at end
        // set each key to be every vertex in adj list
        for (let vertex in this.adjList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            };
            // add vertices with null value to previous
            previous[vertex] = null;        
        }
        // dequeue vertex from priority queue
        while (nodes.values.length) {
            shortest = nodes.dequeue().val;
            if (shortest === end) {
                // console.log('DISTANCES', distances);
                // console.log('PREVIOUS', previous);
                while (previous[shortest]) {
                    path.push(shortest);
                    shortest = previous[shortest];
                }
                break;
            }
            if (shortest || distances[shortest] !== Infinity) {
                for (let neighbor in this.adjList[shortest]) {
                    let nextNode = this.adjList[shortest][neighbor];
                    console.log('NEXTNODE', nextNode);
                    // calculate new distance to neighboring node
                    let candidate = distances[shortest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = shortest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        // console.log('PRIORITY QUEUE: ', nodes);
        console.log('DISTANCES: ', distances);
        return path.concat(shortest).reverse();
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
console.log('SHORTEST PATH: ', graph.dijkstras("A", "F"));


