// 20. Valid Parentheses
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); 
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false; 
            }
        }
    }

    return stack.length === 0;
};

       // string -> consist of specific char, cannot be empty 
        //bool -> true or false
        //true -> open bracekets are closed as well
        // closed in correct order
        //every clsoed brackets has open  bracket

        // if all these conditions are statisfied -> true else false

        //create a stack
        //loop on char of s 
        // if char are (,{,[ push to the stack
        // else grab the top element from the stack if char of s !== top with all those
        //three conditions return false
        //return the stack.length===0


        let stack = []
        for(let char of s){
            if(char==='(' || char==='{' || char === '[' ){
                stack.push(char)
            }else{
                let top = stack.pop()
                if(
                    (char===')' && '('!==top) || (char==='}' && '{'!==top) || (char===']' && '['!==top)) {
                    return false
                }
            }

        }
        return stack.length===0