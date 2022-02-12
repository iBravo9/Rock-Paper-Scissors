// Begin a function called "computerPlay"
//computerPlay will randomly return 'Rock", 'Paper', or 'Scissors'. 

//let random = Math.floor(Math.random()*3);
//this variable random outputs 0-3.
//Create a function that inputes 0-3 with an output of rock, paper, or scissors.
 
const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

//STEP:2 
// declare these variables in a global scope so that they can be picked up

//get player choice 
function playerChoice(){
    //we need input, and we need to put it in here
    let input="rock";
    // let input = prompt("Type rock, paper, or scissors!");
    //make input case insensitive
    input = input.toLowerCase();
    // make sure that the input is a listed choice
    let check = validateInput(input);
    if (check === true) {
        console.log("player choice was: " +input);
    } else {
        throw new Error(`Invalid User Input`);
    }
    return input;
}
//this function will check if input is an existing choice
function validateInput(choice) {
    if (choice.includes(choice)) {
        return true;
    }else {
        return false;
    } 
}
    
function getPlayerScore(choiceC,choiceP){
    console.log({ choiceC, choiceP });
    if (choiceP===choiceC) {
        console.log ("Its a tie!");
        return 0;
    } else if ((choiceP== "rock" && choiceC=="paper") || 
        (choiceP=="paper"&&choiceC=="scissors") || 
        (choiceP=="scissors" && choiceC=="rock")) {
            console.log("You win!");
            return 1;
    } else if ((choiceP== "rock" && choiceC=="scissors") || 
        (choiceP=="paper"&&choiceC=="rock") || 
        (choiceP=="scissors" && choiceC=="paper")) {
            console.log ("Computer wins!");
            return -1;
    }
}
//Take player input, and computer choice, compare them and return a winner
function playRound () {
    let choiceC= computerChoice();
    let choiceP= playerChoice();
    let roundPoints = getPlayerScore(choiceC,choiceP);
    return roundPoints;
}
// playRound();

function game() {
    let playerTotalScore = 0;
    let playerWinCount = 0;
    let computerWinCount = 0;
    let numberOfTies = 0;
    let totalGamesPlayed = 0;

    for (let i = 0; i < 5;) {
        let result = playRound();
        playerTotalScore += result;

        if (result !== 0) {
          i++;

          result === -1 ? computerWinCount++ : playerWinCount++;
        } else {
           numberOfTies++;
        }
        totalGamesPlayed++;
    }

    if (playerTotalScore > 0) {
        console.log("you won!");
    } else if (playerTotalScore === 0) {
        console.log("its a draw!");
    } else {
        console.log("you lost :(");
    }
    console.log({
        score: playerTotalScore,
        wins: playerWinCount,
        losses: computerWinCount,
        ties: numberOfTies,
        "#OfGames": totalGamesPlayed,
    });
    
//repeat input 5 times
//store results of checkWinner
//add total of computer wins vs you win
//compare if computer wins or you win is greater to determine result

}

game();

























const VALUE_MAP = {
  0: "rock",
  1: "paper",
  2: "scissors"
};

function computerThrow() {
    return Math.floor(Math.random()* 2);
}
function playerThrow(playerInput) {
    return choices.indexOf(playerInput);
}

function compareThrows(player, comp) {
    if (player === comp) {
        return "tie";
    }
    if (player === 0 && comp === 2) {
        return "win";
    }
    if (player < comp || (comp === 0 && player === 2)) {
        return "lose";
    }
    return "win";
}