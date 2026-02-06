// 442. Find All Duplicates in an Array
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    //create a freq map
    //arr duplicate
    //loop through the key val of map 
    //if key.get > 1 push it to the arr 
    //return the arr

    let map = new Map()
    let duplicate = []
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
    }
    for( let [key,val] of map){
        if(val>1){
            duplicate.push(key)
        }
    }
    return duplicate
};