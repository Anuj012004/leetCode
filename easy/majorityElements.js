
// Code
// Testcase
// Test Result
// Test Result
// 169. Majority Element
// Easy
// Topics
// premium lock icon
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

//array ->nums-> size is n, contain both negative and positive numbers, !string || !char, cannot be empty
//return-> element-> occured most in the array nums, 


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let freq = {}
    // let majorityElement = nums[0]
    // let maxCount = 0
    // for(let element of nums){
    //     freq[element] = (freq[element] || 0) +1

    //     if(freq[element] > maxCount){
    //         maxCount = freq[element]
    //         majorityElement = element
    //     }
    // }

    // return majorityElement


    let map = new Map()
    for(let num of nums){
        map.set(num, (map.get(num)||0)+1)
    }
    let maxVal= 0
    let res =0
    for(let [key,value] of map){
        if(value>maxVal){
            maxVal = value
            res = key
        }
    }
    return res
};

//TEST CASE

console.log(majorityElement([3,2,3]))