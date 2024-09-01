let cl = console.log;


// reverse the string

let string1 = 'i love javascript'
let string2 = 'i love html'

const rev1 = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    cl(result)
}

// const rev2 = (str)=>{
//     let result = str.split('').reverse().join('');
//     cl(result)
// }
const rev2 = (str => str.split('').reverse().join(''))
rev1(string1)
cl(rev2(string2))
let arr = [1, 3, 5, 7, 9, 13, 15];
for (let i = 1; i <= 15; i += 2) {
    if (!arr.includes(i)) {
        console.log(i);
    }
}

