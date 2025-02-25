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

//Get players choice
function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?"); //Ask for players choice
    choice = choice.toLowerCase();
    if(choice==='rock'||choice==='paper'||choice==='scissors'){
    return choice;
  }
  else return getHumanChoice();
}

function playGame(){

    let numRounds = 5;

    let humanScore = 0;
    let computerScore = 0;

    
    function playRound(humanChoice,computerChoice){

        if(humanChoice === "rock"){
            if(computerChoice === "paper"){
                computerScore++
                return console.log("You lose! Paper beats Rock");
            }
            else if (computerChoice === "scissors"){
                humanScore++
                return console.log("You win! Rock beats Scissors");
            }
            else{
                return console.log("It's a Draw!");
            }
        }
        else if(humanChoice === "paper"){
            if(computerChoice === "scissors"){
                computerScore++;
                return console.log("You lose! Scissors beats Paper");
            }
            else if (computerChoice === "rock"){
                humanScore++
                return console.log("You win! Paper beats Rock");
                
            }
            else{
                return console.log("It's a Draw!");
            }
        }
        else if(humanChoice === "scissors"){
            if(computerChoice === "rock"){
                computerScore++;
                return console.log("You lose! Rock beats Scissors");
            }
            else if (computerChoice === "paper"){
                humanScore++
                return console.log("You win! Scissors beats Paper");
            }
            else{
                return console.log("It's a Draw!");
            }
        }
    
    }

    for(let i = 0; i <numRounds;){

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();


        console.log("Round: " + (i+1));

        console.log("Computer choice: " + computerSelection)

        playRound(humanSelection,computerSelection);

        console.log("Score: " + humanScore + "-" + computerScore);

        i++;

    }

}


playGame();