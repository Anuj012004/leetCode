// // Intersection of two arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


//we have two arrays contains the intergers, do not contain the  -ve elements, cannot be empty, donot contain the str 
// intersection of array -> common elements in the both arr, can be returned in any order, always contains the common, return the result in an arr

//example :
// num1 = [1,2,3], num2 = [3,4,5] => [3]
//num1 = [1,2,2,1], num2 = [2,2] => [2]
//num1 = [4,9,5], num2 = [9,4,9,8,4] => [4,9]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    //initialize the var to store the result
    let result = []
    //grab the first element from the nums1
    for(let i=0; i<nums1.length; i++){
        for(let j=0; j<nums2.length; j++){
            if(nums1[i]===nums2[j]){
                result.push(nums1[i])
            }
        }
    }
    return [... new Set(result)]
};

//test cases

console.log(intersection([1,2,3],[3,4,5]),'should be [3]')
console.log(intersection([1,2,2,1],[2,2] ),'should be [2]')
console.log(intersection([4,9,5],[9,4,9,8,4]),'should be [4,9]')