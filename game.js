// Game state
let gameState = 0;

// Function to update the game based on choices
function updateGame() {
    const storyText = document.getElementById("story-text");
    const choice1Button = document.getElementById("choice-1");
    const choice2Button = document.getElementById("choice-2");

    if (gameState === 0) {
        storyText.textContent = "You are in a mysterious dungeon.";
        choice1Button.textContent = "Explore further";
        choice2Button.textContent = "Exit the dungeon";
        gameState = 1;
    } else if (gameState === 1) {
        storyText.textContent = "You encounter a menacing creature!";
        choice1Button.textContent = "Fight the creature";
        choice2Button.textContent = "Flee in fear";
        gameState = 2;
    } else if (gameState === 2) {
        storyText.textContent = "You bravely defeated the creature!";
        choice1Button.textContent = "Search for treasure";
        choice2Button.textContent = "Continue your adventure";
        gameState = 3;
    } else if (gameState === 3) {
        storyText.textContent = "You found a chest full of gold!";
        choice1Button.textContent = "Play again";
        choice2Button.textContent = "";
        gameState = 0;
    }
}

// Event listeners for choice buttons
document.getElementById("choice-1").addEventListener("click", updateGame);
document.getElementById("choice-2").addEventListener("click", updateGame);

// Initial game setup
updateGame();
