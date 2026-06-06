// 2574. Left and Right Sum Differences
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 0-indexed integer array nums of size n.

// Define two arrays leftSum and rightSum where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.

 

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    //find the sum 
    //to get the right sum subtract the num[i] from the sum 
    //to get the left sum use i-- loop and subtract the num[i]

    let sum = nums.reduce((a, b) => a + b, 0)
    let rSum = sum
    let lSum = sum
    let rightSum = []
    let leftSum = []
    let final = []
    for (let i = 0; i < nums.length; i++) {
        rightSum.push(rSum - nums[i])
        rSum -=nums[i]
    }
    for (let i = nums.length-1; i >=0; i--) {
        leftSum.push(lSum - nums[i])
        lSum -=nums[i]
    }
    leftSum.reverse()
    for(let i=0; i<nums.length; i++){
        final.push(Math.abs(leftSum[i]-rightSum[i]))
    }
    return final
};