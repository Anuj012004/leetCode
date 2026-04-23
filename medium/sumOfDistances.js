// 2615. Sum of Distances
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 0-indexed integer array nums. There exists an array arr of length nums.length, where arr[i] is the sum of |i - j| over all j such that nums[j] == nums[i] and j != i. If there is no such j, set arr[i] to be 0.

// Return the array arr.

 

// Example 1:

// Input: nums = [1,3,1,1,2]
// Output: [5,0,3,4,0]
// Explanation: 
// When i = 0, nums[0] == nums[2] and nums[0] == nums[3]. Therefore, arr[0] = |0 - 2| + |0 - 3| = 5. 
// When i = 1, arr[1] = 0 because there is no other index with value 3.
// When i = 2, nums[2] == nums[0] and nums[2] == nums[3]. Therefore, arr[2] = |2 - 0| + |2 - 3| = 3. 
// When i = 3, nums[3] == nums[0] and nums[3] == nums[2]. Therefore, arr[3] = |3 - 0| + |3 - 2| = 4. 
// When i = 4, arr[4] = 0 because there is no other index with value 2. 

// Example 2:

// Input: nums = [0,5,3]
// Output: [0,0,0]
// Explanation: Since each element in nums is distinct, arr[i] = 0 for all i.
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    let arr = []
    for(let i=0; i<nums.length; i++){
        let sum = 0
        for(let j=0; j<nums.length; j++){
            if(nums[i]===nums[j] && i!==j){
                sum += Math.abs(i-j)
            }
        }
        arr.push(sum)
    }
    return arr
};

//
//optimal

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    let map = new Map();
    let res = new Array(nums.length).fill(0);

    //  group indices
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    // process each group
    for (let indices of map.values()) {
        let n = indices.length;

        let prefixSum = 0;

        // Left to right
        for (let i = 0; i < n; i++) {
            res[indices[i]] += indices[i] * i - prefixSum;
            prefixSum += indices[i];
        }

        // Reset for right side
        prefixSum = 0;

        // Right to left
        for (let i = n - 1; i >= 0; i--) {
            res[indices[i]] += prefixSum - indices[i] * (n - 1 - i);
            prefixSum += indices[i];
        }
    }

    return res;

};

console.log(distance([1,2,4,1,1,4] ))

