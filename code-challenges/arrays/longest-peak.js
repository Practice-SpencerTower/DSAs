// Longest Peak - AlgoExpert

function longestPeak(array) {
    // if nums increment - count incrementing nums
    // if next num decrements - count decrementing nums
    // if incrementing and next num equal, reset count
    // if decrementing and next num not decrementing, compare count to max count
    let maxCount = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            [i, count] = trackPeak(i, array);
            if (count > maxCount) maxCount = count;
        }
    }
    return maxCount;
}

function trackPeak(i, array) {
    // count incline
    let count = 1;
    let decline = false;
    while (array[i] > array[i - 1]) {
        count++;
        i++;
    }
    // count decline
    while (array[i] < array[i - 1]) {
        decline = true;
        count++;
        i++;
    }
    // return count if decline found, else reset count to 0
    return decline ? [i - 1, count] : [i - 1, 0];
}
