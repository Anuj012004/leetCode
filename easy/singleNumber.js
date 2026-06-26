// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


//have an array of intergers -> contain both negative and positive values, all elements occur twice except for one.
//return that single occured element

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0
    for(let n of nums){
       result = result ^ n
    }
    return result
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map()
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
    }
    for(let [key,val] of map){
        if(val===1){
            return key
        }
    }
};


//test cases 

console.log(singleNumber([2,2,1]), 'should be 1')
console.log(singleNumber([4,1,2,1,2]), 'should be 4')
console.log(singleNumber([1]), 'should be 1')