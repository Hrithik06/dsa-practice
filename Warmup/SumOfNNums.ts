function sumN(n: number): any {
    // your solution here
    if (n < 0 || !Number.isFinite(n) || Array.isArray(n) || (typeof n === "object") || !Number.isInteger(n)) { return false }
    return n + sumN(n - 1)
}