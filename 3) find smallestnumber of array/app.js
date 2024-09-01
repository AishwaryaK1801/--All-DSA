let cl = console.log;

let nums = [80, 20, 5, -30, 70, 8, -90, 7, 40, 1, 8, -4, 0];


// ***********************************************************************
let minNum = nums[0];

// using iteration
const findMinNum = (arr) => {
    arr.forEach(ele => {
        if (minNum > ele) {
            minNum = ele
        }
    })
    return minNum
}
cl('Minimum Number:', findMinNum(nums))


// using method
const findMinNum2 = (arr => Math.min(...arr))

cl(findMinNum2(nums))

// **************************************

let nesArr = [
    [111, 222, 333],
    [444, [555, 666]],
    [777, 888, 999, [2, 17]]
]

let newArr = nesArr.flat(Infinity);
cl(Math.min(...newArr))

// **************************************************************

let nesArr3 = [
    [111, 222, 333],
    [444, 555, 666],
    [777, 888, 999, 2, 17]
]

let smallestNum = [];

const findMinNum3 = (arr) => {
    arr.forEach(ele => {
        let result3 = Math.min(...ele)
        smallestNum.push(result3);
    })
    return smallestNum
}

cl(findMinNum3(nesArr3))








