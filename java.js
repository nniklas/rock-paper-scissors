console.log("This is the Rock Paper Scissors game part 1 for ToP")


// function that randomly returns "rock", "paper" or "scissors" as strings
function getComputerChoice(){
    let randomNumber = Math.random();
    let computerChoice = "";
    
    if (randomNumber <= 0.33) {
        computerChoice = "rock"
    }   else if (randomNumber > 0.33 && randomNumber < 0.66){
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

// log computer choice
console.log(getComputerChoice());

// function that get human choice, return one of the valid choices based on user inputs
function getHumanChoice(){
    let message = "Choose rock, paper or scissors, type in your answer using numbers only. Rock=1, paper = 2, scissors = 3";
    let humanInput = +prompt(message);
    let humanChoice = "poo";

    if (humanInput==1){
        humanChoice = "rock";
    } else if (humanInput == 2){
        humanChoice = "paper"
    } else if (humanInput == 3){
        humanChoice = "scissors"
    }
    return humanChoice
}
console.log(getHumanChoice());
// global variables that keep track of score


// logic to play a single round


//logic to play entire game