
// Code
// Testcase
// Test Result
// Test Result
// 283. Move Zeroes
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let result = []
    for(let i=0; i<nums.length; i++){
        if(nums[i] !==0){
            result.push(nums[i])
        }
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0){
            result.push(nums[i])
        }
   
    }
    for(let i=0; i<nums.length; i++){
        nums[i]=result[i]
    }
};




/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length===1) return nums
   let j = 0
   for(let i=0; i<nums.length; i++){
    if(nums[i]!==0){
        [nums[i],nums[j]] =[ nums[j], nums[i]]
        j++
    }
   }
   
};