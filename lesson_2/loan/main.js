const MESSAGE_CONFIG = require("./message.json");
const READLINE_SYNC = require("readline-sync");

let restartProgram = false;

const greeting = () => {
  let welcomeBoard = "";
  const WELCOME_MESSAGE = `${MESSAGE_CONFIG["welcome"]}`;

  for (let i = 0; i < 5; i++) {
    if (i === 0 || i === 4) {
      welcomeBoard += "-".repeat(58).concat("\n");
    } else if (i % 2 !== 0) {
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

const getLoanAmount = () => {
  let suppliedLoanAmount = 0;

  while (true) {
    suppliedLoanAmount = parseFloat(
      READLINE_SYNC.question(
        `\n>>>>> ${MESSAGE_CONFIG["loanAmount"].concat(" ")}`
      )
    ).toFixed(2);

    if (suppliedLoanAmount > 0 && !isNaN(suppliedLoanAmount)) break;
  }

  return suppliedLoanAmount;
};

const yearToMonth = (loanDuration) => {
  return loanDuration * 12;
};

const getLoanTerm = () => {
  let suppliedLoanTerm;

  while (true) {
    suppliedLoanTerm = READLINE_SYNC.question(
      `>>>>> ${MESSAGE_CONFIG["loanTerm"].concat(" ")}`
    ).toLowerCase();

    if (suppliedLoanTerm === "year" || suppliedLoanTerm === "month") break;
  }

  return suppliedLoanTerm;
};

const getLoanDuration = (loanTerm) => {
  let suppliedLoanDuration = 0;

  while (true) {
    suppliedLoanDuration = READLINE_SYNC.question(
      `>>>>> ${MESSAGE_CONFIG["loanDuration"].concat(` ${loanTerm}: `)}`
    );

    if (
      suppliedLoanDuration.trim() === "" ||
      isNaN(parseFloat(suppliedLoanDuration)) ||
      parseFloat(suppliedLoanDuration) < 1
    ) {
      console.log(`ERROR: ${MESSAGE_CONFIG["loanDurationError"]}`);
      continue;
    }

    suppliedLoanDuration = parseFloat(suppliedLoanDuration);
    suppliedLoanDuration =
      loanTerm === "year"
        ? yearToMonth(suppliedLoanDuration)
        : parseFloat(suppliedLoanDuration);

    break;
  }

  return suppliedLoanDuration;
};

const getInterestRate = () => {
  let suppliedInterestRate = 0;

  while (true) {
    suppliedInterestRate = READLINE_SYNC.question(
      `>>>>> ${MESSAGE_CONFIG["interestRate"].concat(" ")}`
    );
    const F_SUPPLIED_INTEREST_RATE =
      parseFloat(suppliedInterestRate).toFixed(2);

    if (
      suppliedInterestRate.trim() === "" ||
      isNaN(parseFloat(suppliedInterestRate)) ||
      F_SUPPLIED_INTEREST_RATE < 0
    ) {
      console.log(`ERROR: ${MESSAGE_CONFIG["interestRateError"]}`);
      continue;
    }

    suppliedInterestRate =
      F_SUPPLIED_INTEREST_RATE > 0
        ? F_SUPPLIED_INTEREST_RATE / 100 / 12
        : F_SUPPLIED_INTEREST_RATE;
    break;
  }

  return suppliedInterestRate;
};

const formatting = (amount) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
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
    let monthlyPayment = 0;
    const LOAN_AMOUNT = getLoanAmount();
    const LOAN_DURATION = getLoanDuration(getLoanTerm());
    const INTEREST_RATE = getInterestRate();

    if (INTEREST_RATE > 0) {
      monthlyPayment =
        LOAN_AMOUNT *
        (INTEREST_RATE / (1 - Math.pow(1 + INTEREST_RATE, -LOAN_DURATION)));
    } else {
      monthlyPayment = LOAN_AMOUNT / LOAN_DURATION;
    }

    const TOTAL_PAYMENT = formatting(monthlyPayment * LOAN_DURATION);
    const MONTHLY_INTEREST = formatting(
      (monthlyPayment * LOAN_DURATION - LOAN_AMOUNT) / LOAN_DURATION
    );
    const TOTAL_INTEREST = formatting(
      monthlyPayment * LOAN_DURATION - LOAN_AMOUNT
    );

    console.log(
      `\n${"*".repeat(25).concat(" Results ").concat("*".repeat(25))}\n`
    );
    console.log(`Payment Every Month: $${monthlyPayment.toFixed(2)}`);
    console.log(`Total of ${LOAN_DURATION} Payments: $${TOTAL_PAYMENT}`);
    console.log(`Interest Every Month: $${MONTHLY_INTEREST}`);
    console.log(`Total Interest: $${TOTAL_INTEREST}`);
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
