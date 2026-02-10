let x = -893837;
let count = 0;
function countDigit(x: number) {
    if (x === 0) return 1;
    x = Math.abs(x)
    while (x > 0) {
        x = Math.floor(x / 10);
        count++;
    }
    return count;
}
console.log(countDigit(x))
