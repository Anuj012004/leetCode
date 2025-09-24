// 771. Jewels and Stones
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// have a string jewels -> repre the types of the stones that are jewels and have stone repre the stones i have, case sensitive, only english letters

//have to return the numbers of stones that are jewels as well

//example :
//let jewels = "AAvvAAbb" and stones ="aabb" => it should return 2
// let jewels = "aaBBvvCCdd", stones="aaBB" => it should return 4

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
 let uniqueJewels = [...new Set(jewels)];
    let counter = 0;

    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < uniqueJewels.length; j++) {
            if (stones[i] === uniqueJewels[j]) {
                counter++;
                break;
            }
        }
    }

    return counter;
};

//Test Cases

console.log(numJewelsInStones(("AAvvAAbb"),("aabb")),'it should return 2')
console.log(numJewelsInStones(("aaBBvvCCDD"),("aaBB")),'it should return 4')