// 1262. Greatest Sum Divisible by Three
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.

 

// Example 1:

// Input: nums = [3,6,5,1,8]
// Output: 18
// Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).
// Example 2:

// Input: nums = [4]
// Output: 0
// Explanation: Since 4 is not divisible by 3, do not pick any number.
// Example 3:

// Input: nums = [1,2,3,4,4]
// Output: 12
// Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).
 

// Constraints:

// 1 <= nums.length <= 4 * 104
// 1 <= nums[i] <= 104

//an array -> nums -> cannot be empty, !contain zero and negative numbers, at any order, no symbols anything rather than numbers,
//return sum -> number -> maximum sum divisible by number 3
//if no sum found return 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    //sort the nums in ascending order
    nums.sort((a,b)=>a-b)  
    //find the sum
    let sum = nums.reduce((a,b)=>a+b,0)  
    if(sum%3===0) return sum
    let m1 =[]
    let m2 = []
    for(let num of nums){
        if(num%3===1) m1.push(num)
        if(num%3===2) m2.push(num)
    }

    if(sum%3===1){
        let remove1 = m1.length>0?m1[0]:Infinity
        let remove2 = m2.length>1?m2[0]+m2[1]:Infinity
        return sum - Math.min(remove1,remove2)
    }
    if(sum%3===2){
         let remove1 = m2.length>0?m2[0]:Infinity
        let remove2 = m1.length>1?m1[0]+m1[1]:Infinity
        return sum - Math.min(remove1,remove2)
    }
    return 0
};

//TEST CASES 
console.log(maxSumDivThree([3,6,5,1,8]),'should be 18')
console.log(maxSumDivThree([4]),'it should be 0')
console.log(maxSumDivThree([2,6,2,2,7]))



