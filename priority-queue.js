// MIN BINARY HEAP PRIORITY QUEUE

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// Utilizes a Min Binary Heap (lowest number = highest priority)
class PriorityQueue {
    constructor() {
        this.vals = [];
    }
    enqueue (val, priority) {
        let newNode = new Node(val, priority);
        this.vals.push(newNode);
        this.bubbleUp();
    }
    dequeue () {
        // swap first and last vals in vals prop (moves largest val to end so you can pop it off)
        const min = this.vals[0];
        const end = this.vals.pop();
        if (this.vals.length > 0) {
            this.vals[0] = end;
            this.sinkDown();
        }
        return min;
    }
    bubbleUp () {
        const idx = this.vals.length - 1; // point to last idx
        const element = this.vals[idx]; // get element at last index
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parentVal = this.vals[parentIdx];
            if (element.priority <= parentVal.priority) break;
            this.vals[parentIdx] = element;
            this.vals[idx] = parentVal;
            idx = parentIdx;
        }
    }
    sinkDown () {
        let idx = 0;
        const length = this.vals.length;
        const element = this.vals[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.vals[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.vals[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.vals[idx] = this.vals[swap];
            this.vals[swap] = element;
            idx = swap;
        }
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("flu", 3);
priorityQueue.enqueue("concussion", 1);
priorityQueue.enqueue("High fever", 2);
console.log(priorityQueue.vals);
console.log(priorityQueue.dequeue());