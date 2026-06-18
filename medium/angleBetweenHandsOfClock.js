// 1344. Angle Between Hands of a Clock
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the hour and the minute hand.

// Answers within 10-5 of the actual value will be accepted as correct.

 

// Example 1:


// Input: hour = 12, minutes = 30
// Output: 165
// Example 2:


// Input: hour = 3, minutes = 30
// Output: 75
// Example 3:


// Input: hour = 3, minutes = 15
// Output: 7.5
 

// Constraints:

// 1 <= hour <= 12
// 0 <= minutes <= 59

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    if(hour===0) hour=0
    //find the hour angle
    let hourAng = hour*30 +minutes*0.5
    //min ang
    let minuteAng = minutes*6
    //diff
    let diff = Math.abs(hourAng-minuteAng)
    //return the minimun angle if diff else 360-diff
    return Math.min(diff,360-diff)

};