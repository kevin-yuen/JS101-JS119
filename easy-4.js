// Searching 101
// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears
// among the first five numbers.

// Examples:
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

const search = () => {
  const READLINE_SYNC = require("readline-sync");
  let i = 1;
  let userNumber;
  let order = 0;
  let numbers = [];

  do {
    if (i === 1) {
      order = String(i).concat("st");
    } else if (i === 2) {
      order = String(i).concat("nd");
    } else if (i === 3) {
      order = String(i).concat("rd");
    } else if (i === 4 || i === 5) {
      order = String(i).concat("th");
    } else {
      order = "last";
    }

    userNumber = Number(READLINE_SYNC.question(`Enter the ${order} number: `));

    if (Number.isInteger(userNumber)) {
      numbers.push(userNumber);
      i++;
    }
  } while (i <= 6 || !Number.isInteger(userNumber));

  numbers.splice(numbers.length - 1, 1);

  return `The number ${userNumber} ${
    numbers.includes(userNumber) ? "appears" : "does not appear"
  } in ${numbers.join(",")}.`;
};

//console.log(search());

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Palindromic Strings (Part 1)
// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads
// the same forwards and backwards. For this problem, the case matters and all characters matter.

// Examples:
// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");

  return str === reversed ? true : false;
};

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("Madam")); // false (case matters)
// console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
// console.log(isPalindrome("356653")); // true

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Palindromic Strings (Part 2)
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time,
// however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may
// simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:
// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false

const isRealPalindrome = (str) => {
  const RE = /[^a-z0-9]/g;

  return isPalindrome(str.toLowerCase().replace(RE, ""));
};

// console.log(isRealPalindrome("madam")); // true
// console.log(isRealPalindrome("Madam")); // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
// console.log(isRealPalindrome("356653")); // true
// console.log(isRealPalindrome("356a653")); // true
// console.log(isRealPalindrome("123ab321")); // false

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Palindromic Numbers
// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads
// the same forwards and backwards.

// Examples:
// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

// const isPalindromicNumber = (number) => {
//   const reversed = String(number).split("").reverse().join("");

//   return Number(reversed) === number ? true : false;
// };

// console.log(isPalindromicNumber(34543)); // true
// console.log(isPalindromicNumber(123210)); // false
// console.log(isPalindromicNumber(22)); // true
// console.log(isPalindromicNumber(5)); // true

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Running Totals
// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's
// value being the running total from the original array.

// Examples:
// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

const runningTotal = (arr) => {
  let newArr = [];

  arr.forEach((element) => {
    newArr.length === 0
      ? newArr.push(element)
      : newArr.push(element + newArr[newArr.length - 1]);
  });
  return newArr;
};

// console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
// console.log(runningTotal([3])); // [3]
// console.log(runningTotal([])); // []

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the
//number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}

const wordSizes_bk = (str) => {
  let lenCount = {};
  const WORDS = str.length > 0 ? str.split(" ") : "";

  if (WORDS.length > 0) {
    WORDS.forEach((word) => {
      const length = String(word.length);

      !lenCount.hasOwnProperty(length)
        ? (lenCount = { ...lenCount, [length]: 1 })
        : (lenCount[length] += 1);
    });
  }

  return lenCount;
};

// console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes("")); // {}

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Letter Counter (Part 2)
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the
// word size of "it's" is 3, not 4.

// Examples:
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}

const wordSizes = (str) => {
  let lenCount = {};
  const WORDS = str.length > 0 ? str.split(" ") : "";
  const RE = /[^a-zA-Z]/g;

  if (WORDS.length > 0) {
    WORDS.forEach((word) => {
      const length = String(word.replace(RE, "").length);

      !lenCount.hasOwnProperty(length)
        ? (lenCount = { ...lenCount, [length]: 1 })
        : (lenCount[length] += 1);
    });
  }

  return lenCount;
};

// console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes("")); // {}

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Letter Swap
// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word.
// You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or
// repeated spaces.

// Examples:
// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

const swap = (str) => {
  const WORDS = str.split(" ");
  let newStr = "";

  WORDS.forEach((word) => {
    const WORD_SPLIT = word.split("");
    const LAST_LETTER = WORD_SPLIT[WORD_SPLIT.length - 1];
    WORD_SPLIT[WORD_SPLIT.length - 1] = WORD_SPLIT[0];
    WORD_SPLIT[0] = LAST_LETTER;

    newStr = newStr + WORD_SPLIT.join("") + " ";
  });

  return newStr.trimEnd();
};

// console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
// console.log(swap("Abcde")); // "ebcdA"
// console.log(swap("a")); // "a"

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Convert a String to a Number
// The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer.
// The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always
// be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that
// does the same thing.

// Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the
// methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will
// be numeric.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function
// should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

// Examples
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

const stringToInteger = (strNumber) => +strNumber;

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Convert a String to a Signed Number
// In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise,
// you're going to extend that function to work with signed numbers.

// Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a
// leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your
// function should return a negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may,
// however, use the stringToInteger() function from the previous lesson.

// Examples
// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

const stringToSignedInteger = (strNumber) => +strNumber;

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Convert a Number to a String
// In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this
// exercise and the next, you're going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of
// that integer.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString,
// or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing
// and manipulating the number.

// Examples:
// integerToString(4321);        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// integerToString(1234567890);  // "1234567890"

const integerToString_bk = (integer) => {
  let numbers = [];

  do {
    numbers.push(integer % 10);
    integer = Math.floor(integer / 10);
  } while (integer >= 1);

  return numbers.reverse().join("");
};

// console.log(integerToString(4321)); // "4321"
// console.log(integerToString(0)); // "0"
// console.log(integerToString(5000)); // "5000"
// console.log(integerToString(1234567890)); // "1234567890"

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Convert a Signed Number to a String
// In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going
// to extend that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, such as String() and
// Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// Examples
// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");

const signedIntegerToString = (integer) => {
  let numbers = [];
  let sign = "";

  if (Math.sign(integer) === 1) {
    sign = "+";
  } else if (Math.sign(integer) === -1) {
    integer = integer / -1;
    sign = "-";
  }

  do {
    numbers.push(integer % 10);
    integer = Math.floor(integer / 10);
  } while (integer >= 1);

  return sign.concat(numbers.reverse().join(""));
};

//console.log(signedIntegerToString(4321) === "+4321");
//console.log(signedIntegerToString(-123) === "-123");
//console.log(signedIntegerToString(0) === "0");

// console.log(5 == "5");
// console.log("5" == 5);
