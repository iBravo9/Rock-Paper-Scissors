
 //define choices in global scope, to be used by computer and human
const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}
console.log (computerChoice());

//STEP:2 
// declare these variables in a global scope so that they can be picked up
//get player choice 
// grab data from button, 
//if button data = rock, let choiceP= rock
//if button data = paper, let choiceP=paper,
//if button data = scissors, let choiceP= scissors,
//return choiceP as rock, or paper, or scissors

function playerChoice () {
let rockButton = document.getElementById("rockBtn");
    rockButton.addEventListener('click',function (e){
        let choiceP= "rock";
    })
let paperButton = document.getElementById("paperBtn");
    paperButton.addEventListener('click',function (e){
        let choiceP="paper";
    })
let scissorsButton = document.getElementById("scissorsBtn");
    scissorsButton.addEventListener('click',function (e){
    let choiceP = "scissors";
    })  
};
let choiceP= playerChoice();
 
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
//Take choiceC and choiceP and return roundPoints back to program 
function playRound () {
    let choiceC= computerChoice();
    let roundPoints = getPlayerScore(choiceC,choiceP);
    return roundPoints;
    console.log(roundPoints);
}   
playRound();
/*

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



//change playerChocie into button-recieving 



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
}
*/