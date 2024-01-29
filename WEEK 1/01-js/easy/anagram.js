/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let l1 = str1.toLowerCase().split('');
  let l2 = str2.toLowerCase().split('');
  
  return ((l1.sort().every((char, i)=>{
    
    return (char == l2.sort()[i])
  })))
}


module.exports = isAnagram;
