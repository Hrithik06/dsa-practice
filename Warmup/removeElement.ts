function removeElement(nums: number[], val: number): number {
    let x = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i]
            x = x + 1
        }
    }
    return x
};

// console.log(removeElement([3, 1, 3, 4, 3, 3, 3, 7], 3));
function moveZeroes(nums: number[]): void {
    // if (nums.length <= 1) return
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i]
            if (i > x) {
                nums[i] = 0
            }
            x = x + 1

        }
    }
    console.log(nums)
};
function applyOperations(nums: number[]): number[] {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = 2 * nums[i]
            nums[i + 1] = 0
        }

        if (nums[i] !== 0) {
            nums[x] = nums[i]
            if (i > x) {
                nums[i] = 0
            }
            x = x + 1
        }
    }
    return nums
};

function reverseString(s: string[]): void {
    const len = s.length
    const halfLength = Math.floor(len / 2)
    for (let i = 0; i < halfLength; i++) {
        let temp = s[i]
        s[i] = s[len - 1 - i]
        s[len - 1 - i] = temp
    }
};
reverseString(["h", "e", "l", "l", "o"])
// applyOperations([1, 2, 2, 1, 1, 0])
// applyOperations([0, 1])
// applyOperations([847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272])
// moveZeroes([0, 1])
// moveZeroes([0, 3])

// moveZeroes([0, 1, 0, 3, 12])
// // → [1, 3, 12, 0, 0]

// moveZeroes([1, 0, 2, 0, 3])
// // → [1, 2, 3, 0, 0]

// moveZeroes([1, 2, 3, 4])
// // → [1, 2, 3, 4]

// moveZeroes([0, 0, 0])
// // → [0, 0, 0]

// moveZeroes([0])
// // → [0]

// moveZeroes([5])
// // → [5]

// moveZeroes([1, 2, 3, 0, 0])
// // → [1, 2, 3, 0, 0]

// moveZeroes([0, 0, 1, 2, 3])
// // → [1, 2, 3, 0, 0]

// moveZeroes([0, 1, 0, 2, 0, 3])
// // → [1, 2, 3, 0, 0, 0]

// moveZeroes([0, -1, 0, -3, 5])
// // → [-1, -3, 5, 0, 0]

// moveZeroes([100000, 0, 0, 999999])
// // → [100000, 999999, 0, 0]

// moveZeroes([])
// → []



