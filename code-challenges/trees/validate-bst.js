// Validate BST

function isValidBST(root) {
  return validateNodes(root, -Infinity, Infinity);
};

function validateNodes(node, min, max) {
  if (!node) return true;
  if (!(node.value > min)) return false;
  if (!(node.value < max)) return false;
  const leftNodeValid = validateNodes(node.left, min, node.value);
  const rightNodeValid = validateNodes(node.right, node.value, max);
  return leftNodeValid && rightNodeValid;
}

  