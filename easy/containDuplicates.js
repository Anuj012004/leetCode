// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


//we have an array of integers, it can contain -ve and +ve both vals , it cannot be empty, always nums no string or char,
// have to return the boolean; true or false , two similar vals appears in the array return true else false
//example : [1,2,5,8] => false, none of the value is twice
// [1,2,1,4,5] => true - 1 appears twice
//[1,5,2,4,7,8,5,2,4,1,5,4,5,4,5] => true 

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    //Brute force approach 

    // //loop through the nums to grab the first number 
    // for(let i =0 ; i<nums.length; i++){
    //     //loop to grab the another num 
    //     for(let j=i+1; j<nums.length ; j++){
    //         //compare the first number to check it appears twice in the nums array
    //     if(nums[i]===nums[j]){
    //         return true
    //     }
    //     }
    // }
    // return false

    //an optimal appproach using set 

    let uniqueOnly = new Set()

    for(let val of nums){
        if(uniqueOnly.has(val)){
            return true
        }
        uniqueOnly.add(val)
    }
    return false
};


//test cases 

console.log(containsDuplicate([1,2,3,1]), 'it should be true')
console.log(containsDuplicate([1,2,3,4]),'it should be false')
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), 'it should be true')