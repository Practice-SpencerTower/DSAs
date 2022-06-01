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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(9);
console.log(treeify.asTree(tree, true));
console.log('Val found: ', tree.find(10));
