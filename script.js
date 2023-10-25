function getComputerChoice() {
    //Choices array
    const choices = ["Rock", "Paper", "Scissors"];
  
    // Random indexing
    let randomIndex = Math.floor(Math.random() * choices.length);
  
    // Shows the choice in the console
    return(choices[randomIndex]);
  }
  
function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection)
    {
      console.log('This is a tie!')

    } else if (playerSelection === 'paper' && computerSelection === 'Rock') 
    {
      console.log('you won!')
    } else{
      console.log('you lose')
    }
}

const playerSelection = 'Paper';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))