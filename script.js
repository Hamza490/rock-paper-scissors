function getComputerChoice(){
  let choice = Math.floor(Math.random()*3);

  if(choice===0)
    return "rock";
  else if(choice===1)
    return "paper";
  else
    return "scissors";
}

function getHUmanChoice(){
  let choice = prompt("What is your choice?").toLowerCase().trim();

  return choice;
}

let humanScore = 0;
let compScore = 0;

const compSelection = getComputerChoice();
console.log(compSelection);
const humanSelection = getHUmanChoice();
console.log(humanSelection);

function playRound(humanChoice, computerChoice){
  if(humanChoice===computerChoice){
      console.log("You tied!")
      console.log(humanChoice);
      console.log(computerChoice);
  }
  else if (humanChoice==="paper"&&computerChoice==="rock"){
      console.log("You win! Paper beats Rock");
      console.log(humanChoice);
      console.log(computerChoice);
  }
  else if(humanChoice==="rock"&&computerChoice==="scissors"){
      console.log("You win! Rock beats Scissors");
      console.log(humanChoice);
      console.log(computerChoice);
}
  else if(humanChoice==="scissors"&&computerChoice==="paper"){
    console.log("You win! Scissors beat paper");
    console.log(humanChoice);
    console.log(computerChoice);
}
  else if(humanChoice==="rock"&&computerChoice==="paper"){
    console.log("You lose! Rock is beaten by Paper");
    console.log(humanChoice);
    console.log(computerChoice);
}
  else if(humanChoice==="scissors"&&computerChoice==="rock"){
    console.log("You lose! Scissors is beaten by Rock");
    console.log(humanChoice);
    console.log(computerChoice);
}
  else if(humanChoice==="paper"&&computerChoice==="scissors"){
    console.log("You lose! Paper is beaten by Scissors");
    console.log(humanChoice);
    console.log(computerChoice);
}
}

playRound(humanSelection, compSelection);