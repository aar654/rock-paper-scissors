//initializing variables
let playerSelection = '';
let computerSelection = '';

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn');

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${computerScore}`;

const playerCh = document.querySelector("#pChoice");
playerCh.textContent = `Player Selection: ${playerSelection}`;

const computerCh = document.querySelector("#cChoice");
computerCh.textContent = `Computer Selection: ${computerSelection}`;

const output = document.querySelector("#output");
output.textContent = "";

const outputWinner = document.querySelector("#outputWinner");
outputWinner.textContent = ""


//adds functionality to buttons that get player selection and computer selection
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playerSelection = button.id;
        if (playerSelection == "rock") {
            console.log("Rock");
        }
        else if (playerSelection == "paper") {
            console.log("Paper");
        }
        else if (playerSelection == "scissors") {
            console.log("Scissors");
        }
        computerSelection = computerChoice();
        game();

    })

})

//function that gets the random choice from computer
function computerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    randChoice = choice[Math.floor(Math.random() * choice.length)];
    return (randChoice);
}

//function that plays a round of rps
function playRound() {

    computerSelection;
    playerSelection;
    output.textContent = "";

    if (playerSelection === computerSelection) {
        outputWinner.textContent = "It's a draw!";

    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        outputWinner.textContent = "You win! Rock beats Scissors.";
        ++playerScore;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        outputWinner.textContent = "You lose! Paper beats Rock.";
        ++computerScore;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        outputWinner.textContent = "You win! Paper beats Rock.";
        ++playerScore;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        outputWinner.textContent = "You lose! Scissors beat Paper.";
        ++computerScore;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        outputWinner.textContent = "You win! Scissors beat Paper.";
        ++playerScore;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        outputWinner.textContent = "You lose! Rock beats Scissors.";
        ++computerScore;
    }
}

//function that keeps track of the scores between the computer and the player and plays 5 rounds
function game() {

    playRound();

    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;

    const playerCh = document.querySelector("#pChoice");
    playerCh.textContent = `Player Selection: ${playerSelection}`;

    const computerCh = document.querySelector("#cChoice");
    computerCh.textContent = `Computer Selection: ${computerSelection}`;

    if (playerScore == 5) {
        output.textContent = "You won against the computer! Awesome job! Click on any of the buttons to restart champion.";
        playerCh.textContent = `Player Selection: `;
        computerCh.textContent = `Computer Selection: `;
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        outputWinner.textContent = "";
    }

    else if (computerScore == 5) {
        output.textContent = "You lost. Try again and beat the computer. Click on any of the buttons to restart.";
        playerCh.textContent = `Player Selection: `;
        computerCh.textContent = `Computer Selection: `;
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        outputWinner.textContent = "";
    }
}