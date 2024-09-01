
let str = "i love javascript";
// reverseWords = ['javascript','love', 'i']

function reverse(str) {
    let words = [];
    let currentWord = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (currentWord.length > 0) {
                words.push(currentWord);
                currentWord = "";
            }
        } else {
            currentWord += str[i]
        }
    }
    if (currentWord.length > 0) {
        words.push(currentWord)
    }

    let reverseWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reverseWords.push(words[i])
    }
    return reverseWords;
}
console.log(reverse(str));

// titlecase of string
let info = 'i love javascript';
let result = ''
info.toLowerCase().split(" ").forEach(ele => {
    result += ele[0].toUpperCase() + ele.slice(1) + ' ';
})
console.log(result);





