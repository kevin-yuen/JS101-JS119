const calculator = () => {
  const TEXT_MAPPING = require("./operator-config.json");
  const LANGUAGE_MAPPING = require("./language-config.json");
  const READLINE_SYNC = require("readline-sync");

  let userNumber = "";
  let numbers = [];
  let userOperation = "";
  let result = 0;
  let toRestart = true;
  let operationMessage = "";
  let operationMessage_es = "";
  let userLanguage = "";

  const getUserLanguage = () => {
    while (true) {
      userLanguage = READLINE_SYNC.question(
        "Enter your preferred language: (en/es) "
      );

      if (userLanguage === "en" || userLanguage === "es") break;
    }
  };

  const getNumbers = () => {
    let i = 0;

    do {
      const FIRST_PART =
        userLanguage === "en"
          ? LANGUAGE_MAPPING["en"]["number-1"]
          : LANGUAGE_MAPPING["es"]["number-1"];
      const SECOND_PART =
        userLanguage === "en"
          ? LANGUAGE_MAPPING["en"]["number-2"]
          : LANGUAGE_MAPPING["es"]["number-2"];
      const THIRD_PART =
        userLanguage === "en"
          ? LANGUAGE_MAPPING["en"]["number-3"]
          : LANGUAGE_MAPPING["es"]["number-3"];
      const FOURTH_PART =
        userLanguage === "en"
          ? LANGUAGE_MAPPING["en"]["number-4"] + " "
          : LANGUAGE_MAPPING["es"]["number-4"] + " ";

      userNumber = READLINE_SYNC.question(
        `${FIRST_PART} ${i === 0 ? SECOND_PART : THIRD_PART} ${FOURTH_PART}`
      ).trim();

      if (userNumber !== "" && !isNaN(Number(userNumber))) {
        numbers.push(Number(userNumber));
        i++;
      }
    } while (i < 2 || userNumber.trim() === "" || isNaN(Number(userNumber)));
  };

  const getOperation = (operations, message) => {
    do {
      userOperation = READLINE_SYNC.question(`${message}` + " ");
    } while (
      userOperation === "" ||
      !operations.includes(userOperation.toLowerCase())
    );
  };

  const getOperationByLanguage = () => {
    userLanguage === "en"
      ? getOperation(
          ["add", "subtract", "multiply", "divide"],
          LANGUAGE_MAPPING["en"]["operation"]
        )
      : getOperation(
          ["suma", "diferencia", "producto", "cociente"],
          LANGUAGE_MAPPING["es"]["operation"]
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

  const restartByLanguage = (message, possibleResponses) => {
    do {
      toRestart = READLINE_SYNC.question(`${message}` + " ").toLowerCase();

      if (
        toRestart === possibleResponses[0] ||
        toRestart === possibleResponses[1]
      ) {
        toRestart = true;
        numbers = [];
      } else if (
        toRestart === possibleResponses[2] ||
        toRestart === possibleResponses[3]
      ) {
        toRestart = false;
      } else {
        toRestart = "";
      }
    } while (toRestart === "");
  };

  // actual program starts here...
  getUserLanguage();

  do {
    getNumbers();
    getOperationByLanguage();

    switch (userOperation) {
      case "add":
      case "suma":
        result = executeOperation("add");
        operationMessage = TEXT_MAPPING["add"];
        operationMessage_es = LANGUAGE_MAPPING["es"]["sum"];
        break;
      case "subtract":
      case "diferencia":
        result = executeOperation("subtract");
        operationMessage = TEXT_MAPPING["subtract"];
        operationMessage_es = LANGUAGE_MAPPING["es"]["difference"];
        break;
      case "multiply":
      case "producto":
        result = executeOperation("multiply");
        operationMessage = TEXT_MAPPING["multiply"];
        operationMessage_es = LANGUAGE_MAPPING["es"]["product"];
        break;
      case "divide":
      case "cociente":
        result = executeOperation("divide");
        operationMessage = TEXT_MAPPING["divide"];
        operationMessage_es = LANGUAGE_MAPPING["es"]["quotient"];
        break;
    }

    const OUTPUT_FIRST_PART =
      userLanguage === "en"
        ? LANGUAGE_MAPPING["en"]["output-1"]
        : LANGUAGE_MAPPING["es"]["output-1"];
    const OUTPUT_SECOND_PART =
      userLanguage === "en"
        ? LANGUAGE_MAPPING["en"]["output-2"]
        : LANGUAGE_MAPPING["es"]["output-2"];
    const OUTPUT_THIRD_PART =
      userLanguage === "en"
        ? LANGUAGE_MAPPING["en"]["output-3"]
        : LANGUAGE_MAPPING["es"]["output-3"];
    const OUTPUT_FOURTH_PART =
      userLanguage === "en"
        ? LANGUAGE_MAPPING["en"]["output-4"]
        : LANGUAGE_MAPPING["es"]["output-4"];
    const OUTPUT_OPERATION =
      userLanguage === "en" ? operationMessage : operationMessage_es;

    console.log(
      `${OUTPUT_FIRST_PART} ${OUTPUT_OPERATION} ${OUTPUT_SECOND_PART} ${numbers[0]} ${OUTPUT_THIRD_PART} ${numbers[1]} ${OUTPUT_FOURTH_PART} ${result}\n`
    );

    userLanguage === "en"
      ? restartByLanguage(LANGUAGE_MAPPING["en"]["restart"], [
          "yes",
          "y",
          "no",
          "n",
        ])
      : restartByLanguage(LANGUAGE_MAPPING["es"]["restart"], [
          "si",
          "s",
          "no",
          "n",
        ]);
  } while (toRestart);
};

calculator();
