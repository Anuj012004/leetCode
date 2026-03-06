// 739. Daily Temperatures
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers temperatures represents the daily temperatures, 
// return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100


// array -> integers -> array always contain atleast 1 temperature, cannot empty, temperatures are between 30 and 100 both included
//array always contain numbers, 

//return an array -> answer -> where we have to get the number of days to get warmer temp from current temp, if no warmer day exist
//from the current day return day as 0

//example : [30,60,90]
//output would be -> [1,1,0]

//[30,35,30,80,90,100]
// output -> [1,2,1,1,1,0]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    //array answer to store the number of days to get the warmer day
    //loop to grab the temperature of current day (outer loop)
    //set found = false
    //loop to see/ check the warmer day from the current temerature 
    //if currentTemp<nexTemp push counter to the answers
    //return the answers

    let answer = []
    for(let i=0;i<temperatures.length;i++){
        let found = false
        for(let j=i+1;j<temperatures.length;j++){
            if(temperatures[j]>temperatures[i]){
                found = true
                answer.push(j-i)
                break
            }
        }
        if(!found){
            answer.push(0)
        }
    }
    return answer
};


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
        let res = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let prev = stack.pop();
            res[prev] = i - prev;
        }

        stack.push(i);
    }

    return res;
};

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        //create a variable to store the res
        //outer loop to get the current temperature
        //inner loop to iterate over the temperatures
        //set var found false
        //if current temp<nexTemp push j-1 in the res, found to be true and break the code 
        //if notfound then push zero to the res
        //return the res

        let res = []
        for(let i=0; i<temperatures.length; i++){
            let found = false
            for(let j=i+1; j<temperatures.length; j++){
                if(temperatures[i]<temperatures[j]){
                    found = true
                    res.push(j-i)
                    break
                }
               
            }
             if(!found){
                    res.push(0)}
        }
        return res
    }
}


//test cases

console.log(dailyTemperatures([30,60,90]),'output should be [1,1,0]')
console.log(dailyTemperatures([30,35,30,80,90,100]),'output should be [1,2,1,1,1,0]')