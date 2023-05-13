// Exercises
// Work through the following exercises to help solidify the concepts we've covered in this assignment.

// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWord = 'Hello';
// myWord.concat(' there.');

// console.log(myWord);

// Answer:
// "Hello" is logged to the console, because myWord is a primitive data type, string; hence it cannot be mutated.

// Question 2
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWord = 'Hello';
// myWord.repeat(3);
// console.log(myWord);
// myWord.replace('H', 'J');
// console.log(myWord);
// myWord.toUpperCase();
// console.log(myWord);

// Answer:
// "Hello", "Hello", "Hello", because myWord is a primitive data type, string; hence it cannot be mutated.

// Question 3
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords.push('Goodbye');

// console.log(myWords);

// Answer:
// "['Hello', 'Goodbye']" is logged to the console, because myWords is an array, which is an object, which can be mutated.

// Question 4
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords.concat(['Goodbye']);

// console.log(myWords);

// Answer:
// "['Hello']" is logged to the console, because concat() returns a new value

// Question 5
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords[0].toUpperCase();

// console.log(myWords);

// Answer:
// "['Hello']" is logged to the console, because myWords[0] is accessing the first element of myWords, which is a string
// and string is a primitive data type which cannot be mutated

// Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords[0] = myWords[0].toUpperCase();

// console.log(myWords);

// Answer:
// "['HELLO']" is logged to the console, because you are re-assigning the first element of myWords rather than mutating
// the original value
