# Minimum Passes Of Matrix

- AlgoExpert

- use two queues (or can use one)
- loop through and only consider the positive elements 
- add positive positions to the queue
- loop through queue
- pop off elements, look at adjacent elements, convert negatives to positive
  - push new positive values to the second queue
- first queue - elements to process in current pass
- second queue - elements to process in next pass
