'use strict';

const Array = require('./array');

function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(3);
  arr.push(3);
  arr.push(3);
  arr.push(3);
  arr.push(3);
  arr.push(3);
  arr.push(3);
  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
}

main();