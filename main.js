//function that gets the random choice from computer
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

//function that gets the player choice in a prompt
function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper or scissors?");
    return playerChoice;
}

//function that plays a round of rps
function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    alert("You have chosen: " + playerSelection);
    alert("Computer has chosen: " + computerSelection);

    if (playerSelection === computerSelection) {
        alert("It's a draw!");

    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        alert("You win! Rock beats scissors");
        ++playerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats rock");
        ++computerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper beats rock");
        ++playerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors beat paper");
        ++computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors beat paper");
        ++playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose!Rock beats scissors");
        ++computerScore;
    }
}

//function that keeps track of the scores between the computer and the player
function game() {

    for (let counter = 0; counter <= 5; ++counter) {

        playRound();
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);

    }

    if (playerScore > computerScore) {
        return ('You win ' + playerScore + ' to ' + computerScore + '.');
    } else if (playerScore < computerScore) {
        return ('You lose ' + computerScore + ' to ' + playerScore + '.');
    } else {
        return ('It was a tie, you both won the same number of rounds.');
    }
}

// initalize the scores and calls the logs the game function
let playerScore = 0;
let computerScore = 0;
console.log(game());