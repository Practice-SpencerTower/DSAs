// Binary Heaps

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class MaxBinaryHeap {
    constructor() {
        this.vals = [];
    }
    insert (val) {
        this.vals.push(val);
        this.bubbleUp();
        return this.vals;
    }
    bubbleUp () {
        let idx = this.vals.length - 1; // point to last val
        let parentIdx = Math.floor((idx - 1) / 2);
        while (this.vals[parentIdx] < this.vals[idx]) {
            let temp = this.vals[parentIdx];
            this.vals[parentIdx] = this.vals[idx];
            this.vals[idx] = temp;
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }
    extractMax () {
        // swap first and last vals in vals prop (moves largest val to end so you can pop it off)
        let lastIdx = this.vals.length - 1;
        this.vals[0] = this.vals[lastIdx]; // swap root/largest val with last val
        // pop from vals prop to return largest val
        let max = this.vals.pop();
        // sink down the new root to its correct spot

    }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(10);
maxBinaryHeap.insert(15);
maxBinaryHeap.insert(3);
maxBinaryHeap.insert(77);
maxBinaryHeap.insert(6);
maxBinaryHeap.insert(55);
maxBinaryHeap.insert(100);
console.log(maxBinaryHeap.vals);