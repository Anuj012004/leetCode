// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

//palindrome is a number when we reverse it is equal to the original number. it reads same forward and backward.
// x -> interger, can be -ve and -ve , 
// i have to return the bool, true || false, if palindrome return true else false
//example => 1221 -> true , 12-> false, -11211-> false


function isPalindrome(num){
    //negative numbers cannot be palindrome
    //if(num<0) return false
    // num to string 
    //let numToStr = num.toString()
    //reverse the number and compare it with 
    //return numToStr === numToStr.split('').reverse().join('')

    //lets solve this palindrome number with optimal approach without converting it to the string 

    //if number is negative, totally divided by 10 means modulus ===0 but the number shouldn't be 0, it gives false right.
    if(num<0 || (num%10===0 && num!==0)) return false

    let rev = 0
    while(num>rev){
        rev = rev*10 + num%10
        num = Math.floor(num/10)
    }
    //for even x===rev and for odd x===Math.floor(rev/10)
    return num===rev || num===Math.floor(rev/10)

}




//test cases
console.log(isPalindrome(1221),'true')
console.log(isPalindrome(12),'false')
console.log(isPalindrome(-11211),'false')