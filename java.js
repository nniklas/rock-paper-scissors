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
console.log(getComputerChoice());

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

// log humanchoice
console.log(getHumanChoice());

// global variables that keep track of score
let humanScore = 0;
let computerScore = 0;

// logic to play a single round
// function that takes the human and computer player choices as arguments, 
// plays a single round, increments the round winner’s score and logs a winner announcement

function playRound (humanChoice, computerChoice){

}



//logic to play entire game