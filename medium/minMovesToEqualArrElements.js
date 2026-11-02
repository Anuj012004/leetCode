// 462. Minimum Moves to Equal Array Elements II
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment or decrement an element of the array by 1.

// Test cases are designed so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 2
// Explanation:
// Only two moves are needed (remember each move increments or decrements one element):
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
// Example 2:

// Input: nums = [1,10,2,9]
// Output: 16
 

// Constraints:

// n == nums.length
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    //arr nums size of n 
    //return min moves req to make array elements equal
    //we can incre or decre by 1 only

    nums.sort((a,b)=>a-b)
    let n = nums.length
    // if len is odd we got the middle ele
    //count the operation needed
    let mid = Math.floor(n/2)
    ele = nums[mid]
    let mv = 0
    for(let i=0; i<nums.length; i++){
        let moves = 0
        let elem = nums[i]
        while(elem!=ele && elem<ele){
            moves++
            elem +=1
        }
        while(elem!=ele && elem>ele){
            moves++
            elem -=1
        }
        mv +=moves
    }
    return mv
};

//the above solution is correct but cause the tle lets go with the optimal one 


/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    //arr nums size of n 
    //return min moves req to make array elements equal
    //we can incre or decre by 1 only

    nums.sort((a,b)=>a-b)
    let n = nums.length
    // if len is odd we got the middle ele
    //count the operation needed
    let mid = Math.floor(n/2)
    ele = nums[mid]
    let mv = 0
    for(let i=0; i<nums.length; i++){
        mv+=Math.abs(ele-nums[i])
    }
    return mv
};