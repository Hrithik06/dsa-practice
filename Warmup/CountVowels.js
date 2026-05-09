function countVowels(str) {
  // Your implementation
  if (str.length == 0) {
    return 0;
  } //O(1)
  str = str.trim().toUpperCase(); //trim O(n)//toUpperCase O(n)
  let cnt = 0;
  str
    .trim()
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      //forEach O(n)
      if (letter.match(/A|E|I|O|U/)) {
        cnt++;
      } //regex match O(1)
    });
  return cnt;
}

//For the purpose of user debugging.
console.log(countVowels("AEIOU"));

function countVowelsBetterSoln(str) {
  //no need to trim
  // Your implementation
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let cnt = 0;
  for (let char of str.toLowerCase()) {
    //for O(n)//toLowerCase O(n)
    if (vowels.has(char)) {
      //has lookup O(1)
      cnt++;
    }
  }
  return cnt;
}
console.log(countVowelsBetterSoln(""));
