const zones = document.querySelectorAll(".zone");

zones.forEach(zone => {
    zone.addEventListener("click", () => {
        const playerChoice = zone.dataset.choice;
        playGame(playerChoice);
    });
});

function playGame(playerChoice) {
    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    document.getElementById("player-choice").innerText =
        `You chose: ${capitalize(playerChoice)}`;

    document.getElementById("computer-choice").innerText =
        `Computer chose: ${capitalize(computerChoice)}`;

    const result = checkWin(playerChoice, computerChoice);
    const resultBox = document.getElementById("final-result");

    resultBox.innerText = result;
    resultBox.style.fontWeight = "bold";

    if (result.includes("Win")) resultBox.style.color = "#00ff9c";
    else if (result.includes("Computer")) resultBox.style.color = "#ff4d4d";
    else resultBox.style.color = "#ffd166";
}

function checkWin(player, computer) {
    if (player === computer) return "It's a Tie!";

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You Win!";
    }
    return "Computer Wins!";
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
