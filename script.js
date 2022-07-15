const weapons = ["rock", "paper", "scissors"];
let compWin = 0;
let playerWin = 0;

function computerPlay() {
  return weapons[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  while (playerWin < 5 && compWin < 5) {
    if (playerSelection === computerSelection) {
      return `You both selected ${computerSelection}! The round is a tie!`;
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        compWin++;
        return `Paper covers rock. You lose!`;
      } else playerWin++;
      return `Rock smashes scissors. You win!`;
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        playerWin++;
        return `Paper covers rock. You win!`;
      } else compWin++;
      return `Scissors cuts paper. You lose!`;
    } else {
      if (computerSelection === "rock") {
        compWin++;
        return `Rock smashes scissors. You lose!`;
      } else playerWin++;
      return `Scissors cuts paper. You win!`;
    }
  }
}

function checkWinner(playerWin, compWin) {
  if (playerWin === 5) {
    display.textContent = `YOU BEAT THE COMPUTER! ${playerWin} to ${compWin}!`;
  } else if (compWin === 5) {
    display.textContent = `THE COMPUTER DOMINATES AS EXPECTED! ${compWin} to ${playerWin}!`;
  }
}

function playAgain(playerWin, compWin) {
  if (playerWin === 5 || compWin === 5) {
    winner.textContent = "Play again?";
    container.appendChild(winner);
  }
}

const container = document.querySelector(".container");
const display = document.createElement("div");
display.classList.add("display");
const winner = document.createElement("div");
winner.classList.add("display");
container.appendChild(display);

const playerContainer = document.querySelector(".player-container");
const playerScore = document.createElement("div");
playerScore.textContent = playerWin;
playerScore.classList.add("display");
playerContainer.appendChild(playerScore);

const compContainer = document.querySelector(".comp-container");
const compScore = document.createElement("div");
compScore.textContent = compWin;
compScore.classList.add("display");
compContainer.appendChild(compScore);

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
  playerSelection = rock.textContent.toLowerCase();
  computerSelection = computerPlay();
  display.textContent = playRound(playerSelection, computerSelection);
  compScore.textContent = compWin;
  playerScore.textContent = playerWin;
  checkWinner(playerWin, compWin);
  playAgain();
});

paper.addEventListener("click", () => {
  playerSelection = paper.textContent.toLowerCase();
  computerSelection = computerPlay();
  display.textContent = playRound(playerSelection, computerSelection);
  compScore.textContent = compWin;
  playerScore.textContent = playerWin;
  checkWinner(playerWin, compWin);
  playAgain();
});

scissors.addEventListener("click", () => {
  playerSelection = scissors.textContent.toLowerCase();
  computerSelection = computerPlay();
  display.textContent = playRound(playerSelection, computerSelection);
  compScore.textContent = compWin;
  playerScore.textContent = playerWin;
  checkWinner(playerWin, compWin);
  playAgain;
});
// function game() {
// for (let i = 0; i < 5; i++) {
// let playerSelection = prompt(
// "Choose rock, paper or scissors",
// "Rock"
// ).toLowerCase();
// let computerSelection = computerPlay();
// playRound(playerSelection, computerSelection);
// }
// if (playerWin === compWin) {
// return console.log(
// `The game is a tie! The score ends at ${playerWin} to ${compWin}`
// );
// } else if (playerWin > compWin) {
// return console.log(`You win the game ${playerWin} to ${compWin}!`);
// }
// return console.log(`You lose the game ${compWin} to ${playerWin}!`);
// }
