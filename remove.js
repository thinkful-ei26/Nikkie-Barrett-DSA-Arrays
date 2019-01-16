'use strict';

// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

function removeVowel(strToBeUpdated, stuffToRemove){
  let str = '';

  for(let i = 0; i <strToBeUpdated.length; i++){
    if(!stuffToRemove.includes(strToBeUpdated[i])){
      str+=strToBeUpdated[i];
    }
  }
  return str; 
}

console.log(removeVowel("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));