// DIJKSTRA'S ALGORITHM

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// Utilizes a Min Binary Heap (lowest number = highest priority)
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue (val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp () {
        let idx = this.values.length - 1; // point to last val
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue () {
        // swap first and last values in values prop (moves largest val to end so you can pop it off)
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown () {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
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
                while (previous[shortest]) {
                    path.push(shortest);
                    shortest = previous[shortest];
                }
                break;
            }
            if (shortest || distances[shortest] !== Infinity) {
                for (let neighbor in this.adjList[shortest]) {
                    let nextNode = this.adjList[shortest][neighbor];
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
console.log('GRAPH: ', graph);
console.log('SHORTEST PATH: ', graph.dijkstras("A", "F"));


