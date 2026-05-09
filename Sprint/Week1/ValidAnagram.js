// Given two strings s and t, return true if t is an of s, and false otherwise.

//     Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

function frequency(charrArr) {
  let freqMap = {};
  for (let c of charrArr) {
    if (freqMap[c]) {
      freqMap[c] = freqMap[c] + 1;
    } else {
      freqMap[c] = 1;
    }
  }
  return freqMap;
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const freqS = frequency(s);
  const freqT = frequency(t);

  for (const key in freqS) {
    if (freqS[key] !== freqT[key]) {
      return false;
    }
  }

  return true;
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
