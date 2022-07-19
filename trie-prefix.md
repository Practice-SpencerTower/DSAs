# Prefix Trie

Tries:

- a special type of tree
- root is a placeholder node - does not have a character
- create a node for each letter starting at the root
  - for each character in the word
- insert:
  - each character as a child of the previous character
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
