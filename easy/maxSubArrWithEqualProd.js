// 3411. Maximum Subarray With Equal Products
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of positive integers nums.

// An array arr is called product equivalent if prod(arr) == lcm(arr) * gcd(arr), where:

// prod(arr) is the product of all elements of arr.
// gcd(arr) is the GCD of all elements of arr.
// lcm(arr) is the LCM of all elements of arr.
// Return the length of the longest product equivalent subarray of nums.

 

// Example 1:

// Input: nums = [1,2,1,2,1,1,1]

// Output: 5

// Explanation: 

// The longest product equivalent subarray is [1, 2, 1, 1, 1], where prod([1, 2, 1, 1, 1]) = 2, gcd([1, 2, 1, 1, 1]) = 1, and lcm([1, 2, 1, 1, 1]) = 2.

// Example 2:

// Input: nums = [2,3,4,5,6]

// Output: 3

// Explanation: 

// The longest product equivalent subarray is [3, 4, 5].

// Example 3:

// Input: nums = [1,2,3,1,4,5,1]

// Output: 5

 

// Constraints:

// 2 <= nums.length <= 100
// 1 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
        let n = nums.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        let product = 1;
        let gcdVal = 0;
        let lcm = 1;

        for (let j = i; j < n; j++) {
            product *= nums[j];

            gcdVal = gcd(gcdVal, nums[j]);

            lcm = (lcm * nums[j]) / gcd(lcm, nums[j]);

            if (product === lcm * gcdVal) {
                ans = Math.max(ans, j - i + 1);
            }
        }
    }

    return ans;
};

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};