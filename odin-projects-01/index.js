// object of choices
const choices = {
    0: "rock",
    1: "paper",
    2: "scissors"
};
// function uses 'Math.random() * 3', which is 'Start from 0 and end before 3 (the max given)', kind of.
function playGame() {
    function getComputerChoice(){
        const random = Math.floor(Math.random() * 3);
        return choices[random]; // returns the choice (index) of the 'random' const,
    }
    // scores
    let humanScore = 0;
    let computerScore = 0;
    
    function getHumanChoice(){
        // prompts the user to select one of the choices given
        const input = prompt("Rock, paper or scissors? Select one:");

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
    // for loop that runs after the user submits either 'rock', 'paper' or 'scissors', which lets them choose another one of the three, then randomly selects for the computer
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        console.log(playRound(humanChoice, computerChoice));
    }
}

playGame();