// 628. Maximum Product of Three Numbers
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6
 

// Constraints:

// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b)
    let n = nums.length
    //three greater numbers
    let product1 = nums[n-1]*nums[n-2]*nums[n-3]
    //two smaller and one greater
    let product2 = nums[0]*nums[1]*nums[n-1]
    return Math.max(product1,product2)
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let num1 = -Infinity
    let num2 = -Infinity
    let num3 = -Infinity

    let minNum1 = Infinity
    let minNum2 = Infinity

    for(let num of nums){
        if(num>=num1){
            num3 = num2
            num2 = num1
            num1 = num
        }else if(num<num1 && num>=num2){
            num3 = num2
            num2 = num
        }else if(num>num3 && num<num2){
            num3 = num
        }

        if(num<=minNum1){
            minNum2 = minNum1
            minNum1 = num
        }else if(num<minNum2){
            minNum2 = num
        }
    }   
    return Math.max((num1*num2*num3 ), (minNum1*minNum2*num1))
};