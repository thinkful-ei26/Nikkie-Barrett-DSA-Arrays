'use strict';
// Imagine you have an array of numbers. 
// Write an algorithm to remove all numbers less than five from the array. 
// Don't use array's built-in .filter method here; write the algorithm 
// from scratch.

function filter(arr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      filteredArr.push(arr[i]);
    }
  }
  console.log(filteredArr);
  return filteredArr;
}

filter([1,2,3,4,5,6,7,8,9]);
