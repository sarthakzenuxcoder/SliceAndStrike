document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    // Define possible choices
    const options = ['rock', 'paper', 'scissors'];
    
    // Get random choice for computer
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    // Display choices
    document.getElementById('player-choice').innerHTML = `Your choice: ${playerChoice}`;
    document.getElementById('computer-choice').innerHTML = `Computer's choice: ${computerChoice}`;

    // Determine and display the result
    const result = checkWin(playerChoice, computerChoice);
    document.getElementById('final-result').innerHTML = result;
}

function checkWin(player, computer) {
    // Check if it's a tie
    if (player === computer) {
        return "It's a tie!";
    }
    
    // Check if player wins
    if (player === "rock" && computer === "scissors" ||
        player === "paper" && computer === "rock" ||
        player === "scissors" && computer === "paper") {
        return "Player wins!";
    }
    
    // If none of the above, computer wins
    return "Computer wins!";
}