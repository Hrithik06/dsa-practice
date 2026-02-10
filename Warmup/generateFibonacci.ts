function generateFibonacci(n: any) {
    if (!Number.isInteger(n) || n <= 0) {
        return []
    }
    if (n == 1) {
        return [0]
    }
    let fibArr = new Array(n)
    fibArr[0] = 0;
    fibArr[1] = 1;

    for (let i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr

}


function generateFibonacci2(n: any) {
    if (!Number.isInteger(n) || n <= 0) {
        return []
    }
    if (n == 1) {
        return [0]
    }
    let fibArr = [0, 1]

    for (let i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr

}

function generateFibonacci3(n: any) {
    if (!Number.isInteger(n) || n <= 0) {
        return []
    }
    if (n == 1) {
        return [0]
    }
    let fibArr = [0, 1]

    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    }
    return fibArr

}


console.log(generateFibonacci(8))