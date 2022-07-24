// Binary Tree Level Order Traversal

function levelOrder(root) {
    if (!root) return [];
    const levels = [];
    const queue = [root];
    
    while (queue.length) {
        const currLevel = [];
        const queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            const node = queue.shift();
            currLevel.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        levels.push(currLevel);
    }
    return levels;
};
