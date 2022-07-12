# Minimum Passes Of Matrix

- AlgoExpert

- keep track of number of conversions made each pass
  - if no conversions made, then can return number of passes
- use a breadth-first search
- use a queue to store all positions of positive values
- consider neighbors of each element in queue
- if any neighbors are negative, convert to positive
  - add their positions to a secondary queue - of the values converted from negative to positive
- once first queue is empty, increment number of passes
- loop through second queue
