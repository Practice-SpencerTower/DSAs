# Add and Search Word

- if letter === '.' have to use depth first search
- adding word:
- check if letter not in trie, if not in trie, add letter
- go to next letter
- at end of for loop, mark current letter as last letter in word
- searching word:
  - in dfs
  - loop through input word
  - use recursion / backtracking
  - call dfs if letter is '.'
  - else keep iterating through letters
