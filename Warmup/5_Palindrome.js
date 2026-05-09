function isPalindrome(n) {
  if (n < 0) {
    return false;
  } //redundant
  let nCopy = n;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  // if (nCopy === rev) { return true }
  // else { return false }
  return nCopy === rev;
}
console.log(isPalindrome(121));
