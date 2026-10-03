// 35. Search Insert Position
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


// sorted array - cannot be an empty arr, sorted in increasing order, contain integers, no special or fancy things, 
// target - int value 

// if target found in arr - return index 
// return index where it can be inserted 

// [1,2,4,5,6,7], tar = 5  // 3
// [1,3,4] tar = 6 //3


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var searchInsert = function(nums, target) {
    // function take input an arr and int target
    // iterate from 0th index to last index 
    //if targer found return the index 
    // if not found means if next element is greater than target return its index
    // return arr.length

    // for(let i=0; i<nums.length; i++){
    //     if(nums[i]===target){
    //         return i
    //     }else if(nums[i]>target){
    //         return i
    //     }
    // }
    // return nums.length

    //==============================
    //we know sorted arr, have to serch for things, binary search can be useful
    //left and right index
    //while left<= right get mid 
    // if arr[mid] === target return mid
    // if arr[mid]<target left= mid+1
    //if arr[mid]>target right =mid-1

    let left = 0
    let right = nums.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]===target){
            return  mid
        }else if(nums[mid]<target){
            left = mid+1
        }else if(nums[mid]>target){
            right = mid-1
        }
    }
    return left
};

console.log(searchInsert([1,2,4,5,6,7], 5))
console.log(searchInsert([1,3,4],6))
console.log(searchInsert([1,3,4,5,7],6)) //