// Welcome Stranger
// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined
// with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the
// appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

// Example:
// console.log(
//     greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
//   );
//   // logs Hello, John Q Doe! Nice to have a Master Plumber around.

const greetings = (personName, personInfo) => {
  const FULL_NAME = personName.join(" ");
  const PERSON_INFO = personInfo.title + " " + personInfo.occupation;

  return `Hello, ${FULL_NAME}! Nice to have a ${PERSON_INFO} around.`;
};

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Greeting a user
// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer
// yells back to the user.

// Examples
// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

const greeting = () => {
  const READLINE_SYNC = require("readline-sync");
  const NAME = READLINE_SYNC.question("What is your name? ");
  const GREETING_MSG = `Hello ${NAME}.`;

  return NAME.slice(-1) !== "!"
    ? GREETING_MSG
    : GREETING_MSG.replace("!", "")
        .toUpperCase()
        .concat(" WHY ARE WE SCREAMING?");
};

//console.log(greeting());

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Multiplying Two Numbers
// Create a function that takes two arguments, multiplies them together, and returns the result.

// Example:
// console.log(multiply(5, 3) === 15); // logs true

const multiply = (num1, num2) => {
  return num1 * num2;
};

//console.log(multiply(5, 3) === 15); // logs true

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Squaring an Argument
// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its
// argument (the square is the result of multiplying a number by itself).

// Example:
// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

const square = (num) => {
  return multiply(num, num);
};

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Arithmetic Integer
// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on
// those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

// Example
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

const calculate = () => {
  const READLINE_SYNC = require("readline-sync");
  const FIRST_NUMBER = Number(
    READLINE_SYNC.question("==> Enter the first number:\n")
  );
  const SECOND_NUMBER = Number(
    READLINE_SYNC.question("==> Enter the second number:\n")
  );
  const OPERATIONS = [
    "addition",
    "subtraction",
    "product",
    "quotient",
    "remainder",
    "power",
  ];
  let output;
  let symbol;

  OPERATIONS.forEach((operation) => {
    switch (operation) {
      case "addition":
        output = FIRST_NUMBER + SECOND_NUMBER;
        symbol = "+";
        break;
      case "subtraction":
        output = FIRST_NUMBER - SECOND_NUMBER;
        symbol = "-";
        break;
      case "product":
        output = FIRST_NUMBER * SECOND_NUMBER;
        symbol = "*";
        break;
      case "quotient":
        output = (FIRST_NUMBER / SECOND_NUMBER).toFixed(0);
        symbol = "/";
        break;
      case "remainder":
        output = FIRST_NUMBER % SECOND_NUMBER;
        symbol = "%";
        break;
      case "power":
        output = FIRST_NUMBER ** SECOND_NUMBER;
        symbol = "**";
        break;
    }

    console.log(
      "==> " +
        `${FIRST_NUMBER}` +
        " " +
        `${symbol}` +
        " " +
        `${SECOND_NUMBER}` +
        " = " +
        `${output}`
    );
  });
};

//calculate();

// >>>>>>>>>>>>>>>>>>>>>>>>>

// The End Is Near But Not Here
// Write a function that returns the next to last word in the String passed to
// it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

// Examples:
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

const penultimate = (str) => {
  let secondLastWord = str.split(" ");
  secondLastWord = secondLastWord
    .slice(secondLastWord.length - 2, secondLastWord.length - 1)
    .toString();

  return secondLastWord;
};

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Exclusive Or
// The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are
// falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is
// falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its
// arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as
// returned by || and &&.

// Examples:
// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true

const xor_bk = (num1, num2) => {
  if (Boolean(num1) === true && Boolean(num2) === true) {
    return false;
  } else if (Boolean(num1) === false && Boolean(num2) === false) {
    return false;
  } else if (Boolean(num1) !== true || Boolean(num2) === true) {
    return true;
  } else if (Boolean(num1) === true || Boolean(num2) !== true) {
    return true;
  }
};

const xor = (num1, num2) => {
  let result = (num1 || num2) && !(num1 && num2);

  return result ? true : false;
};

// console.log(xor(5, 0) === true); // true
// console.log(xor(false, true) === true); // true
// console.log(xor(1, 1) === false); // true
// console.log(xor(true, true) === false); // true
// console.log(xor(false, false) === false); // true

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Odd Lists
// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The
// values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// Examples:
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

const oddities = (arr) => {
  return arr
    .map((element) => {
      if ((arr.indexOf(element) + 1) % 2 !== 0) return element;
    })
    .filter((element) => element !== undefined);
};

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// >>>>>>>>>>>>>>>>>>>>>>>>>

// How Old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between
// 20 and 120 (inclusive).

// Example Output:
// Teddy is 69 years old!

const age = () => {
  const RANDOM_AGE = Math.floor(Math.random() * (120 - 20 + 1) + 20);

  return `Teddy is ${RANDOM_AGE} years old!`;
};

// console.log(age());
// console.log(age());
// console.log(age());
// console.log(age());
// console.log(age());
// console.log(age());

// >>>>>>>>>>>>>>>>>>>>>>>>>

// When Will I Retire?
// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const retirement = () => {
  const READLINE_SYNC = require("readline-sync");
  let age = 0;
  let retire_age = 0;

  do {
    age = Number(READLINE_SYNC.question("What is your age? "));

    if (age > 0 && Number.isInteger(age)) {
      do {
        retire_age = Number(
          READLINE_SYNC.question("At what age would you like to retire? ")
        );
      } while (retire_age < age || !Number.isInteger(retire_age));
    }
  } while (age <= 0 || !Number.isInteger(age));

  const YEARS_LEFT = retire_age - age;
  const CURRENT_YEAR = new Date().getFullYear();

  console.log(
    `\nIt's ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR + YEARS_LEFT}.`
  );
  console.log(`You have only ${YEARS_LEFT} years of work to go!`);
};

//retirement();

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Get Middle Character
// Write a function that takes a non-empty string argument and returns the middle
// character(s) of the string. If the string has an odd length, you should return
// exactly one character. If the string has an even length, you should return exactly
// two characters.

// Examples:
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// ******* Pseduocode *******
// Find the length of the string
// Check if the length of the string is odd or even
// IF the length is odd
// THEN divide the length by 2
// AND return the index using the division result
// IF the length is even
// THEN divide the length by 2
// AND return the index from Index Position of division result - 1 to Index Position of division result

const centerOf = (str) => {
  const LENGTH = str.length;
  const MIDDLE = LENGTH / 2;

  return LENGTH % 2 !== 0
    ? str.substring(MIDDLE, MIDDLE + 1)
    : str.substring(MIDDLE - 1, MIDDLE + 1);
};

// console.log(centerOf("I Love JavaScript"));
// console.log(centerOf("Launch School"));
// console.log(centerOf("Launch"));
// console.log(centerOf("Launchschool"));
// console.log(centerOf("x"));

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number.
// If the argument is a negative number, return it as-is.

// Examples:
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

const negative = (number) => {
  return number >= 0 ? number / -1 : number;
};

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
