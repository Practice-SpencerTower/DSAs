# Maximum Product Subarray

- Track both min and max products
  - Negative numbers
- Loop through input array
- If num is 0, reset min and max to 1
- Store max in a temp variable because its value will be updated before determining the min value
- Take max by taking max of num * max, num * min, num
- Take min by taking min of num * temp, num * min, num
- Take max of overall max and current max
- Return overall max
