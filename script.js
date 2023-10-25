function getComputerChoice() {
    //Choices array
    const choices = ["Rock", "Paper", "Scissors"];
  
    // Random indexing
    let randomIndex = Math.floor(Math.random() * choices.length);
  
    // Muestra el string aleatorio en la consola
    console.log(choices[randomIndex]);
  }
  
  // Llama a la función para mostrar un string aleatorio
  getComputerChoice();
  