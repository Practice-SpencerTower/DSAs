// Singly Linked List Code

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current) {
            newTail = current;
            current = current.next;
            }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current; // popped node
    }
    shift() {
        // removes head - opposite of pop
        if (!this.head) return undefined;
        let shiftedNode = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        shiftedNode.next = null;
        return shiftedNode;
    }
    unshift(val) {
        // add node to beginning of list
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (this.length < index) return null;
        let count = 1;
        let current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }
    set(val, index) {
        let foundNode = this.get(index);
        if (!foundNode) {
            return false
        } else {
            foundNode.val = val;
        }
        return this;
    }
}

let newList = new SinglyLinkedList();
newList.push("firstNode");
newList.push("secondNode");
console.log('list: ', newList);