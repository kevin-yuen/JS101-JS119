// Isn't it Odd?
// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if
// the number's absolute value is odd. You may assume that the argument is a valid integer value.

// Examples:
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

const isOdd = (number) => {
  return Math.abs(number) % 2 !== 0 ? true : false;
};

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Odd Numbers
// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

const printOdd = () => {
  let i = 1;

  while (i <= 99) {
    if (i % 2 !== 0) {
      console.log(`${i}\n`);
    }

    i++;
  }
};

//printOdd();

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Even Numbers
// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

const printEven = () => {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
      console.log(`${i}\n`);
    }
  }
};

//printEven();

// >>>>>>>>>>>>>>>>>>>>>>>>>

// How big is the room?
// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to
// the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

// Example:
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

const convertRoomSize = () => {
  const READLINE_SYNC = require("readline-sync");
  const LENGTH = Number(
    READLINE_SYNC.question("Enter the length of the room in meters:\n")
  );
  const WIDTH = Number(
    READLINE_SYNC.question("Enter the width of the room in meters:\n")
  );
  const METERS = LENGTH * WIDTH;
  const FEET = METERS * 10.7639;

  console.log(
    `The area of the room is ${METERS.toFixed(2)} square meters (${FEET.toFixed(
      2
    )} square feet).`
  );
};

//convertRoomSize();

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Tip Calculator
// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// Example:
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

const calculateTip = () => {
  const READLINE_SYNC = require("readline-sync");
  const BILL = Number(READLINE_SYNC.question("What is the bill? "));
  const TIP_PERCENTAGE = Number(
    READLINE_SYNC.question("What is the tip percentage? ")
  );

  const TIP_DOLLAR = BILL * (TIP_PERCENTAGE / 100);
  const TOTAL_DOLLAR = BILL + TIP_DOLLAR;

  console.log(`\nThe tip is $${TIP_DOLLAR.toFixed(2)}`);
  console.log(`The total is $${TOTAL_DOLLAR.toFixed(2)}`);
};

//calculateTip();

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Sum or Product of Consecutive Integers
// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum
// or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

// ******* Pseduocode *******
// IF user input is greater than 0 and not NaN
// prompt the second question
// ELS IF user input is equal to 0 or not greater than 0
// prompt the first question again
// ELSE IF user input is NaN
// prompt the first question again
// WHEN the second question is prompted
// IF user input is "s" or "p"
// calculate and prompt the output based on the input
// ELSE IF user input is not "s" or "p"
// prompt the second question again

const calculateSumOrProduct = () => {
  const READLINE_SYNC = require("readline-sync");
  const RE = /^[sp]$/;
  let userNumber = 0;
  let userCalculateMethod;
  let output;

  do {
    userNumber = Number(
      READLINE_SYNC.question("Please enter an integer greater than 0: ")
    );

    if (userNumber > 0 && !isNaN(userNumber)) {
      do {
        userCalculateMethod = READLINE_SYNC.question(
          'Enter "s" to compute the sum, or "p" to compute the product. '
        );

        if (userCalculateMethod === "s") {
          output = 0;
          for (let i = 1; i <= userNumber; i++) {
            output += i;
          }
        } else if (userCalculateMethod === "p") {
          output = 1;
          for (let i = 1; i <= userNumber; i++) {
            output *= i;
          }
        }
      } while (userCalculateMethod.search(RE) < 0);
    }
  } while (userNumber <= 0 || isNaN(userNumber));

  console.log(
    `\nThe ${
      userCalculateMethod === "s" ? "sum" : "product"
    } of the integers between 1 and ${userNumber} is ${output}.`
  );
};

//calculateSumOrProduct();

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Short Long Short
// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the
// result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that
// the strings are of different lengths.

// Examples:
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

const shortLongShort = (string1, string2) => {
  const [STRING1_LENGTH, STRING2_LENGTH] = [string1.length, string2.length];
  const OUTPUT =
    STRING1_LENGTH < STRING2_LENGTH
      ? string1 + string2 + string1
      : string2 + string1 + string2;

  console.log(OUTPUT);
};

// shortLongShort("abc", "defgh"); // "abcdefghabc"
// shortLongShort("abcde", "fgh"); // "fghabcdefgh"
// shortLongShort("", "xyz"); // "xyz"

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Leap Years (Part 1)
// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the
// year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also
// evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input
// and returns true if the year is a leap year, or false if it is not a leap year.

// Examples:
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// ******* Logic *******
// divisible by 4 |	divisible by 100 | divisible by 400 | leap year?
// Y	          |         Y	     |         Y	    |     Y
// Y	          |         N	     |         -	    |     Y
// N	          |         -        |         -	    |     N
// Y	          |         Y	     |         N	    |     N

const isLeapYear_bk = (year) => {
  if (year % 4 === 0 && year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }

  return false;
};

// console.log(isLeapYear(2016)); // true
// console.log(isLeapYear(2015)); // false
// console.log(isLeapYear(2100)); // false
// console.log(isLeapYear(2400)); // true
// console.log(isLeapYear(240000)); // true
// console.log(isLeapYear(240001)); // false
// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(1752)); // true
// console.log(isLeapYear(1700)); // false
// console.log(isLeapYear(1)); // false
// console.log(isLeapYear(100)); // false
// console.log(isLeapYear(400)); // true

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Leap Years (Part 2)
// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian
// Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

// Examples:
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true

const isLeapYear = (year) => {
  if (year >= 1752) {
    if (year % 4 === 0 && year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    }

    return false;
  } else {
    return year % 4 === 0 ? true : false;
  }
};

// console.log(isLeapYear(2016));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(2100));
// console.log(isLeapYear(2400));
// console.log(isLeapYear(240000));
// console.log(isLeapYear(240001));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(1752));
// console.log(isLeapYear(1700));
// console.log(isLeapYear(1));
// console.log(isLeapYear(100));
// console.log(isLeapYear(400));

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or
// 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples:
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

const multisum = (number) => {
  let multi3Or5 = [];

  for (let i = 1; i <= number; i++) {
    i % 3 === 0 || i % 5 === 0 ? multi3Or5.push(i) : "";
  }

  console.log(
    multi3Or5.reduce((accum, current) => {
      return accum + current;
    }, 0)
  );
};

// multisum(3); // 3
// multisum(5); // 8
// multisum(10); // 33
// multisum(1000); // 234168

// >>>>>>>>>>>>>>>>>>>>>>>>>

// UTF-16 String Value
// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string
// value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine
// the UTF-16 value of a character.)

// Examples:
// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

const utf16Value = (str) => {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += str[i].charCodeAt();
  }

  return sum;
};

// console.log(utf16Value("Four score")); // 984
// console.log(utf16Value("Launch School")); // 1251
// console.log(utf16Value("a")); // 97
// console.log(utf16Value("")); // 0
