// fibonacci series

// using recursive function find nth fib number
// function fib(n) {
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(8));

// using for iteration
const fibonacci = (num) => {
    let a = 0;
    console.log(a);
    let b = 1;
    console.log(b);
    let result = 0;
    for (let i = 2; i < num; i++) {
        result = a + b;
        a = b;
        b = result;
        console.log(result);
    }
}
fibonacci(8)


// find factorial using recursive function
const findFactorial = (num) => {
    if (num === 0) {
        return 1;
    }
    if (num < 0) {
        return ('Enter +ve number');
    }
    if (num === 1) {
        return 1;
    }
    return num * findFactorial(num - 1)
}
console.log(findFactorial(5));

// find multiplication of all array elements
let numArr = [10, 20, 30, 40, 50];
// multiplication using for iteration
// let mul = 1
// for (let i = 0; i < numArr.length; i++) {
//     mul = mul * numArr[i]
// }
// console.log(mul);

// multiplication using recursive function
const findMultiplication = (arr, i = 0) => {
    if (i === numArr.length) {
        return 1
    }
    return arr[i] * findMultiplication(arr, i + 1)
}
console.log(findMultiplication(numArr));



