const weaponList = ['rock', 'paper', 'scissors'];
const rockButton = document.querySelector('#rock');
const scissorsButton = document.querySelector('#scissors');
const paperButton = document.querySelector('#paper');
const resultDiv = document.querySelector('#result');

function getComputerChoice() {
    // criate a random index to access the array of weapons
    // note that we need integers between 0 and (1 - weaponList.length)
    // floor method clamps the number to the nearest lower integer
    let randomIndex = Math.floor(Math.random() * weaponList.length);
    return weaponList[randomIndex];
}

function playRound(playerChoice ,computerChoice) {
    // Check each player possible choice and compare with each possible computer choice
    switch (playerChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    return 'Tie!';
                case 'paper':
                    return 'You Lose! Paper beats Rock';
                case 'scissors':
                    return 'You Win! Rock beats Scissors';
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    return 'You Win! Paper beats Rock';
                case 'paper':
                    return 'Tie!';
                case 'scissors':
                    return 'You Lose! Scissors beats Paper';
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    return 'You Lose! Rock beats Scissors';
                case 'paper':
                    return 'You Win! Scissors beats Paper';
                case 'scissors':
                    return 'Tie!';
            }
            break;
        default:
            return 'You shoud chose "Rock", "Paper" or "Scissors"!'
    }
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



