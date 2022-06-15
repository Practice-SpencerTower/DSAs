// Stacks

let stack = [];
// removing from end with array is most efficient
stack.push('google');
stack.push('instagram');
stack.push('youtube');
stack.pop();

// uses filo but less efficient, have to shift/re-index items each time
stack.unshift('create new file');
stack.unshift('resized file');
stack.shift();

// linked Stack stack implementation is more efficient than array
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push (val) {
        // behaves like unshift
        // faster with ll than push/pop
        let newNode = new Node(val);
        if (!this.length) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.length++;
        return this;
    }
    pop () {
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

let newStack = new Stack();
newStack.push("firstNode");
newStack.push("secondNode");
newStack.push("thirdNode");
newStack.push("fourthNode");





