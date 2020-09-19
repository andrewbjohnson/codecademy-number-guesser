let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Generate random target number (0-9)
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Compare guesses
function compareGuesses(userGuess, computerGuess, secretTargetNumber) {
    // Handle tie condition
    if (userGuess === computerGuess) {
        return true;
    }
    // Handle non-tie conditions
    if (Math.abs(userGuess) > Math.abs(computerGuess)) {
        return false;
    } else if (Math.abs(userGuess) < Math.abs(computerGuess)) {
        return true;
    } else {
        console.log('An unknown error occurred at compareGuesses().');
    }
}

// Update score
function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    } else {
        console.log('An unknown error occurred at updateScore()');
    }
}

// Advance round
function advanceRound() {
    currentRoundNumber += 1;
}