// 2283. Check if Number Has Equal Digit Count and Digit Value
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

 

// Example 1:

// Input: num = "1210"
// Output: true
// Explanation:
// num[0] = '1'. The digit 0 occurs once in num.
// num[1] = '2'. The digit 1 occurs twice in num.
// num[2] = '1'. The digit 2 occurs once in num.
// num[3] = '0'. The digit 3 occurs zero times in num.
// The condition holds true for every index in "1210", so return true.
// Example 2:

// Input: num = "030"
// Output: false
// Explanation:
// num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
// num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
// num[2] = '0'. The digit 2 occurs zero times in num.
// The indices 0 and 1 both violate the condition, so return false.
 

// Constraints:

// n == num.length
// 1 <= n <= 10
// num consists of digits.


// have a string consist numbers
//return true/false 
//if our indexed number i appears times of value -> true if not false

//example

//n = '1210'
// at index 0 => val=1  => 0 appears once => true
// at index 1 => val =2 =? 1 appears twice => true
//at index 2 => val=1 => 2 appears twice => true
//at index 3 => val =>0 => 3 appers 0th time => true

//let n = '001'

//at index 0 => val=0 -> zero appears 0th time //false


/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
      //split the string into an array
    let array = num.split('')
    //use outer loop to grab the number
    for(let i=0; i<array.length; i++){
        let num = array[i]
        //set counter for number
        let counter =0
        // inner loop to count the numbers 
        for(let j=0; j<array.length; j++){
            if(array[j]===String(i)){
                counter++
            }
            
        }
        // if counter not equal to value
        if(counter !== Number(num)){
            return false
        }
    }
    //return true
  return true
};

//test case

