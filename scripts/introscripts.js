/* 1. max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));


/* 2. max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}
console.log("Expected output of maxOfThree(20,10, 30) is 30  " + myFunctionTest(30, maxOfThree(20,10, 30)));


/* 3. Write a function isVowel() that takes a characte */
function isVowel(s) {
    const vowels = ["a", "e", "i", "o", "u"];
    for (e of vowels) {
        if (e == s.toLowerCase()) {
            return true;
        }
    }
    return false
}
console.log("Expected output of isVowel('A') is true  " + myFunctionTest(true, isVowel("A")));


/* 4. Sum all the numbers in an array of numbers */
function sum(arr) {
    let sum = 0;
    for (e of arr) {
        sum += e;
    }
    return sum;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));


/* 4. Multiply all the numbers in an array of numbers */
function multiply(arr) {
    let sum = 1;
    for (e of arr) {
        sum *= e;
    }
    return sum;
}
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));


/* 5. reverse() reverse */
function reverse(string) {
    let result = ""
    for (let i = string.length - 1; i >= 0 ; i--) {
        result += string[i];
    }
    return result;
}
console.log("Expected output of reverse(jag testar) is ratset gaj " + myFunctionTest("ratset gaj", reverse("jag testar")));


/* 6. findLongestWord() of array of words */
function findLongestWord(words) {
    if (words.length == 0) {
        return null;
    }
    let longest = words[0];
    for (let word of words) {
        if (longest.length < word.length) {
            longest = word;
        }
    }
    return longest;
}
console.log("Expected output of findLongestWord(Archaic, Zephyr, Plethora, Degust) is Plethora  " + myFunctionTest("Plethora", findLongestWord(["Archaic", "Zephyr", "Plethora", "Degust"])));


/* 7. filterLongWords() of array of words greater than length i*/
function filterLongWords(words, i) {
    return words.filter(w => w.length > i) 
}
console.log("Expected output of filterLongWords([Archaic, Zephyr, Plethora, Degust], 6) is Archaic,Plethora " + myFunctionWithArrayTest(["Archaic", "Plethora"], filterLongWords(["Archaic", "Zephyr", "Plethora", "Degust"], 6)));


/* 8. modify https://jsfiddle.net/keithlevi/e6kqvx2f/9/  */
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})

document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem === 3;});

document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);


/* runs test to see if expected argument is === to value returned by function to test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* runs test to see if expected argument is equal to array value returned by function to test argument */
function myFunctionWithArrayTest(expected, found) {
    
    if (expected.toString() === found.toString()) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

