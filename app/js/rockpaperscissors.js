////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return 'move' || 'getInput()';
}

function getComputerMove(move) {
    return 'move' || 'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    var winner;
    var p ='player';
    var c ='computer';
    var t ='Its a tie';
    switch (playerMove) {
        
    case 'rock':
        if (computerMove === 'scissors') {
            console.log ('Player Wins!');
            winner = p;
    } else if (computerMove === 'paper') {
        console.log ('Computer Wins!');
        winner=c;
    } else if (computerMove==='rock'){
        console.log('Its a tie!');
        winner=t;
    } else {
        return 'error';
    }
    break;

        
    case 'scissors':
        if (computerMove==='rock') {
        console.log ('Computer Wins!');
        winner = c;
    } else if (computerMove==='paper') {
        console.log ('Player Wins!');
        winner=p;
    }  else if (computerMove==='scissors') {
        console.log ('Its a tie!');
        winner=t;
    } else {
        return 'error';
    }
    break;
    
         
    case 'paper':
        if (computerMove==='rock'){
        console.log ('Player Wins!');
        winner=p;
    } else if (computerMove==='scissors'){
        console.log ('Computer Wins!');
        winner=c;
    } else if (computerMove==='paper'){
        console.log ('Its a tie!') ;
        winner=t;
    } else {
        return 'error';
    }
}
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

