// Find Kth Smallest Element in BST

var kthSmallest = function(root, k) {
    const values = [];
    
    function dfs(node) {
        if (!node) return;
        if (node.left) dfs(node.left);
        values.push(node.val);
        if (node.right) dfs(node.right);
    }
    dfs(root);
    return values[k - 1];
};
