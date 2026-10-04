
// Code
// Testcase
// Testcase
// Test Result
// 34. Find First and Last Position of Element in Sorted Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of integers nums sorted in non-decreasing order, 
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

//nums - array, ascending order, can be empty, nums.length === 0, contain int value, nothing special sum, ch, str etc, 
//target = int, nothing special 

// find the first and last index of target, int values


//function takes an arr and target int
// built in methods to find first and last ind of target
//return [first, last]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // let first = nums.indexOf(target)
    // let last = nums.lastIndexOf(target)
    // return [first,last]
    //the timeCompl = o of n
    //space com = o of 1

    //===========================
    //optimal way, arr is sorted, have to search things, binary search would be okay

    let left = 0
    let right = nums.length - 1
    let first = -1
    let last = -1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            if (nums[mid] === target) {
                first = mid
                right = mid - 1
            }
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }


    left = 0
    right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            last = mid
            left = mid + 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }



return [first, last]


};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6))  //-1, -1
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) //[3,4]