const MESSAGE_CONFIG = require("./message.json");
const READLINE_SYNC = require("readline-sync");

let restartProgram = false;
let loanAmount = 0;
let loanDuration = 0;
let interestRate = 0;
let monthlyPayment = 0;

const greeting = () => {
  let welcomeBoard = "";
  const WELCOME_MESSAGE = `${MESSAGE_CONFIG["welcome"]}`;

  for (let cursor = 0; cursor < 5; cursor++) {
    if (cursor === 0 || cursor === 4) {
      welcomeBoard += "-".repeat(58).concat("\n");
    } else if (cursor % 2 !== 0) {
      welcomeBoard += "|".concat(" ".repeat(56).concat("|\n"));
    } else {
      welcomeBoard += "|".concat(
        " "
          .repeat(5)
          .concat(WELCOME_MESSAGE)
          .concat(" ".repeat(5).concat("|\n"))
      );
    }
  }

  return welcomeBoard;
};

const printErrorMessage = (messageKey) => {
  console.log(`ERROR: ${MESSAGE_CONFIG[messageKey]}`);
};

const getLoanAmount = () => {
  while (true) {
    loanAmount = parseFloat(
      READLINE_SYNC.question(
        `\n>>>>> ${MESSAGE_CONFIG["loanAmount"].concat(" ")}`
      )
    ).toFixed(2);

    if (loanAmount > 0 && !isNaN(loanAmount)) break;
  }
};

const verifyDurationInterest = (suppliedInput, parsedInput, minimumLimit) => {
  if (
    suppliedInput.trim() === "" ||
    isNaN(parseFloat(suppliedInput)) ||
    parsedInput < minimumLimit
  ) {
    return false;
  }

  return true;
};

const calculateLoanDuration = (loanTerm, suppliedLoanDuration) => {
  const F_SUPPLIED_LOAN_DURATION = parseFloat(suppliedLoanDuration);

  return loanTerm === "year"
    ? F_SUPPLIED_LOAN_DURATION * 12
    : F_SUPPLIED_LOAN_DURATION;
};

const getLoanDuration = (loanTerm) => {
  while (true) {
    loanDuration = READLINE_SYNC.question(
      `>>>>> ${MESSAGE_CONFIG["loanDuration"].concat(` ${loanTerm}: `)}`
    );

    const isLoanDurationValid = verifyDurationInterest(
      loanDuration,
      parseFloat(loanDuration),
      1
    );

    if (isLoanDurationValid === false) {
      printErrorMessage("loanDurationError");
      continue;
    }

    loanDuration = calculateLoanDuration(loanTerm, loanDuration);
    break;
  }
};

const getLoanTerm = () => {
  let suppliedLoanTerm;

  while (true) {
    suppliedLoanTerm = READLINE_SYNC.question(
      `>>>>> ${MESSAGE_CONFIG["loanTerm"].concat(" ")}`
    ).toLowerCase();

    if (suppliedLoanTerm === "year" || suppliedLoanTerm === "month") break;
  }

  getLoanDuration(suppliedLoanTerm);
};

const calculateInterestRate = (fInterestRate) => {
  return fInterestRate > 0 ? fInterestRate / 100 / 12 : fInterestRate;
};

const getInterestRate = () => {
  while (true) {
    interestRate = READLINE_SYNC.question(
      `>>>>> ${MESSAGE_CONFIG["interestRate"].concat(" ")}`
    );
    const F_INTEREST_RATE = parseFloat(interestRate).toFixed(2);

    const isInterestValid = verifyDurationInterest(
      interestRate,
      F_INTEREST_RATE,
      0
    );

    if (isInterestValid === false) {
      printErrorMessage("interestRateError");
      continue;
    }

    interestRate = calculateInterestRate(F_INTEREST_RATE);
    break;
  }
};

const calculateMonthlyPayment = () => {
  if (interestRate > 0) {
    monthlyPayment =
      loanAmount *
      (interestRate / (1 - Math.pow(1 + interestRate, -loanDuration)));
  } else {
    monthlyPayment = loanAmount / loanDuration;
  }
};

const formatting = (amount) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const printPaymentOutput = () => {
  const TOTAL_PAYMENT = formatting(monthlyPayment * loanDuration);

  console.log(`Payment Every Month: $${monthlyPayment.toFixed(2)}`);
  console.log(`Total of ${loanDuration} Payments: $${TOTAL_PAYMENT}`);
};

const printInterestOutput = () => {
  const TEMP_INTEREST_RATE = monthlyPayment * loanDuration;

  const MONTHLY_INTEREST = formatting(
    (TEMP_INTEREST_RATE - loanAmount) / loanDuration
  );
  const TOTAL_INTEREST = formatting(TEMP_INTEREST_RATE - loanAmount);

  console.log(`Interest Every Month: $${MONTHLY_INTEREST}`);
  console.log(`Total Interest: $${TOTAL_INTEREST}`);
};

const restart = () => {
  while (true) {
    restartProgram = READLINE_SYNC.question(
      `>>>>> ${MESSAGE_CONFIG["restart"].concat(" ")}`
    ).toLowerCase();

    if (restartProgram === "y") restartProgram = true;
    if (restartProgram === true || restartProgram === "n") break;
  }
};

const main = () => {
  while (true) {
    getLoanAmount();
    getLoanTerm();
    getInterestRate();
    calculateMonthlyPayment();

    console.log(
      `\n${"*".repeat(25).concat(" Results ").concat("*".repeat(25))}\n`
    );
    printPaymentOutput();
    printInterestOutput();
    console.log(`\n${"*".repeat(59)}\n`);

    restart();

    if (restartProgram === true) {
      continue;
    }

    console.log(`${MESSAGE_CONFIG["appreciation"]}`);
    break;
  }
};

// actual program starts here...
console.log(`${MESSAGE_CONFIG["start"]}`);

setTimeout(() => {
  console.log(greeting());
  main();
}, 5000);
