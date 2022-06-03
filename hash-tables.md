# Hash Table

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Hash tables are widely used
- Many languages have their own built in hash tables

- Used to store key-value pairs
- Keys are NOT ordered (as opposed to arrays)
- Good for unordered data and using readable/any data type for keys (array indexing is strictly numeric)
- Fast for finding, adding, removing values
  - O(1) lookup

- Build in Hash Tables
  - JS - Objects and Maps
  - Python - Dictionaries

- Use Cases:
  - Storing colors
    - Better to have a readable key associated with the color rather than an index in an array

- Hashing (The Hash Function):
  - Takes a key as an input and generates an output of a fixed size
  - Output is used to index the key-value pair
  - Good Hash Functions:
    - Fast - constant time
    - Doesn't cluster outputs at the same indices (no collisions)
    - Deterministic (same input = same output)

- Avoiding Collisions:
  - Collisions are likely
  - Using a prime number for the array length greatly reduces the number of potential collisions
  - Separate Chaining:
    - Store data at same spot with another data structure - e.g. linked list or array
  - Linear Probing:
    - Only store one piece of data in each position
    - If there is a collision, look forward to the next empty spot to put the data

- Big O of Hash Tables:
  - Insert - O(1)
  - Deletion - O(1)
  - Access - O(1)
  - Depends how effective the hash function is at reducing collisions
