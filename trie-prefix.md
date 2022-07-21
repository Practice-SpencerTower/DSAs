# Prefix Trie

Tries:

- a special type of tree
- useful for autocomplete and spellcheckers
- allows you to reuse nodes - makes tree efficient for string lookup
- root is a placeholder node - does not have a character
- create a node for each letter starting at the root
  - for each character in the word
- insert:
  - each character as a child of the previous character
  - have to loop through each character in the word to be inserted
  - check if character is in the children hashmap
  - have to mark the end of the word
- search:
  - start at root
  - look at child nodes
  - if correct character found, go to next character and see if it matches
  - check if last character marked as end of word in trie
- startsWith:
  - start at root
  - look at child nodes, see if child nodes match
  - similar to search but doesn't have to be marked as end of word
  - more efficient than using an array - with an array would have to loop through each word and check if it starts with the character
  - O(1) lookup

- Implementing a Trie
  - Create a trie node
  - Each node has children - can use a hashmap
  - Each node has an end of word property - can be a boolean
    - Can also use a character to mark the end of the word
