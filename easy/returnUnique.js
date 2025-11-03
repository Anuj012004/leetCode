// Description:
// Given an array of numbers, return a new array containing only the unique numbers.
let arrayNum = [1,2,3,4,4,5,5,7,8,8,2,4,5,8,]

let uniqueNum = [ ...new Set(arrayNum)]
 
console.log(uniqueNum)



// Description:
// Given a string, return a new string that contains only unique characters (in the order they appear).

// Example:

// Input: "banana"
// Output: "ban"

let givenstring = 'banana'

let chArray = givenstring.split('')

let unique = new Set(chArray)

let res = [...unique].join('')
console.log(res)