# Validate BST

- Recursively traverse tree
- Verify that left child nodes are less than parent
- Verify that right child nodes are greater than parent
- Left side of tree:
  - Right child nodes must still be smaller than root but larger than parent
    - parent.value <= node.value < root.value
- Right side of tree:
  - Left child nodes must sill be larger than root but smaller than parent
    - root.value < node.value < parent.value
- Traverse and check if value of node is between min and max values
- Use helper method that takes in additional arguments (min and max values)
- Start with min as -Infinity, max as Infinity
- Return true if reach a null value / leaf
