// 3986. Number of Elapsed Seconds Between Two Times
// Solved
// Easy
// premium lock icon
// Companies
// Hint
// You are given two valid times startTime and endTime, each represented as a string in the format "HH:MM:SS".

// Return the number of seconds that have elapsed from startTime to endTime.

 

// Example 1:

// Input: startTime = "01:00:00", endTime = "01:00:25"

// Output: 25

// Explanation:

// endTime is 25 seconds ahead of startTime.
// Example 2:

// Input: startTime = "12:34:56", endTime = "13:00:00"

// Output: 1504

// Explanation:

// endTime is 25 minutes and 4 seconds ahead of startTime, which equals 1504 seconds.

 

// Constraints:

// startTime.length == 8
// endTime.length == 8
// startTime and endTime are valid times in the format "HH:MM:SS"
// 00 <= HH <= 23
// 00 <= MM <= 59
// 00 <= SS <= 59
// endTime is not earlier than startTime


/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function(startTime, endTime) {
    // need hour difference, minute diff, second diff
    let start = startTime.split(":").map(Number)
    let end = endTime.split(":").map(Number)
    let startSec = start[0]*3600 + start[1]*60 + start[2]
    let endSec = end[0]*3600 + end[1]*60 + end[2]

    return Math.abs(startSec-endSec)

    
};