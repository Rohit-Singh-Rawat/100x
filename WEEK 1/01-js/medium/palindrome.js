/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = str.toLowerCase().match(/[a-zA-Z]/g);
  if (!newStr){
    newStr = ['']
  }
  let reversedStr = [...newStr].reverse()
  return newStr.join('') === reversedStr.join('');
}
module.exports = isPalindrome;
