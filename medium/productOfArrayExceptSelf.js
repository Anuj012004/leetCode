// 238. Product of Array Except Self
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, 
// return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

// given array -> nums, always contain atleast 2 elements, the elements in nums between -30 and 30 inclusive.

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//     let result = []
//    for(let i=0; i<nums.length; i++){
//     let product = 1
//     for(let j=0; j<nums.length; j++){
//         if(i!==j){
//             product *= nums[j]
//         }
//     }
//     result.push(product)
//    }
//    return result
// };


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length-1)
    let prefix = 1
    let suffix = 1
    for(let i=0; i<nums.length; i++){
        res[i] = prefix
        prefix *= nums[i]
    }
    for(let i=nums.length-1; i>=0; i--){
        res[i] *= suffix
        suffix *= nums[i]
    }
    return res
};


//test cases

console.log(productExceptSelf([1,2,3,4]),'[24,12,8,6]')
console.log(productExceptSelf([-1,1,0,-3,3]),'[0,0,9,0,0]')