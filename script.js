function computerPlay() {
  return weapons[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerWin === 5) {
    return `You win! Player - ${playerWin} || Computer - ${compWin}`;
  } else if (compWin === 5) {
    return `Computer wins! Player - ${playerWin} || Computer - ${compWin}`;
  }
  if (playerSelection === computerSelection) {
    return `You both selected ${computerSelection}! The round is a tie! The score: Player - ${playerWin} || Computer - ${compWin}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      compWin++;
      return `Paper covers rock. You lose! The score: Player - ${playerWin} || Computer - ${compWin}`;
    } else playerWin++;
    return `Rock smashes scissors. You win! The score: Player - ${playerWin} || Computer - ${compWin}`;
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerWin++;
      return `Paper covers rock. You win! The score: Player - ${playerWin} || Computer - ${compWin}`;
    } else compWin++;
    return `Scissors cuts paper. You lose! The score: Player - ${playerWin} || Computer - ${compWin}`;
  } else {
    if (computerSelection === "rock") {
      compWin++;
      return `Rock smashes scissors. You lose! The score: Player - ${playerWin} === Computer - ${compWin}`;
    } else playerWin++;
    return `Scissors cuts paper. You win! The score: Player - ${playerWin} || Computer - ${compWin}`;
  }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const display = document.createElement("div");

  playerSelection = rock.textContent.toLowerCase();
  computerSelection = computerPlay();
  display.textContent = playRound(playerSelection, computerSelection);
  display.classList.add("display");

  container.appendChild(display);
});

paper.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const display = document.createElement("div");

  playerSelection = paper.textContent.toLowerCase();
  computerSelection = computerPlay();
  display.textContent = playRound(playerSelection, computerSelection);

  display.classList.add("display");

  container.appendChild(display);
});

scissors.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const display = document.createElement("div");

  playerSelection = scissors.textContent.toLowerCase();
  computerSelection = computerPlay();
  display.textContent = playRound(playerSelection, computerSelection);

  display.classList.add("display");

  container.appendChild(display);
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

const weapons = ["rock", "paper", "scissors"];
let compWin = 0;
let playerWin = 0;
// console.log(game());
