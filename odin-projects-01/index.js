let humanScore = 0;
let computerScore = 0;

// object of choices
const choices = {
    0: "rock",
    1: "paper",
    2: "scissors"
};

// random choice generator (in global scope just in case its needed)
const random = Math.floor(Math.random() * 3);

// function uses 'Math.random() * 3', which is 'Start from 0 and end before 3 (the max given)', kind of.
function getComputerChoice(){
    return choices[random]; // returns the choice (index) of the 'random' const,
}
// prompts the user to select one of the choices given
const input = prompt("Rock, paper or scissors? Select one:");

function getHumanChoice(){
    switch(input.toLowerCase()) {
        case "rock":
            return choices[0]
        case "paper":
            return choices[1]
        case "scissors":
            return choices[2]
        default:
            return null;
    }
}

const humanChoiceVar = getHumanChoice();
const computerChoiceVar = getComputerChoice();
// choices[0] = rock
// choices[1] = paper
// choices[2] = scissors
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "Tie"
    } else if (humanChoice === choices[0] && computerChoice === choices[2]) {
        humanScore++
        return "You win"
    } else if (humanChoice === choices[1] && computerChoice === choices[2]) {
        computerScore++
        return "The computer won"
    } else if (humanChoice === choices[2] && computerChoice === choices[1]) {
        humanScore++
        return "You win"
    } else if (humanChoice === choices[1] && computerChoice === choices[0]) {
        humanScore++
        return "You win"
    } else {
        computerScore++
        return "The computer won"
    }
}

console.log(playRound(humanChoiceVar, computerChoiceVar));