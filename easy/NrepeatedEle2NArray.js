// 961. N-Repeated Element in Size 2N Array
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique values, n of which occur exactly once in the array.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

 

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5
 

// Constraints:

// 2 <= n <= 5000
// nums.length == 2 * n
// 0 <= nums[i] <= 104
// nums contains n + 1 unique elements and one of them is repeated exactly n times.


/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    // length = 2n => n = length/2
    //nums have n+1 unique value, n of which occurs only once 
    // nums only element of nums is repeated n times

    //[1,2,3,3] n = 4/2 = 2
    //nums have 3 unique values true which is 1,2,3
    //3 represented 2 times so 3 is the res

    //create a map with freq
    //find n
    //loop through the ele of nums
    //find those freq is n

    let map = new Map()
    let n = nums.length / 2
    for (let num of nums) {
        map.set(num,(map.get(num) || 0) + 1)
    }
    for (let num of nums) {
        if (map.get(num) === n) return num
    }
};