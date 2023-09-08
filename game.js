// Character data
let character = {
    name: "Hero",
    level: 1,
    health: 100,
    gold: 0,
    inventory: [],
};

// Game world descriptions
const worldDescriptions = [
    "You are in a mysterious dungeon.",
    "You find yourself in a dense forest.",
    "A bustling city lies before you.",
    // Add more world descriptions here
];

let currentWorldIndex = 0;

// Function to update character stats
function updateStats() {
    document.getElementById("char-name").textContent = character.name;
    document.getElementById("char-level").textContent = character.level;
    document.getElementById("char-health").textContent = character.health;
    document.getElementById("char-gold").textContent = character.gold;
}

// Function to explore the game world
function exploreWorld() {
    const worldDescription = document.getElementById("world-description");
    const exploreButton = document.getElementById("explore-button");

    const randomIndex = Math.floor(Math.random() * worldDescriptions.length);
    worldDescription.textContent = worldDescriptions[randomIndex];

    if (randomIndex === 0) {
        // In a dungeon, chance to find gold
        const foundGold = Math.random() < 0.3;
        if (foundGold) {
            const goldAmount = Math.floor(Math.random() * 50) + 10;
            character.gold += goldAmount;
            worldDescription.textContent += ` You found ${goldAmount} gold coins!`;
        }
    }

    updateStats();
}

// Event listener for the explore button
document.getElementById("explore-button").addEventListener("click", exploreWorld);

// Initial game setup
updateStats();
exploreWorld();
