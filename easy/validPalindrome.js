// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
//  it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
//palindrome is a value which reads backward and forward same,
// have string -> contain numerical, special characters, non - aplhanumeric character,
// have to return true || false based on the palindrome , need to keep only alphanumeric characters,
//  also need to convert the uppercase to lowercase,

//exmaple : s = "hey Bob : Bye" -> "heybobbye" not a palindrome return false
// s = "A sos sa" -> "assosa" -> return true coz its a palindrome 

function isPalindrome(s){
//keep aplhanumeric characters and convert it to the lowercase
 let S = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() // everything is get replaced by '' but not a-zA-Z0-9
 //check the palindrome
 return S === S.split('').reverse().join('')
}

//test cases

console.log(isPalindrome("A man, a plan, a canal: Panama"),'should true')
console.log(isPalindrome( "race a car"), "should return false")
console.log(isPalindrome("S%O#S"), 'should be true')