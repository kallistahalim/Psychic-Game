var questionIndex = 0;
var numWins = 0;
var numLoses = 0;
var userGuesses=9;
var userGuess;

var alphabet = ['abcdefghijklmnopqrstuvwxyz'.split('')];
console.log(alphabet);
//render the questions

if (questionIndex = alphabet.length) {
    document.querySelector("#question").innerHTML = alphabet[questionIndex];
  }

//press any key to start the game//

    document.onKeyUp = function(event) {

    var userGuess = event.key;
    
    }

    alert("let start the game!");

//let the user guesses 9 letters

//if one of them is correct, she wins

//if none of them is correct, she losses

//Guesses Left: (# of guesses left. This will update)//

//Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)//
    
//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).//
    
//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).//

