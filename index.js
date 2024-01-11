let playerScore = 0;
let computerScore = 0;
const userScore = document.querySelector(".player-score");
const compScore = document.querySelector(".computer-score");
const rockButton = document.querySelector("#btnRock");
const paperButton = document.querySelector("#btnPaper");
const scissorsButton = document.querySelector("#btnScissors");
const displayOutcome = document.querySelector(".displayOutcome");
const headerOne = document.createElement("h1");


let choices = ["rock","paper", "scissors"];

function getComputerChoice(){
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection,computerSelection){
    const p = document.createElement("p");
    p.style.cssText = ("text-align: center; font-size: 17px;")
    if (playerSelection === "rock" && computerSelection === "rock"){    
        p.textContent = "Its a Tie";
        displayOutcome.append(p);   
    }else if(playerSelection === "paper" && computerSelection === "paper"){
        p.textContent = "Its a Tie";
        displayOutcome.append(p); 
    }else if(playerSelection === "scissors" && computerSelection === "scissors"){
        p.textContent = "Its a Tie";
        displayOutcome.append(p); 
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        p.textContent = "Computer Wins! paper beats rock,";
        displayOutcome.append(p); 
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        p.textContent = "Player Wins! rock beats scissors";
        displayOutcome.append(p);   
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++ 
        p.textContent = "Player Wins! paper beats rock";
        displayOutcome.append(p);
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++
        p.textContent = "Computer Wins! scissors beats paper";
        displayOutcome.append(p);    
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        p.textContent = "Player Wins! scissors beats paper";
        displayOutcome.append(p); 
    }else {
        computerScore++
        p.textContent = "Computer Wins! rocks beats scissors";
        displayOutcome.append(p); 
    }
}

function runningScore(userScore, compScore){
userScore.textContent = "Player: " +playerScore;
compScore.textContent = "Computer: " +computerScore;
}

function game(){
    if(playerScore === 5){
        headerOne.textContent = "You have Won the game! Hurray!" ;
        displayOutcome.append(headerOne);
    }else if(computerScore === 5){
        headerOne.textContent = "Computer has Won the game! You Lose!";
        displayOutcome.append(headerOne);
    }

}

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection,computerSelection);
    runningScore(userScore, compScore)
    game();
})

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection,computerSelection);
    runningScore(userScore, compScore)
    game();
})

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection,computerSelection);
    runningScore(userScore, compScore)
    game();
})

// console.log(playRound("rock",getComputerChoice())); We've already tested it and its working but lets do it again just to be sure

// game() - almost done, score done, reports who wins or loses in the end - we'll use if else algorithm to figure out who wins after the for loop finishes running after 5 rounds, the person with the highest score is the winner. 
// we have to call the function game() to see it in the console
// we'll use a for loop within the game() function. We are playing 5 rounds with computer so we'll do = for(let i = 0; i < 5; i++)
// javascript works from top to bottom so the computerSelection = getComputerChoice(); is called only once since its initialized outside the for loop so we'll put it inside the for loop so it restarts at each round. you understand??

// prompt(message, defaultValue) = the browser displays an input box for the user to type in its has two parameter ,message = the question the browser will ask the user and default value, which is a placeholder value. lets go

// one more thing - caseinsensitive
