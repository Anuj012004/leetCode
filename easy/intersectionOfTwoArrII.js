// 350. Intersection of Two Arrays II
// Easy
// Topics
// premium lock icon
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


//--------------------------
//two arrays -> nums1 and nums2, both arrays cannot be empty, contain non negative integers, not sorted, contain elements only no strings, 
// char or symbols

//return intersection of both elements 
//intersection elements means common elements in both arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // let result = []
    // for(let i=0; i<nums1.length; i++){
    //     for(let j=0; j<nums2.length; j++){
    //         if(nums1[i]==nums2[j]){
    //             result.push(nums1[i])
    //             nums2.splice(j,1)
    //             break
    //         }
    //     }
    // }
    // return result

    //-----------------------

    //create a map of nums 1
    //store the values in it by freq
    //use a loop on nums2 
    //if nums2[i] existed in map push it 
    //descrese its freq by 1 
    //return the res

    let res =[]
    let map = new Map()
    for(let val of nums1){
        map.set(val, (map.get(val)||0)+1)
    }
    for(let i=0; i<nums2.length; i++){
        if(map.has(nums2[i]) && map.get(nums2[i])>0){
            res.push(nums2[i])
            map.set(nums2[i], (map.get(nums2[i])-1))
        }
    }
    return res

};

//test cases

console.log(intersect([1,2,2,1],[2,3,2]),'[2,2]')
console.log(intersect([4,9,5],[9,7,4,5]),'[4,9,5]')

