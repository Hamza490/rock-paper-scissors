function getComputerChoice(){
  let choice = Math.floor(Math.random()*3);

  if(choice===1)
    return "rock";
  else if(choice===2)
    return "paper";
  else
    return "scissors";
}

console.log(getComputerChoice());

function getHUmanChoice(){
  let choice = window.prompt("What is your choice?")

  return choice;
}

console.log(getHUmanChoice());