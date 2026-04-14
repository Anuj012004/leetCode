// 229. Majority Element II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    //var to store the res
    //create map to store the elements with number of counts
    //loop on nums and check the presence of element
    //if presenc or count > n/3 push element to the res arr and delete the key from map to handle dulpicates

    let res = []
    let map = new Map()
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
    }
    for(let i=0; i<nums.length; i++){
        if(map.get(nums[i])> nums.length/3){
            res.push(nums[i])
            map.delete(nums[i])
        }
    }
    return res
};