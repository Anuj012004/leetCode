// 2367. Number of Arithmetic Triplets
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

 

// Example 1:

// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 
// Example 2:

// Input: nums = [4,5,6,7,8,9], diff = 2
// Output: 2
// Explanation:
// (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
// (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.
 

// Constraints:

// 3 <= nums.length <= 200
// 0 <= nums[i] <= 200
// 1 <= diff <= 50
// nums is strictly increasing.


/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    // let numberOfTriplets = 0
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         for(let k=j+1; k<nums.length; k++){
    //             if(nums[j]-nums[i]===diff && nums[k]-nums[j]===diff ){
    //                 numberOfTriplets++
    //             }
    //         }
    //     }
    // }
    // return numberOfTriplets

    //numbers are strictly increasing means no duplicate 
    //create a set of nums
    //if set contain number which is equals to the current num + diff 
    // and if number set contain num+diff+diff = num + 2diff 
    //if both true counter++

    // let set = new Set(nums)
    // let counter=0
    // for(let num of nums){
    //     if(set.has(num+diff) && set.has(num + 2*diff)){
    //         counter+=1
    //     }
    // }
    // return counter


    let counter =0
    let i=0, j=1, k=2
    while(k<nums.length){
        let diff1 = nums[j]-nums[i]
        let diff2 = nums[k]-nums[j]
        if(diff1===diff && diff2===diff){
            counter++
            i++
            j++
            k++
        }else if(diff1<diff){
            j++
        }else if(diff1>diff){
            i++
        }else if(diff2<diff){
            k++
        }else if(diff2>diff){
            j++
        }
        if (i === j) j++;
        if (j === k) k++;
    }
    return counter
};