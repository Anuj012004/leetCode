// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in 
// the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105


// array and an integer k, 
// array can contain negative and positive values, cannot be empty, 
// k cannot be -ve, can be zero 

//return boolean true || false, if on two different indicies i and j => nums[i]===nums[j] and Math.abs(i-j) <=k =>  return true else false

//example 
//1. nums=[1,2,3,1] and k =3 => here nums[0]===nums[3] also abs(0-3)=3, 3<=k || 3<=3 it returns true
//2. nums= [1,0,1,1] and k = 1 now nums[0] === nums[2] also abs = 2 and 2<=k false here , return false


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // //loop to grab the first value
    // for(let i=0; i<nums.length; i++){
    //     //grab second num
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i]===nums[j] && Math.abs(i-j)<=k){
    //             return true
    //         }
    //     }
    // }
    // return false

    let seen = new Set();
    let left = 0;

    for (let right = 0; right < nums.length; right++) {

        if (seen.has(nums[right])) {
            return true;
        }

        seen.add(nums[right]);

        if (right - left >= k) {
            seen.delete(nums[left]);
            left++;
        }
    }

    return false;
};

//test cases

console.log(containsNearbyDuplicate([1,2,3,1],3),'it should be true')
console.log(containsNearbyDuplicate([1,0,1,1],1),'it should be true')
