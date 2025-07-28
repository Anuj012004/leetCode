// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.


// given two binary strings a and b, consist of 0 and 1
// i have to return the sum as binary 

function addBinary(a,b){
    //convert the stirng to Bigint and get the sum
    let sum = BigInt("0b" + a) + BigInt("0b" + b)
    // return the sum in binary
    return (sum).toString(2)
}

//test cases

console.log(addBinary(11,1),'100')
console.log(addBinary(1010,1011),'10101')