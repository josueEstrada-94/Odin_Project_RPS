function getComputerChoice() {
    //Choices array
    const choices = ["Rock", "Paper", "Scissors"];
  
    // Random indexing
    let randomIndex = Math.floor(Math.random() * choices.length);
  
    // Shows the choice in the console
    console.log(choices[randomIndex]);
  }
  
  // Calls the function to show a random choice
  getComputerChoice();