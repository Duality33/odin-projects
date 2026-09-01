let humanScore = 0;
let computerScore = 0;

// object of choices
const choices = {
    0: "rock",
    1: "paper",
    2: "scissors"
};

// function uses 'Math.random() * 3', which is 'Start from 0 and end before 3 (the max given)', kind of.
function getComputerChoice(){
    const random = Math.floor(Math.random() * 3);
    return choices[random]; // returns the choice (index) of the 'random' const,
}
// prompts the user to select one of the choices given
const input = prompt("Rock, paper or scissors? Select one:");

function getHumanChoice(){
    return input; // self-explanatory
}

console.log(getHumanChoice(input))