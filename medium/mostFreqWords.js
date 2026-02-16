// 692. Top K Frequent Words
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 

// Constraints:

// 1 <= words.length <= 500
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// k is in the range [1, The number of unique words[i]]

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    //create a freq map using Map
    let map = new Map()
    for(let word of words){
        map.set(word,(map.get(word)||0)+1)
    }
    let arr = [...map]
    arr.sort((a,b)=>{
        if(b[1] !== a[1]) return b[1] - a[1]
    return a[0].localeCompare(b[0])
    })
    let res = []
    for(let i=0; i<k ; i++){
        res.push(arr[i][0])
    }
    return res
};