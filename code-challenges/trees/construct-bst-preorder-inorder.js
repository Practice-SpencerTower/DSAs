// Construct BST from Preorder and Inorder Traversal

function buildTree(preorder, inorder) {
	if (!preorder.length || !inorder.length) return null;
	
	const root = TreeNode(preorder[0]) // first element of preorder is always root
	const mid = inorder.indexOf(preorder[0]) // get location of root
	const leftPre = preorder.slice(1, mid + 1);
	const leftIn = inorder.slice(0, mid);
	const rightPre = preorder.slice(mid + 1, preorder.length);
	const rightIn = inorder.slice(mid + 1, inorder.length);
	root.left = buildTree(leftPre, leftIn);
	root.right = buildTree(rightPre, rightIn);
	return root;
}
