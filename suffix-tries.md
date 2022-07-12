# Suffix Tries

- Notes: AlgoExpert

- Very useful for problems that involve finding/searching/matching strings
- Root node
- All suffixes are stored with their following characters
- Tree-like structure
- Each node in the trie is a key to a hashtable that points to another hashtable
  - Nested hashtables
- Use a character such as an astrix to mark the end of each suffix

- Searching function that can search for a string inside the suffix tree
  - Will tell us if a string is contained within the suffix tree
