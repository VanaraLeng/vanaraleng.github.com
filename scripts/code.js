function sum(arr) {
    return arr.reduce((e, acc) => e + acc)
}

function multiply(arr) {
    return arr.reduce((e, acc) => e * acc, 1);
}

function reverse(string) {
    return string.split('').reduce((reversed, character) => character + reversed, '')
}

function filterLongWords(words, i) {
    return words.filter(w => w.length > i);
}