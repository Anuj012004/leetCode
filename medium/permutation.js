// 46. Permutations
// Medium
// Topics
// premium lock icon
// Companies
// Given an array nums of distinct integers, 
// return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
 

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

//permutation means rearrangement of all the elements 
//we have an array called nums - only contains integers, no char or string, cannot be empty, elements are always unique, the length of nums
// is between 0 and 7 
//we have to return all the possible permutation of the elements of nums -- all possible rearrangement of the elements

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
     let result = [[]]; // start with empty permutation

  for (let num of nums) {
    let newResult = [];
    for (let perm of result) {
      // insert num into every possible position
      for (let i = 0; i <= perm.length; i++) {
        let newPerm = [...perm.slice(0, i), num, ...perm.slice(i)];
        newResult.push(newPerm);
      }
    }
    result = newResult;
  }

  return result;
};
};


//test cases

console.log(permute([1,2,3]),'its solution or output should be  [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]')