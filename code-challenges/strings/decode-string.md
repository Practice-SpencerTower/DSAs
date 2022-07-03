# Decode String

Example:
Input: '3[a2[c]]'
Output: 'accaccacc'

- Use a stack
- Define string of numbers 0-9 to identify numbers in the input string
- Loop through input string
- If character is not a closing bracket, push to stack
- If character is a closing bracket, pop characters from stack and add to a string until a closing bracket is found in stack
- Use a while loop to pop from stack until the closing bracket is found
- Create string of numbers, make sure they are concatenated in correct order
- Convert string of numbers to number
- Use repeat() method to multiply substring by number
- Push new string back into stack