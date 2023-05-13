// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWord = 'Hello';
// let myOtherWord = myWord;

// console.log(myWord);
// console.log(myOtherWord);

// Answer:
// "Hello" and "Hello" are logged to the console.  myOtherWord is pointing to myWord even though both variables have different
// memory addresses.

// Question 2
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWord = 'Hello';
// let myOtherWord = myWord;
// myWord = 'Goodbye';

// console.log(myWord);
// console.log(myOtherWord);

// Answer:
// "Goodbye" is logged to the console for myWord.  "Hello" is logged to the console for myOtherWord.
// myOtherWord is pointing to myWord when "Hello" is assigned to myWord.
// Since both variables have different memory addresses, re-assigning "Goodbye" to myWord will not change myOtherWord.

// Question 3
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myOtherWords);

// Answer:
// Both will log "['Hi', 'Goodbye']" to the console.  myWords and myOtherWords are stored in different memory address.
// However, the Pointer of both values assigned to myWords and myOtherWords is the same, and you are only updating the
// existing array element (not re-assigning); hence, updating the value of one variable will change one another

// Question 4
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords = ['Hi', 'Bye'];

// console.log(myWords);
// console.log(myOtherWords);

// Answer:
// Both will log "['Hi', 'Goodbye']" to the console.  myWords and myOtherWords are stored in different memory address.
// Although the Pointer of both values assigned to myWords and myOtherWords is the same, you are re-assiging a new value
// to myWords; hence, a new Pointer will be used as reference of the new value that is assigned to myWords.

// Question 5
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myWord = myWords[0];
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myWord);

// Answer:
// "['Hi', 'Goodbye']" is logged to the console for myWords. "Hello" is logged to the console for myWord.
// Because you are assigning an element of myWords to myWord (i.e. variable assignment), and variable assignment doesn't
// use Pointer, and myWord is stored in a different memory address.  And since you are only updating an element
// of myWords, no new Pointer is used for myWords.

// Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myWord = 'Hi';
// myWords[0] = myWord;
// myWord = 'Hello';

// console.log(myWords);
// console.log(myWord);

// Answer:
// "['Hi', 'Goodbye']" is logged to the console for myWords. "Hello" is logged to the console for myWord.
// Because myWords is an object, which uses a Pointer, while myWord is variable assignment, which doesn't use Pointer.
// And since you are only updating an element of myWords, no new Pointer will be used for myWords.
// And since you are re-assigning myWord, same memory address location will be allocated.
