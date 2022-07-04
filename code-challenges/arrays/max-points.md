# Maximum Points You Can Obtain From Cards

- Use fixed sliding window
- Slide window from left to right
- Add up values outside of window
- Get total sum of array values
- Set max points to total
- left = 0
- right = length - k

- While right < length of cardPoints
  - total += (cardPoints[left] - cardPoints[right])
  - max = Math.max(max, total)
  - increment left
  - increment right