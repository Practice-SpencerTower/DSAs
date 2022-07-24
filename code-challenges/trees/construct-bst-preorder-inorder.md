# Construct BST from Preorder and Inorder Traversal

- Inorder = left subtree, root, right subtree
- 2 facts:
  - first value in preorder traversal is always the root
  - every value to left of root in inorder array will be in left subtree, every value to right will be in
  right subtree
- get root from preorder array
- then determine nodes to left and right in inorder array
- partition preorder array based on the nodes to left and right of root in inorder array
