/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let list = str.toLowerCase().split('');
    let vowelCount = 0;
  let vowel = ['a', 'e', 'i', 'o', 'u'];
    list.forEach(element => {
      vowelCount = (vowel.includes(element))? vowelCount+1: vowelCount;

    });

  return vowelCount;
}
module.exports = countVowels;