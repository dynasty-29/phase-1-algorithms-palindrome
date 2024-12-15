function isPalindrome(word) {
  // Write your algorithm here
  const finalWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reverseWord = finalWord.split('').reverse().join('');

  return reverseWord === finalWord;
}

console.log(isPalindrome("abba"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("a"));
console.log(isPalindrome("robot"));
console.log(isPalindrome("ab"));
/* 
  Add your pseudocode here
  the function should take a string which in this case its a word
  to avoid case issues we convert it to lowercase and ensure we don't have special charactes
  now we reverse the word 
  if the original word and reverssed word read the same (hence use of strict equality) we should get true
  otherwise false

*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
