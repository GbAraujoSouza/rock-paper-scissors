const rockButton = document.querySelector('#rock');
const scissorsButton = document.querySelector('#scissors');
const paperButton = document.querySelector('#paper');
const computerRock = document.querySelector('#computer-rock');
const computerPaper = document.querySelector('#computer-paper');
const computerScissors = document.querySelector('#computer-scissors');

const resultDiv = document.querySelector('#result');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');
const playAgainWindow = document.querySelector('#play-again-window');
const playAgainBtn = document.querySelector('#play-again-btn');

const weaponList = ['rock', 'paper', 'scissors'];
const ROUNDS = 5;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    // create a random index to access the array of weapons
    // note that we need integers between 0 and (1 - weaponList.length)
    // floor method clamps the number to the nearest lower integer
    let randomIndex = Math.floor(Math.random() * weaponList.length);
    return weaponList[randomIndex];
}

function playRound(playerChoice ,computerChoice) {
    // Check each player possible choice and compare with each possible computer choice
    let result = {'winnerName': '', 'winnerWeapon': '', 'loserName': '', 'loserWeapon': ''};
    switch (playerChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    result['winnerName'] = 'tie';
                    result['winnerWeapon'] = 'rock';
                    result['loserName'] = 'tie';
                    result['loserWeapon'] = 'rock';
                break;

                case 'paper':
                    result['winnerName'] = 'computer';
                    result['winnerWeapon'] = 'paper';
                    result['loserName'] = 'player';
                    result['loserWeapon'] = 'rock';
                break;

                case 'scissors':
                    result['winnerName'] = 'player';
                    result['winnerWeapon'] = 'rock';
                    result['loserName'] = 'computer';
                    result['loserWeapon'] = 'scissors';
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    result['winnerName'] = 'player';
                    result['winnerWeapon'] = 'paper';
                    result['loserName'] = 'computer';
                    result['loserWeapon'] = 'rock';
                break;
                    
                case 'paper':
                    result['winnerName'] = 'tie';
                    result['winnerWeapon'] = 'paper';
                    result['loserName'] = 'tie';
                    result['loserWeapon'] = 'paper';
                break;

                case 'scissors':
                    result['winnerName'] = 'computer';
                    result['winnerWeapon'] = 'scissors';
                    result['loserName'] = 'player';
                    result['loserWeapon'] = 'paper';
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    result['winnerName'] = 'computer';
                    result['winnerWeapon'] = 'rock';
                    result['loserName'] = 'player';
                    result['loserWeapon'] = 'scissors';
                break;

                case 'paper':
                    result['winnerName'] = 'player';
                    result['winnerWeapon'] = 'scissors';
                    result['loserName'] = 'computer';
                    result['loserWeapon'] = 'paper';
                break;

                case 'scissors':
                    result['winnerName'] = 'tie';
                    result['winnerWeapon'] = 'scissors';
                    result['loserName'] = 'tie';
                    result['loserWeapon'] = 'scissors';
            }
            break;
    }

    return result;
}

function updateScore(gameResult=null){
    // Call the function with no parameter should restart game score
    if (gameResult['winnerName'] === 'computer') {
        computerScore += 1;
        computerScoreDiv.textContent = computerScore;
        // computerScoreDiv.textContent = computerScore;
    } else if (gameResult['winnerName'] === 'player') {
        playerScore += 1;
        playerScoreDiv.textContent = playerScore;
    }
}

function displayGameResult(gameResult) {
    if (gameResult['winnerName'] === 'tie') {
        resultDiv.textContent = 'Tie!';
    } else if (gameResult['winnerName'] === 'computer') {
        resultDiv.textContent = `You Lose! ${gameResult['winnerWeapon']} beats ${gameResult['loserWeapon']}`;
    } else {
        resultDiv.textContent = `You Won! ${gameResult['winnerWeapon']} beats ${gameResult['loserWeapon']}`;
    }
}

function checkGameOver() {
    return playerScore >= ROUNDS || computerScore >= ROUNDS;
}

function GameOver () {
    playAgainWindow.showModal();
}

function playAgain(){
    playAgainWindow.close();
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}

function handleWeaponClick () {
    // Each weapon has an id of its corresponding name
    // so the function uses that string to play the game
    let result = playRound(this.id, getComputerChoice());
    let computerWeapon;
    if (result['winnerName'] === 'computer') {
        computerWeapon = result['winnerWeapon'];
    } else {
        computerWeapon = result['loserWeapon'];
    }

    switch (computerWeapon) {
        case 'rock':
            computerRock.classList.add('unselected-weapon');
            computerPaper.classList.add('unselected-weapon');
            computerScissors.classList.add('unselected-weapon');
            computerRock.classList.remove('selected-weapon');
            computerPaper.classList.remove('selected-weapon');
            computerScissors.classList.remove('selected-weapon');
            computerRock.classList.add('selected-weapon');
        break;

        case 'paper':
            computerRock.classList.add('unselected-weapon');
            computerPaper.classList.add('unselected-weapon');
            computerScissors.classList.add('unselected-weapon');
            computerRock.classList.remove('selected-weapon');
            computerPaper.classList.remove('selected-weapon');
            computerScissors.classList.remove('selected-weapon');
            computerPaper.classList.add('selected-weapon');
        break;

        default:
            computerRock.classList.add('unselected-weapon');
            computerPaper.classList.add('unselected-weapon');
            computerScissors.classList.add('unselected-weapon');
            computerRock.classList.remove('selected-weapon');
            computerPaper.classList.remove('selected-weapon');
            computerScissors.classList.remove('selected-weapon');
            computerScissors.classList.add('selected-weapon');
    }

    displayGameResult(result);
    updateScore(result);
    checkGameOver() ? GameOver() : null;
}

rockButton.addEventListener('click',handleWeaponClick);
paperButton.addEventListener('click',handleWeaponClick);
scissorsButton.addEventListener('click',handleWeaponClick);

playAgainBtn.addEventListener('click', playAgain);