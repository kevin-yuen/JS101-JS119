// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let num = 5;

// function myFunc() {
//   num = 10;
// }

// myFunc();
// console.log(num);

// Answer:
// "10" is logged to the console because myFunc() can access variables from outside and the variable, num,
// is being reassigned to "10".

// Question 2
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let num = 5;

// function myFunc() {
//   console.log(num);
//   num = 10;
// }

// myFunc();
// console.log(num);

// Answer:
// console.log() inside myFunc() logs "5" to the console because myFunc() can access the variable from outside.
// console.log() outside myFunc() logs "10" to the console because myFunc() can access variables from outside and the
// variable, num, is being reassigned to "10".

// Question 3
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let num = 5;

// function myFunc() {
//   let num = 10;
// }

// myFunc();
// console.log(num);

// Answer:
// "5" is logged to the console because you cannot access the variable inside the function from outside.

// Question 4
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let num = 5;

// function myFunc() {
//   console.log(num);
//   let num = 10;
// }

// myFunc();
// console.log(num);

// Answer:
// An error will be encounterd because the variable you are declaring inside myFunc() has conflict with the variable, num,
// from outside.

// Question 5
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let num = 5;

// function myFunc(num) {
//   num = 10;
// }

// myFunc();
// console.log(num);

// Answer:
// "5" is logged to the console because myFunc() is only assigning "10" to the argument that is being passed to myFunc()

// Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let num = 1;

// while (num < 3) {
//   num += 1;
// }

// console.log(num);

// Answer:
// "3" is logged to the console because you are incrementing the variable, num, from outside the block by 1 twice

// Question 7
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let num = 1;

// while (num < 3) {
//   let num = 5;
//   num += 1;
// }

// console.log(num);

// Answer:
// Nothing is logged to the console due to infinite loop.  The reason of infinite looping is because the variable, num,
// is a different variable from outside, while the variable, num, in the while expression refers to the variable from outside.
