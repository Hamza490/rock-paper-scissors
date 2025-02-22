function getComputerChoice(){
  let choice = Math.floor(Math.random()*3);

  if(choice===0)
    return "rock";
  else if(choice===1)
    return "paper";
  else
    return "scissors";
}

function getHumanChoice(){
  let choice = prompt("What is your choice?").toLowerCase().trim();
  
  return choice;
}

/* Testing playRound logic
const compSelection = getComputerChoice();
console.log(compSelection);
const humanSelection = getHUmanChoice();
console.log(humanSelection);
*/

function playRound(humanChoice, computerChoice){
  let humanScore = 0;
  let compScore = 0;
  let choiceToPlay = "yes";
  
  while(choiceToPlay ==="yes"){
    if(humanChoice===computerChoice){
        console.log("You tied!")
        console.log(humanChoice);
        console.log(computerChoice);
    }
    else if (humanChoice==="paper"&&computerChoice==="rock"){
        console.log("You win! Paper beats Rock");
        console.log(humanChoice);
        console.log(computerChoice);
        humanScore++;
    }
    else if(humanChoice==="rock"&&computerChoice==="scissors"){
        console.log("You win! Rock beats Scissors");
        console.log(humanChoice);
        console.log(computerChoice);
        humanScore++;
    }
    else if(humanChoice==="scissors"&&computerChoice==="paper"){
      console.log("You win! Scissors beat paper");
      console.log(humanChoice);
      console.log(computerChoice);
      humanScore++;
    }
    else if(humanChoice==="rock"&&computerChoice==="paper"){
      console.log("You lose! Rock is beaten by Paper");
      console.log(humanChoice);
      console.log(computerChoice);
      compScore++;
    }
    else if(humanChoice==="scissors"&&computerChoice==="rock"){
      console.log("You lose! Scissors is beaten by Rock");
      console.log(humanChoice);
      console.log(computerChoice);
      compScore++;
    }
    else if(humanChoice==="paper"&&computerChoice==="scissors"){
      console.log("You lose! Paper is beaten by Scissors");
      console.log(humanChoice);
      console.log(computerChoice);
      compScore++;
    }
    choiceToPlay = prompt("Do you want to continue playing?").toLowerCase();
  }

  console.log("Your score is: ",humanScore, "Computer Score is: ",compScore);
}

playRound(getHumanChoice(), getComputerChoice());