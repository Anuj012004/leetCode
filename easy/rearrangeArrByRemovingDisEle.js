// 4065. Rearrange Array by Removing Distinct Values
// Solved
// Easy
// premium lock icon
// Companies
// You are given an integer array nums.

// You start with an empty array ans. Repeat the following operation until nums is empty:

// Identify all distinct values currently present in nums.
// Remove one occurrence of every distinct value currently in nums, and append those values to ans in ascending order.
// Return the array ans.

 

// Example 1:

// Input: nums = [3,1,3,2,1,3]

// Output: [1,2,3,1,3,3]

// Explanation:

// Operation	Appended to ans	nums after	ans after
// 1	1, 2, 3	[3, 1, 3]	[1, 2, 3]
// 2	1, 3	[3]	[1, 2, 3, 1, 3]
// 3	3	[]	[1, 2, 3, 1, 3, 3]
// nums is now empty, so the answer is [1, 2, 3, 1, 3, 3].

// Example 2:

// Input: nums = [7,7,4,4,4]

// Output: [4,7,4,7,4]

// Explanation:

// Operation	Appended to ans	nums after	ans after
// 1	4, 7	[7, 4, 4]	[4, 7]
// 2	4, 7	[4]	[4, 7, 4, 7]
// 3	4	[]	[4, 7, 4, 7, 4]
// nums is now empty, so the answer is [4, 7, 4, 7, 4].

 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    //init an empty arr
    //sort nums in increasing order
    let ans = []

    let map = new Map()
    nums.sort((a,b)=>a-b)
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
    }
    while(map.size>0){
        for(let [key,val] of map){
        ans.push(key)
        map.set(key,map.get(key)-1)
        if(map.get(key)===0){
            map.delete(key)
        }
    }
    }
    return ans
};