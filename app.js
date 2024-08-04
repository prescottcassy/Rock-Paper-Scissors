const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    

    if (randomNumber === 1) {
        computerChoice = ' Rock'
    }
    if (randomNumber === 2) {
        computerChoice = ' Paper'
    }
    if (randomNumber === 3) {
        computerChoice = ' Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = ' Its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = ' You win!'
    }
    if (computerChoice === 'rock' && userChoice === "scisors") {
        result = ' You lose!'
    }
    if (computerChoice === 'paper' && userChoice === "scisors") {
        result = ' You win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = ' You  lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = ' You win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = ' You lost!'
    }
    resultDisplay.innerHTML = result
}
