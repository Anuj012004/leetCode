// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
//  The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

// Constraints:

// 0 <= x <= 231 - 1


// integer -> non - negative, always  positive
// have to return the sqrt of the number to the nearest integer, can't use any built i function or operator
// x = 16 -> 4 
// x = 8 -> 2

function sqrt(x){
     if(x < 2) return x
   let k = 1
   while(k*k <= x){
    k++
   }
   return k-1
}

//test cases 

console.log(sqrt(16),'is returned and it should return 4')
console.log(sqrt(8),'is returned and it should return 2')