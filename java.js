console.log("This is the Rock Paper Scissors game part 1 for ToP")


// function that randomly returns "rock", "paper" or "scissors" as strings
function getComputerChoice(){
    let randomNumber = Math.random();
    let computerSelection = "";
    
    if (randomNumber <= 0.33) {
        computerSelection = "rock"
    }   else if (randomNumber > 0.33 && randomNumber < 0.66){
        computerSelection = "paper"
    } else {
        computerSelection = "scissors"
    }
    return computerSelection;
}

// log computer choice
//console.log(getComputerChoice());

// function that get human choice, return one of the valid choices based on user inputs
function getHumanChoice(){
    let message = "Choose rock, paper or scissors, type in your answer using numbers only. Rock=1, paper = 2, scissors = 3";
    let humanInput = prompt(message).toLowerCase();
    let humanSelection = "poo";

    if (humanInput=="rock"){
        humanSelection = "rock";
    } else if (humanInput == "paper"){
        humanSelection = "paper"
    } else if (humanInput == "scissors"){
        humanSelection = "scissors"
    }
    return humanSelection
}

// define score variables
let humanScore = 0;
let computerScore = 0;
let roundsplayed = 0;
let maxrounds = 5;
// function that takes the human and computer player choices as arguments, 
// plays a single round, increments the round winner’s score and logs a winner announcement

function playRound (humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "scissors"){
        roundDiv.textContent = "You win, rock beats scissors!";
        humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        roundDiv.textContent = "You win, scissors beats paper!";
        humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        roundDiv.textContent = "You win, paper beats rock!";
        humanScore += 1;
    } else if (humanChoice == computerChoice){
        roundDiv.textContent = `Equal, you both picked ${computerChoice} the same thing!`;
    } else {
        roundDiv.textContent = `You lose, ${computerChoice} beats ${humanChoice}!`;
        computerScore += 1;
    }
    roundsplayed += 1;
}    

// Eventlistener addition in later exercise

// buttons is a node list, much like array but not completely.
const buttons = document.querySelectorAll("button");

// .forEach loops through each button
buttons.forEach((button) => {
    // for each button we add click listener
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        displayCurrentScore();
    });
});

console.log(`Final score is human: ${humanScore} points and computer ${computerScore}!`)

// Create div to display score
const container = document.querySelector("#container")
const resultDiv = document.createElement("div");

// div to display round result
const roundDiv = document.createElement("div");
container.appendChild(roundDiv)
container.appendChild(resultDiv)


function displayCurrentScore(){
    if (roundsplayed < maxrounds) {
        resultDiv.textContent = `Current score is human: ${humanScore} points and computer ${computerScore}!`;
    } else if (roundsplayed == maxrounds){
        resultDiv.textContent = `Final score is human: ${humanScore} points and computer ${computerScore}!`;
        roundsplayed = 0;
        humanScore = 0;
        computerScore = 0;
    } 
};

