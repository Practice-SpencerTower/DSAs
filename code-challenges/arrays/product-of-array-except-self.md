# Product of Array Except Self

- Create second array to store products
  - Same length as input array, fill with 1
- Loop through from left to right
  - Get product leading up to but not including each index
  - Push to products array
- Loop through from right to left
  - Get product leading up to but not including each index
  - Multiply index at product array by product
- Return product array
