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


// function that get human choice, return one of the valid choices based on user inputs
console.log(getComputerChoice());

// global variables that keep track of score


// logic to play a single round


//logic to play entire game