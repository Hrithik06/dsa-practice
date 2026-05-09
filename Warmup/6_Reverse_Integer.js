const reverse = function (n) {
  let rev = 0;
  let nCopy = Math.abs(n);

  while (nCopy > 0) {
    rev = rev * 10 + (nCopy % 10);
    nCopy = Math.floor(nCopy / 10);
  }
  return n < 0 ? -rev : rev;
};

console.log(reverse(1234));
console.log(reverse(-8563));
