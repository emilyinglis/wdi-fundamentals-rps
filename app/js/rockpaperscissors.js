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


// FUNCTION GET MOVES (PLAYER/COMPUTER)

function getPlayerMove(move) {
    move = move || randomPlay(); {
        console.log('Player picked ' + move +'.'); 
 }
 return move
}


function getComputerMove(move) {
    move = move || randomPlay(); {
        console.log('Computer picked ' + move +'.');
    }
    return move
}

// Call it
    //getPlayerMove();
    //getComputerMove();

//--------------------------------------------------//

// FUNCTION GETWINNER

function getWinner(playerMove,computerMove) {
    var winner;
    var p ='player';
    var c ='computer';
    var t ='tie';



 if(playerMove === 'rock'){
     if (computerMove === 'scissors') {
        console.log ('Player Wins!');
        winner = p;
    } else if (computerMove === 'paper') {
        console.log ('Computer Wins!');
        winner = c;
    } else if (computerMove==='rock'){
        console.log("It's a tie!");
        winner = t;
    } else {
        return 'error';
    }
} else if(playerMove === 'scissors'){
    // Player plays 'scissors'

    if (computerMove==='rock') {
        console.log ('Computer Wins!');
        winner = c;
    } else if (computerMove==='paper') {
        console.log ('Player Wins!');
        winner = p;
    }  else if (computerMove==='scissors') {
        console.log ("It's a tie!");
        winner = t;
    } else {
        return 'error';
    }
} else if( playerMove === 'paper'){

    /// Player plays 'paper'    

    if (computerMove==='rock'){
        console.log ('Player Wins!');
        winner = p;
    } else if (computerMove==='scissors'){
        console.log ('Computer Wins!');
        winner = c;
    } else if (computerMove==='paper'){
        console.log ("It's a tie!") ;
        winner = t;
    } else {
        return 'error';
    }
}

return winner

}

// Call it
    //getWinner(getPlayerMove(),getComputerMove());


//--------------------------------------------------//

// FUNCTION PLAY TO FIVE 

// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
/* YOUR CODE HERE */

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;

    console.log("Let's play Rock, Paper, Scissors!");

    while ((playerWins < 5) && (computerWins < 5)) { 
        
        var winner = getWinner(getPlayerMove(),getComputerMove());

        if (winner==='player') {
            playerWins += 1;
        } else if (winner==='computer') {
            computerWins += 1;
        } else if(winner==='tie') {
        }
        console.log(['Player: '+playerWins+' & Computer: '+computerWins]);
    }
}

playToFive();