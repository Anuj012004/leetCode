// 1925. Count Square Sum Triples
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

 

// Example 1:

// Input: n = 5
// Output: 2
// Explanation: The square triples are (3,4,5) and (4,3,5).
// Example 2:

// Input: n = 10
// Output: 4
// Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).
 

// Constraints:

// 1 <= n <= 250

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let counter= 0
    let arr = []
    for(let i=1; i<=n ;i++){
       arr.push(i)
    }
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            for(let k=j+1; k<arr.length ; k++){
                if((arr[i]**2 + arr[j]**2) == arr[k]**2){
                    counter++
                }
            }
        }
    }
    return counter*2
};