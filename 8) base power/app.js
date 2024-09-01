
// find base power using for iteration
// function findPower(base, power) {
//     let result = 1;
//     for (let i = 1; i <= power; i++) {
//         result = result * base;
//     }
//     return result;
// }
// console.log(findPower(2, 5));

// find base power using recursive function
function findPower(base, power) {
    if (power === 0) {
        return 1
    }
    if (power === 1) {
        return base
    }
    return base * findPower(base, power - 1)
}
console.log(findPower(2, 4));






