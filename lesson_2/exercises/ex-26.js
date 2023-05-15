// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

// ['red', 'green', 'blue', 'yellow'] logs to the console.
// The variable, color, is a primitive data type and stored in different memory address than the variable, colors.
// The variable, colors, is an object that is stored in a different memory address than the variable, color,
// and it has a Pointer as reference of the array.
// the function parameter, colors, is stored in a different memory address than the above two, and the Pointer is same
// as the variable, colors.

// Question 2
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

// ['red', 'green', 'blue', undefined] logs to the console.
// same reason as above.  And since you are not passing an argument for the parameter, color, it is treated as undefined.

// Question 3
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors, color1);
// updateColors(colors, color2);
// console.log(colors);

// ['red', 'green', 'blue', 'purple', 'pink'] logs to the console.
// same reason as Question 1.  And since you are passing an argument for the parameter, color, you are mutating the
// original variable.

// Question 4
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
//   return colors;
// }

// let newColors = updateColors(colors, color1);
// updateColors(newColors, color2);
// console.log(colors);

// ['red', 'green', 'blue', 'purple', 'pink'] logs to the console.
// same reason as above.

// Question 5
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let color = 'purple'; // blue
// let colors = ['red', 'green', 'blue'];

// function addColor(colors, color) {
//   colors.push(color);
//   return colors;
// }

// function removeColor(colors) {
//   color = colors.pop();
//   return colors;
// }

// let newColors = removeColor(colors);
// addColor(colors, color);
// console.log(newColors);

// ['red', 'green', 'blue'] logs to the console.
// same reason as above

// Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// function capitalize() {
//     return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim() {
//    return word += '!!!';
// }

//   let word = 'hello'; // hello!!!
//   let capitalizedWord = capitalize(word); // Hello
//   let exclaimedWord = exclaim(capitalizedWord); // hello!!!

//   console.log(word);
//   console.log(capitalizedWord);
//   console.log(exclaimedWord);

// hello!!!, Hello, hello!!! log to the console.
// Not mutating the original variables because they are primitive value
// For exclaim(capitalizedWord), because exclaim() is not taking any argument, "word" inside exclaim() is referring to the
// variable "word"

// Question 7
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim(word) {
//   return (word += "!!!");
// }

// let word = "hello";
// let capitalizedWord = capitalize(word); // Hello
// let exclaimedWord = exclaim(capitalizedWord); // Hello!!!

// console.log(word); // hello
// console.log(capitalizedWord); // Hello
// console.log(exclaimedWord); // Hello!!!

// hello, Hello, Hello!!! log to the console
// Not mutating the original variables because they are primitive value
// the parameter, word, inside exclaim() refers to capitalizedWord instead of the variable, word
