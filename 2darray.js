'use strict';

// Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

//Nested loop. Send back a new array, push into it depending on if 0s are found 

function twoD(arr){
  let newArr = [];
  for(let i=0; i < arr.length; i++){
    for(let j=0; j< arr.length; j++){
      if(arr[i][j]===0){
        //make entire row and column 0x
      }
    }
  }
}

console.log(twoD([[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]));