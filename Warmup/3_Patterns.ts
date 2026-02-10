let n = 4;
const squarePattern = () => {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row = row + "*";
        }
        console.log(row);
    }
}
// squarePattern()

const leftAlignedPyramid = () => {
    for (let i = 0; i < n; i++) {
        let row = "";
        // for (let j = 0; j < i + 1; j++) {
        for (let j = 0; j <= i; j++) {
            row = row + "*";
        }
        console.log(row);
    }
}
// leftAlignedPyramid()


const numberLeftAlignedPyramid = (n = 5) => {
    function numberCrownPattern() {
        for (let i = 0; i < n; i++) {
            let row = ""
            for (let j = 0; j < (2 * n); j++) {
                let num = j + 1;
                while (j > n) {
                    num--
                }
                row = row + num
            }
            console.log(row)
        }
    }
    numberCrownPattern()
    // for (let i = 1; i <= n; i++) {
    //     let row = "";
    //     for (let j = 1; j <= i; j++) {
    //         row = row + j;
    //     }
    //     console.log(row)
    // }
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + (j + 1);
        }
        console.log(row)
    }
}
// numberLeftAlignedPyramid()

function repeatingNumberPyramid(n = 5) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + (i + 1);
        }
        console.log(row)
    }
}
// repeatingNumberPyramid()

function reverseNumberPyramid(n = 5) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - i; j++) {
            row = row + (j + 1);
        }
        console.log(row)
    }
}
// reverseNumberPyramid()

function reverseStarPyramid(n = 5) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - i; j++) {
            row = row + "*";
        }
        console.log(row)
    }
}
// reverseStarPyramid()

function rightAlignedPyramid(n = 5) {
    for (let i = 0; i < 5; i++) {
        let row = "";
        //adding empty spaces or dots
        for (let j = 0; j < n - (i + 1); j++) {
            row = row + " ";
        }
        //adding stars
        for (let k = 0; k < i + 1; k++) {
            row = row + "*";
        }
        console.log(row)
    }
}
// rightAlignedPyramid()

function alternatingZeroOneTriangleUsingMod(n = 6) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + ((j % 2 !== 0) ? 0 : 1); //if j is odd 0 else 1
            // row = row + ((j % 2 === 0) ? 1 : 0); //if j is even 1 else 0
        }
        console.log(row)
    }
}

// alternatingZeroOneTriangleUsingMod()

function alternatingZeroOneTriangleUsingToggle(n = 6) {
    for (let i = 0; i < n; i++) {
        let row = "";
        let toggle = 1;
        for (let j = 0; j <= i; j++) {
            row = row + toggle;
            if (toggle === 1) { toggle = 0 }
            else { toggle = 1 }
        }
        console.log(row)
    }
}

// alternatingZeroOneTriangleUsingToggle()

let toggle = 1;
function alternatingContinuousToggle(n = 6) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + toggle;
            if (toggle === 1) { toggle = 0 }
            else { toggle = 1 }
        }
        console.log(row)
    }
}
// alternatingContinuousToggle()


function starPyramid(n = 5) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = n - i - 1; j > 0; j--) {//spaces
            row = row + " "
        }
        for (let k = 0; k < (2 * i + 1); k++) {//stars
            row = row + "*"
        }
        console.log(row)
    }
}
// starPyramid()

function invertedStarPyramid(n = 5) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i; j++) {//spaces
            row = row + " "
        }
        for (let k = 0; k < (2 * n - 2 * i - 1); k++) {//stars
            row = row + "*"
        }
        console.log(row)
    }
}
// invertedStarPyramid()

function diamondStarPattern() {
    starPyramid()
    invertedStarPyramid()
}
// diamondStarPattern()


function halfDiamondStarPattern(n = 5) {
    for (let i = 0; i < (2 * n - 1); i++) {
        let row = ""
        // if (i < n) {
        //     for (let j = 0; j < i + 1; j++) {
        //         row = row + "*"
        //     }
        // }
        // else {
        //     for (let j = (2 * n - i - 1); j > 0; j--) {
        //         row = row + "*"
        //     }
        // }
        let stars = i + 1;
        if (i >= n) { stars = 2 * n - i - 1 }

        for (let j = 0; j < stars; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}
// halfDiamondStarPattern()

function numberCrownPattern(n = 4) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i + 1; j++) {
            row = row + (j + 1)
        }
        for (let k = i + 1; k < n; k++) {
            row = row + "_"
        }
        for (let k = n; k < ((2 * n) - i - 1); k++) {
            row = row + "_"
        }
        for (let q = ((2 * n) - i - 1); q < (2 * n); q++) {
            row = row + (2 * n - q)
        }
        console.log(row)
    }
}
// numberCrownPattern(5)

function numberCrownPattern2(n = 4) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i + 1; j++) {
            row = row + (j + 1)
        }
        for (let k = i + 1; k < ((2 * n) - i - 1); k++) {
            row = row + "_"
        }
        for (let q = ((2 * n) - i - 1); q < (2 * n); q++) {
            row = row + (2 * n - q)
        }
        console.log(row)
    }
}
// numberCrownPattern2(5)
function numberCrownPattern3(n = 4) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i + 1; j++) {
            row = row + (j + 1)
        }
        for (let k = 0; k < 2 * (n - i) - 2; k++) {
            row = row + "_"
        }
        for (let q = ((2 * n) - i - 1); q < (2 * n); q++) {
            row = row + (2 * n - q)
        }
        console.log(row)
    }
}
// numberCrownPattern3(5)

function numberCrownPattern4(n = 4) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i + 1; j++) {
            row = row + (j + 1)
        }
        for (let k = 0; k < 2 * (n - i - 1); k++) {
            row = row + "_"
        }
        for (let q = i + 1; q >= 1; q--) {
            row = row + q
        }
        console.log(row)
    }
}
// numberCrownPattern4(5)

function increasingNumberTrianglePattern(n = 6) {
    let num = 1
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i + 1; j++) {
            row = row + num + " "
            num++
        } console.log(row)
    }
}
// increasingNumberTrianglePattern()

function increasingLetterTrianglePattern(n = 5) {

    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i + 1; j++) {
            row = row + String.fromCharCode(65 + j) + " "
        }
        console.log(row)
    }
}
// increasingLetterTrianglePattern()

function reverseLetterTrianglePattern(n = 5) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n - i; j++) {
            row = row + String.fromCharCode(65 + j) + " "
        }
        console.log(row)
    }
}
// reverseLetterTrianglePattern()
function alphaRampPattern() {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i + 1; j++) {
            row = row + String.fromCharCode(65 + i) + " "
        }
        console.log(row)
    }
}
// alphaRampPattern()

function alphaHillPattern(n = 4) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = n - i - 1; j > 0; j--) {
            row = row + " "
        }
        for (let k = 0; k < i + 1; k++) {
            row = row + String.fromCharCode(65 + k)
        }
        for (let p = i; p > 0; p--) {
            row = row + String.fromCharCode(65 + p - 1)
        }
        console.log(row)
    }
}
// alphaHillPattern()

function alphaTrianglePattern(n = 5) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i + 1; j++) {
            row = row + String.fromCharCode(65 + n - i - 1 + j)
        }
        console.log(row)
    }
}
// alphaTrianglePattern()

function symmetricVoidPattern(n = 3) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = n - i; j > 0; j--) {
            row = row + "*"
        }
        for (let k = 0; k < i; k++) {
            row = row + "_"
        }
        console.log(row)
    }
}
// symmetricVoidPattern()

function symmetricVoidPattern2(n = 3) {
    for (let i = 0; i < 2 * n; i++) {
        let row = ""
        for (let j = 0; j < 2 * n; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}
// symmetricVoidPattern2()


function hollowRectanglePattern(n = 6) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n; j++) {
            if (i > 0 && i < n - 1 && j > 0 && j < n - 1) { row = row + " " }
            else { row = row + "*" }
        }
        console.log(row)
    }
}
// hollowRectanglePattern()

function hollowRectanglePattern2(n = 6) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                row = row + "*"
            }
            else {
                row = row + " "
            }
        }
        console.log(row)
    }
}
hollowRectanglePattern2()
/*
Rows of increasing length, but the stream is 0, 0, 1, 1, 0, 0, 1, 1,... (pairs).
Drill 1 — stream 0, 0, 1, 1, 0, 0, 1, 1,... (pairs), slice into rows of length 1..6

Global stream: 0 0 1 1 0 0 1 1 0 0 ...
Rows:
0
0 1
1 0 0
1 1 0 0
1 1 0 0 1
1 0 0 1 1 0
*/

// Rows that continue with 1, 2, 3, 1, 2, 3,...repeated — slice into rows of length 1, 2, 3...

// A triangle where each row starts with the row index i and increments(local rule) — contrast to one that uses global state.

// Print rows by slicing the Fibonacci sequence into increasing row lengths.

// Pattern where each row’s start toggles(row 0 starts 1, row1 starts 0, row2 starts 1, ...) but each row resets(local toggle per row).Compare this with global continuation.

// Derive the nth row directly from a formula(no inner loop) when possible; then implement both loop and formula solutions.