// 347. Top K Frequent Elements
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1

// Output: [1]

// Example 3:

// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]

 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


//an array of integers and integer k ..-> nums and k
//nums cannot be empty, it contain numbers between -104 to 104, numbers are not sorted in it
//k -> an integer in the range of 1 to number of unique elements in the array


//return the k most freq elements 

//example : - let nums = [1,1,2,2,3] let k = 2
//output -> [1,2]

//let nums = [1,2,2,3,3] k =2
//output = [2,3] as the freq of 1 is less than both of the numbers

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //create a map of nums with freq
    let map = new Map()
    for(let num of nums){
        map.set(num,( map.get(num)||0)+1)
    }
    let arr = [...map]
    let sorted = arr.sort((a,b)=>b[1]-a[1])
    let res = []
    for(let i=0; i<k; i++){
        res.push(sorted[i][0])
    }
    return res
    
};

//test cases

console.log(topKFrequent( [1,2,1,2,1,2,3,1,3,2],2),'output should be [1,2]')
console.log(topKFrequent( [1,2,2,3,3],2),'output should be [2,3]')
