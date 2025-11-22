// 1748. Sum of Unique Elements
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

//array - nums -> cannot be empty, always contain positive numbers, non-zero and non-negative
//return the sum -> number -> sum of unique number -> appears once in arr, if no unqiue number return 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0
   let frq = new Map()
   for(let num of nums){
    frq.set(num, (frq.get(num) || 0)+1)
   }
   for(let [num,count] of frq){
    if(count===1){
        sum +=num
    }
   }
   return sum
   
};

//Test cases

console.log(sumOfUnique([1,2,3,2]),'should be 4')
console.log(sumOfUnique([1,1,1,1]),'should be 0')