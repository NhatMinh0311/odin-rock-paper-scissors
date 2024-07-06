// Randomly get computer's choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors"  ;      
    }
}
function updateScores() {
    const player = document.querySelector("#player");
    player.innerText = `Your Score: ${humanScore}`;

    const computer = document.querySelector("#computer");
    computer.innerText = `Computer's Score: ${computerScore}`;
}

function printResult(result) {
    const results = document.querySelector("#results");
    const para = document.createElement("p");
    if (!checkEnd()) para.textContent = `Round ${index}: ` + result;
    else {
        para.textContent = `Final result: ` + result;
        if (humanScore === 5) para.style.color = "gold";
        else para.style.color = "gray";

    }  
    results.appendChild(para);
}

// Decide winner of a round based on choices
function playRound(humanChoice, computerChoice) {
    // If human's and compute's choice is the same, they tie.
    if (humanChoice === computerChoice) {
        printResult("Tie.");
    }
    else {
        // If choices are different, decide winner of this round and increase winner's score.
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                printResult("You win. Rock beats Scissors.");
                humanScore++;
            }
            else {
                printResult("You lose. Paper beats Rock.");
                computerScore++;
            }
        }

        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                printResult("You win. Paper beats Rock.");
                humanScore++;
            }
            else {
                printResult("You lose. Scissors beat Paper.");
                computerScore++;
            }
        }

        else {
            if (computerChoice === "paper") {
                printResult("You win. Scissors beat Paper.");
                humanScore++;
            }
            else {
                printResult("You lose. Rock beats Scissors.");
                computerScore++;
            }
        }
    }

    index++;
    updateScores();
}

function checkEnd () {
    if (humanScore === 5 || computerScore === 5) return true;
    return false;
}

function printFinalResult () {
    if (humanScore === 5) {
        printResult("Winner Winner Chicken Dinner. You win this game.");
    }
    else if (computerScore === 5) {
        printResult("You lose this game. Let's try the another.")
    }

}

// Create variable to follow scores of game
let humanScore = computerScore = 0;
let index = 1;

const choices = document.querySelector("#choices");
choices.addEventListener("click", (event) => {
    if (!checkEnd()) {
        const playerSelection = event.target.id;
        const computerChoice = getComputerChoice();
        playRound(playerSelection, computerChoice);
        if (checkEnd()) printFinalResult();
    }
    else {
        printFinalResult();
    }

});