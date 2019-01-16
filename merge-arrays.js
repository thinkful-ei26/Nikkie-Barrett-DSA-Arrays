'use strict';

// Imagine you have two arrays which have already been sorted. 
// Write an algorithm to merge the two arrays into a single array, 
// which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// 

function merger(arr1, arr2) {
  let mergedArr = [];
  let length;

  if (arr1.length > arr2.length) {
    length = arr1.length;
  } else {
    length = arr2.length;
  }

  for (let i = 0; i < length; i++) {
    if (arr1[i] < arr2[i]) {
      mergedArr = [...mergedArr, arr1[i], arr2[i]];
    } else {
      mergedArr = [...mergedArr, arr2[i], arr1[i]];
    }  

  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] < arr2[j]) {
  //       mergedArr = [...mergedArr, arr1[i], arr2[j]];
  //     } else {
  //       mergedArr = [...mergedArr, arr2[j], arr1[i]];
  //     }
  //   }
  }

  return mergedArr;
}

console.log(merger([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
