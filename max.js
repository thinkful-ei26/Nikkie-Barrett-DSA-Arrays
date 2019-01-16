'use strict';
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

//nested for loop?

//the i in the outer for loop is the index we're currently on checking the rest against, the j will move through the array

//keep a max to compare and to add to (might need two variables)

function max(arr){
  let max = 0;
  let prevtotal = 0;

  for(let i =0; i < arr.length; i++){
    prevtotal=arr[i];
    console.log('prevtotal in outerloop is', prevtotal);
    for(let j=i; j < arr.length; j++){
      if(i !== j){
        prevtotal= arr[j] + prevtotal;
        console.log('prevtotal in inner loop', prevtotal);
        if(prevtotal >  max){
          max = prevtotal;
          console.log('new max is', max);
        }
      }
    }
    console.log('about to jump into outer loop again, max is', max);
  }

  return max;
}
// Input: [4,6,-3,5,-2,1]
// Output: 12

console.log(max([4,6,-3,5,-2,1]));