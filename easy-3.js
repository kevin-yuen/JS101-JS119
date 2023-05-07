// ddaaiillyy ddoouubbllee
// Write a function that takes a string argument and returns a new string that contains the value of the original string with
// all consecutive duplicate characters collapsed into a single character.

// Examples:
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

const crunch = (str) => {
  let collapsedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== collapsedStr[collapsedStr.length - 1]) {
      collapsedStr += str[i];
    }
  }

  return collapsedStr;
};

// console.log(crunch("ddaaiillyy ddoouubbllee"));
// console.log(crunch("4444abcabccba"));
// console.log(crunch("ggggggggggggggg"));
// console.log(crunch("a"));
// console.log(crunch(""));

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Bannerizer
// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:
// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// will log on the console:
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

const logInBox = (str) => {
  let output = "";
  const LENGTH = str.length + 2;

  for (let i = 0; i < 5; i++) {
    if (i === 0 || i === 4) {
      output += "+" + "-".repeat(LENGTH) + "+\n";
    } else if (i === 1 || i === 3) {
      output += "|" + " ".repeat(LENGTH) + "|\n";
    } else {
      output += "| " + str + " |\n";
    }
  }

  return output;
};

// console.log(logInBox("To boldly go where no one has gone before."));
// console.log(logInBox(""));

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Stringy Strings
// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always
// starting with a '1'. The length of the string should match the given integer.

// Examples:
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

const stringy = (number) => {
  const ODD_EVEN = Math.floor(number / 2);
  const TEMP_OUTPUT =
    number % 2 === 0 ? "10".repeat(ODD_EVEN) : "10".repeat(ODD_EVEN + 1);

  if (number > 1 && number % 2 !== 0) {
    return TEMP_OUTPUT.slice(0, TEMP_OUTPUT.length - 1);
  }

  return TEMP_OUTPUT;
};

// console.log(stringy(6));
// console.log(stringy(9));
// console.log(stringy(4));
// console.log(stringy(7));
// console.log(stringy(0));
// console.log(stringy(1));

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Right Triangles
// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars.
// The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle,
//  the other end at the upper-right.

// Examples:
// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// ******* Logic *******
// IF * is less than n
// concat with " "

const triangle = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i < n) {
      console.log(" ".repeat(n - i).concat("*".repeat(i)) + "\n");
    } else {
      console.log("*".repeat(n));
    }
  }
};

//triangle(9);

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Madlibs
// Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a
// list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story
// that you create.

// Example:
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

const madlib = () => {
  const READLINE_SYNC = require("readline-sync");
  const RE = /^[aeiou]/;
  let userWord = "";
  let words = {
    noun: null,
    verb: null,
    adjective: null,
    adverb: null,
  };

  const prompt = (wordType) => {
    do {
      userWord = READLINE_SYNC.question(
        `Enter ${wordType.search(RE) > -1 ? "an" : "a"} ${wordType}: `
      );

      if (userWord.trim() !== "") {
        words[wordType] = userWord;
      }
    } while (userWord.trim() === "");
  };

  for (const type of Object.keys(words)) {
    prompt(type);
  }

  console.log(
    `Do you ${words.verb} your ${words.adjective} ${words.noun} ${words.adverb}? That's hilarious!`
  );
  console.log(
    `The ${words.adjective} ${words.noun} ${words.verb}s ${words.adverb} over the lazy ${words.noun}.`
  );
  console.log(
    `The ${words.noun} ${words.adverb} ${words.verb}s up ${words.adjective} Joe's turtle.`
  );
};

//madlib();

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Double Doubles
// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For
//example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number;
//otherwise, return the double number as-is.

// Examples:
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// ******* Pseduocode *******
// IF len of the number is odd
// THEN double the number
// AND return it
// ELSE IF len of the number is even
// THEN divide the len of the number by 2
// AND get the left side by slicing it by (0, divisionResult)
// AND get the right side by slicing it by (divisionResult, len of the number)
// AND compare both
// AND IF same, return as-is
// ELSE, double it

const twice = (number) => {
  const LEN = String(number).length;

  if (Number(LEN) % 2 !== 0) {
    return number * 2;
  } else {
    const MIDDLE = Number(LEN) / 2;

    return String(number).slice(0, MIDDLE) ===
      String(number).slice(MIDDLE, String(number).length)
      ? number
      : number * 2;
  }
};

// console.log(twice(37));
// console.log(twice(44));
// console.log(twice(334433));
// console.log(twice(444));
// console.log(twice(107));
// console.log(twice(103103));
// console.log(twice(3333));
// console.log(twice(7676));

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Grade Book
// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with
// that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// Examples:
// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

const getGrade = (s1, s2, s3) => {
  const AVG = (s1 + s2 + s3) / 3;

  if (AVG >= 90 && AVG <= 100) {
    return "A";
  } else if (AVG >= 80 && AVG < 90) {
    return "B";
  } else if (AVG >= 70 && AVG < 80) {
    return "C";
  } else if (AVG >= 60 && AVG < 70) {
    return "D";
  } else {
    return "F";
  }
};

// console.log(getGrade(95, 90, 93)); // "A"
// console.log(getGrade(50, 50, 95)); // "D"

// >>>>>>>>>>>>>>>>>>>>>>>>>

// Clean up the words
// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns
// that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur
// in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// Example:
// cleanUp("---what's my +*& line?");    // " what s my line "

// ******* Pseduocode *******
// Set up a flag to keep track of previous occurrence of any non-alphabetic character
// AND declare the flag as true
// IF current character is non-alphabetic character
// AND IF the flag is true
// THEN append " " to newStr
// AND set the flag to false
// ELSE IF current character is alphabetic character
// THEN set the flag to true
// AND append the current character to newStr

const cleanUp_bk = (str) => {
  let isNonAlpha = true;
  let newStr = "";
  const RE = /[a-zA-Z]/;

  for (let i = 0; i < str.length; i++) {
    if (str[i].search(RE) < 0 && isNonAlpha) {
      newStr += " ";
      isNonAlpha = false;
    } else if (str[i].search(RE) > -1) {
      isNonAlpha = true;
      newStr += str[i];
    }
  }

  return newStr;
};

const cleanUp = (str) => {
  const RE = /[^a-zA-Z]+/g;

  return str.replace(RE, " ");
};

// console.log(cleanUp("---what's my +*& line?"));
// console.log(cleanUp("what's my +*& line?"));
// console.log(cleanUp("  what's my +*& line"));

// >>>>>>>>>>>>>>>>>>>>>>>>>

// What Century is That?
// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the
// century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// Examples:
// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

// ******* Logic *******
// slice(0, year.length - 2) to get approx. century
// To get exact century...
// IF slice(year.length-2) === "00"
// THEN return the century as-is
// ELSE IF slice(year.length-2) !== "00"
// THEN add the century by 1
// AND return it
// To determine end with "st", "nd", "rd", or "th"...
// IF the centry ends with 11, or 12th, or 13th = "th"
// IF the century ends with 1 = "st"
// IF the century ends with 2 = "nd"
// IF the century ends with 3 = "rd"
// ELSE "th"

const century = (year) => {
  const STRING_YEAR = String(year);
  const APPROX_CENTURY = STRING_YEAR.slice(0, STRING_YEAR.length - 2);
  const YEAR_SUFFIX = STRING_YEAR.slice(STRING_YEAR.length - 2);

  let exactCentury =
    YEAR_SUFFIX === "00" ? APPROX_CENTURY : String(Number(APPROX_CENTURY) + 1);

  if (
    exactCentury.endsWith("11") ||
    exactCentury.endsWith("12") ||
    exactCentury.endsWith("13")
  ) {
    exactCentury += "th";
  } else if (exactCentury.endsWith("1")) {
    exactCentury += "st";
  } else if (exactCentury.endsWith("2")) {
    exactCentury += "nd";
  } else if (exactCentury.endsWith("3")) {
    exactCentury += "rd";
  } else {
    exactCentury += "th";
  }

  return exactCentury;
};

// console.log(century(2000)); // "20th"
// console.log(century(2001)); // "21st"
// console.log(century(1965)); // "20th"
// console.log(century(256)); // "3rd"
// console.log(century(5)); // "1st"
// console.log(century(10103)); // "102nd"
// console.log(century(1052)); // "11th"
// console.log(century(1127)); // "12th"
// console.log(century(11201)); // "113th"
