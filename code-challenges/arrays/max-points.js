// Maximum Points You Can Obtain From Cards

function maxPoints(cardPoints, k) {
    let left = 0;
    let right = cardPoints.length - k;
    // get sum of elements outside initial window
    let sum;
    for (let i = k + 1; i < cardPoints.length; i++) {
        sum += cardPoints[i];
    }
    let max = sum;

    while (right < cardPoints.length) {
        sum += (cardPoints[left] - cardPoints[right]);
        max = Math.max(max, sum);
        // slide window over
        left++;
        right++;
    }
    return max;
}