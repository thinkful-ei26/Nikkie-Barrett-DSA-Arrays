'use strict';
// Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

function products(arr){
  let product= 1;
  arr.forEach(i=>product*=i);
  let productsArr = arr.map(i=>product/i);
  return productsArr;
}

console.log(products([1, 3, 9, 4]));