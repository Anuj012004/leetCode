// 3941. Password Strength
// Solved
// Medium
// premium lock icon
// Companies
// Hint
// You are given a string password.

// The strength of the password is calculated based on the following rules:

// 1 point for each distinct lowercase letter ('a' to 'z').
// 2 points for each distinct uppercase letter ('A' to 'Z').
// 3 points for each distinct digit ('0' to '9').
// 5 points for each distinct special character from the set "!@#$".
// Each character contributes at most once, even if it appears multiple times.

// Return an integer denoting the strength of the password.

 

// Example 1:

// Input: password = "aA1!"

// Output: 11

// Explanation:

// The distinct characters are 'a', 'A', '1' and '!'.
// Thus, the strength = 1 + 2 + 3 + 5 = 11.
// Example 2:

// Input: password = "bbB11#"

// Output: 11

// Explanation:

// The distinct characters are 'b', 'B', '1' and '#'.
// Thus, the strength = 1 + 2 + 3 + 5 = 11.​​​​​​​
 

// Constraints:

// 1 <= password.length <= 105
// password consists of lowercase and uppercase English letters, digits, and special characters from "!@#$".


/**
 * @param {string} password
 * @return {number}
 */
var passwordStrength = function(password) {
    let score = 0
    let set = new Set()
    for(let ch of password){
        if(set.has(ch)) continue
        set.add(ch)
        if(ch>='a' && ch<='z'){
            score+=1
        }else if(ch>='A' && ch<='Z'){
            score+=2
        }else if(ch>='0' && ch<='9'){
            score+=3
        }else{
            score+=5
        }
    }
    return score
};