let cl = console.log;

let nums = [80, 20, 5, -30, 70, 8, -90, 7, 40, 1, 8, -4, 0];


// ***********************************************************************
let maxNum = nums[0];

// using iteration
const findMaxNum = (arr) => {
    arr.forEach(ele => {
        if (maxNum < ele) {
            maxNum = ele
        }
    })
    return maxNum
}
cl('Maximum Number:', findMaxNum(nums))


// using method
const findMaxNum2 = (arr => Math.max(...arr))

cl(findMaxNum2(nums))

// **************************************

let nesArr = [
    [111, 222, 333],
    [444, [555, 666]],
    [777, 888, 999, [2, 17]]
]

let newArr = nesArr.flat(Infinity);
cl(Math.max(...newArr))

// **************************************************************
/*
@input:==> let nesArr = [
                [111,222,333],
                [444,[555,666]],
                [777,888,999,[2,17]]
            ]
@output:==> [111,666,999]
*/
let nesArr3 = [
    [111, 222, 333],
    [444, 555, 666],
    [777, 888, 999, 2, 17]
]

let largestNum = [];

const findMaxNum3 = (arr) => {
    arr.forEach(ele => {
        let result3 = Math.max(...ele)
        largestNum.push(result3);
    })
    return largestNum
}

cl(findMaxNum3(nesArr3))








