// 1399. Count Largest Group
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer n.

// We need to group the numbers from 1 to n according to the sum of its digits. 
// For example, the numbers 14 and 5 belong to the same group, whereas 13 and 3 belong to different groups.

// Return the number of groups that have the largest size, i.e. the maximum number of elements.

 

// Example 1:

// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
// There are 4 groups with largest size.
// Example 2:

// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.
 

// Constraints:

// 1 <= n <= 104

//------------------------------------------------

// have an integer -> n -> always positive, cannot be zero, n contain an integer always no string, or char

// return the number of groups that have the largest size -> groups can be formed as per the sum of their digits -> from 1 to n

//example 

//n=11
//groups are -> [1,10],[2,11],[3],4,5,6,7,8,9
//output would be 2

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
 const map = new Map()
    let maxSize = 0

    for (let i = 1; i <= n; i++) {
        let num = i
        let sum = 0

        // digit sum
        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }

        const newSize = (map.get(sum) || 0) + 1
        map.set(sum, newSize)

        // track max group size while building
        if (newSize > maxSize) {
            maxSize = newSize
        }
    }

    // count groups having maxSize
    let count = 0
    for (let size of map.values()) {
        if (size === maxSize) {
            count++
        }
    }

    return count
};

//test cases

console.log(countLargestGroup(11),'2')
console.log(countLargestGroup(2),'2')