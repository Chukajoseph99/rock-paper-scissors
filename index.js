let playerScore = 0;
let computerScore = 0;

let choices = ["rock","paper", "scissors"];

function getComputerChoice(){
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// we'll use an if else statement to return who wins the round, we'll also account for ties. hope you didnt forget this &&
function playRound(playerSelection,computerSelection){
    // console.log((playerSelection, computerSelection));
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "Its a Tie";
    }else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Its a Tie";
    }else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "Its a Tie";
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        return "Computer Wins! paper beats rock";
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        return "Player Wins! rock beats scissors";
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++ 
        return "Player Wins! paper beats rock";
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++
        return "Computer Wins! scissors beats paper";
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        return "Player Wins! scissors beats paper";
    }else {
        computerScore++
        return "Computer Wins! rocks beats scissors";
    }
}





function game(){
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose rock, paper or scissors", "rock, paper or scissors").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore){
        return "You Win!";
    }else if(computerScore > playerScore){
        return "Computer Wins";
    }else{
        return "Its a tie";
    }
}

console.log(game());

// console.log(playRound("rock",getComputerChoice())); We've already tested it and its working but lets do it again just to be sure

// game() - almost done, score done, reports who wins or loses in the end - we'll use if else algorithm to figure out who wins after the for loop finishes running after 5 rounds, the person with the highest score is the winner. 
// we have to call the function game() to see it in the console
// we'll use a for loop within the game() function. We are playing 5 rounds with computer so we'll do = for(let i = 0; i < 5; i++)
// javascript works from top to bottom so the computerSelection = getComputerChoice(); is called only once since its initialized outside the for loop so we'll put it inside the for loop so it restarts at each round. you understand??

// prompt(message, defaultValue) = the browser displays an input box for the user to type in its has two parameter ,message = the question the browser will ask the user and default value, which is a placeholder value. lets go

// one more thing - caseinsensitive
