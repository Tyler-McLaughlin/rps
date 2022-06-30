function computerPlay() {
  return weapons[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return `You both selected ${computerSelection}! The round is a tie!`;
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "Paper covers rock. You lose!";
    } else return "Rock smashes scissors. You win!";
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "Paper covers rock. You win!";
    } else return "Scissors cuts paper. You lose!";
  } else {
    if (computerSelection == "rock") {
      return "Rock smashes scissors. You lose!";
    } else return "Scissors cuts paper. You win!";
  }
}

const weapons = ["rock", "paper", "scissors"];
const playerSelection = "SCISSORS";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
