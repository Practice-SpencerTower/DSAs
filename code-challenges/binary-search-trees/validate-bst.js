// Validate BST

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    // if (!tree) return false;
    if (this.left) {
      if (this.left.value >= this.value) {
        return false;
      } else {
        validateBst(this.left);
      }
    }
    if (this.right) {
      if (this.right.value <= this.value) {
        return false;
      } else {
        validateBst(this.right);
      }
    }
    return true;
  }

  