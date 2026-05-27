// 3121. Count the Number of Special Characters II
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string word. A letter c is called special if it appears both in lowercase and uppercase in word, and every lowercase occurrence of c appears before the first uppercase occurrence of c.

// Return the number of special letters in word.

 

// Example 1:

// Input: word = "aaAbcBC"

// Output: 3

// Explanation:

// The special characters are 'a', 'b', and 'c'.

// Example 2:

// Input: word = "abc"

// Output: 0

// Explanation:

// There are no special characters in word.

// Example 3:

// Input: word = "AbBCab"

// Output: 0

// Explanation:

// There are no special characters in word.

 

// Constraints:

// 1 <= word.length <= 2 * 105
// word consists of only lowercase and uppercase English letters.

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let count = 0
    let set = new Set()
    for(let i=0; i<word.length; i++){
        if(word[i]===word[i].toUpperCase()){
            continue
        }
        let lower = word[i]
        if(set.has(lower)){
            continue
        }
        let upper = lower.toUpperCase()
        let lowerIndex = word.lastIndexOf(lower)
        let upperIndex = word.indexOf(upper)
        if(upperIndex!==-1){
            if(lowerIndex<upperIndex){
                count++
            }
           set.add(lower)
        }
        
    }
    return count
};


/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let count = 0;

    for (let c = 0; c < 26; c++) {

        let ch = String.fromCharCode(97 + c); // 'a' to 'z'

        let lower = ch;
        let upper = ch.toUpperCase();

        let lastLower = word.lastIndexOf(lower);
        let firstUpper = word.indexOf(upper);

        // must exist in both cases
        if (lastLower !== -1 && firstUpper !== -1) {

            if (lastLower < firstUpper) {
                count++;
            }
        }
    }

    return count;
};