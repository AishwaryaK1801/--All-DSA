// recursive function

// print 5 to 1 using recursive funcn
const printNum = (num) => {
    if (num === 1) {
        console.log(1);
        return;
    }
    console.log(num);

    printNum(num - 1)
}
printNum(5)


// find addition of num 10 to 1 using recursive funcn
let add = 0;
const addNum = (num) => {
    if (num === 1) {
        add++;
        console.log(add);
        return;
    }
    add = num + add;
    addNum(num - 1)
}
addNum(5);

// find addition of num 10 to 1
console.log((10 * (10 + 1)) / 2);


