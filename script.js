const weaponList = ['rock', 'paper', 'scissors'];
const rockButton = document.querySelector('#rock');
const scissorsButton = document.querySelector('#scissors');
const paperButton = document.querySelector('#paper');
const resultDiv = document.querySelector('#result');
let playerScore;
let computerScore;


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

function updateScore(winner){
    if (winner === "computer") {
        computerChoice += 1;
    } else {
        playerChoice += 1;
    }
}

rockButton.addEventListener('click', () => {
    resultDiv.textContent = playRound('rock', getComputerChoice());
});


scissorsButton.addEventListener('click', () => {
    resultDiv.textContent = playRound('scissors', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    resultDiv.textContent = playRound('paper', getComputerChoice());
});



