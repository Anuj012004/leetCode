// 557. Reverse Words in a String III
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse the order of characters in each word within a sentence
//  while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.


//string -> s -> lowerCase and uppercase, only english letters, cannot be empty, no leading or trailing spaces, 
//reverse the words -> keep the order and whitespaces as it

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // let arrS = s.split(' ')
    // let res = []
    // for(let i=0; i<arrS.length;i++){
    //   res.push(  arrS[i].split('').reverse().join(''))
    // }
    // return res.join(' ').toString()

    //optimal and readable

    return s.split(' ').map((x)=>x.split('').reverse().join('')).join(' ')
};


//Test cases

console.log(reverseWords("Let's take LeetCode contest"),"----->s'teL ekat edoCteeL tsetnoc")
console.log(reverseWords("Mr Ding"),"------->rM gniD")