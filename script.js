//Get computers choice
function getComputerChoice(){

    //Create variables
    let randNum = Math.floor((Math.random() * 100) + 1); //Random number from 1-100
    let computerChoice = ""; 

    //Check random number and assign computerChoice
    if (randNum <= 34){
        computerChoice = "rock"
    }
    else if (randNum <= 67){
        computerChoice = "scissors"
    }
    else{
        computerChoice = "paper"
    }

    return computerChoice

}


let computerScore = 0
let humanScore = 0

const result = document.querySelector(".result")
const score = document.querySelector(".score")
const btns = document.querySelectorAll("button");

const winner = document.createElement("div")

function playRound(humanChoice,computerChoice){
    

    if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++
            return result.textContent = "You lose! Paper beats Rock";
        }
        else if (computerChoice === "scissors"){
            humanScore++
            return result.textContent =("You win! Rock beats Scissors");
        }
        else{
            return result.textContent =("It's a Draw!");
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            computerScore++;
            return result.textContent =("You lose! Scissors beats Paper");
        }
        else if (computerChoice === "rock"){
            humanScore++
            return result.textContent =("You win! Paper beats Rock");
            
        }
        else{
            return result.textContent =("It's a Draw!");
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            computerScore++;
            return result.textContent =("You lose! Rock beats Scissors");
        }
        else if (computerChoice === "paper"){
            humanScore++
            return result.textContent =("You win! Scissors beats Paper");
        }
        else{
            return result.textContent = ("It's a Draw!");
        }
    }

}


btns.forEach((button) => {

    button.addEventListener("click", () =>{
         
        let compChoice = getComputerChoice()
        playRound(button.id,compChoice);
        score.textContent = `Score: ${humanScore}-${computerScore}`

        if (humanScore === 5){
            winner.textContent = "You won the game!"
            humanScore = 0
            computerScore = 0
            result.appendChild(winner)
        
        }
        if (computerScore === 5){
            winner.textContent = "Computer Wins"
            humanScore = 0
            computerScore = 0
            result.appendChild(winner)
        }

        });

});




