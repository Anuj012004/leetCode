// Longest Consecutive Sequence
// Medium
// Company Tags
// Hints
// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. 
// The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:

// Input: nums = [0,3,2,5,4,6,1,1]

// Output: 7
// Constraints:

// 0 <= nums.length <= 1000
// -10^9 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    // let set = new Set(nums);
    // let longest = 0;

    // for (let num of set) {

    //     if (!set.has(num - 1)) {

    //         let currentNum = num;
    //         let count = 1;

    //         while (set.has(currentNum + 1)) {
    //             currentNum++;
    //             count++;
    //         }

    //         longest = Math.max(longest, count);
    //     }
    // }

    // return longest;
     // arr -> nums -> integers, it can be an empty as well, no special symbols
        // number -> seq of elements that can be formed
        // if no seq found return 0


        // create a Set of nums (no duplication)
        // create a  variale that store the lenght of the longest sequence
        //use loop on the elements of set to find the current num, count = 1
        // current num is number which do not have the prev number 
        //use loop to find the number of seq elements
        // store the longest length in the var
        //return the length


        let unique = new Set(nums)
        let longestSequence = 0
        for(let num of unique){
            if(!unique.has(num-1)){
                let currentNum = num
                let currentSequence = 1

                while(unique.has(currentNum + 1)){
                    currentNum +=1
                    currentSequence +=1
                }
                longestSequence = Math.max(longestSequence,currentSequence)
            }
        }
        return longestSequence
};


//test cases

console.log(longestConsecutive([2,20,4,10,3,4,5]),'output should be 4')
console.log(longestConsecutive([0,3,2,5,4,6,1,1]),'output should be 7')