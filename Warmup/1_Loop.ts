// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

let arr = [20, 34, 23, 3, 43, 355]

function searchArr(array: number[], searchTxt: number) {
    let idx = -1;
    for (let i = 0; i < array.length; i++) {
        if (searchTxt === array[i]) {
            idx = i;
            break;
        }
    }
    return idx;
}
// console.log(searchArr(arr, 3))

// Write a function that returns the number of negative numbers in an array
const countNegativeNumbers = (array: number[]) => {
    let cnt = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            cnt++;
        }
    }
    return cnt;
}

let arr2 = [-20, 34, 23, 3, -43, 52]
// console.log(countNegativeNumbers(arr2))

// Write a function that returns the largest number in an array

const findLargestNum = (array: number[]) => {
    if (array.length === 0) return undefined; // early return for empty array
    let largest = array[0];
    // let largest = -Infinity; //another way
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

// console.log(findLargestNum([4, 3]))

// Write a function that returns the smallest number in an array

const findSmallestNum = (array: number[]) => {
    if (array.length === 0) return undefined; // early return for empty array
    // let smallest = array[0];
    let smallest = Infinity; //another way
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

// console.log(findSmallestNum(arr2))

// Write a function that returns the second largest number in an array
const findSecondLargestNum = (array: number[]) => {
    if (array.length === 0) return undefined; // early return for empty array
    if (array.length < 2) {
        return null
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = array[i]
        } else if (array[i] > secondLargest) {
            secondLargest = array[i]
        }
        // if (array[i] > secondLargest && array[i] < firstLargest) {
        //     secondLargest = array[i]
        // }
    }
    return secondLargest;
}

// console.log(findSecondLargestNum([4, 9, 0, 2, 8, 7, 1]))
console.log(findSecondLargestNum([]))
