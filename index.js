let choices = ["rock","paper","scissors"];

function getComputerChoice(){
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function showTheWinner(playerSelection, computerSelection){
if(playerSelection === computerSelection){
    return "Tie";
}else if(playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock"){
    return "Player Wins";
}else{
    return "Computer Wins";
}
}

function playRound(playerSelection, computerSelection){
let output = showTheWinner(playerSelection, computerSelection);
if(output === "Tie"){
    return "Its A Tie";
}else if(output === "Player Wins"){
    return "You Win! " + playerSelection + " beats " + computerSelection;
}else{
    return "You Lose! " + computerSelection + " beats " + playerSelection;
}
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));
