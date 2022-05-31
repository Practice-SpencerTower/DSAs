// Doubly Linked List Code

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
}

// let firstNode = new Node(14);
// firstNode.next = new Node(5);
// firstNode.next.prev = firstNode;
// console.log('firstNode', firstNode);
let newList = new DoublyLinkedList();
newList.push('firstNode');
newList.push('secondNode');
newList.push('thirdNode');
newList.push('fourthNode');
console.log('poppedNode1', newList.pop());
console.log('poppedNode2', newList.pop());
console.log('UPDATED LIST: ', newList);