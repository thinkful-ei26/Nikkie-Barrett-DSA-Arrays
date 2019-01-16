'use strict';

// Given two strings, str1 and str2, write a program that checks if str2 
// is a rotation of str1.

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true

// get all possible valid rotations for str1, push into arr, check 
// arr against str2, return true/false 

function rotation(str1, str2) {
  let rotations = [];
  let result;

  for (let i = 0; i < str1.length - 1; i++) {
    str1 = str1.slice(1) + str1[0];
    rotations.push(str1);
  }
  
  result = rotations.find((r) => {
    return r === str2;
  });

  return result ? true : false;
}

console.log(rotation('amazon', 'azonam'));