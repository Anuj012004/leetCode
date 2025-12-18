// 2006. Count Number of Pairs With Absolute Difference K
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
 

// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// Example 2:

// Input: nums = [1,3], k = 3
// Output: 0
// Explanation: There are no pairs with an absolute difference of 3.
// Example 3:

// Input: nums = [3,2,1,5,4], k = 2
// Output: 3
// Explanation: The pairs with an absolute difference of 2 are:
// - [3,2,1,5,4]
// - [3,2,1,5,4]
// - [3,2,1,5,4]
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100
// 1 <= k <= 99

//--------------------------

//we have a array -> nums  -> contain positive integers, do not contain negative integers, numbers are not sorted, duplicate values can exist
// number k -> positive integer, non negative and non zero 

//return the number of pairs 
//pairs found as (i,j) i<j and |nums[i]-nums[j]|==k  the absolute difference equals to the given number k

//example 

//let nums = [1,2,2,1] and k=1

// i=1 and j=2 -> i<j -> |1-2| = 1 ===k  first pair
//now i=1 and j=2 -> second pair
//now i = 1 and j=1 failed condition

//i=2 
// j=1 pair 3
//j=2 then 2 agian condition failed in both 
//j = 1 -> pair 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    // let counter = 0
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         let absoluteDiff = Math.abs(nums[i]-nums[j])
    //         if(absoluteDiff==k){

    //             counter++
    //         }
    //     }
    // }
    // return counter


    //create map 
    //create counter
    //use loop
    //store val in map if map contain num-k = val (a-b=k can be a-k=b) counter++
    //also if num+k = val (a-b=k --  a=k+b) counter++
    //map set (num, freq)

    let map = new Map()
    let counter= 0
    for(let num of nums){
        if(map.has(num-k)){
            counter += map.get(num-k)
        }
        if(map.has(num+k)){
            counter += map.get(num+k)
        }

        map.set(num,(map.get(num)||0)+1)
    }
    return counter
};