
// Code
// Testcase
// Testcase
// Test Result
// 1394. Find Lucky Integer in an Array
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
// Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:

// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.
 

// Constraints:

// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500


//we have an array -> arr-> contains integers,non-negative, cannot be zero, no string, char , symbols etc
//return the lucky numbers, integer, lucky number -> whose freq equal to its val i.e -> [1,2,2,1] -> 2, have to return the biggest one
//if there is no lucky number return -1

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    //create a object
    let count = {}
    //store the val with their freq using loop
    for(let i=0; i<arr.length; i++){
        count[arr[i]] =( count[arr[i]] || 0) +1
    }
    let luckyNum = -1
    for(let x in count){
        let num = Number(x)
        if(num == count[x]){
            luckyNum = Math.max(luckyNum, num)
        }
    }
    return luckyNum

};


//TEST CASES

console.log(findLucky([2,2,2,3,3]),'return -1')
console.log(findLucky([1,2,2,1]),'return 2')