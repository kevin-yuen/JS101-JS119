const MESSAGE_CONFIG = require("./message.json");
const READLINE = require("readline-sync");

let playerName;

let playerChoice;
let computerChoice;

let winner;

const OPTIONS = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};

const welcomeBoard = () => {
  let welcomeBoard = "";
  const MESSAGE_LENGTH = MESSAGE_CONFIG["welcome"].length;

  for (let line = 0; line < 5; line++) {
    if (line === 0 || line === 4) {
      welcomeBoard += "-".repeat(MESSAGE_LENGTH + 12).concat("\n");
    } else if (line === 1 || line === 3) {
      welcomeBoard += "|".concat(" ".repeat(MESSAGE_LENGTH + 10)).concat("|\n");
    } else {
      welcomeBoard += "|"
        .concat(" ".repeat(MESSAGE_LENGTH - 31))
        .concat(
          MESSAGE_CONFIG["welcome"].concat(
            " ".repeat(MESSAGE_LENGTH - 31).concat("|\n")
          )
        );
    }
  }

  console.log(welcomeBoard);
};

const verifyPlayerName = (playerName) => {
  return playerName || false;
};

const getPlayerName = () => {
  while (true) {
    playerName = READLINE.question(
      `>>> ${MESSAGE_CONFIG["playerName"].concat(" ")}`
    ).trim();

    const IS_NAME_VALID = verifyPlayerName(playerName);

    if (IS_NAME_VALID) break;
    console.log(`${MESSAGE_CONFIG["nameError"].concat("\n")}`);
    continue;
  }
};

const verifyPlayerChoice = (playerChoice) => {
  return (playerChoice >= 1 && playerChoice <= 3) || false;
};

const getPlayerChoice = (playerName) => {
  while (true) {
    const PLAYER_CHOICE = Number(
      READLINE.question(
        `>>> ${MESSAGE_CONFIG["greeting"]} ${playerName}, ${MESSAGE_CONFIG[
          "instruction"
        ].concat("\n>>> Your response: ")}`
      )
    );
    const IS_CHOICE_VALID = verifyPlayerChoice(PLAYER_CHOICE);

    if (IS_CHOICE_VALID) return { [OPTIONS[PLAYER_CHOICE]]: PLAYER_CHOICE };
    console.log(`${MESSAGE_CONFIG["selectionError"].concat("\n")}`);
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
    `>>> ${MESSAGE_CONFIG["playerSelection"]} ${PLAYER_CHOICE_NAME}. ${
      MESSAGE_CONFIG["computerSelection"]
    } ${COMPUTER_CHOICE_NAME}.\n>>> ${winnerMessage.concat("\n")}`
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
  const COMP_CHOICE_NUMBER = Number(Object.values(computerChoice).toString());

  if (
    (PLAYER_CHOICE_NUMBER === 1 && COMP_CHOICE_NUMBER === 3) ||
    (PLAYER_CHOICE_NUMBER === 3 && COMP_CHOICE_NUMBER === 1)
  ) {
    winner = decideWinnerSpecialHandler(
      PLAYER_CHOICE_NUMBER,
      COMP_CHOICE_NUMBER
    );
  } else if (PLAYER_CHOICE_NUMBER > COMP_CHOICE_NUMBER) {
    winner = "human";
  } else if (PLAYER_CHOICE_NUMBER < COMP_CHOICE_NUMBER) {
    winner = "computer";
  } else {
    winner = "tie";
  }

  printWinner(winner);
};

const playAgain = () => {
  let continuePlay;

  while (true) {
    continuePlay = READLINE.question(
      `>>> ${MESSAGE_CONFIG["playAgain"].concat(`\n>>> Your response: `)}`
    ).trim();

    if (!continuePlay) {
      console.log(`${MESSAGE_CONFIG["playAgainError"].concat("\n")}`);
      continue;
    }
    break;
  }

  return continuePlay;
};

// actual program starts here...
console.clear();
welcomeBoard();
console.log(MESSAGE_CONFIG["start"].concat("\n"));

setTimeout(() => {
  getPlayerName();

  while (true) {
    playerChoice = getPlayerChoice(playerName);
    computerChoice = getComputerChoice(randomComputerChoice());

    decideWinner(playerChoice, computerChoice);
    const CONTINUE_GAME = playAgain();

    if (Number(CONTINUE_GAME) === 2) {
      console.log(`${MESSAGE_CONFIG["farewell"]}`);
      break;
    }
    console.log("\n");
    continue;
  }
}, 1500);
