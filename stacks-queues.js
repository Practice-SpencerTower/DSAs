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
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push (val) {
        // use shift/unshift
        // faster with ll than push/pop
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    pop () {
        if (!this.length) return undefined;
        let removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return removedNode;
    }
}

let newStack = new Stack();
newStack.push("firstNode");
newStack.push("secondNode");
newStack.push("thirdNode");
newStack.push("fourthNode");
console.log('popped node', newStack.pop());
console.log('popped node', newStack.pop());
console.log('popped node', newStack.pop());
console.log('popped node', newStack.pop());
console.log('linked Stack: ', newStack);





