function getComputerChoice() {
    //Choices array
    const choices = ["rock", "paper", "scissors"];
  
    // Random indexing
    let randomIndex = Math.floor(Math.random() * choices.length);
  
    // Shows the choice in the console
    return(choices[randomIndex]);
  }
  
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerSelection, computerSelection) {
    /*This function runs the game itself*/

    if (round < 5) {
      if (playerSelection === computerSelection) {
        gameResult.textContent = 'This is a tie!';

      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        gameResult.textContent = 'you won! paper beats rock';
        playerScore++;

      } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        gameResult.textContent = 'you won! rock beats scissors';
        playerScore++;

      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        gameResult.textContent = 'you won! scissors beats paper';
        playerScore++;

      } else {
        gameResult.textContent = 'you lose!';
        computerScore++;
      }
  
      round++;
  
      if (round === 5) {
        // This if statement make the decision of who won, after that, the buttons are disabled.
        if (playerScore > computerScore) {
          gameResult.textContent = 'You won the game! the Computer was crashed!';
        } else if (playerScore === computerScore) {
          gameResult.textContent = "It's a tie! Both are Really Good!";
        } else {
          gameResult.textContent = 'You lose! The Computer wins';
        }
  
        paperButton.disabled = true;
        rockButton.disabled = true;
        scissorsButton.disabled = true;

        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
      }
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
const playerScoreDisplay = document.createElement('div');
const computerScoreDisplay = document.createElement('div');
sect.appendChild(playerScoreDisplay);
sect.appendChild(computerScoreDisplay);



