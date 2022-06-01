// Binary Search Trees
const treeify = require('treeify');

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert (val) {
        let newNode = new Node(val);
        if (!this.root) this.root = newNode;
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = newNode;
                    break;
                }
            }
            if (val > current.val) {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    break;
                }
            }
            break;
        }
        return this;
    }
    find (val) {
        if (!this.root) return undefined;
        let found = false;
        let current = this.root;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS () {
        let node = this.root;
        let visited = [];
        let queue = [];
        queue.push(node);

        while(queue.length) {
            node = queue.shift();
            visited.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return visited;
    }
    DFSPreOrder () {
        let visited = [];
        function traverse(node) {
            visited.push(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
    DFSInOrder () {
        let visited = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
    DFSPostOrder () {
        let visited = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node);
        }
        traverse(this.root);
        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(9);
console.log(treeify.asTree(tree), true);
