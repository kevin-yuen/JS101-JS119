// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// function changeMyWord(word) {
//     console.log(word);
//     word = word.toUpperCase();
//   }

//   let myWord = 'Hello';
//   changeMyWord(myWord);
//   console.log(myWord);

// "Hello" will be logged to the console twice.  Because myWord and word are primitive data type (i.e. String), they
// are stored in different memory addresses and changing one won't impact the other.

// Question 2
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// myWord = changeMyWord(myWord);
// console.log(myWord);

// "Hello" THEN "HELLO" will be logged to the console.  Even though myWord and word are primitive date type and stored in
// different memory addresses, we are re-assigning the result of changeMyWord to myWord.

// Question 3
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// function changeMyWord(word) {
//     console.log(word);
//     word = word.toUpperCase();
//     return word;
//   }

//   let myWord = 'Hello';
//   let myOtherWord = changeMyWord(myWord);
//   console.log(myWord);
//   console.log(myOtherWord);

// "Hello", "Hello", "HELLO" will be logged to the console.  Same reason as above.

// Question 4
// What will the following code log to the console and why? Don't run it until you have tried to answer.

//   function changeMyWords(words) {
//     console.log(words);
//     words[0] = 'Hi';
//   }

//   let myWords = ['Hello', 'Goodbye'];
//   changeMyWords(myWords);
//   console.log(myWords);

// ['Hello', 'Goodbye'] then ['Hi', 'Goodbye'] will be logged to the console.  Because myWords
// and words have the same Pointer.

// Question 5
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// function changeMyWords(words) {
//     console.log(words);
//     words = ['Hi', 'Goodbye'];
//   }

//   let myWords = ['Hello', 'Goodbye'];
//   changeMyWords(myWords);
//   console.log(myWords);

// ['Hello', 'Goodbye'] then ['Hello', 'Goodbye'] will be logged to the console. You are re-assigning a new array
// to words, not mutating the original array.  Hence words will be created in a different memory address and
// won't impact the original variable, myWords.
