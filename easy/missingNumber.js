// // 268. Missing Number
// Easy
// Topics
// premium lock icon
// Companies
// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
// 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
// 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
// 8 is the missing number in the range since it does not appear in nums.

 
 

 

 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 

// array -> contains diff numbers in range 0-n , n is the highest number in the arr, contain positive numbers only, non-repeating numbers
//missing number in the arr

//examples:
//1. [0,1,3] => n=3 and missing number is 2 so it return 2
//2. [0,1,2,4,5,6] => n=6 and missing number is 3
//3. [0,2,1,3,5,6,4,9,7] => n=9 and missing number is 8

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // //sort the array in ascending order
    // let sortedArr = nums.sort((a,b)=>a-b)
    // //if zero is missing 
    // if(sortedArr[0] !== 0) return 0
    // //if n is missing 
    // if(sortedArr[sortedArr.length-1]!==sortedArr.length) return sortedArr.length
    // for(let i=0; i<nums.length; i++){
    //     if(nums[i]+ 1 !== nums[i+1]){
    //         return nums[i] +1
    //     }
    // }
     let n = nums.length;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = 0;

    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
};

//test cases 
console.log(missingNumber( [0,1,3]),'output should be 2')
console.log(missingNumber( [0,1,2,4,5,6]),'output should be 3')
console.log(missingNumber([0,2,1,3,5,6,4,9,7]),'output should be 8')