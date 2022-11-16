// Merge Overlapping Intervals

function mergeOverlappingIntervals(array) {
    // sort the intervals of the input array
    const sortedArray = array.sort((a, b) => a[0] - b[0]);
    // initiate output array with the first interval of input array
    const mergedIntervals = [sortedArray[0]];

    for (let i = 1; i < sortedArray.length; i++) {
        // compare curr in sorted to last in output
        // compare start of curr to end of output interval
        merged = mergedIntervals[mergedIntervals.length - 1];
        // compare curr interval of input array to last interval of output array
        // if overlap modify last interval in output array
        if (merged[1] >= sortedArray[i][0]) {
            // take smallest between start values
            const start = Math.min(merged[0], sortedArray[i][0]);
            // take largest between end values
            const end = Math.max(merged[1], sortedArray[i][1]);
            mergedIntervals[mergedIntervals.length - 1] = [start, end];
        } else {
            mergedIntervals.push(sortedArray[i]);
        }
    }
    return mergedIntervals;
}

function mergeOverlappingIntervals(array) {
    const mergedIntervals = [];
    // sort input intervals
    array.sort((a, b) => a[0] - b[0]);

    mergedIntervals.push(array[0]);

    for (let i = 0; i < array.length; i++) {
        // get start and end of last merged interval
        const mergedStart = mergedIntervals[mergedIntervals.length - 1][0];
        const mergedEnd = mergedIntervals[mergedIntervals.length - 1][1];
        // get current start and end of current input interval
        const currStart = array[i][0];
        const currEnd = array[i][1];

        if (mergedEnd >= currEnd) {
            continue;
        } else if (mergedEnd >= currStart) {
            const mergedInterval = [mergedStart, currEnd];
            mergedIntervals[mergedIntervals.length - 1] = mergedInterval;
        } else {
            mergedIntervals.push([currStart, currEnd]);
        }
    }
    return mergedIntervals;
}
