// Max Binary Heap

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
        const max = this.vals[0];
        const end = this.vals.pop();
        if (this.vals.length > 0) {
            this.vals[0] = end;
            this.sinkDown();
            return max;
        }
    }
    sinkDown () {
        let idx = 0;
        const length = this.vals.length;
        const val = this.vals[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.vals[leftChildIdx];
                if (leftChild > val) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.vals[rightChildIdx];
                if (
                    (swap === null && rightChild > val) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.vals[idx] = this.vals[swap];
            this.vals[swap] = val;
            idx = swap;
        }
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
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.vals);