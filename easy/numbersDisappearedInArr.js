// 448. Find All Numbers Disappeared in an Array
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array nums of n integers where nums[i] is in the range [1, n],
//  return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// array -> integers -> ranged between 1 to n, n== nums.length, always positive values, numbers only
// return missed numbers in the arr, arr

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length
    let result = []
    let sortedNums = nums.sort((a,b)=>a-b)

    let j=0
    for(let i=1;i<=n;i++){
          while (j < n && nums[j] < i) {
            j++;
        }
        if (j >= n || nums[j] !== i) {
            result.push(i);
        }
    }
    return result
};

//Test Cases

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]),'missed number should be 5 and 6')
console.log(findDisappearedNumbers([1,1]),'missed number should be 2')