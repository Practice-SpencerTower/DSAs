// QUEUES

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(val) {
        // behaves like push
        let newNode = new Node(val);
        if (!this.length) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        // behaves like shift
        if (!this.length) return undefined;
        let removedNode = this.first;
        this.first = this.first.next;
        removedNode.next = null;
        this.length--;
        if (!this.length) {
            this.last = null;
        }
        return removedNode;
    }
}

let newQueue = new Queue();
newQueue.enqueue("firstNode");
newQueue.enqueue("secondNode");
newQueue.enqueue("thirdNode");
newQueue.enqueue("fourthNode");
console.log('Updated Queue: ', newQueue);