
var numWins = 0;
var numLosses = 0;
var remainingGuesses = 9;
var userInput = [];
var index = 0;
var letter;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

function startNewGame() {
    remainingGuesses = 9;
    userInput = [];
    index = 0;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.querySelector("#guesses-left").innerHTML = remainingGuesses;
    document.querySelector("#so-far").innerHTML = '';
}

startNewGame();

document.onkeyup = function (event) {
    letter = event.key.toLowerCase();
    if (letter === computerGuess) {
        numWins++;
        document.querySelector("#wins").innerHTML = numWins;
        startNewGame();
    } else {
        remainingGuesses--;
        if (remainingGuesses < 1) {
            numLosses++
            document.getElementById("loses").innerHTML = numLosses;
            startNewGame();
        } else {
            userInput.push(letter);
            document.getElementById("so-far").innerHTML = document.getElementById("so-far").innerHTML +
                userInput[index] + ", ";
            index++;
            document.querySelector("guesses-left").innerHTML = remainingGuesses;
        }
    }
}
 