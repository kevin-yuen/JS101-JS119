const calculator = () => {
  const READLINE_SYNC = require("readline-sync");
  let userNumber = "";
  let numbers = [];
  let userOperation = "";
  let result = 0;
  const TEXT_MAPPING = {
    add: "sum",
    subtract: "difference",
    multiply: "product",
    divide: "quotient",
  };

  const getNumbers = () => {
    let i = 0;

    do {
      userNumber = READLINE_SYNC.question(
        `Enter the ${i === 0 ? "first" : "second"} number: `
      ).trim();

      if (userNumber !== "" && !isNaN(Number(userNumber))) {
        numbers.push(Number(userNumber));
        i++;
      }
    } while (i < 2 || userNumber.trim() === "" || isNaN(Number(userNumber)));
  };

  const getOperation = () => {
    const OPERATIONS = ["add", "subtract", "multiply", "divide"];

    do {
      userOperation = READLINE_SYNC.question(
        "Enter the type of operation to perform: "
      );
    } while (
      userOperation === "" ||
      !OPERATIONS.includes(userOperation.toLowerCase())
    );
  };

  const executeOperation = (operation) => {
    const [number1, number2] = [numbers[0], numbers[1]];

    if (operation === "add") {
      return number1 + number2;
    } else if (operation === "subtract") {
      return number1 - number2;
    } else if (operation === "multiply") {
      return number1 * number2;
    } else {
      return number1 / number2;
    }
  };

  getNumbers();
  getOperation();

  switch (userOperation) {
    case "add":
      result = executeOperation("add");
      break;
    case "subtract":
      result = executeOperation("subtract");
      break;
    case "multiply":
      result = executeOperation("multiply");
      break;
    case "divide":
      result = executeOperation("divide");
      break;
  }

  return `The ${TEXT_MAPPING[userOperation]} of ${numbers[0]} and ${numbers[1]} is ${result}`;
};

console.log(calculator());
