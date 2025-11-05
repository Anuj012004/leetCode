// 34. Find First and Last Position of Element in Sorted Array
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109


//we have an array -> nums -> sorted in ascending order, and a target value is given , nums can be empty, no strings, no special symbols, can contains the 
//negative and positive numbers

//return the starting and ending position of that target in the array nums, if the target is not present in the nums return [-1,-1],  starign ending position can be returned in array

//example
//let nums = [0,1,2,3,3,4,5] and target = 3
//output = [3,4]

//let nums = [0,11,15,17,18] and target = 50
//output = [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //if not found 
    if(!nums.includes(target)) return [-1,-1]
    let result = []
    nums.forEach((n,i)=>{
        if(n===target){
            result.push(i)
        }
    })
    return [result[0], result[result.length-1]]

};



//TEST CASE

console.log(searchRange([0,2,4,3,5,3,4,5],3),'its output should be [3,5]')
console.log(searchRange([0,12,4,41,2,5,4],50),'its output should be [-1,-1]')


