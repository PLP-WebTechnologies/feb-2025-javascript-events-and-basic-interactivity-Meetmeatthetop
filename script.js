// Game elements
const cards = document.querySelectorAll('.card');
const pickElement = document.querySelector('.pick');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const newGameButton = document.getElementById('newgame');
const resetButton = document.getElementById('resetGame');

// Game state
let playerScore = 0;
let computerScore = 0;
let currentPick = '';
let gameActive = false;

// Game options
const gameOptions = ['Rock', 'Paper', 'Scissors'];

// Function to get random item from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to start a new game
function startNewGame() {
    // Reset game state
    gameActive = true;
    
    // Reset all cards
    cards.forEach(card => {
        card.classList.remove('flipped');
        const cardValue = getRandomItem(gameOptions);
        card.querySelector('.card-value').textContent = cardValue;
    });

    // Set new pick
    currentPick = getRandomItem(gameOptions);
    pickElement.textContent = currentPick;
}

// Function to handle card click
function handleCardClick(card) {
    if (!gameActive) return;
    
    // Flip the card
    card.classList.add('flipped');
    
    // Get the card's value
    const cardValue = card.querySelector('.card-value').textContent;
    
    // Check if the player found the correct item
    if (cardValue === currentPick) {
        playerScore++;
        playerScoreElement.textContent = playerScore;
        alert('Well done! You just won another round!');
    } else {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        alert('Sorry, you lost. Try again!');
    }
    
    // End the current round
    gameActive = false;
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    startNewGame();
}

// Add event listeners
cards.forEach(card => {
    card.addEventListener('click', () => handleCardClick(card));
});

newGameButton.addEventListener('click', startNewGame);
resetButton.addEventListener('click', resetGame);

// Start the first game
startNewGame();
