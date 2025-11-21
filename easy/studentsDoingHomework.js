// 1450. Number of Students Doing Homework at a Given Time
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime. 
// More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

 

// Example 1:

// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
// Example 2:

// Input: startTime = [4], endTime = [4], queryTime = 4
// Output: 1
// Explanation: The only student was doing their homework at the queryTime.
 

// Constraints:

// startTime.length == endTime.length
// 1 <= startTime.length <= 100
// 1 <= startTime[i] <= endTime[i] <= 1000
// 1 <= queryTime <= 1000


// two arrays -> startTime and endTime, length of both arr is equal, always contains numbers, non-negative numbers, non-zero as well,
//cannot be empty, 
//one integer -> queryTime -> non-zero, non-negative

//return the number of student who are doing their homework in queryTime or numbers of students queryTime lays between their startTime 
//and endTime

//example 
// let startTime = [1,2,5]  and endTime = [4,5,6] and queryTime = 2
//output -> 2

//let startTime = [2] , endTime = [2] and queryTime = 1

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    //set the counter to count the number of students
    //use loop to grab the start and ending time
    //check the query number is in between or equals to the startTime and EndTime if yes counter++
    //to check it startTime <= queryTime && endingTime >= queryTime
    //return the counter

    let numberOfStudents = 0
    for(let i=0; i<startTime.length; i++)//i.e length of both arrays startTime and endTime is equal
    {
        if(startTime[i]<=queryTime && endTime[i]>=queryTime){
            numberOfStudents++
        }
    }  
    return numberOfStudents

};

//Test Cases

console.log(busyStudent([1,2,5],[4,5,6],3),'it should equal to 2')
console.log(busyStudent([2],[2],2),'it should be 1')

