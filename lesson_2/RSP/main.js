const MESSAGE_CONFIG = require("./message.json");
const READLINE = require("readline-sync");

let playerChoice = undefined;
let computerChoice = undefined;

let winner = undefined;

const OPTIONS = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};

const welcomeBoard = () => {
  let welcomeBoard = "";

  for (let line = 0; line < 5; line++) {
    if (line === 0 || line === 4) {
      welcomeBoard += "-".repeat(48).concat("\n");
    } else if (line === 1 || line === 3) {
      welcomeBoard += "|".concat(" ".repeat(46)).concat("|\n");
    } else {
      welcomeBoard += "|"
        .concat(" ".repeat(5))
        .concat(MESSAGE_CONFIG["welcome"].concat(" ".repeat(5).concat("|\n")));
    }
  }

  console.log(welcomeBoard);
};

const verifyPlayerName = (playerName) => {
  return playerName || false;
};

const verifyPlayerChoice = (playerChoice) => {
  return (playerChoice >= 1 && playerChoice <= 3) || false;
};

const getPlayerChoice = (playerName) => {
  while (true) {
    const playerChoice = Number(
      READLINE.question(
        `>>> ${MESSAGE_CONFIG["greeting"]} ${playerName}, ${MESSAGE_CONFIG[
          "instruction"
        ].concat("\n>>> Your response: ")}`
      )
    );
    const isChoiceValid = verifyPlayerChoice(playerChoice);

    if (isChoiceValid) return { [OPTIONS[playerChoice]]: playerChoice };
    console.log(`${MESSAGE_CONFIG["selectionError"]}`);
    continue;
  }
};

const randomComputerChoice = () => {
  return Math.ceil(Math.random() * 3);
};

const getComputerChoice = (randomChoice) => {
  let computerChoice;

  if (OPTIONS.hasOwnProperty(randomChoice)) {
    computerChoice = { [OPTIONS[randomChoice]]: randomChoice };
  }

  return computerChoice;
};

const printWinner = (winner) => {
  const PLAYER_CHOICE_NAME = Object.keys(playerChoice).toString();
  const COMPUTER_CHOICE_NAME = Object.keys(computerChoice).toString();
  let winnerMessage = undefined;

  switch (winner) {
    case "human":
      winnerMessage = MESSAGE_CONFIG["win"];
      break;
    case "computer":
      winnerMessage = MESSAGE_CONFIG["lose"];
      break;
    default:
      winnerMessage = MESSAGE_CONFIG["tie"];
  }

  console.log(
    `>>> You've selected ${PLAYER_CHOICE_NAME}. Computer has selected ${COMPUTER_CHOICE_NAME}.\n>>> ${winnerMessage}`
  );
};

const decideWinnerSpecialHandler = (
  playerChoiceNumber,
  computerChoiceNumber
) => {
  return playerChoiceNumber < computerChoiceNumber ? "human" : "computer";
};

const decideWinner = (playerChoice, computerChoice) => {
  const PLAYER_CHOICE_NUMBER = Number(Object.values(playerChoice).toString());
  const COMPUTER_CHOICE_NUMBER = Number(
    Object.values(computerChoice).toString()
  );

  if (
    (PLAYER_CHOICE_NUMBER === 1 && COMPUTER_CHOICE_NUMBER === 3) ||
    (PLAYER_CHOICE_NUMBER === 3 && COMPUTER_CHOICE_NUMBER === 1)
  ) {
    winner = decideWinnerSpecialHandler(
      PLAYER_CHOICE_NUMBER,
      COMPUTER_CHOICE_NUMBER
    );
  } else if (PLAYER_CHOICE_NUMBER > COMPUTER_CHOICE_NUMBER) {
    winner = "human";
  } else if (PLAYER_CHOICE_NUMBER < COMPUTER_CHOICE_NUMBER) {
    winner = "computer";
  }

  printWinner(winner);
};

// actual program starts here...
welcomeBoard();
console.log(MESSAGE_CONFIG["start"]);

setTimeout(() => {
  while (true) {
    const PLAYER_NAME = READLINE.question(
      `>>> ${MESSAGE_CONFIG["playerName"].concat(" ")}`
    ).trim();
    const IS_NAME_VALID = verifyPlayerName(PLAYER_NAME);

    if (IS_NAME_VALID) {
      playerChoice = getPlayerChoice(PLAYER_NAME);
      computerChoice = getComputerChoice(randomComputerChoice());

      decideWinner(playerChoice, computerChoice);
      break;
    } else {
      console.log(`${MESSAGE_CONFIG["nameError"]}`);
      continue;
    }
  }
}, 5000);
