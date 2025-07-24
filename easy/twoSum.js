// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 
// (arr , target), arr-> intergers, not empty arr, contain both negative and positive numbers
//  target - > integer, can be negative as well positive

// i have to return the indices of numbers whose sum equal target, numbers cannot be same, it can be in any order, can be returned in an array, 

//example :( [1,2,3],4) => [0,2]

function returnIndicies(arr,target){

    //loop to grab the first number
    for(let i=0; i<arr.length; i++){
        //loop to grab the second number
        for(let k=0; k<arr.length; k++){
            //compare the sum with target and the numbers cannot be same
            if(arr[i]+arr[k]===target && i!==k){
                return [i,k]
            }
        }
    }
   
}

//test cases

console.log(returnIndicies([1,2,3],4),'[0,2]')
console.log(returnIndicies([1,2,3,4],6),'[1,3]')
console.log(returnIndicies([1,2,3,4,5,6],10),'[3,5]')