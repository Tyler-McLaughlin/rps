function computerPlay() {
  return weapons[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return console.log(
      `You both selected ${computerSelection}! The round is a tie!`
    );
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      compWin++;
      return console.log("Paper covers rock. You lose!");
    } else playerWin++;
    return console.log("Rock smashes scissors. You win!");
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerWin++;
      return console.log("Paper covers rock. You win!");
    } else compWin++;
    return console.log("Scissors cuts paper. You lose!");
  } else {
    if (computerSelection === "rock") {
      compWin++;
      return console.log("Rock smashes scissors. You lose!");
    } else playerWin++;
    return console.log("Scissors cuts paper. You win!");
  }
}

window.addEventListener("click", function (e) {
  const container = document.querySelector(".container");
  const display = document.createElement("div");

  playerSelection = e.target.textContent.toLowerCase();
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);

  display.classList.add("display");
  display.textContent = `You chose ${playerSelection}! Computer chose ${computerSelection}!`;

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
