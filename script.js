function getComputerChoice() {
    //Choices array
    const choices = ["rock", "paper", "scissors"];
  
    // Random indexing
    let randomIndex = Math.floor(Math.random() * choices.length);
  
    // Shows the choice in the console
    return(choices[randomIndex]);
  }
  
function playRound(playerSelection, computerSelection){
    // This function returns a string if the player win or not against the computer answer. 
    //This is just a single round.

    if (playerSelection === computerSelection)
    {
      gameResult.textContent = 'This is a tie!';

    } else if (playerSelection === 'paper' && computerSelection === 'rock') 
    {
      gameResult.textContent = 'you won! paper beats rock';
    } 
    
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
      gameResult.textContent = 'you won! rock beats scissors';
    }
    
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
      gameResult.textContent = 'you won! scissors beats paper';
    }

    else
    {
      gameResult.textContent = 'you lose!';
    }
}

    // Setting the conditions to decide who won the game.
      function game(){
        let playerScore = 0;
        let computerScore = 0;
    
        // Declaring the variables.
        const playerSelection = prompt('Select rock, paper or scissors').toLowerCase()
        const computerSelection = getComputerChoice();
    
        let result = playRound(playerSelection, computerSelection)
    
        // Showing the round and the result of the round. 
        console.log(`Round ${i + 1}: ${result}`);
    
        // Setting the conditions to gain score.
        if (result.includes('you won')) {
          playerScore++;
        } else if (result.includes('you lose')) {
          computerScore++;
        }
      
        // Setting the conditions to decide who won the game.
        if (playerScore > computerScore) {
          console.log('You won the game!');
        } else if (playerScore === computerScore) {
          console.log('It\'s a tie!');
        } else {
          console.log('You lose!');
        }
}


// Creating buttons.
const sect = document.querySelector('section');
const paperButton = document.createElement('button');
const rockButton = document.createElement('button');
const scissorsButton = document.createElement('button');

paperButton.textContent= 'Paper';
rockButton.textContent= 'Rock';
scissorsButton.textContent = 'Scissors';

sect.appendChild(paperButton);
sect.appendChild(rockButton);
sect.appendChild(scissorsButton);


//Creating clicking events to the buttons.

paperButton.addEventListener('click', ()=>{
  playRound('paper', getComputerChoice());
});

rockButton.addEventListener('click', function() {
  playRound('rock', getComputerChoice());
});

scissorsButton.addEventListener('click', function() {
  playRound('scissors', getComputerChoice());
});


//Creating a div for displaying results.
const gameResult = document.createElement('div');
sect.appendChild(gameResult);



